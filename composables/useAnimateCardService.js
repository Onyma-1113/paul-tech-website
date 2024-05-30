export function useAnimateCardService(el, el2) {
    const element = (typeof el === 'string') ? document.querySelectorAll(el) : el
    const element2 = (typeof el2 === 'string') ? document.querySelectorAll(el2) : el2

    const tl = gsap.timeline()

    if (element) {
        tl.to(element,
            {
                opacity: 1,
                y: -100,
                duration: 1,
                stagger: 0.5

            })
        tl.to(element2,
            {
                opacity: 1,
                y: -100,
                duration: 1,
                stagger: 0.5

            })
    }

    return tl
}