const refs = {
	decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener("click", onDecBtnClick);
refs.incrementBtn.addEventListener("click", onIncrBtnClick);

let counterValue = 0;

function updateCounter(value) {
	refs.counter.innerHTML = value;
};

function onDecBtnClick() {
    updateCounter(--counterValue);
};

function onIncrBtnClick() {
    updateCounter(++counterValue);
};


