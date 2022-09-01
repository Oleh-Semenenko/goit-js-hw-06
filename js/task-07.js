const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector('#text');

rangeEl.addEventListener("input", onRangeChanged);

function onRangeChanged(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}

