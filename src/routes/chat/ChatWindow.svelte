<script>
    import { tick } from 'svelte';

    let { chat, isLoading, userMessage = $bindable(), onsend } = $props();

    /** @type {HTMLDivElement | null} */
    let messagesEl = $state(null);

    async function scrollToBottom() {
        await tick();
        if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    $effect(() => {
        chat;
        isLoading;
        scrollToBottom();
    });

    /** @param {KeyboardEvent} e */
    function handleKeydown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onsend();
        }
    }
</script>

<div class="d-flex justify-content-center align-items-start min-vh-100 bg-light py-5">
    <div class="card shadow-sm" style="width: 100%; max-width: 680px; height: 82vh; display: flex; flex-direction: column;">
        <div class="card-header bg-white border-bottom d-flex align-items-center gap-2 py-3">
            <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white" style="width:36px;height:36px;font-size:14px;font-weight:600;flex-shrink:0">AI</div>
            <div>
                <div class="fw-semibold lh-1">Assistant</div>
                <small class="text-success">Online</small>
            </div>
        </div>

        <div bind:this={messagesEl} class="flex-grow-1 overflow-y-auto p-4 d-flex flex-column gap-3" style="background:#f8f9fa">
            {#each chat as message}
                {#if message.role === 'user'}
                    <div class="d-flex justify-content-end">
                        <div class="px-3 py-2 rounded-3 text-white" style="background:#0d6efd;max-width:75%;word-break:break-word;white-space:pre-wrap;font-size:0.9rem;line-height:1.5">
                            {message.content}
                        </div>
                    </div>
                {:else if message.role === 'error'}
                    <div class="d-flex justify-content-start">
                        <div class="px-3 py-2 rounded-3 border border-danger-subtle text-danger" style="max-width:75%;word-break:break-word;white-space:pre-wrap;font-size:0.9rem;line-height:1.5;background:#fff5f5">
                            {message.content}
                        </div>
                    </div>
                {:else}
                    <div class="d-flex justify-content-start gap-2 align-items-end">
                        <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:28px;height:28px;font-size:11px;font-weight:600">AI</div>
                        <div class="px-3 py-2 rounded-3 bg-white border" style="max-width:75%;word-break:break-word;white-space:pre-wrap;font-size:0.9rem;line-height:1.5;color:#212529">
                            {message.content}
                        </div>
                    </div>
                {/if}
            {/each}

            {#if isLoading}
                <div class="d-flex justify-content-start gap-2 align-items-end">
                    <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:28px;height:28px;font-size:11px;font-weight:600">AI</div>
                    <div class="px-3 py-2 rounded-3 bg-white border d-flex align-items-center gap-1" style="height:38px">
                        <span class="dot-bounce" style="animation-delay:0s"></span>
                        <span class="dot-bounce" style="animation-delay:0.15s"></span>
                        <span class="dot-bounce" style="animation-delay:0.3s"></span>
                    </div>
                </div>
            {/if}
        </div>

        <div class="card-footer bg-white border-top p-3">
            <div class="input-group">
                <input
                    class="form-control border-secondary-subtle"
                    type="text"
                    bind:value={userMessage}
                    onkeydown={handleKeydown}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    style="border-radius:8px 0 0 8px;font-size:0.9rem"
                />
                <button
                    class="btn btn-primary px-4"
                    onclick={onsend}
                    disabled={isLoading || userMessage.trim() === ''}
                    style="border-radius:0 8px 8px 0"
                >
                    {#if isLoading}
                        <span class="spinner-border spinner-border-sm" role="status"></span>
                    {:else}
                        Send
                    {/if}
                </button>
            </div>
            <small class="text-muted d-block mt-1" style="font-size:0.75rem">Press Enter to send</small>
        </div>
    </div>
</div>

<style>
    .dot-bounce {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #adb5bd;
        animation: bounce 0.8s infinite ease-in-out;
    }

    @keyframes bounce {
        0%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-6px); }
    }
</style>
