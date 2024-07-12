const chooseColor = document.querySelectorAll(".choose-color__btn")
const contentItem = document.querySelectorAll(".content-item")


chooseColor.forEach(function(element){
    element.addEventListener("click", open)
})


function open(event){
    const target = event.currentTarget;

    const button = target.dataset.button;

    const contentActive = document.querySelectorAll(`.${button}`)
    console.log(contentActive)
    chooseColor.forEach(function (item) {
        item.classList.remove("choose-color__btn-active");
    })
    target.classList.add("choose-color__btn-active");

    contentItem.forEach(item => {
        item.classList.remove("content-item-active");
    })

    contentActive.forEach(item => {
        item.classList.add("content-item-active");
    })

}