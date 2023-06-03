// Start writing JavaScript here!
// let buttons = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let keys = document.querySelector(".calculator__keys")
let area = document.querySelector(".calculator__display")

keys.addEventListener("click", function(event) {
    // console.log(event) (keys)
    let key = event.target
    console.log(key) // to get the target 
// . the target can be the grid then we should get rid of that by closest or matches 
    // if (!event.target.closest("button")) return // it lookd for the closest ancestor 
    area.textContent = key.textContent
    
    if (area.textContent === "0") {
        area.textContent = key.textContent
    } else {
        area.textContent += key.textContent
    }
})

