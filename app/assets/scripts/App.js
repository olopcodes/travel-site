import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';

const mobileMenu = new MobileMenu();

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
