const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    // const increment = 1;
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
        el.textContent = `${value}+`;
        clearInterval(increaseCount);
        return;
        }

        el.textContent = `${initialValue}+`;
    }, 1);
    // console.log(increaseCount);
};

items.forEach((item) => {
    updateCount(item);
});


















// let number = document.querySelectorAll(".number")
// const dataValue = parseInt(number.getAttribute("data-value"));

// let interval = setInterval(() => {
//     let currentValue = parseInt(number.textContent);
//     number.textContent = currentValue + 1;
//     if (number.textContent == dataValue) {
//         clearInterval(interval)
//     }
// }, 0.001);

/*
let currentValue = 0;

function updateNumber() {
  if (currentValue < dataValue) {
    currentValue++;
    number.textContent = currentValue;
    requestAnimationFrame(updateNumber);
  }
}

requestAnimationFrame(updateNumber);


setInterval(() => {
    requestAnimationFrame(updateNumber);
  }, 1);
  */