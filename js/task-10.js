function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    amountEl: document.querySelector('#controls input'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
}


refs.createBtn.addEventListener("click", getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);


function getAmount() {
    let amount =+ refs.amountEl.value;
    createBoxes(amount);
}


function createBoxes(amount) {
    const collection = [];
    for (let i = 0; i < amount; i += 1) {
        const divEl = document.createElement('div');
        divEl.style.width = `${30 + 10 * i}px`;
        divEl.style.height = `${30 + 10 * i}px`;
        divEl.style.backgroundColor = `${getRandomHexColor()}`;
        console.log(divEl);
        collection.push(divEl);
            
    }
    refs.boxes.append(...collection);
}


function destroyBoxes() {
    refs.boxes.innerHTML = '';
}



// -------------------------------------------------------------

// const colorPalette = document.querySelector(".color-palette");
// // const output = document.querySelector(".output");
// const inputRef = document.querySelector("input");
// const btnCreate = document.querySelector(".create");
// btnCreate.addEventListener("click", createPaletteItems);
// // This is where delegation «magic» happens

// // Some helper functions to render palette items
// // createPaletteItems();

// function createPaletteItems() {
// 	const items = [];
// 	for (let i = 0; i < inputRef.value; i++) {
// 		const color = getRangomColor();
// 		const item = document.createElement("button");
// 		item.type = "button";
// 		item.dataset.color = color;
// 		item.style.backgroundColor = color;
// 		item.classList.add("item");
// 		item.style.width = `${i * 10 + 30}px`;
// 		item.style.height = `${i * 10 + 30}px`;
// 		items.push(item);
// 	}
// 	colorPalette.append(...items);
// }


// var render = document.querySelector('[data-action="render"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
// 	var amount = +document.querySelector("#controls input").value;
// 	createBoxes(amount);
// }

// function createBoxes(amount) {
// 	var basicSize = 30;
// 	var fragment = document.createDocumentFragment();
// 	for (var i = 0; i < amount; i++) {
// 		var size = basicSize + i * 10;
// 		var div = document.createElement("div");
// 		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
// 		fragment.appendChild(div);
// 	}
// 	boxes.appendChild(fragment);
// }

// function destroyBoxes() {
// 	boxes.innerHTML = "";
// }

// function random() {
// 	return Math.floor(Math.random() * 256);
// }