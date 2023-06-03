let day = document.querySelector('.days')
let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')


let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime()
// getDate get u the m seconds from 1970 to that date
console.log(countDownDate)

let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    // . the dfrnc between time now and the event in m seconds
    let dfrnc = countDownDate - dateNow
    
    // . get time units / math to round it
    let days = Math.floor(dfrnc / 1000 / 60 / 60 / 24);
    console.log(days) // 294 days 

    // let hours = Math.floor(dfrnc / (1000 * 60 * 60)); this get u hours from now to then
    /*
    dfrnc / (1000 * 60 * 60) = 10512000000 / (1000 * 60 * 60) = 292 days 
    dfrnc % (1000 * 60 * 60) = 10512000000 % (1000 * 60 * 60) = 0
    Since there are no remaining milliseconds after we have accounted for all the full hours
    */ 
    let ms = Math.floor(dfrnc % (1000 * 60 * 60));
    console.log(ms) // ms till the day is done
    let hours = Math.floor((dfrnc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dfrnc % (1000 * 60 * 60)) / (1000 * 60)); // minute till the hour is done
    let seconds = Math.floor((dfrnc % (1000 * 60)) / 1000);

    // day.innerHTML = days if u want 2 numb
    day.innerHTML = days < 10 ? `0${days}` : days;
    hour.innerHTML = hours < 10 ? `0${hours}` : hours
    minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    second.innerHTML = seconds < 10 ? `0${seconds}` : seconds

    if (dfrnc < 0) {
        clearInterval(counter);
    }
}, 1000);


// !
/* (function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
            }
            //seconds
        }, 0)
  }()); */