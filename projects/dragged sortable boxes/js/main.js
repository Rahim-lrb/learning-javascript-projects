let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
let boxes = document.querySelectorAll(".box")
let drag = null

btn.addEventListener("click", () => {
    if (inp.value != "") {
        boxes[0].innerHTML += `
            <p class="item" draggable="true">${inp.value}<p>
        `
        inp.value = ""
    }
    dragItem()
})

// ! drag
function dragItem() {
    let items = document.querySelectorAll(".item")
    items.forEach((item) => {
        // * 5 events , dragstart, dragend
        item.addEventListener("dragstart", () => {
            drag = item
            item.style.opacity = "0.5"
            console.log("sdqsd")
        })

        item.addEventListener("dragend", () => {
            drag = null
            item.style.opacity = "1"
            console.log("sdqsd")
        })

        boxes.forEach((box) => {
            box.addEventListener("dragover", function (event) { // not arrow
                event.preventDefault() // ! to work you should prevent 
                this.style.background = "#090"
                this.style.color = "white"
            })
            box.addEventListener("dragleave", function() {
                this.style.background = "white"
                this.style.color = "black"
            })
            box.addEventListener("drop", function() {
                box.append(drag)
                this.style.color = "black"
                this.style.background = "white"
            })
        })
})
}