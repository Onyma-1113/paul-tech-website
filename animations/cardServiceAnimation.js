import { useAnimateCardService } from "~/composables/useAnimateCardService"

export function cardServiceAnimation({  element,element2,element3 }) {
	const $elements = document.querySelector(element)

	
		ScrollTrigger.create({
			trigger: $elements,
            // markers:true,
			animation: useAnimateCardService(element2,element3)
		})
	
}