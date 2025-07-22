const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const data = [
    [],
    [],
    [],
    [],
    [],
    [],

];

const Header = {

    navMenuHandler: () => {
        const navs = getAll('.nav ul li');
        const bottomNav = get('.bottom-nav');
        navs.forEach(item => {
            item.addEventListener('mouseenter', () => {
                navs.forEach(i => i.classList.remove('on'));

                item.classList.add('on');
                if (item.classList.contains('on')) {
                    bottomNav.style.display = 'block';
                }
            })
        });
        bottomNav.addEventListener('mouseleave', () => {
            navs.forEach(i => i.classList.remove('on'));
            bottomNav.style.display = 'none';
        })
    },

    init() {
        this.navMenuHandler();
    }
}

export default Header;