// ? aladhan 
/*
axios.get('http://api.aladhan.com/v1/timingsByCity/:date', {
  params: {
    country: "SA",
    city: "Makkah al Mukarramah", // better than http://api.aladhan.com/v1/timingsByCity/:date?country=SA&city=Makkah al Mukarramah
  }
})
.then(function (response) {
  let data = response.data.data
  // console.log(response)
  // console.log(data);
    let timings = response.data.data.timings
    console.log(timings)
    // document.getElementById("time1").innerHTML = timings.Fajr
    // document.getElementById("time2").innerHTML = timings.Sunrise
    // document.getElementById("time3").innerHTML = timings.Dhuhr
    // document.getElementById("time4").innerHTML = timings.Asr
    // document.getElementById("time5").innerHTML = timings.Maghrib
    // document.getElementById("time6").innerHTML = timings.Isha
    function fillTimePerPrayer(id, time) {
      document.getElementById(id).innerHTML = time
    }
    fillTimePerPrayer("time1", timings.Fajr)
    fillTimePerPrayer("time2", timings.Sunrise)
    fillTimePerPrayer("time3", timings.Dhuhr)
    fillTimePerPrayer("time4", timings.Asr)
    fillTimePerPrayer("time5", timings.Maghrib)
    fillTimePerPrayer("time6", timings.Isha)
    // . date
    const date = response.data.data.date.readable
    const weekday = response.data.data.date.hijri.weekday.ar
    console.log(date)
    console.log(weekday)
    console.log(date + " " + weekday)
    document.getElementById("date").innerHTML = weekday + " " + date
})
*/


// let cities = ["الرياض", "الشرقية", "نجران"]
// ! 2nd way
let cities = [{
    arabicName: "الرياض",
    name: "Ar Riyāḑ",
  },{
    arabicName: "الشرقية", // iso codes 
    name: "Ash Sharqīyah",
  }, {
    arabicName: "نجران",
    name: "Najrān",
  }]
  for (city of cities) {
    content = `<option>${city.arabicName}</option>`
    document.getElementById("select").innerHTML += content
  }
  
  
  // for (city of cities) {
  //     content = `<option>${city}</option>`
  //     document.getElementById("select").innerHTML += content
  // }
  
  document.getElementById("select").addEventListener("change", function() {
      // console.log(document.getElementById("select").value)
      console.log(this.value)
      // . are we going to make if statement for each city to make a request no we put the request in function
      // ! this is not the best way, in case we delete a city from the array we should delete if statement too
      // if (this.value == "الرياض") {
      //   getPrayerTimeByCity("Ar Riyāḑ")
      // } else if (this.value == "الشرقية") {
      //   getPrayerTimeByCity("Ash Sharqīyah")
      // } else if (this.value == "نجران") {
      //   getPrayerTimeByCity("Najrān")
      // }
      for (city of cities) {
        if (city.arabicName == this.value) {
          getPrayerTimeByCity(city.name)
        }
      }
  })
  
  function getPrayerTimeByCity(cityName) {
    axios.get('http://api.aladhan.com/v1/timingsByCity/:date', {
      params: {
        country: "SA",
        city: cityName, // better than http://api.aladhan.com/v1/timingsByCity/:date?country=SA&city=Makkah al Mukarramah
      }
    })
    .then(function (response) {
      let data = response.data.data
      // console.log(response)
      // console.log(data);
        let timings = response.data.data.timings
        console.log(timings)
        // document.getElementById("time1").innerHTML = timings.Fajr
        // document.getElementById("time2").innerHTML = timings.Sunrise
        // document.getElementById("time3").innerHTML = timings.Dhuhr
        // document.getElementById("time4").innerHTML = timings.Asr
        // document.getElementById("time5").innerHTML = timings.Maghrib
        // document.getElementById("time6").innerHTML = timings.Isha
        function fillTimePerPrayer(id, time) {
          document.getElementById(id).innerHTML = time
        }
        fillTimePerPrayer("time1", timings.Fajr)
        fillTimePerPrayer("time2", timings.Sunrise)
        fillTimePerPrayer("time3", timings.Dhuhr)
        fillTimePerPrayer("time4", timings.Asr)
        fillTimePerPrayer("time5", timings.Maghrib)
        fillTimePerPrayer("time6", timings.Isha)
        // . date
        const date = response.data.data.date.readable
        const weekday = response.data.data.date.hijri.weekday.ar
        console.log(date)
        console.log(weekday)
        console.log(date + " " + weekday)
        document.getElementById("date").innerHTML = weekday + " " + date
    })
  }
  
  getPrayerTimeByCity("Ar Riyāḑ")