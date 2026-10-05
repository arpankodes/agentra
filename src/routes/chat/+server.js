import { chat } from "$lib/llm";

import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const { messages } = await request.json();
    try {
        const response = await chat(messages);
        return json({ ...response });
    } catch (e) {
        const msg = e instanceof Error ? e.message : 'Unknown error';
        return json({ error: msg }, { status: 503 });
    }
}
