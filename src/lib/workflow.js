import { chat } from "./llm.js";

export const step = (systemPrompt, options = {}) => ({
    async run(input) {
        const res = await chat([
            { role: "system", content: systemPrompt },
            { role: "user", content: input }
        ], options);
        return res.choices[0].message.content;
    }
});

export const chain = (steps) => ({
    async run(input) {
        let out = input;
        for (const s of steps) out = await s.run(out);
        return out;
    }
});

export const parallel = (steps) => ({
    run: (input) => Promise.all(steps.map(s => s.run(input)))
});

export const route = (router, routes) => ({
    async run(input) {
        const key = await router.run(input);
        return routes[key].run(input);
    }
});

export const loop = (worker, evaluator, max = 5) => ({
    async run(input) {
        let out = await worker.run(input);
        for (let i = 1; i < max; i++) {
            const v = await evaluator.run(out);
            if (v === "ok") return out;
            out = await worker.run(`${input}\n\nFeedback: ${v}`);
        }
        return out;
    }
});

export const orchestrate = (planner, worker, joiner) => ({
    async run(input) {
        const tasks = JSON.parse(await planner.run(input));
        const results = await Promise.all(tasks.map(t => worker.run(t)));
        return joiner.run(JSON.stringify(results));
    }
});