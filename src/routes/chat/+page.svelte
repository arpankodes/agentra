<script>
    import ChatWindow from './ChatWindow.svelte';

    let userMessage = $state('');
    let isLoading = $state(false);
    let chat = $state([{
        role: 'assistant',
        content: 'Hello! How can I assist you today?'
    }]);

    /** @param {string} errStr */
    function extractMessage(errStr) {
        try {
            const parsed = JSON.parse(errStr.replace(/^Error from LLM API: /, ''));
            return parsed?.error?.metadata?.raw ?? parsed?.error?.message ?? 'Something went wrong. Please try again.';
        } catch {
            return 'Something went wrong. Please try again.';
        }
    }

    async function sendMessage() {
        if (userMessage.trim() === '' || isLoading) return;
        chat = [...chat, { role: 'user', content: userMessage }];
        userMessage = '';
        isLoading = true;
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: chat })
            });
            const data = await response.json();
            if (data.error) {
                chat = [...chat, { role: 'error', content: extractMessage(data.error) }];
            } else {
                chat = [...chat, { role: data.role, content: data.content }];
            }
        } catch {
            chat = [...chat, { role: 'error', content: 'Something went wrong. Please try again.' }];
        } finally {
            isLoading = false;
        }
    }
</script>

<ChatWindow {chat} {isLoading} bind:userMessage onsend={sendMessage} />
