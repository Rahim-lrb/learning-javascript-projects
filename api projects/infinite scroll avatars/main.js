const container = document.getElementById("container");

function getRandomImage() {
    const randomWidth = Math.floor(Math.random() * 800) + 200; // Random width between 200 and 1000
    const randomHeight = Math.floor(Math.random() * 800) + 200; // Random height between 200 and 1000
    return `https://picsum.photos/${randomWidth}/${randomHeight}`;
}

function loadImages(numImages = 10) {
    let i = 0;
    while (i < numImages) {
        const img = document.createElement("img");
        img.src = getRandomImage();
        container.appendChild(img);
        i++;
    }
}

loadImages();


window.addEventListener("scroll",() => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})