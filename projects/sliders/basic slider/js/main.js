const container = document.querySelector('.container');
const image = document.querySelector('.img1');
const left = document.getElementById('left');
const right = document.getElementById('right');
const array = [
    "assets/maciek-sulkowski--dhbg30oSfE-unsplash.jpg",
    "assets/maciek-sulkowski-58tP7g7x1LQ-unsplash.jpg",
    "assets/maciek-sulkowski-jVJWrcUNdeY-unsplash.jpg",
    "assets/maciek-sulkowski-qkAqJuX6DVI-unsplash.jpg",
    "assets/maciek-sulkowski-z-J6t9UJqEg-unsplash.jpg",
];
let bullets = document.querySelector(".bullets")
let box = document.querySelector(".box h3")
let index = 0;


// . bullets
for (i = 0; i < array.length ; i++) {
    bul = document.createElement("div")
    bul.className = "bullet"
    bul.setAttribute('data-num', i)
    bullets.appendChild(bul)
}

update()

right.onclick = () => {
    index == array.length - 1 ? index = 0 : index++
    update()
}

left.onclick = () => {
    index == 0 ? index = array.length - 1 : index--
    update()
}


function update () {
    image.src = array[index]
    box.innerHTML = `${(+index + 1)} out of ${array.length}`
    document.querySelectorAll(".bullet").forEach((b) => b.classList.remove("active"))
    document.querySelectorAll(".bullet")[index].classList.add("active")
}



bullets.addEventListener("click", (event) => {
    if (event.target.classList.contains('bullet')) {
        index = event.target.dataset.num
        update()
    }
})



/* 
!  second
  */ 

const left2 = document.getElementById('left2');
const right2 = document.getElementById('right2');
const carousel = document.querySelector(".carousel");

let current = 0;

right2.onclick = () => {
    if (current == -400) {
        current = 0
    }
    current -= 100;
    carousel.style.transform = `translateX(${current}%)`;
}

left2.onclick = () => {
    if (current  == 0) {
        current = -400
    }
    current += 100;
    carousel.style.transform = `translateX(${current}%)`;
}

const size = document.querySelectorAll(".image")[0].clientWidth 

