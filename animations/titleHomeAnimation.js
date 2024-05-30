export function titleHomeAnimation({ element }) {
	const $elements = document.querySelectorAll(element)

	$elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
            markers:true,
			animation: useAnimateTitleHome(el)
		})
	})
}