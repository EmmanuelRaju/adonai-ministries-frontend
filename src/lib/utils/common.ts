/** Intersection Observer action: adds .visible when in viewport */
export function revealOnScroll(node: HTMLElement) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('visible');
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.2 }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
