(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(s,e,i){"use strict";i.r(e);e.default=class{constructor(){this.injectHtml(),this.modal=document.querySelector(".modal"),this.modalClose=document.querySelector(".modal__close"),this.events()}events(){this.modalClose.addEventListener("click",()=>this.closeModal()),document.addEventListener("keyup",s=>this.keypressRemove(s))}openModal(){this.modal.classList.add("modal--visible")}closeModal(){this.modal.classList.remove("modal--visible")}keypressRemove(s){27==s.keyCode&&this.closeModal()}injectHtml(){document.body.insertAdjacentHTML("beforeend",'\n            <div class="modal">\n            <div class="modal__inner">\n            <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n            <div class="wrapper wrapper--narrow">\n                <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n            </div>\n        \n            <div class="social-icons">\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n                <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n            </div>\n            </div>\n            <div class="modal__close">X</div>\n            </div>\n        ')}}}}]);