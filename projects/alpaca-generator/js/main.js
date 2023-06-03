// ! main buttons make the their types appear
mainButtons = document.querySelectorAll(".ac button")

mainButtons.forEach(btn => {
    btn.addEventListener("click", addActive)    
    btn.addEventListener("click", appear)
});


function addActive(event) {
    mainButtons.forEach(btn => {
        btn.classList.remove("active");
    })
    event.target.classList.add("active");
}

function appear(event) {
    document.querySelectorAll(".part2 div").forEach(el => {
        el.style.display = "none"
    })

    document.querySelectorAll("." + event.target.title).forEach(el => {
        el.style.display = "block"
    })
}


// ! active for the other buttons
let btns = document.querySelectorAll(".part2 button")
btns.forEach(el => {
    el.addEventListener("click", (event) => {
        btns.forEach((btn) => {
            btn.classList.remove("active")
        })
        event.target.classList.add("active")
    })
})



btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.target
        console.log(event.target.textContent)

        document.querySelector("." + event.target.textContent)
    })

})





subButtons = document.querySelectorAll(".part2 button").forEach(btn => {
    btn.addEventListener("click", (event) => {
        document.querySelector(".img-cont img." + event.target.parentNode.classList.value).src = `images/${event.target.parentNode.classList.value}/${event.target.textContent}.png`
        console.log(event.target.parentNode.classList.value)
    })
})















// ! random
const hair = [
    {
        text: "Default",
        src: ".images/Hair/default.png"
    },
    {
        text: "Bang",
        src: ".images/Hair/bang.png"
    },
    {
        text: "Curls",
        src: ".images/Hair/curls.png"
    },
    {
        text: "Elegant",
        src: ".images/Hair/elegant.png"
    },
    {
        text: "Fancy",
        src: ".images/Hair/fancy.png"
    },
    {
        text: "Quiff",
        src: ".images/Hair/quiff.png"
    },
    {
        text: "Short",
        src: ".images/Hair/short.png"
    }
]
const ears = [
    {
        text: "Default",
        src: "images/Ears/default.png",
        element:'earEl'
    }, 
    {
        text: "Tilt-backward",
        src: "images/Ears/tilt-backward.png",
        element:'earEl'
    },
    {
        text: "Tilt-forward",
        src: "images/Ears/tilt-forward.png",
        element:'earEl'
    }
]
const accessories = [
    {
        text: "Headphone",
        src: "images/Accessories/headphone.png"
    },
    {
        text: "Earings",
        src: "images/Accessories/earings.png"
    },
    {
        text: "Flower",
        src: "images/Accessories/flower.png"
    },
    {
        text: "Glasses",
        src: "images/Accessories/glasses.png"
    }
]
const eyes = [
    {
        text: "Default",
        src: "images/Eyes/default.png"
    },
    {
        text: "Angry",
        src: "images/Eyes/angry.png"
    },
    {
        text: "Naughty",
        src: "images/Eyes/naughty.png"
    },
    {
        text: "Panda",
        src: "images/Eyes/panda.png"
    },
    {
        text: "Smart",
        src: "images/Eyes/smart.png"
    },
    {
        text: "Star",
        src: "images/Eyes/star.png"
    }
]
const mouth = [
    {
        text: "Default",
        src: "images/Mouth/default.png"
    },
    {
        text: "Astonished",
        src: "images/Mouth/astonished.png"
    },
    {
        text: "Eating",
        src: "images/Mouth/eating.png"
    },
    {
        text: "Laugh",
        src: "images/Mouth/laugh.png"
    },
    {
        text: "Tongue",
        src: "images/Mouth/tongue.png"
    }
]
const neck = [
    {
        text: "Default",
        src: "images/Neck/default.png"
    },
    {
        text: "Bend-backward",
        src: "images/Neck/bend-backward.png"
    },
    {
        text: "Bend-forward",
        src: "images/Neck/bend-forward.png"
    },
    {
        text: "Thick",
        src: "images/Neck/thick.png"
    },
]
const leg = [
    {
        text: "Default",
        src: "images/Leg/default.png"
    },
    {
        text: "Bubble-tea",
        src: "images/Leg/bubble-tea.png"
    },
    {
        text: "Cookie",
        src: "images/Leg/cookie.png"
    },
    {
        text: "Game-console",
        src: "images/Leg/game-console.png"
    },
    {
        text: "Tilt-backward",
        src: "images/Leg/tilt-backward.png"
    },
    {
        text: "Tilt-forward",
        src: "images/Leg/tilt-forward.png"
    },
]
const background = [
    {
        text: "Blue 50",
        src: 'images/Backgrounds/blue50.png'
    },
    {
        text: "Blue 70",
        src: 'images/Backgrounds/blue60.png'
    },
    {
        text: "Blue 70",
        src: 'images/Backgrounds/blue70.png'
    },
    {
        text: "Dark-blue 30",
        src: 'images/Backgrounds/darkblue30.png'
    },
    {
        text: "Dark-blue 50",
        src: 'images/Backgrounds/darkblue50.png'
    },
    {
        text: "Dark-blue 70",
        src: 'images/Backgrounds/darkblue70.png'
    },
    {
        text: "Green 50",
        src: 'images/Backgrounds/green50.png'
    },
    {
        text: "Green 60",
        src: 'images/Backgrounds/green60.png'
    },
    {
        text: "Green 70",
        src: 'images/Backgrounds/green70.png'
    },
    {
        text: "Grey 40",
        src: 'images/Backgrounds/grey40.png'
    },
    {
        text: "Grey 70",
        src: 'images/Backgrounds/grey70.png'
    },
    {
        text: "Grey 80",
        src: 'images/Backgrounds/grey80.png'
    },
    {
        text: "Red 50",
        src: 'images/Backgrounds/red50.png'
    },
    {
        text: "Red 60",
        src: 'images/Backgrounds/red60.png'
    },
    {
        text: "Red 70",
        src: 'images/Backgrounds/red70.png'
    },
    {
        text: "Yellow 50",
        src: 'images/Backgrounds/yellow50.png'
    },
    {
        text: "Yellow 60",
        src: 'images/Backgrounds/yellow60.png'
    },
    {
        text: "Yellow 70",
        src: 'images/Backgrounds/yellow70.png'
    }
]

