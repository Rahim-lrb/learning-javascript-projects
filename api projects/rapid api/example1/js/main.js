import { MY_API_KEY } from './config.js'; // you will find it beside settings in apps 

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    console.log(response.content)
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});



// while using a rapid api you should use two headers: 
// api key of your account that is used to authenticate and authorize your access to a particular API 
//  API keys are often used to control access to APIs by tracking who is using the API and how much they are using it

// api host refers to the web address or domain name where the API is hosted,  It's the URL that you use to access the API's endpoints
// In RapidAPI, the API host is often provided as part of the documentation for each API, and you'll need to use it when making API requests to that particular API

// https://rapidapi.com/martin.svoboda/api/quotes15/