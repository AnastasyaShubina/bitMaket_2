import CanvasScrollClip from 'canvas-scroll-clip'

export const animation = () => {
    const canvasScrollClip = new CanvasScrollClip(
        document.querySelector('.mainBlockAbout--container__img--animation'),
        {
            framePath: '/images/animationDesctop/1_screen/000001.jpg',
            frameCount: 303,
            scrollArea: 2900,
            identifier: ''
        }
    )

    const bg = document.querySelector('.mainBlockAbout--container__op')

    canvasScrollClip.events.on('viewport.scroll', function (scrollTop) {
        bg.style.opacity = Math.min(1, Math.max(0, 1 - scrollTop / 380))
        // if (+bg.style.opacity === 0) {
        //     bg.style.display = 'none'
        // } else {
        //     bg.style.display = 'block'
        // }
    })

}

export const animation2 = () => {
    const canvasScrollClip2 = new CanvasScrollClip(
        document.querySelector('.secondBlockAbout--container__schedule--animation'),
        {
            framePath: '/images/animationDesctop/2_screen/img00000.jpg',
            frameCount: 150,
            scrollArea: 3800,
            identifier: ''
        }
    )

    let stickyElement = document.querySelector('.secondBlockAbout--container__text');
    let stickyPosition = stickyElement.offsetTop;
    const startOpacity = 0; // Starting opacity value
    const endOpacity = 1; // Ending opacity value
    canvasScrollClip2.events.on('viewport.scroll', function (scrollTop) {
        const item1 = document.querySelector('.item1')
        const item2 = document.querySelector('.item2')
        const item3 = document.querySelector('.item3')


        if (scrollTop >= stickyPosition) {
            const normalizedScrollTop = normalize(scrollTop, stickyPosition, 1); // Normalize scrollTop to a value between 0 and 1
            const opacity = lerp(startOpacity, endOpacity, normalizedScrollTop); // Linearly interpolate between startOpacity and endOpacity

            item1.style.opacity = Math.abs(opacity) * 5
            item2.style.opacity = Math.abs(opacity) * 2
            item3.style.opacity = Math.abs(opacity)
            // item2.style.opacity = _scrollTop
            // item3.style.opacity = _scrollTop

        } else {
        }
    })

    function normalize(value, min, max) {
        return (value - min) / (max - min);
    }

    // Utility function to linearly interpolate between two values
    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }
}
