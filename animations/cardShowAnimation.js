import { useAnimateShowCard } from "~/composables/useAnimateShowCard"

export function cardShowAnimation({ element }) {
	const $elements = document.querySelectorAll(element)

	$elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
            start:'30% bottom',
            markers:true,
			animation: useAnimateShowCard(el)
		})
	})
}