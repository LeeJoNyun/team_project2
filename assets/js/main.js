import Header from './modules/header.js';
import mainBanner from './modules/mainBanner.js';
import Section1 from './modules/section1.js';
import Section2 from './modules/section2.js';
import Section3 from './modules/section3.js';
import Section4 from './modules/section4.js';
import Section6 from './modules/section6.js';

const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    Header.init();
    mainBanner.init();
    Section1.init();
    Section2.init();
    Section3.init();
    Section4.init();
    Section6.init();
};

init();


