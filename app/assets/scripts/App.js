import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';

// React related code
import React from 'react';
import ReactDOM from 'react-dom';

// import created react components
import MyAmazingComponent from './modules/MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector('#react-example'))


new ClientArea();
new StickyHeader();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
let modal;

document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        if(typeof modal == 'undefined') {
            import (/* webpackChunkName: "modal" */'./modules/Modal')
            .then(x => {
                modal = new x.default()
                setTimeout(()=> modal.openModal(), 20)
            })
            .catch(()=> console.log('there was a problem'))
        } else {
            modal.openModal()
        }
    })
})



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
