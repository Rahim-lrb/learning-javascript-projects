/*
fetch("https://kitsu.io/api/edge/anime?page[limit]=20")
.then((result) =>{
    let myData = result.json() 
    console.log(myData); 
    return myData;
})
.then(data => {
    const animeNames = data.data.map(anime => anime.attributes.titles.en);
    console.log(animeNames);

    currIndex = 0
    const rate = data.data.map(anime => anime.attributes.averageRating);
    const images = data.data.map(anime => anime.attributes.posterImage.tiny);
    const ageRating = data.data.map(anime => anime.attributes.ageRatingGuide);
    const count = data.data.map(anime => anime.attributes.episodeCount);
    const status = data.data.map(anime => anime.attributes.status);
    const desc = data.data.map(anime => anime.attributes.description);

    document.querySelector(".desc").innerHTML = animeNames[currIndex]
    document.querySelector(".img").innerHTML = images[currIndex]
    document.querySelector(".rating").innerHTML = rate[currIndex]
    document.querySelector(".age-rate").innerHTML = ageRating[currIndex]
    document.querySelector(".count").innerHTML = count[currIndex]
    document.querySelector(".status").innerHTML = status[currIndex]

    document.querySelector(".generate").addEventListener("click", function() {
        currIndex += 1
        document.querySelector(".title").innerHTML = animeNames[currIndex]
        document.querySelector(".img").src = images[currIndex]
        document.querySelector(".rating").innerHTML = rate[currIndex]
        document.querySelector(".age-rate").innerHTML = ageRating[currIndex]
        document.querySelector(".count").innerHTML = count[currIndex]
        document.querySelector(".status").innerHTML = status[currIndex]
        document.querySelector(".desc").innerHTML = desc[currIndex]
    })

    document.querySelector(".read").addEventListener("click", function() {
        if (document.querySelector(".desc").style.display == "block") {
            document.querySelector(".desc").style.display = "none";
        } else if (document.querySelector(".desc").style.display == "none")
        document.querySelector(".desc").style.display = "block";
    })
})
*/

// ! what if 
const AnimeTitle = document.querySelector(".title");
const image = document.querySelector(".img");
const animeRating = document.querySelector(".rating");
const animeType = document.querySelector(".age-rate");
const animeStory = document.querySelector(".desc");
const animeEpisode = document.querySelector(".count");
const animeStatus = document.querySelector(".status");
const btn = document.querySelector(".generate");

let offset = 0;
let count = 0;

async function fetchAnimeData(offset) {
    const response = await fetch( // we use wait to pause the execution 
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`
    );
    const data = await response.json(); // to wait for the data
    return data;
}
// . we fetched the first page

async function fetchRandomAnimeData() {
    const limit = 20;
    const data = await fetchAnimeData(offset); // it awaits for the data of the first page
    // console.log(data) // array of data
    // console.log(data.data[0])
    
    AnimeTitle.innerText = data.data[count].attributes.canonicalTitle;
    image.src = data.data[count].attributes.posterImage.original;
    animeRating.innerText = data.data[count].attributes.averageRating + "%";
    animeType.innerText = data.data[count].attributes.ageRatingGuide;
    animeStory.innerText = data.data[count].attributes.description;
    animeEpisode.innerText = data.data[count].attributes.episodeCount;
    animeStatus.innerText = data.data[count].attributes.status;
    console.log(data.data[count].attributes.canonicalTitle)
    
    count++;
    offset++;


    if (count == limit) { // when count 20 = limit 20
        console.log("page done")
        count = 0;
        offset++; // like this we draw another page 
        if (offset >= 100) {
        offset = 0;
        }
    }
}

btn.addEventListener("click", fetchRandomAnimeData);