import { LLM_URL, LLM_KEY, LLM_MODEL } from "$env/static/private";

export async function chat(messages, options = {}) {
    const model = options.model || LLM_MODEL;
    const reasoning = { enabled: options.reasoning || false };
    const res = await fetch(LLM_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${LLM_KEY}`
        },
        body: JSON.stringify({ messages, model, reasoning, ...options })
    });
    if (!res.ok) {
        throw new Error(`Error from LLM API: ${await res.text()}`);
    }
    const data = await res.json();
    const { role, content } = data.choices[0].message;
    return { role, content };
}

export async function getKeyInfoOpenRouter() {
    const res = await fetch("https://openrouter.ai/api/v1/key", {
        headers: {
            "Authorization": `Bearer ${LLM_KEY}`
        }
    });
    const keyInfo = await res.json();
    return keyInfo;
}
