let container = document.querySelector(".container")
let btn = document.querySelector(".refresh-btn")

let letters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(`#${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`)
function generate() {
    for (i = 0; i < 32; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "color");
    
        let txt = `#${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`;
    
        let div = document.createElement("div");
        div.setAttribute("class", "rect-box");
        div.style.backgroundColor = txt;
    
        let span = document.createElement("span");
        span.setAttribute("class", "hex-value");
        span.textContent = txt;
        
        li.appendChild(div);
        li.appendChild(span);
        container.appendChild(li);

        // Add the click event listener to the newly generated color element
        li.addEventListener("click", () => {
            const hexValueElement = li.querySelector(".hex-value");

            const tempInput = document.createElement("input");
            tempInput.value = hexValueElement.textContent;
            document.body.appendChild(tempInput)
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            hexValueElement.textContent = "Copied!";
            setTimeout(() => {
                hexValueElement.textContent = tempInput.value;
            }, 2000);
        });
    }
}

generate()

function randomLetter() {
    return `${letters[Math.floor(Math.random() * letters.length)]}`
}

btn.addEventListener("click", () => {
    container.innerHTML = ''
    generate()
})

// function generate() {
//     for (i = 0; i < 32; i++) {
//         let li = document.createElement("li")
//         li.setAttribute("class", "color")
    
//         // let txt = `#${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`
//         let txt = `#${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`
    
//         let div = document.createElement("div")
//         div.setAttribute("class", "rect-box")
//         div.style.backgroundColor = txt
    
//         let span = document.createElement("span")
//         span.setAttribute("class", "hex-value")
//         span.textContent = txt
    
//         li.appendChild(div)
//         li.appendChild(span)
//         container.appendChild(li)
//     }
//     const colorElements = document.querySelectorAll(".color");

// }


const colorElements = document.querySelectorAll(".color");

colorElements.forEach(colorElement => {
    colorElement.addEventListener("click", () => {
        const hexValueElement = colorElement.querySelector(".hex-value");

        // Create a temporary input element to copy the text
        const tempInput = document.createElement("input");
        tempInput.value = hexValueElement.textContent;
        document.body.appendChild(tempInput)
        // Select the text inside the input element and copy it to clipboard
        tempInput.select();
        document.execCommand("copy");
        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Update the text of the clicked element to show that the text has been copied
        hexValueElement.textContent = "Copied!";
        // Set a timeout to reset the text after 2 seconds
        setTimeout(() => {
        hexValueElement.textContent = tempInput.value;
        }, 2000);
    });
});


let num = 0xFFFFFF
// 0x means it's in hexadecimal notaion,
console.log(num) 
console.log(Math.random() * num) // a number between 0 and 16777215
console.log(Math.floor(Math.random()*num).toString(16))
// so random * fffff => will generate a random number between them  => and finally turn it to string
// . but string in base (16) => between 0 to F


// "#" + Array.from({length: 4}, randomLetter).join("")




// ! spacebar
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        event.preventDefault()
        container.innerHTML = ''
        generate()
    }   
});
