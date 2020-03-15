import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor (items, percent) {
        this.percent = percent
        this.itemsToReveal = items;
        this.browserHeight = window.innerHeight;
        this.hide();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events()
    }

    events () {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', debounce(()=>{
            console.log('resize ran');
            this.browserHeight = window.innerHeight;
        }, 333))
    }

    calcCaller () {
        console.log('scroll ran')
        this.itemsToReveal.forEach(item => {
            if(!item.isRevealed) {
                this.calcIfScrolledTo(item);
            }
        })
    }

    calcIfScrolledTo(item) {
       if (window.scrollY + this.browserHeight > item.offsetTop){
        console.log('item was calculated');
        let scrollPercent = (item.getBoundingClientRect().y / this.browserHeight) * 100;
        if(scrollPercent < this.percent) {
            item.classList.add('reveal-item--visible');
            item.isRevealed. true;
            if(item.isLastItem){
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }   
       }
    }

    hide() {
        this.itemsToReveal
            .forEach(item => {
                item.classList.add('reveal-item')
                item.isRevealed = false;
            })

            this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true;
    }
}

export default RevealOnScroll;