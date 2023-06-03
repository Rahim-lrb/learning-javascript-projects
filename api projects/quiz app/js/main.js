// 
let countSpan = document.querySelector(".quiz-info .count span")
let bulletsSpanContainer = document.querySelector(".bullets .spans")
let qArea = document.querySelector(".quiz-area")
let answersArea = document.querySelector(".answers-area")
let submit = document.querySelector(".submit-button")
let bullets = document.querySelector(".bullets")
let resultsContainer = document.querySelector(".results")
let countDownSpan = document.querySelector(".countdown")

// set options
let currentIndex = 0
let rightAnswers = 0
let countDownInterval

/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */

function getQuestions() {
    let myRequest = new XMLHttpRequest()

    myRequest.onreadystatechange = function() {

        if (this.readyState === 4 && this.status) {
            // console.log(this.responseText)
            let questionsObj = JSON.parse(this.responseText) // we need it as a js object

            // . create bullets and set qsts count
            let questionsCount = questionsObj.length
            createBullets(questionsCount)
            // . add questions data, it needs one question and the number of it
            addQuestionsData(questionsObj[currentIndex], questionsCount)
            // 
            countDownTimer(5, questionsCount)
            // .click on submit
            submit.onclick = () => {
                // bring the right anwnser 
                let rightAnswer = questionsObj[currentIndex].right_answer
                // increase index
                currentIndex++;
                // check the answer
                checkAnswers(rightAnswer, questionsCount)

                // . remove qsts
                qArea.innerHTML = "";
                answersArea.innerHTML = ""
                // . add new questions
                addQuestionsData(questionsObj[currentIndex], questionsCount)

                // handle bullets class
                handleClassesBullets()

                // . start new count
                clearInterval(countDownInterval)
                countDownTimer(5, questionsCount)
                // . show results
                showResults(questionsCount)
            }        

        }

    }

    myRequest.open("GET", "js/questions.json", true) 
    myRequest.send()
}

getQuestions()


function createBullets(num) { // number of bullets
    countSpan.innerHTML = num

    // create spans 
    for(i = 0; i < num - 1; i++) {
        let span = document.createElement("span")
        if (i === 0) {
            span.className = "on"
        }
        bulletsSpanContainer.append(span)
    }
}



function addQuestionsData(obj, count) { // it accepts answers obj 
    // ! before doing this we should add if 
    if (currentIndex < count) {
        let questionTitle = document.createElement("h2")
        let questionText = document.createTextNode(obj["title"]) // .title or [0]
        questionTitle.appendChild(questionText)
        qArea.append(questionTitle)
    
        // create the answers
        for(let i = 1; i <= 4; i++) {
            let mainDiv = document.createElement("div")
            mainDiv.className = "answer"
            let radioInput = document.createElement("input")
            radioInput.name = "question"
            radioInput.id = `answer_${i}`
            radioInput.type = "radio"
            // radioInput.setAttribute("type", "radio")
            radioInput.dataset.anwser = obj[`answer_${i}`]
    
            // amek first option selected
            if (i == 1) {
                radioInput.checked = true
            }
    
    
            // create label
            let theLabel = document.createElement("label")
            theLabel.htmlFor = `answer_${i}`
            let theLabelText = document.createTextNode(obj[`answer_${i}`])
            // append the main input + label to maindiv
            mainDiv.appendChild(radioInput)
            mainDiv.appendChild(theLabelText)
    
            answersArea.appendChild(mainDiv)
        }
    }


}


function checkAnswers(rAnswer, count) {
    // !
    let answers = document.getElementsByName("question")
    let chosenAnswer

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            chosenAnswer = answers[i].dataset.anwser
        }
    }
    // console.log(rAnswer)
    // console.log(chosenAnswer)
    if (rAnswer == chosenAnswer) {
        rightAnswers++
    }
    // console.log(rightAnswers)
}





function handleClassesBullets() {
    let bulletsSpan = document.querySelectorAll(".bullets .spans span")
    let arrayOfSpans = Array.from(bulletsSpan)
    arrayOfSpans.forEach((span, index) => {
        if (currentIndex == index) {
            span.className = "on"
        }
    })
}


function showResults(qcount) {
    let theResults
    if (currentIndex === qcount) {
        qArea.remove()
        answersArea.remove()
        submit.remove()
        bullets.remove()
        if (rightAnswers > (qcount / 2) && rightAnswers < qcount) {
            theResults = `<span class="good">good</span>${rightAnswers} from ${qcount}` // create element takes time
        } else if (rightAnswers == qcount) {
            theResults = `<span class="perfect">perfect</span> all answers is good`
        } else {
            theResults = `<span class="bad">bad</span>`
        }
        resultsContainer.innerHTML = theResults
        resultsContainer.style.padding = "10px"
        resultsContainer.style.backgroundColor = "white"
        resultsContainer.style.marginTop = "10px"
    }
}


function countDownTimer(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds
        let countDownInterval = setInterval(() => {
            minutes = parseInt(duration / 60)
            seconds = parseInt(duration % 60)

            minutes < 10 ? `0${minutes}` : minutes ;
            countDownSpan.innerHTML = `${minutes}:${seconds}`
            if (--duration < 0) {
                clearInterval(countDownInterval)
                submit.click()
            }
        }, 1000);
    }
}