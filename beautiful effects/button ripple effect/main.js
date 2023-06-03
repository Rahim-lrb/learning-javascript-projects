const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	button.addEventListener('click', function(e) {
        // . position of the click in window
		let x = e.clientX;
		let y = e.clientY;
        // console.log(x, y + "x and y")
        // . the position of the button itself (doesnt change)
		let buttonTop = e.target.offsetTop;
		let buttonLeft = e.target.offsetLeft;
        console.log(buttonTop + "buttontop")
        console.log(buttonLeft + "buttonleft")
        // . position inside the button = position in window - position without button
		let xInside = x - buttonLeft;
		let yInside = y - buttonTop;

		let circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';

        this.appendChild(circle);
        setTimeout(() => {
            circle.remove();
        }, 500);
	});
});
