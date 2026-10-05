<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        // Initialize chat history with a greeting from the assistant
        goto('/chat');
    });
</script>