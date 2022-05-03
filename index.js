const a = document.querySelector("#input-a");
const b = document.querySelector("#input-b");
const plusForm = document.querySelector("#plus-form");

plusForm.addEventListener("submit", plus);

function plus(event) {
  event.preventDefault();
  console.log(Number(a.value) + Number(b.value));
}

// const input_first = document.querySelector("#input-first")

// function showInput() {
//     console.log(this.value)
// }

// input_first.addEventListener('change', showInput)
