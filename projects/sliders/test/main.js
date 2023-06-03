const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let rightBtn = document.getElementById("right")
let leftBtn = document.getElementById("left")
index = 0



rightBtn.addEventListener("click", () => {
    // index++
    // carousel.style.transform = `translateX(${-index * 340}px)`
    console.log(carousel.scrollLeft)
    carousel.scrollLeft += firstImg.clientWidth + 14
    console.log(carousel.scrollLeft)
    showHideIcons()
})

leftBtn.addEventListener("click", () => {
    console.log(carousel.scrollLeft)
    carousel.scrollLeft -= firstImg.clientWidth + 14
})


// ! show hidden icons when scrollLeft isnt equal 0
const showHideIcons = () => {
    // . showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width => all 2500px - 1200px
    console.log(scrollWidth)
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}