document.querySelector(".random").addEventListener("click", () => {
    document.querySelector("img.Backgrounds").src = background[random(background)].src
    document.querySelector("img.Eyes").src = eyes[random(eyes)].src
    document.querySelector("img.Ears").src = ears[random(ears)].src
    document.querySelector("img.Mouth").src = mouth[random(mouth)].src
    document.querySelector("img.Neck").src = neck[randomar(neck)].src
    document.querySelector("img.Leg").src = leg[random(leg)].src
    document.querySelector("img.Accessories").src = accessories[random(accessories)].src
    document.querySelector("img.Hair").src = hair[random(hair)].src
})


function random(ar) {
    return Math.floor(Math.random() * (ar.length - 1))
}


// ! download
let download = document.querySelector(".download")
download.addEventListener('click', ()=>{
    console.log("zsqsdqsd")
    html2canvas(image).then(function(canvas) {
        const fileName = "images";
        const link = document.createElement("a");
        link.download = fileName + ".png";

        canvas.toBlob(function (blob) {
            link.href = URL.createObjectURL(blob);
            link.click();
        })
});
})


// let canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d", )


// // . js handles upload as an array
// let file = new FileReader() // . this class reads files
// file.readAsDataURL(upload.files[0])

// // img.src = file.result we are not sure if the file is loaded
// file.onload = () => {
//     img.src = file.result
// }
// // . we draw the image to downlaod
// img.onload = () => {
//     canvas.width = img.width
//     canvas.height = img.height
//     // drawImage(the image, x , y, width, height)
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height) // this is the copy before the filters
//     img.style.display = "none"
// }


// download.onclick = () => {
//     // download.href = img.src js doesnt let you download filtered imgs so we clone it into a canvas
//     download.href = canvas.toDataURL('image/jpeg') // png is def format
// }

