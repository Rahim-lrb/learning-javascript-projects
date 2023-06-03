let drum = document.querySelectorAll(".key")

drum.forEach((el) => {
    el.addEventListener("click", (event) => {
        let span = el.querySelector("span")
        // console.log(el.querySelector("span"))
        // ! console.log(this.querySelector("kbd")) inside arrow function this => window
        let fileName = `sounds/${span.textContent}.wav`
        const audio = new Audio(fileName);
        audio.play();
        console.log(el)
        el.classList.add("playing")
        setTimeout(() => {
            el.classList.remove("playing")
        }, 300);
    })
})



document.addEventListener("keydown", function(event) {
    const keyCode = event.keyCode || event.which;
    hey = document.querySelector(`div[data-key="${keyCode}"]`)
    let span = hey.querySelector("span")
    let fileName = `sounds/${span.textContent}.wav`
    const audio = new Audio(fileName);
    audio.play();
    effect(he)
});

