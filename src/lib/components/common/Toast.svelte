<script lang="ts">
	import { MailCheck, MailX } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	let { kind = $bindable(), message = $bindable(), classes = '' } = $props();
</script>

{#if message}
	<div
		role="alert"
		class="alert-soft alert alert-vertical alert-error sm:alert-horizontal {classes}"
		class:alert-error={kind == 'error'}
		class:alert-success={kind == 'success'}
		transition:fade
	>
		{#if kind == 'error'}
			<MailX class="h-6 w-6 shrink-0 stroke-current"></MailX>
		{:else}
			<MailCheck class="h-6 w-6 shrink-0 stroke-current"></MailCheck>
		{/if}
		<span>{message}</span>
		<button class="btn btn-sm btn-primary" onclick={(e) => (e.preventDefault(), (message = null))}
			>OK</button
		>
	</div>
{/if}
