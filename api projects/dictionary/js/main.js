// https://dictionaryapi.dev/ the api
var textArea = document.querySelector('input[type="text"]');
let word = document.querySelector("ul .word .details p")
let kind = document.querySelector(".word .details span")

let meaning = document.querySelector(".meaning .details span")
let example = document.querySelector(".example .details span")
let synonyms = document.querySelector(".synonyms .details .list")
let audio

textArea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        word.textContent = textArea.value
        getInfo(textArea.value)
        textArea.value = ""
    }
});


function getInfo(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((result) =>{
        console.log(result);
        return result.json();
    }).then(
        (data) => {
            const info = data[0];
            console.log(info.phonetics[1].text); // phone
            console.log(info.meanings[0].partOfSpeech); // kind
            console.log(info.meanings[0].definitions[0].definition); // definintion
            console.log(info.meanings[0].definitions[0].example); // example
            console.log(info.meanings[0].definitions[0].synonyms); // synonym
            console.log(info.phonetics[1].audio); // music

            // . usage
            console.log(info.phonetics[0].audio);
            audio = new Audio(info.phonetics[0].audio);
            console.log("gghfghfh");
            kind.textContent = `${info.meanings[0].partOfSpeech} ${info.phonetics[1].text}`;
            example.textContent = info.meanings[0].definitions[0].example;
            meaning.textContent = info.meanings[0].definitions[0].definition;
            for (let i = 0; i < 3; i++) {
                let he = `
                    <span>${info.meanings[0].definitions[0].synonyms[i]}</span>
                `;
                synonyms.innerHTML += he;
            }
            document.querySelector("ul").style.display = "block";
        
        }
    ).catch((error) =>{
        infoText.textContent = `Can't find the meaning of ${word} . Please, try to search for another word.`;
        infoText.style.display = "block";
        infoText.style.color = "red";
    });
}




// . volume 
const playButton = document.querySelector("ul .word i");
playButton.addEventListener("click", function() {
    audio.play();
    playButton.style.color = "#4D59FB"
    setTimeout(() => {
        playButton.style.color = "#aaa"
    }, 1000);
});


// . remove icons 
removeIcon = document.querySelector(".search span");
removeIcon.addEventListener("click", ()=>{
    textArea.value = "";
    textArea.focus();
    wrapper.classList.remove("active");
    infoText.style.color = "#9A9A9A";
    infoText.innerHTML = "Type any existing word and press enter to get meaning, example, synonyms, etc.";
});







