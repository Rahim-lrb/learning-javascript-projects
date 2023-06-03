// ! we ditch the fade when scrolling
let fade = document.querySelector(".fade")

let hasScrolled = false;
window.addEventListener("scroll", () => {
  // fade.classList , we fix the bug
  if(!hasScrolled) {
    fade.style.opacity = "0.5" 
    hasScrolled = true   
  }

})


// ! filters managment 
let filters = document.querySelector(".filters")
let project1 = document.querySelector(".project:nth-child(1)")
console.log(project1)
let project2 = document.querySelector(".project:nth-child(2)")
let project3 = document.querySelector(".project:nth-child(3)")
let project4 = document.querySelector(".project:nth-child(4)")
let project5 = document.querySelector(".project:nth-child(5)")
let project6 = document.querySelector(".project:nth-child(6)")
let htmlEl = document.querySelector("html") 

filters.addEventListener("click", (f) => {
  // remove fade
  fade.style.opacity = 0

  // make clicked button active
  document.querySelector(".filter-btn--active").classList.remove("filter-btn--active")
  console.log(f.target) // ! 
  f.target.classList.add("filter-btn--active")

  // change image opacities
  htmlEl.style.setProperty("--default-property", '0.3')
  htmlEl.style.setProperty("--hover-opacity", '0.4')

  // . reorganized grid
  let filterText = f.target.textContent
  if (filterText === "All") {
    project1.style.opacity = '1'
    project1.style.transform = "scale(1)"
    project2.style.opacity = '1'
    project2.style.transform = "scale(1)"
    project3.style.opacity = '1'
    project3.style.transform = "scale(1)"
    project4.style.opacity = '1'
    project4.style.transform = "scale(1)"
    project5.style.opacity = '1'
    project5.style.transform = "scale(1)"
    project6.style.opacity = '1'
    project6.style.transform = "scale(1)"
  } else if (filterText === "Front end") {
    project1.style.opacity = '0'
    project1.style.transform = "scale(0)"
    project2.style.opacity = '0'
    project2.style.transform = "scale(0)"
    project5.style.opacity = '0'
    project5.style.transform = "scale(0)"
    project6.style.opacity = '0'
    project6.style.transform = "scale(0)"

    project3.style.transform = 'translateX(-650px)';
    project3.style.opacity = '1';
    project4.style.transform = 'translate(325px, -502px)';
    project4.style.opacity = '1';

  } else if (filterText === "Back end") {
    project1.style.opacity = '0';
    project1.style.transform = 'scale(0)';
    project2.style.opacity = '0';
    project2.style.transform = 'scale(0)';
    project3.style.opacity = '0';
    project3.style.transform = 'scale(0)';
    project4.style.opacity = '0';
    project4.style.transform = 'scale(0)';

    project5.style.transform = 'translate(-325px, -359px)';
    project5.style.opacity = '1';
    project6.style.transform = 'translate(-325px, -501px)';
    project6.style.opacity = '1';
  } else if (filterText === "Full stack") {
    project3.style.opacity = '0';
    project3.style.transform = 'scale(0)';
    project4.style.opacity = '0';
    project4.style.transform = 'scale(0)';
    project5.style.opacity = '0';
    project5.style.transform = 'scale(0)';
    project6.style.opacity = '0';
    project6.style.transform = 'scale(0)';

    project1.style.opacity = '1';
    project1.style.transform = 'scale(1)';
    project2.style.opacity = '1';
    project2.style.transform = 'scale(1)';
  }
})

