import { LLM_URL, LLM_KEY } from "$env/static/private";

export async function chat(messages, options = {}) {
    const res = await fetch(LLM_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${LLM_KEY}`
        },
        body: JSON.stringify({ messages, ...options })
    });
    return res.json();
}
