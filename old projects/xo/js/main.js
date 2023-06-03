let userImg = document.querySelector(".user_result img")

let choices = document.querySelectorAll(".option_images .option_image")
console.log(choices)

choices.forEach((option) => {
    option.addEventListener("click", () => {
        console.log("qsdsd")
        userImg.src = option.querySelector("img").src
        document.querySelector(".container").classList.add("start")
        // if ()
    })
})