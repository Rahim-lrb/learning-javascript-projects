setInterval(setClock, 1000);

let hourHand = document.querySelector("[data-hour-hand]")
let minuteHand = document.querySelector("[data-minute-hand]")
let secondHand = document.querySelector("[data-second-hand]")

function setClock() {
    const curr = new Date()

    const secondsRatio = curr.getSeconds() / 60
    const minutesRatio = (secondsRatio + curr.getMinutes()) / 60
    const hoursRatio = (minutesRatio + curr.getHours()) / 12

    /*
        the current time is 3:30:45 PM.
        curr.getSeconds() => would return 45
        curr.getSeconds() / 60 would return 0.75, since 45 seconds is 0.75 minutes.
        secondsRatio is now 0.75, which represents the ratio of elapsed seconds in the current minute.

        curr.getHours() would return 15, since the current hour value is 3 PM (which is represented as 15 in 24-hour format).
        minutesRatio + curr.getHours() would be 0.5125 + 15, which equals 15.5125.
        (minutesRatio + curr.getHours()) / 12 would return 1.2927083333, since 15.5125 hours is 1.2927083333 12-hour periods.
        hoursRatio is now 1.2927083333, which represents the ratio of elapsed hours in the current day.
    */
    console.log(secondsRatio)
    console.log(minutesRatio)
    console.log(hoursRatio)

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()