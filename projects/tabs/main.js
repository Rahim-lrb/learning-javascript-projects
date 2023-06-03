let tabs = document.querySelectorAll(".tabs li")
tabsArray = Array.from(tabs)
let divs = document.querySelectorAll(".content > div")
divsArray = Array.from(divs)

tabsArray.forEach(element => {
    element.addEventListener("click", (event) => {
        document.querySelector(".active").classList.remove("active"); // or another foreach
        event.currentTarget.classList.add("active")
        // event.target.classList.add("active");

        divsArray.forEach(div => {
            div.style.display = "none"
            document.querySelector(`${event.currentTarget.dataset.cont}`).style.display = "block"
        });
    });
});


