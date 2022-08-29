const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const result = ingredients.map(ingredient => {
	const liEl = document.createElement("li");

	liEl.textContent = `${ingredient}`;
  liEl.classList.add('item');
  
  return liEl;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...result);




