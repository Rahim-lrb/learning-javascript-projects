let divs = document.querySelectorAll(".image")
let all = document.querySelector(".all")
let close = document.querySelector(".overlay .container .close")
let left = document.querySelector(".overlay .container2 .left")
let right = document.querySelector(".overlay .container2 .right")
let bigImg = document.querySelector(".overlay .container2 img")
let h2 = document.querySelector(".overlay h2")

divs.forEach((div) => {
    div.addEventListener("click", () => {
        let img = div.querySelector("img")
        displayImg(img)
        displayCollection(img)
        let overlay = document.querySelector(".overlay");
        overlay.style.opacity = 0;
        overlay.style.display = "block";
        let opacityInterval = setInterval(() => {
            let current = parseFloat(overlay.style.opacity);
            if (current >= 1) {
                clearInterval(opacityInterval);
            } else {
                current += 0.1;
                overlay.style.opacity = current;
            }
        }, 20);
    })
})


close.addEventListener("click", () => {
    document.querySelector(".overlay").style.opacity = 0
    document.querySelector(".overlay").style.display = "none"
    document.querySelector(".all").innerHTML = ""
})



function displayImg(img) {
    bigImg.src = img.src
    h2.textContent = img.title
}



function displayCollection(img) {
    console.log("displayCollection called");
    if (img.dataset.cat === "nature") {
        let natureImages = document.querySelectorAll('.image img[data-cat="nature"]');
        console.log(natureImages);
        for (let i = 0; i < natureImages.length; i++) {
            let newImg = document.createElement("img");
            newImg.src = natureImages[i].src;
            if (newImg.src === img.src) {
            newImg.style.opacity = 1;
            } else {
            newImg.style.opacity = 0.3;
            }
            all.append(newImg);
        }
    } else if (img.dataset.cat === "city") {
        let cityImages = document.querySelectorAll('.image img[data-cat="city"]');
        for (let i = 0; i < cityImages.length; i++) {
            let newImg = document.createElement("img");
            newImg.src = cityImages[i].src;
            if (newImg.src === img.src) {
            newImg.style.opacity = 1;
            } else {
            newImg.style.opacity = 0.3;
            }
            all.append(newImg);
        }
    }
    
}


all.addEventListener("click", (event) => { // ! select element that doesnt exist yet with event delegation
    console.log(event.target)
    displayImg(event.target)
    document.querySelectorAll(".all img").forEach((img) => img.style.opacity = 0.3)
    event.target.style.opacity = 1
})



right.addEventListener("click", () => {
    let images = document.querySelectorAll(".all img");
    let currentImg = bigImg.src;
    let currentIndex = -1;
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === currentImg) {
            currentIndex = i;
            break;
        }
    }
    let nextIndex = (currentIndex + 1) % images.length;
    let nextImg = images[nextIndex];
    displayImg(nextImg);
    images.forEach((img) => img.style.opacity = 0.3);
    nextImg.style.opacity = 1;
});


left.addEventListener("click", () => {
    let images = document.querySelectorAll(".all img");
    let currentImg = bigImg.src;
    let currentIndex = -1;
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === currentImg) {
            currentIndex = i;
            break;
        }
    }
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    let prevImg = images[prevIndex];
    displayImg(prevImg);
    images.forEach((img) => img.style.opacity = 0.3);
    prevImg.style.opacity = 1;
});






// ! the true way
// function getElement(selection) {
//     const element = document.querySelector(selection);
//     if (element) {
//     return element;
//     }
//     throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//     );
// }

// class Gallery {
//     constructor(element) {
//     this.container = element;
//     this.list = [...element.querySelectorAll('.img')];
//     // target
//     this.modal = getElement('.modal');
//     this.modalImg = getElement('.main-img');
//     this.imageName = getElement('.image-name');
//     this.modalImages = getElement('.modal-images');
//     this.closeBtn = getElement('.close-btn');
//     this.nextBtn = getElement('.next-btn');
//     this.prevBtn = getElement('.prev-btn');
//     // self ref
//     // let self = this;
//     // bind functions
//     // this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.nextImage = this.nextImage.bind(this);
//     this.prevImage = this.prevImage.bind(this);
//     this.chooseImage = this.chooseImage.bind(this);
//     // container event
//     this.container.addEventListener(
//         'click',
//         function (e) {
//         // self.openModal();
//         if (e.target.classList.contains('img')) {
//             this.openModal(e.target, this.list);
//         }
//         }.bind(this)
//     );
//     }
//     openModal(selectedImage, list) {
//     this.setMainImage(selectedImage);
//     this.modalImages.innerHTML = list
//         .map(function (image) {
//         return `<img src="${
//             image.src
//         }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
//         })
//         .join('');
//     this.modal.classList.add('open');
//     this.closeBtn.addEventListener('click', this.closeModal);
//     this.nextBtn.addEventListener('click', this.nextImage);
//     this.prevBtn.addEventListener('click', this.prevImage);
//     this.modalImages.addEventListener('click', this.chooseImage);
//     }

