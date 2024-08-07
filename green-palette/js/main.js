


const swiper = new Swiper('.reviews__slider', {


    slidesPerView: 2,
    spaceBetween: 22,

    navigation: {
        nextEl: '.reviews__item-next',
        prevEl: '.reviews__item-prev',
    },
})

const button = document.querySelector('.menu_btn');
const list = document.querySelector('.menu__list');


button.addEventListener('click', () => {
    list.classList.toggle('menu--open');
});

