var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('button');
var firstSlide = slides[0];
var lastSlide = slides[slides.length - 1];

// ! add to the parent element the last slide before the first slide so 5 1 2 3 4
firstSlide.parentNode.insertBefore(lastSlide, firstSlide);

// ! loop over the buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    slides = document.querySelectorAll('.slide'); // the new sliders
    // Register button
    var button = this;
    // Register active slide
    var activeSlide = document.querySelector('.active');
    
    // Next function
    if (button.id == 'next') {
      // Move first slide to the end so the user can keep going forward
      var firstSlide = slides[0];
      var lastSlide = slides[slides.length - 1];
      lastSlide.parentNode.insertBefore(firstSlide, lastSlide.nextSibling);
      // Move active class to the right
      activeSlide.classList.remove('active');
      var nextSlide = activeSlide.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.add('active');
      } else {
        slides[0].classList.add('active');
      }
    }
    
    // Previous function
    if (button.id == 'previous') {
      // Move the last slide before the first so the user can keep going backwards
      var firstSlide = slides[0];
      var lastSlide = slides[slides.length - 1];
      firstSlide.parentNode.insertBefore(lastSlide, firstSlide);
      // Move active class to the left
      activeSlide.classList.remove('active');
      var prevSlide = activeSlide.previousElementSibling;
      if (prevSlide) {
        prevSlide.classList.add('active');
      } else {
        slides[slides.length - 1].classList.add('active');
      }
    }
  });
}




// // Keyboard navigation
// document.addEventListener('keydown', function(event) {
//   // Get all the slides
//   slides = document.querySelectorAll('.slide');
//   // Register active slide
//   var activeSlide = document.querySelector('.active');
//   // Get key code
//   var keyCode = event.keyCode;
  
//   // Right arrow key
//   if (keyCode == 39) {
//     // Move first slide to the end so the user can keep going forward
//     var firstSlide = slides[0];
//     var lastSlide = slides[slides.length - 1];
//     lastSlide.parentNode.insertBefore(firstSlide, lastSlide.nextSibling);
//     // Move active class to the right
//     activeSlide.classList.remove('active');
//     var nextSlide = activeSlide.nextElementSibling;
//     if (nextSlide) {
//       nextSlide.classList.add('active');
//     } else {
//       slides[0].classList.add('active');
//     }
//   }
  
//   // Left arrow key
//   if (keyCode == 37) {
//     // Move the last slide before the first so the user can keep going backwards
//     var firstSlide = slides[0];
//     var lastSlide = slides[slides.length - 1];
//     firstSlide.parentNode.insertBefore(lastSlide, firstSlide);
//     // Move active class to the left
//     activeSlide.classList.remove('active');
//     var prevSlide = activeSlide.previousElementSibling;
//     if (prevSlide) {
//       prevSlide.classList.add('active');
//     } else {
//       slides[slides.length - 1].classList.add('active');
//     }
//   }
// });
