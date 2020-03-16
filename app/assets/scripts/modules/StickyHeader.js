// import throttle from 'lodash/throttle';
// import debounce from 'lodash/debounce';

// class StickyHeader {
//     constructor(){
//         this.pageSections = document.querySelectorAll('.page-section');
//         this.siteHeader = document.querySelector('.site-header');
//         this.browserHeight = window.innerHeight;
//         this.previousScrollY = window.scrollY;
//         this.events();
//     }

//     events() {
//         window.addEventListener('scroll', throttle(()=> this.runOnScroll(), 200));
//         window.addEventListener('resize', debounce(()=>{
//             this.browserHeight = window.innerHeight;
//         }, 333))
//     }

//     runOnScroll() {
//         this.determineScrollDirection();

//         // scroll more than 60 ox
//         if(window.scrollY > 60) {
//             this.siteHeader.classList.add('site-header--dark');
//         } else {
//             this.siteHeader.classList.remove('site-header--dark')
//         }

//         this.pageSections.forEach(item => this.calcSection(item));
//     } 

//     determineScrollDirection () {
//         // means scrolling down
//         if(window.scrollY > this.previousScrollY) {
//             this.scrollDirection = 'down';
//         } else {
//             this.scrollDirection = 'up';
//         }
//         this.previousScrollY = window.scrollY;
//     }

//     calcSection (item) {
//         if(
//             window.scrollY + this.browserHeight > item.offsetTop 
//             && window.scrollY < item.offsetTop + item.offsetHeight
//             ){
//                 let scrollPercent = item.getBoundingClientRect().y / this.innerHeight * 100;
//                 if (
//                     scrollPercent < 18 
//                     && scrollPercent > -0.1 
//                     && this.scrollDirection == 'down'
//                     || scrollPercent < 33 && this.scrollDirection == 'up') {
//                     let matchingLink = item.getAttribute('data-link');
//                     document.querySelectorAll(`.main-nav a:not(${matchingLink})`)
//                         .forEach(item => item.classList.remove('current-link'))
//                     document.querySelector(matchingLink).classList.add('current-link')
//                 }
//             }
//     }

// }

// export default StickyHeader;


import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.pageSections = document.querySelectorAll(".page-section")
    this.browserHeight = window.innerHeight
    this.previousScrollY = window.scrollY
    this.events()
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  runOnScroll() {
    this.determineScrollDirection()

    if (window.scrollY > 60) {
      this.siteHeader.classList.add("site-header--dark")
    } else {
      this.siteHeader.classList.remove("site-header--dark")
    }

    this.pageSections.forEach(item => this.calcSection(item))
  }

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = 'down'
    } else {
      this.scrollDirection = 'up'
    }
    this.previousScrollY = window.scrollY
  }

  calcSection(item) {
    if (window.scrollY + this.browserHeight > item.offsetTop && window.scrollY < item.offsetTop + item.offsetHeight) {
      let scrollPercent = item.getBoundingClientRect().top / this.browserHeight * 100
      if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
        let matchingLink = item.getAttribute("data-link")
        document.querySelectorAll(`.main-nav a:not(${matchingLink})`).forEach(item => item.classList.remove("current-link"))
        document.querySelector(matchingLink).classList.add("current-link")
      }
    }
  }
}

export default StickyHeader