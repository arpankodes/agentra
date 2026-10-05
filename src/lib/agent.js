import { chat } from "./llm.js";

// TODO: Add memory, tool use, planning  
// List of basic tools required for an agent:
// 1. WEb search
// 6. API Caller: To interact with external APIs for various services.

const NATURE = `You are an autonomous agent. Work toward your goal step by step. 
Reply ONLY as JSON: 
{"status":"done"|"continue","output":string}. 
Use "done" for the final answer.`;

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

// planner also needs to consider the budget and time constraints, and prioritize tasks accordingly.
const planningPrompt = `You are a planner. Given a goal, break it down into steps.
Reply ONLY as JSON: 
{"steps": [string]}.`;

const toolUsePrompt = `You are a tool user. Given a goal and a tool, use the tool to achieve the goal.
Reply ONLY as JSON: 
{"status":"done"|"continue","output":string}. 
Use "done" for the final answer.`;
