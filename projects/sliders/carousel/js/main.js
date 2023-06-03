let left = document.getElementById("left")
let right = document.getElementById("right")
let container = document.querySelector(".image-container")
let img = document.querySelectorAll("#imgs img")


let index = 0
let interval = setInterval(run, 3000);
function run() {
    index++
    changeImg()
}
function changeImg() {
    if ( index > img.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = img.length - 1;
    }
    container.style.transform = `translateX(${-index * 500}px)`
}



right.addEventListener("click", () => {
    index++
    changeImg()
    resetInterval()
})



function resetInterval() {
    clearInterval(interval)
    setInterval(run , 3000)
}


left.addEventListener("click", () => {
    index--
    changeImg()
    resetInterval()
})

