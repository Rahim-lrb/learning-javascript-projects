// https://www.youtube.com/watch?v=Mu8oyUe5i6A&t=2577s
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("mapContainer"), {
    center: { lat: 28.033886, lng: 1.659626 },
    zoom: 6,
    disableDefaultUI: true
  });
  
}
window.initMap = initMap;



// ! we need 2 apis (hotels and geo set) on rapid api
// ! geo cities to get the countries (since it's slow put it in async await)
const API_Key = 'a67a8e1ee8msh5604b5419645e06p14cfd3jsn6f9497feaf45';
// (async function getCountries() {
//   const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10&offset=40';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'a67a8e1ee8msh5604b5419645e06p14cfd3jsn6f9497feaf45',
//       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json(); // don't want it text
//     console.log(result.data);
//   } catch (error) {
//     console.error(error);
//   }
// }) () // calling itself , you can take try and catch off tho
async function getCountries() {
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10&offset=40';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_Key,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // don't want it text
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
// getCountries()


// ! hotels
const fetchHotels = async (country) => {
  const url = `https://hotels4.p.rapidapi.com/locations/v3/search?q=${country}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_Key,
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result.sr[9].coordinates);
  result.sr.map((hotel) => {
    const lat = parseFloat(hotel.coordinates.lat)
    const lng = parseFloat(hotel.coordinates.long)
    const position = {lat, lng}
    new google.maps.Marker({
      position: position,
      label: "1",
      // const
    })
  })

  new google.maps.Marker({
    position: {lat: 28.033886, lng: 1.659626},
    label: "1",
    // const
  })
}





async function loadCountries() {
  const countries = await getCountries(); // we stock the countries here
  const countriesLIst = document.querySelector("#languages_list")
  const countriesInput = document.querySelector("#languages_input")
  // console.log(countries) // we should do async since the api is slow
  for(let i = 0; i < countries.length; i++ ) {
    // console.log(countries[i])
    // console.log(countries[i].name)
    countriesLIst.innerHTML += `
      <li data-country="${countries[i].name}">${countries[i].name}</li>
    `
    countriesLIst.style.display = "none";
    countriesInput.addEventListener("click", function() {
      countriesLIst.style.display = "block";
    })

    console.log(countriesLIst.children) // it s not an array it s a collection
    const All_countries = Array.from(countriesLIst.children)
    All_countries.map((country) => {
      country.addEventListener("click", (e) => {
        const selectedCountry = e.target.dataset.country;
        console.log(selectedCountry);
        countriesInput.value = selectedCountry;
        fetchHotels(selectedCountry)
        countriesLIst.style.display = "none";
      })
    })
  }
}
loadCountries();