//     setMainImage(selectedImage) {
//     this.modalImg.src = selectedImage.src;
//     this.imageName.textContent = selectedImage.title;
//     }

//     closeModal() {
//     this.modal.classList.remove('open');
//     this.closeBtn.removeEventListener('click', this.closeModal);
//     this.nextBtn.removeEventListener('click', this.nextImage);
//     this.prevBtn.removeEventListener('click', this.prevImage);
//     this.modalImages.removeEventListener('click', this.chooseImage);
//     }
//     nextImage() {
//     const selected = this.modalImages.querySelector('.selected');
//     const next =
//         selected.nextElementSibling || this.modalImages.firstElementChild;
//     selected.classList.remove('selected');
//     next.classList.add('selected');
//     this.setMainImage(next);
//     }
//     prevImage() {
//     const selected = this.modalImages.querySelector('.selected');
//     const prev =
//         selected.previousElementSibling || this.modalImages.lastElementChild;
//     selected.classList.remove('selected');
//     prev.classList.add('selected');
//     this.setMainImage(prev);
//     }
//     chooseImage(e) {
//     if (e.target.classList.contains('modal-img')) {
//         const selected = this.modalImages.querySelector('.selected');
//         selected.classList.remove('selected');

//         this.setMainImage(e.target);
//         e.target.classList.add('selected');
//     }
//     }
// }

// const nature = new Gallery(getElement('.nature'));
// const city = new Gallery(getElement('.city'));




// function getElement(selection) {
//     const element = document.querySelector(selection);
//     if (element) {
//     return element;
//     }
//     throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//     );
// }

// function Gallery(element) {
//     this.container = element;
//     this.list = [...element.querySelectorAll('.img')];
//     // target
//     this.modal = getElement('.modal');
//     this.modalImg = getElement('.main-img');
//     this.imageName = getElement('.image-name');
//     this.modalImages = getElement('.modal-images');
//     this.closeBtn = getElement('.close-btn');
//     this.nextBtn = getElement('.next-btn');
//     this.prevBtn = getElement('.prev-btn');
//     // self ref
//     // let self = this;
//     // bind functions
//     // this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.nextImage = this.nextImage.bind(this);
//     this.prevImage = this.prevImage.bind(this);
//     this.chooseImage = this.chooseImage.bind(this);
//     // container event
//     this.container.addEventListener(
//     'click',
//     function (e) {
//         // self.openModal();
//         if (e.target.classList.contains('img')) {
//         this.openModal(e.target, this.list);
//         }
//     }.bind(this)
//     );
// }

// Gallery.prototype.openModal = function (selectedImage, list) {
//     this.setMainImage(selectedImage);
//     this.modalImages.innerHTML = list
//     .map(function (image) {
//         return `<img src="${
//         image.src
//         }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
//     })
//     .join('');
//     this.modal.classList.add('open');
//     this.closeBtn.addEventListener('click', this.closeModal);
//     this.nextBtn.addEventListener('click', this.nextImage);
//     this.prevBtn.addEventListener('click', this.prevImage);
//     this.modalImages.addEventListener('click', this.chooseImage);
// };

// Gallery.prototype.setMainImage = function (selectedImage) {
//     this.modalImg.src = selectedImage.src;
//     this.imageName.textContent = selectedImage.title;
// };

// Gallery.prototype.closeModal = function () {
//     this.modal.classList.remove('open');
//     this.closeBtn.removeEventListener('click', this.closeModal);
//     this.nextBtn.removeEventListener('click', this.nextImage);
//     this.prevBtn.removeEventListener('click', this.prevImage);
//     this.modalImages.removeEventListener('click', this.chooseImage);
// };
// Gallery.prototype.nextImage = function () {
//     const selected = this.modalImages.querySelector('.selected');
//     const next =
//     selected.nextElementSibling || this.modalImages.firstElementChild;
//     selected.classList.remove('selected');
//     next.classList.add('selected');
//     this.setMainImage(next);
// };
// Gallery.prototype.prevImage = function () {
//     const selected = this.modalImages.querySelector('.selected');
//     const prev =
//     selected.previousElementSibling || this.modalImages.lastElementChild;
//     selected.classList.remove('selected');
//     prev.classList.add('selected');
//     this.setMainImage(prev);
// };
// Gallery.prototype.chooseImage = function (e) {
//     if (e.target.classList.contains('modal-img')) {
//     const selected = this.modalImages.querySelector('.selected');
//     selected.classList.remove('selected');

//     this.setMainImage(e.target);
//     e.target.classList.add('selected');
//     }
// };
// const nature = new Gallery(getElement('.nature'));
// const city = new Gallery(getElement('.city'));
