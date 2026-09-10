// Selecting Elements
let screen = document.querySelector(".display");
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

let counter = Number(localStorage.getItem("tasbih_counter")) || 0;

// Render counter + trigger pop animation
function render() {
  screen.innerHTML = counter;
  screen.classList.remove("pop");
  void screen.offsetWidth; // force reflow → restarts animation
  screen.classList.add("pop");
}

screen.innerHTML = counter;

add.addEventListener("click", () => {
  counter++;
  localStorage.setItem("tasbih_counter", counter);
  render();
});

minus.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    localStorage.setItem("tasbih_counter", counter);
    render();
  }
});

reset.addEventListener("click", () => {
  counter = 0;
  localStorage.removeItem("tasbih_counter");
  render();
});
