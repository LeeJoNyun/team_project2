const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section2 = {

    section2ArrowHandler: () => {
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

    init() {
        this.section2ArrowHandler();
    }
}

export default Section2;