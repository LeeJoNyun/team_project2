const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section1 = {
    section1_Swiper: () => {
        var swiper = new Swiper(".section1-swiper", {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },

    init() {
        this.section1_Swiper();
    }
}

export default Section1;