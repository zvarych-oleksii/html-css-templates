
const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function (item) {
    item.addEventListener('click', open);
})


function open(event) {
    const eventTarget = event.currentTarget;
    const button = eventTarget.dataset.button;

    console.log(eventTarget.dataset.button);
    tabItem.forEach(function (item) {
        item.classList.remove("tabs__btn-item--active");
    })
    tabContent.forEach(item => {
        item.classList.remove("tabs__content-item--active")
    })

    document.querySelector(`#${button}`).classList.add("tabs__content-item--active");
    eventTarget.classList.add("tabs__btn-item--active");
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
})


const swiper = new Swiper(".swiper", {
        pagination: {
            el: '.swiper-pagination',
        },
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    }
);


