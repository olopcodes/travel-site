import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


const stickyHeader = new StickyHeader();
const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

if(module.hot) {
    module.hot.accept()
}


// inheritance
// class Adult extends Person {
//     payTaxes () {
//         console.log(`${this.name} has to pay taxes now!`)
//     }
// }
// const bob = new Person('Bob', 'purple');
// bob.greet();

// const jan = new Adult('Jan', 'orange');
// jan.greet();
// jan.payTaxes();
