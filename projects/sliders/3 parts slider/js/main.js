let rightBtn = document.getElementById("right")
let leftBtn = document.getElementById("left")
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");


/*
? lesson
- element.clientWidth => gives the width el el with padding without margin or border
- .offsetWidth => include everything but margin
- scrollWidth => he total width of an element's scrollable content like body.scrollheight
- scrollLeft => the distance from the left (scrollable)
- scrollRight => the distance from the right
*/


rightBtn.addEventListener("click", () => {
    carousel.scrollLeft += firstImg.clientWidth + 14 // margin
    showHideIcons()
})
leftBtn.addEventListener("click", () => {
    carousel.scrollLeft -= firstImg.clientWidth + 14
    showHideIcons()
})
/*
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        . left => reduce the carouselScroll and vise versa
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
*/


const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    // . scroll width = the space when you can scroll(whole space - the space of el)
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}





// ! dragging
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}


const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}


const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
