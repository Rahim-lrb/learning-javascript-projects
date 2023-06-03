let container = document.getElementById("container")

for (i = 0 ; i < 300; i++) {
    div = document.createElement("div")
    div.classList = "square"
    container.appendChild(div)
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

// document.querySelectorAll(".square").forEach((box) => {
//     box.addEventListener("mouseenter", (event) => {
//         console.log(event.target)
//         event.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()});`
//     })
// })



document.querySelectorAll(".square").forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
        console.log(event.target);
        event.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        setTimeout(() => {
            event.target.style.backgroundColor = `#19172e`;
        }, 200);
    });
});
