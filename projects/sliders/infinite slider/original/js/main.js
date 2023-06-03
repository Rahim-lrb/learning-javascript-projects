var mover = document.querySelector('.slider .mover');
var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('button');
var firstSlide = slides[0];
var next = document.getElementById("next")
var previous = document.getElementById("prev")
let index = 0 ;

next.addEventListener("click", () => {
    index++

    mover.style.transform = `translateX(${-index * 600}px)`
    mover.addEventListener("transitionend", () => {
        deleteTheFirstItem()
    });
    addTheCloneToTheEnd()
    
})



function addTheCloneToTheEnd() {
    if (index > 0) {
        const clone = document.querySelectorAll('.slide')[index - 1].cloneNode(true);
        mover.appendChild(clone)
        deleteTheFirstSlide()
    }
}

function deleteTheFirstSlide() {
    slides = document.querySelectorAll(".slide")
    slides[0].remove()
    mover.style.transform = `translateX(0px)`

}



























// firstSlide.parentNode.insertBefore(lastSlide, firstSlide);
// next.addEventListener("click", () => {
//     // Move the first slide after the last slide
//     lastSlide.parentNode.insertBefore(firstSlide, lastSlide.nextSibling);

//     // Update the slides array to reflect the new order
//     slides = document.querySelectorAll('.slide');

//     // If we've reached the end, reset the index and move the first slide
//     if (index >= slides.length) {
//         index = 0;
//         mover.style.transform = `translateX(0px)`;
//         lastSlide.parentNode.insertBefore(firstSlide, lastSlide.nextSibling);
//         slides = document.querySelectorAll('.slide');
//     }
// });
