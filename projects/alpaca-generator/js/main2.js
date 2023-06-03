// select all buttons inside the ac div
const acButtons = document.querySelectorAll('.ac button');

// loop through each button and add a click event listener
acButtons.forEach(button => {
  button.addEventListener('click', () => {
    // get the title of the clicked button
    const title = button.getAttribute('title');

    // hide all the divs in part 2
    const part2Divs = document.querySelectorAll('.part2 div');
    part2Divs.forEach(div => {
      div.style.display = 'none';
    });

    // show the div with the corresponding title
    const divToShow = document.querySelector(`.${title}`);
    divToShow.style.display = 'block';

    // add the active class to the clicked button and remove it from the others
    acButtons.forEach(otherButton => {
      if (otherButton === button) {
        button.classList.add('active');
      } else {
        otherButton.classList.remove('active');
      }
    });
  });
});
