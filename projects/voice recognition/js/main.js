
const searchForm = document.querySelector("#search-form");
const searchInput = searchForm.querySelector("input");
const voiceIcon = document.querySelector(".voice");

let recognition;

// ! we first check if the window object got the speechrecongnition object 
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    // . this new webkit class creates a few instances that we can use 
    recognition.continuous = true; // false will stop automatically after the user stops speaking.
    recognition.interimResults = false; // the API will only return final results
    recognition.lang = 'en-US';



    // . when we click it starts and when we click again it stops
    voiceIcon.addEventListener("click", voiceIcon2);
    function voiceIcon2() {
        if(voiceIcon.classList.contains("start")) { // Start Voice Recognition
            recognition.start(); // First time you have to allow access to mic!
            voiceIcon.classList.remove("start")
        }
        else {
            recognition.stop();
            voiceIcon.classList.add("start")
        }
    }

    recognition.addEventListener("start", startSpeechRecognition);
    function startSpeechRecognition() {
        voiceIcon.classList.add("run");
        searchForm.focus();
    }

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
        voiceIcon.classList.remove("run");
        searchInput.focus();
    }

    // . result
    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition(event) {
        // event.results => array of speech recognition objects, 0 the first SpeechRecognitionResult object in the array,
        // the 2nd for the first SpeechRecognitionAlternative object in that SpeechRecognitionResult
        // .transcript retrieves the recognized text from
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        // searchForm.submit();
    }

} else {
    info.textContent = "Your Browser does not support Speech Recognition";
}

