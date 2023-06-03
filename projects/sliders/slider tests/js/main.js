// ! collecting info
let sliderNumber = document.getElementById("slide-number")
let images = document.querySelectorAll(".slider-container img")
let sliderControls = document.querySelector(".slider-controls")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let indicators = document.getElementById("indicators")

let array = Array.from(images)
let imgsNumber = array.length
console.table(array)

// ! you should always choose the index you want to start from
let currentSlide = 1
next.onclick = nextSlide
prev.onclick = prevSlide
function nextSlide() {
    if (next.classList.contains("disabled")) {
        return false // do nothing
    } else {
        currentSlide++
        checker()
    }
}

function prevSlide() {
    if (prev.classList.contains("disabled")) {
        return false // do nothing
    } else {
        currentSlide--
        checker()
    }
}


// ! create pagination list  (the main ul element and its li and add them to the page)
let paginationElement = document.createElement("ul")
paginationElement.setAttribute("id" ,"pagination-ul")

for(i = 1; i <= imgsNumber ; i++) {
    let paginationItem = document.createElement("li")
    paginationItem.setAttribute("data-index" , i)
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}
indicators.appendChild(paginationElement)


// ! create the checker function on the slide number
var paginationCreatedUl = document.getElementById('pagination-ul') // cant use the one above still not in the page
function checker (){
    sliderNumber.textContent = "slide #" + currentSlide + "of " + imgsNumber
    removeAllActive()
    
    // . set active class on current image
    array[currentSlide - 1].classList.add("active")
    // . set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")
    
    if (currentSlide == 1) {
        prev.classList.add("disabled")
    } else {
        prev.classList.remove("disabled")
    }
    if (currentSlide == imgsNumber) {
        next.classList.add("disabled")
    } else {
        next.classList.remove("disabled")
    }
}
checker()


function removeAllActive() {
    /*
    for (arr of array) {
        arr.classList.remove("active")
    }
    for (el of paginationCreatedUl.children) {
        el.classList.remove("active")
    }
    */
    let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))
    array.forEach(function(img) {
        img.classList.remove("active")
    })
    paginationBullets.forEach(function(bullet) {
        bullet.classList.remove("active")
    })
}


// ! loop through the bullets
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}




// ! 2nd
var i = 0
var time = 3000
var image = []

image[0] = 'images/image1.jpg'
image[1] = 'images/image2.jpg'
image[2] = 'images/image3.jpg'
image[3] = 'images/image4.jpg'
console.log(image) 

function changeImage() {
    // document.getElementById("slide").src = image[i]
    document.slide.src = image[i]

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, time);
}
changeImage()


// ! 3rd
let carouselSlide = document.querySelector(".carousel-slide")
let images2 = document.querySelectorAll(".carousel-slide img") 

let pr = document.getElementById("pr")
let ne = document.getElementById("ne")

// counter 
let counter = 1
const size = images2[1].clientWidth // how much we will slide 

carouselSlide.style.transform = "translateX(" + (- size * counter ) + "px)"

// . btn listener
ne.addEventListener("click", () => {
    if (counter >= images2.length - 1) return // if u go so fast
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
    carouselSlide.style.transform = "translateX(" + (- size * counter ) + "px)"
})

pr.addEventListener("click", () => {
    if (counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    carouselSlide.style.transform = "translateX(" + (- size * counter ) + "px)"
})


carouselSlide.addEventListener('transitionend', () => {
    if (images2[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = 5;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images2[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = 1
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});