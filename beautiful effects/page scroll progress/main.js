/*
scroll height: entire content and padding visible or not
client height: visible content and padding
*/ 
let el = document.querySelector(".scroller")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight // we execlude the visible content bcz we cant count it (scroll in it)
console.log(height)
console.log(document.documentElement.clientHeight)

window.addEventListener("scroll", function () {
    let scrollTop = this.document.documentElement.scrollTop // how much have you scrolled 
    // console.log(scrollTop)
    let percentage = scrollTop * 100 / 1367
    // console.log(percentage + "%")

    el.style.width = scrollTop * 100 / height + "%"
})



// scroll button
let btn = document.getElementById("btn")
window.onscroll = function () {
    // console.log(window.scrollY)
    // if (window.scrollY > 1000) { // scrollTOP = scrollY( modern)
    //     btn.style.display = "inline-block";
    // } else {
    //     btn.style.display = "none";
    // }

    if (window.scrollY > 1000) { // scrollTOP (modern) = scrollY
        btn.classList.add("show")
    } else {
        btn.classList.remove("show")
    }
}


btn.addEventListener("click", function() {
    // document.documentElement.scrollTop = 0
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});