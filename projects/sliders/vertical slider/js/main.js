const sliderContainer = document.querySelector(".slider-container"),
rightslide = document.querySelector(".right-slide"),
leftslide = document.querySelector(".left-slide"),
upButton = document.querySelector('.up'),
downButton = document.querySelector('.down'),
slidesLength = rightslide.querySelectorAll("div").length
console.log(slidesLength)


let activeSlideIndex = 0
leftslide.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => {
    changeSlide("up")
})

downButton.addEventListener("click", () => {
    changeSlide("down")
})

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight)
    if (direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    rightslide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftslide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}