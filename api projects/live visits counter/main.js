// create a new key first
// https://api.countapi.xyz/create?namespace=codingjump.com&enable_reset=1
function websiteVisits(response) {
    console.log("'ggdgd")
    document.querySelector("#visits").textContent = response.value;
}



/*
1.) SET UP YOUR HTML, CSS, & JavaScript

<h1>This site has been visited <span id="visits"></span> times.</h1>

2.) CREATE A NAMESPACE

https://api.countapi.xyz/create?namespace={name of your website}&enable_reset=1


3.) ADD THIS SCRIPT IN THE TOP OF YOUR INDEX.HTML FILE

<script async src="https://api.countapi.xyz/hit/{namespace}/{key}?callback=websiteVisits"></script>


4.) ADD THIS FUNCTION IN YOUR SCRIPT.JS FILE 

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}


BONUS 

5.) RESET THE VALUE OF YOUR KEY

https://api.countapi.xyz/set/{namespace}/{key}?value={whatever you want, most likely 0}


6.) VIEW THE CURRENT VALUE OF YOUR KEY

https://api.countapi.xyz/get/{namespace}/{key}

*/




// https://api.countapi.xyz/create?namespace=foxxyyguy.com&key=senpai&value=42
// https://api.countapi.xyz/get/foxxguy.com/senpai
// https://api.countapi.xyz/update/foxxguy.com/senpai/?amount=1
countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/foxxguy.com/senpai/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    })
}
