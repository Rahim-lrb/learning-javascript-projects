// filters
let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hue = document.getElementById("hue-rotate")
// buttons
let upload = document.getElementById("upload")
let img = document.getElementById("img")
let imgBox = document.querySelector(".imgBox")
let download = document.getElementById("download")
let reset = document.querySelector("span")
// since the image cant be downloaded, we copy it into canvas, ctx is the frame that we draw on
let canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d", )



window.onload = () => {
    download.style.display = "none"
    reset.style.display = "none"
}
// ! uploading the image
upload.onchange = () => {
    resetValue() // we use it every time we ad another image to set the values to def
    download.style.display = "block"
    reset.style.display = "block"
    // . js handles upload as an array
    let file = new FileReader() // . this class reads files
    file.readAsDataURL(upload.files[0])

    // img.src = file.result we are not sure if the file is loaded
    file.onload = () => {
        img.src = file.result
    }
    // . we draw the image to downlaod
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        // drawImage(the image, x , y, width, height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height) // this is the copy before the filters
        img.style.display = "none"
    }
}

// ! filters 
// . first way 
/*
saturate.addEventListener("input", () => {
    img.style.filter = `saturate(${saturate.value}%)`
    console.log(saturate.value)
})

contrast.addEventListener("input", () => { // . it stops the other filters
    img.style.filter = `contrast(${contrast.value}%)`
    console.log(contrast.value)
})
*/
// . 2nd way and the right one
let filters = document.querySelectorAll("ul li input")
filters.forEach((filter) => {
    filter.addEventListener("input", () => {
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue.value}deg)
        `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height) // to update it
    })
})
// NEXT PROBLEM WHEN WE ADD ANOTHER IMAGE THE FILTERS WOULD BE APPLIED
function resetValue() {
    img.style.filter = "none"
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
    hue.value = '0'
}


// ! download
download.onclick = () => {
    // download.href = img.src js doesnt let you download filtered imgs so we clone it into a canvas
    download.href = canvas.toDataURL('image/jpeg') // png is def format
}


