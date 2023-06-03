let container = document.querySelector(".container")
let btn = document.querySelector(".refresh-btn")

let letters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(`#${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`)

function generate() {
    for (i = 0; i < 32; i++) {
        let li = document.createElement("li")
        li.setAttribute("class", "color")
        let txt = `#${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`
    
        let div = document.createElement("div")
        div.setAttribute("class", "rect-box")
        div.style.backgroundColor = txt
    
        let span = document.createElement("span")
        span.setAttribute("class", "hex-value")
        span.textContent = txt
    
        li.appendChild(div)
        li.appendChild(span)
        container.appendChild(li)
    }
}
generate()

function randomLetter() {
    return `${letters[Math.floor(Math.random() * letters.length)]}`
}

btn.addEventListener("click", () => {
    container.innerHTML = ''
    generate()
    copy()
})



function copy() {
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
}
copy()



// ! clean
// Define the letters that can be used in a hex color code
const HEX_LETTERS = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the HTML elements we'll be working with
const container = document.querySelector(".container");
const refreshButton = document.querySelector(".refresh-btn");

// Generate a random hex letter from the HEX_LETTERS array
function getRandomLetter() {
    return HEX_LETTERS[Math.floor(Math.random() * HEX_LETTERS.length)];
}

// Generate a random hex color code
function getRandomHexColorCode() {
    return `#${getRandomLetter()}${getRandomLetter()}${getRandomLetter()}${getRandomLetter()}${getRandomLetter()}${getRandomLetter()}`;
}

// Create a new color element and add it to the container
function addNewColorElement() {
    const li = document.createElement("li");
    li.classList.add("color");

    const hexValue = getRandomHexColorCode();

    const div = document.createElement("div");
    div.classList.add("rect-box");
    div.style.backgroundColor = hexValue;

    const span = document.createElement("span");
    span.classList.add("hex-value");
    span.textContent = hexValue;

    li.appendChild(div);
    li.appendChild(span);
    container.appendChild(li);

    // Add a click event listener to the new color element to copy the hex code to the clipboard
    li.addEventListener("click", () => {
        const tempInput = document.createElement("input");
        tempInput.value = hexValue;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        span.textContent = "Copied!";
        setTimeout(() => {
            span.textContent = hexValue;
        }, 2000);
    });
}

// Generate 32 new color elements when the page loads
for (let i = 0; i < 32; i++) {
    addNewColorElement();
}

// Add a click event listener to the refresh button to generate 32 new color elements
refreshButton.addEventListener("click", () => {
    container.innerHTML = "";
    for (let i = 0; i < 32; i++) {
        addNewColorElement();
    }
});

// Add a keydown event listener to the document to refresh the page when the spacebar is pressed
document.addEventListener("keydown", event => {
    if (event.keyCode === 32) {
        event.preventDefault();
        container.innerHTML = "";
        for (let i = 0; i < 32; i++) {
            addNewColorElement();
        }
    }
});
