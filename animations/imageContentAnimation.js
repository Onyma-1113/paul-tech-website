export function imageContentAnimation({  element }) {
	const $elements = document.querySelectorAll(element)

	$elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
            //  markers:true,
			animation: useAnimateImage(el)
		})
	})
}