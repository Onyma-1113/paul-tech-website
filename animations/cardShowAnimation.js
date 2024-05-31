import { useAnimateShowCard } from "~/composables/useAnimateShowCard"

export function cardShowAnimation({ element }) {
	const $elements = document.querySelectorAll(element)

	$elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
            start:'25% bottom',
            //  markers:true,
			animation: useAnimateShowCard(el)
		})
	})
}