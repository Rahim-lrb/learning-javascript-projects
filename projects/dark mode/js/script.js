const toggleClass = (elements, className) => {
  elements.forEach((el) => el.classList.toggle(className));
};

const btns = document.querySelector(".btns");
const ul = document.querySelector("ul");
btns.addEventListener("click", () => ul.classList.toggle("active"));

const body = document.body;
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const change = document.querySelector(".change");
const btnChanger = document.getElementById("change");

const lis = Array.from(document.querySelectorAll("ul li"));
btnChanger.addEventListener("click", () => {
  toggleClass([body, header, nav, change, btnChanger, btns, ...lis], "black");
  if (body.classList.contains("black")) {
    window.localStorage.setItem("class", "black");
  } else {
    window.localStorage.removeItem("class");
  }
});

const storedClass = window.localStorage.getItem("class");
if (storedClass) {
  toggleClass(
    [body, header, nav, change, btnChanger, btn, ...lis],
    storedClass
  );
  if (storedClass === "black") {
    window.localStorage.setItem("class", "black");
  }
}
