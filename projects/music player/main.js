const music = document.querySelector('.music-element');
const playBtn = document.querySelector('.playing');
const seekbar = document.querySelector('.seekbar');
const currentTimePut = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const volumeSlider = document.querySelector('.volumeUI');

const repeat = document.querySelector('.repeat');
const volumeBtn = document.querySelector('.volume');
const fav = document.querySelector('.active');

volumeSlider.value = music.volume * 100



document.querySelector(".btn").onclick = function (event) {
    if (event.target.classList.contains("play")) {
        event.target.classList.remove("play")
        event.target.classList.add("pause")
        music.play()
        event.target.textContent = `pause`
    } else {
        event.target.classList.remove("pause")
        event.target.classList.add("play")
        music.pause()
        event.target.textContent = `play_arrow`
    }
}




music.addEventListener('loadedmetadata', () => {
    const durationTime = Math.floor(music.duration);
    const minutes = Math.floor(durationTime / 60);
    const seconds = durationTime % 60;

    duration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    setInterval(() => {
        const current = Math.floor(music.currentTime);
        const minutes2 = Math.floor(current / 60);
        const seconds2 = current % 60;
        currentTimePut.textContent = `${minutes2}:${seconds2 < 10 ? '0' : ''}${seconds2}`;
    }, 1000);

    
});

// !  Event when you interact with the seekbar
seekbar.addEventListener('input', () => {
    music.currentTime = (seekbar.value / 100) * music.duration;
});

// ! Update the position of the seekbar
function handleSeekBar() {
    setTimeout(() => {
        seekbar.value = (music.currentTime / music.duration) * 100;
        handleSeekBar();
    }, 1000);
}

handleSeekBar();




// ! Volume control
volumeSlider.addEventListener('input', () => {
    console.log(volumeSlider)
    music.volume = volumeSlider.value / 100;
});


volumeBtn.onclick = () => {
    if (volumeSlider.classList.contains("exist")) {
        volumeSlider.style.display = "none"
        volumeSlider.classList.toggle('exist')
    } else {
        volumeSlider.style.display = "block"
        volumeSlider.classList.toggle('exist')
    }
}

repeat.onclick = () => {
    music.currentTime = 0
    console.log(repeat)
}





// ! change the song

const forw = document.querySelector(".forward")
const back = document.querySelector(".backward")



let srcArray = [
    "images/Indila - Love Story - Nightcore.mp3",
    "images/Nightcore - Love Story (lyrics).mp3",
    "images/Nightcore - Rockabye.mp3",
    "images/Nightcore - Rumors.mp3",
    "images/「Nightcore」 Dandelions - Ruth B. ♡ (Lyrics).mp3",
]


let currentIndex = 0;
music.src = srcArray[currentIndex];


function setSong() {
    music.src = srcArray[currentIndex];
    music.currentTime = 0
    music.play()
}


forw.onclick = () => { 
    currentIndex += 1;
    if (currentIndex === srcArray.length) {
        currentIndex = 0;
    }
    setSong();
    console.log(currentIndex)
};   

back.onclick = () => { 
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = srcArray.length - 1;
    }
    setSong();
};
