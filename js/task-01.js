const listEl = document.querySelector("#categories");

const itemsQuantity = listEl.children.length;
console.log(`Number of categories: ${itemsQuantity}`);


const titleEl = listEl.children;

for (let i = 0; i < titleEl.length; i += 1) {
    const itemEl = titleEl[i];
    console.log(`Category: ${itemEl.firstElementChild.textContent}`);

    const name = itemEl.lastElementChild.children;
    console.log(`Elements: ${name.length}`);
}

