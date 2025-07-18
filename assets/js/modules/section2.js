const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section2 = {

    arrowHandler: () => {
        const btns = getAll('#section2 .inner .bottom .cards li article a')
        btns.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const arrow = item.querySelector('.arrow');
                gsap.fromTo(arrow, {
                    left: '100px'
                }, { left: '6px', duration: 0.5 });
            })
        })
    },
    section2_Swiper: () => {
        var swiper = new Swiper(".section2-swiper", {
            slidesPerView: 1, // 한 번에 1개씩
            loop: true,
            autoplay: {
                delay: 5000,
            },
        });
    },


    init() {
        this.arrowHandler();
        this.section2_Swiper();
    }
}

export default Section2;