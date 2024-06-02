export function useAnimateImage(el) {
	const element = (typeof el === 'string') ? document.querySelector(el) : el

	const tl = gsap.timeline()

	if(element) {
		tl.set(element, {
			overflow: 'hidden',
			pointerEvents: 'none'
		})

		tl.fromTo(element, {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
		}, {
			transition: 'unset',
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			duration: 1,
			delay: 0.1,
			clearProps: 'all',
            ease:'ease-in-out'
		})

		tl.fromTo(element.querySelector("img"), {
			scale: 1.5
		}, {
			scale: 1.5,
			transition: 'unset',
			duration: 1,
			clearProps: 'all',
            ease:'ease-in-out'
		}, 0)
	}

	return tl
}