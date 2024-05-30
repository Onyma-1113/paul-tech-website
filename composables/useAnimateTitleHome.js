export function useAnimateTitleHome(el) {
    const element = (typeof el === 'string') ? document.querySelector(el) : el

    const tl = gsap.timeline()

    if (element) {
       
        tl.to(element,
            {
                opacity: 1,
                y: 0,
                duration: 1,
                //  stagger:0.5

            })
    }

    return tl
}