let generate = document.getElementById("submit");
let copy = document.getElementById("copy");
let code = document.getElementById("code");
let color1 = document.getElementById("color_one");
let color2 = document.getElementById("color_two");
let body = document.querySelector("body");


document.querySelectorAll(".button").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        switch (btn.id) {
            case "button1":
                degree = "to top";
                break;
            case "button2":
                degree = "to bottom";
                break;
            case "button3":
                degree = "to left";
                break;
            case "button4":
                degree = "to right";
                break;
            case "button5":
                degree = 45 + "deg";
                break;
            case "button6":
                degree = 225 + "deg";
                break;
            case "button7":
                degree = 135 + "deg";
                break;
            case "button8":
                degree = 315 + "deg";
                break;
            default:
                degree = 0;
                break;
        }
        console.log(degree);
    });
});


generate.addEventListener("click", () => {
    body.style.backgroundColor = "transparent";
    let text = `linear-gradient(${degree}, ${color1.value}, ${color2.value})`
    body.style.background = text;
    code.innerHTML = text;
});

copy.addEventListener("click", () => {
    code.select();
    document.execCommand("copy")
    console.log("copied")
})