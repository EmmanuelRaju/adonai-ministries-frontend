<script lang="ts">
	import { PUBLIC_PAYPAL_CLIENT_ID } from '$env/static/public';
	import { onMount } from 'svelte';

	export let amount: string = '100.00';

	let paypalButtonsInstance: any;
	let showCustomAmountInput = false;

	let _reRenderTimer: ReturnType<typeof setTimeout> | null = null;
	function scheduleRender() {
		// only render when amount is a positive number
		if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) return;
		if (_reRenderTimer) clearTimeout(_reRenderTimer);
		_reRenderTimer = setTimeout(() => {
			try {
				renderPayPalButtons();
			} finally {
				_reRenderTimer = null;
			}
		}, 300);
	}

	function loadPayPalScript(clientId: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (document.getElementById('paypal-sdk')) {
				resolve();
				return;
			}
			const script = document.createElement('script');
			script.id = 'paypal-sdk';
			script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error('PayPal SDK could not be loaded.'));
			document.head.appendChild(script);
		});
	}

	function renderPayPalButtons() {
		if (window.paypal) {
			if (paypalButtonsInstance) {
				paypalButtonsInstance.close();
			}
			paypalButtonsInstance = window.paypal.Buttons({
				style: {
					layout: 'vertical',
					color: 'gold',
					shape: 'rect',
					label: 'donate'
				},
				// Setup order
				createOrder: (_data, actions) => {
					const normalized = Number(amount) ? Number(amount).toFixed(2) : '0.00';
					return actions.order.create({
						purchase_units: [
							{
								amount: { value: normalized }
							}
						]
					});
				},
				// On successful payment
				onApprove: (_data, actions) => {
					return actions.order.capture().then((details) => {
						alert(`Donation completed by ${details.payer.name.given_name}`);
						console.log('Donation details:', details);
					});
				}
			});
			paypalButtonsInstance.render('#paypal-donate-button');
		}
	}

	onMount(async () => {
		try {
			let clientId = PUBLIC_PAYPAL_CLIENT_ID;

			if (!clientId) {
				console.error('PayPal client ID is not set for the current environment.');
				return;
			}
			await loadPayPalScript(clientId);
			renderPayPalButtons();
		} catch (error) {
			console.error(error);
		}
	});

	$: if (paypalButtonsInstance) {
		renderPayPalButtons();
	}

	const donationAmounts = ['5.00', '10.00', '50.00', '100.00', '500.00', '1000.00'];
</script>

<section class="flex w-full flex-col items-center bg-base-100 p-10">
	<div class="flex flex-wrap gap-5">
		{#each donationAmounts as _amount (_amount)}
			<button
				class="btn min-w-[90px]"
				type="button"
				on:click={() => {
					amount = _amount;
					showCustomAmountInput = false;
					scheduleRender();
				}}
				class:btn-primary={amount === _amount && !showCustomAmountInput}>${_amount}</button
			>
		{/each}
		<button
			class="btn min-w-[90px]"
			type="button"
			on:click={() => {
				showCustomAmountInput = true;
				amount = '';
			}}
			class:btn-primary={showCustomAmountInput}>Other</button
		>
	</div>

	{#if showCustomAmountInput}
		<div class="mt-3">
			<input
				type="number"
				min="1.00"
				step="1.00"
				placeholder="Enter amount"
				bind:value={amount}
				on:input={() => {
					if (amount === '' || parseFloat(amount) <= 0) {
						amount = '';
					} else {
						amount = parseFloat(String(amount)).toFixed(2);
						scheduleRender();
					}
				}}
				class="input-bordered input"
			/>
		</div>
	{/if}

	<div id="paypal-donate-button" class="mx-auto mt-6 w-full max-w-2xl"></div>
</section>
