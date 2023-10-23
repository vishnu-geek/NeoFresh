let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Scroll Reveal Animation

// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
    // reset: true
// })

// sr.reveal(`.heding, .heading-p`,{delay: 600})
// sr.reveal(`.home__footer`,{delay: 700})
// sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

// sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
// sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
// sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
// sr.reveal(`.case__img`,{origin: 'top'})
// sr.reveal(`.case__data`)