import { chat } from "./llm.js";

const NATURE = `You are an autonomous agent. Work toward your goal step by step. Reply ONLY as JSON: {"status":"done"|"continue","output":string}. Use "done" for the final answer.`;

export class Agent {
    constructor(goal, options = {}) {
        this.options = options;
        this.messages = [{ role: "system", content: `${NATURE}\n\nGoal: ${goal}` }];
    }

    async run(input) {
        if (input) this.messages.push({ role: "user", content: input });
        while (true) {
            const res = await chat(this.messages, this.options);
            const content = res.choices[0].message.content;
            this.messages.push({ role: "assistant", content });
            const { status, output } = JSON.parse(content);
            if (status === "done") return output;
        }
    }
}
