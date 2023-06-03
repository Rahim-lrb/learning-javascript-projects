// array of words 
let array = ["hello", "github", "twitter", "walking", "whatsapp", "frontend", "backend",
"going", "stopping", "waving", "trascending", "whinning", "sighing", ]

// setting levels
let levels = {
    "easy": 5,
    "meduim": 3,
    "hard": 2
}

let defaultLevel = "meduim"
let defaultLevelSeconds = levels[defaultLevel]

// catch selectors
const start = document.querySelector(".start"),
levelNameSpan = document.querySelector(".message .lvl"),
secondsSpan = document.querySelector(".message .seconds"),
theWord = document.querySelector(".word"),
upComingWords = document.querySelector(".upcoming-words"),
input = document.querySelector("input"),
timeLeftSpan = document.querySelector(".time span"),
scoreGot = document.querySelector(".score .got"),
scoreTotal = document.querySelector(".score .total"),
finishMessage = document.querySelector(".finish")

// setting level name + seconds + score
levelNameSpan.innerHTML = defaultLevel
secondsSpan.innerHTML = defaultLevelSeconds
timeLeftSpan.innerHTML = defaultLevelSeconds
scoreTotal.innerHTML = array.length

// disbale paste event
input.onpaste = _ => false

// start game
start.addEventListener("click", function (event) {
    this.remove()
    input.focus()
    // generate words function
    generateWords()
})

function generateWords() {
    let randomWord = array[Math.floor(Math.random() * array.length)]
    // get word index
    let wordIndex = array.indexOf(randomWord)
    console.log(wordIndex)
    // remove word from array
    array.splice(wordIndex, 1)
    // show the random word
    theWord.innerHTML = randomWord
    // empty upcoming words
    upComingWords.innerHTML = ""
    // generateUpcomingWords
    for (i = 0; i < array.length ; i++) {
        div = document.createElement("div")
        text = document.createTextNode(array[i])
        div.appendChild(text)
        upComingWords.appendChild(div)
    }
    // call start play function
    startPlay()
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--
        if (timeLeftSpan.innerHTML == "0") {
            clearInterval(start)
            // . compare words
            if (theWord.innerHTML.toLocaleLowerCase() == input.value.toLocaleLowerCase()) {
                console.log("true")
                // empty input field
                input.value = ""
                scoreGot.innerHTML++
                if (array.length > 0) {
                    generateWords()
                } else {
                    let span = document.createElement("span")
                    span.className = "good"
                    text = document.createTextNode("congrats")
                    span.appendChild(text)
                    finishMessage.appendChild(span)
                    upComingWords.remove()
                }
            } else {
                let span = document.createElement("span")
                span.className = "bad"
                spanText = document.createTextNode("game over")
                span.appendChild(spanText)
                finishMessage.append(span)
            }
        }
    }, 1000);
}
