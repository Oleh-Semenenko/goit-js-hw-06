function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector('.color');
const bodyRef = document.querySelector("body");

btnEl.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = bodyRef.style.backgroundColor;
}