const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section5 = {
    section5_eventHandler: () => {
        const lis = getAll('#section5 .section4-nav li');

        lis.forEach(item => {
            item.addEventListener('click', () => {
                lis.forEach(item2 => item2.classList.remove('active'));
                item.classList.add('active');
            })
        })

    },
    init() {
        this.section5_eventHandler();

    }
}

export default Section5;