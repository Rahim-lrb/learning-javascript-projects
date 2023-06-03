/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    // . following effect
    // blob.style.top = `${clientY}px`
    // blob.style.left = `${clientX}px`

    // . to make it take some time to reach the cursor
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}



// ! text effect
document.querySelector("h1").onmouseover = event => {
    event.target.innerText = Math.floor(Math.random() * 26) // number between 0 and 26 and exact 
    // . letter would be cooler
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

}



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}