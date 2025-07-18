const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section3 = {
    section3_Swiper: () => {
        var swiper = new Swiper(".section3-swiper", {
            slidesPerView: 4,
            spaceBetween: 80,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".section3-swiper-button-next",
                prevEl: ".section3-swiper-button-prev",
            },
        });
    },

    init() {
        this.section3_Swiper();
    }
}

export default Section3;