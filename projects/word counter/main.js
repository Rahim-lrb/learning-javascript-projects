const textArea = document.querySelector("textarea"),
characterCount = document.getElementById("characterCount"),
wordCount = document.getElementById("wordCount"),
sentenceCount = document.getElementById("sentenceCount"),
paragraphCount = document.getElementById("paragraphCount")


textArea.addEventListener("input", () => {
    let wordsArray = textArea.value.split(" ")
    let charArray = textArea.value.split("").filter((el) => el == ' ' ? "" : el)
    // let sentenceArray = textArea.value.trim().split(".")
    let sentenceArray = textArea.value.trim().split(/[.?!]\s+/);
    // let paragraphArray = textArea.value.trim().split("\n")
    let paragraphArray = textArea.value.trim().split(/\n+/).map((el) => el.trim().replace(/\s+/g, ''));

    console.log(textArea.value.trim())
    
    characterCount.innerHTML = charArray.length
    wordCount.innerHTML = wordsArray.length
    sentenceCount.innerHTML = sentenceArray.length
    paragraphCount.innerHTML = paragraphArray.length
})
