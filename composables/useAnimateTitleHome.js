export function useAnimateTitleHome(el) {
    const element = (typeof el === 'string') ? document.querySelector(el) : el

    const tl = gsap.timeline()

    if (element) {
       
        tl.from(element,
            {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger:0.5

            })
    }

    return tl
}