let screen = document.querySelector(".display");
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

let counter = "0";

add.addEventListener("click", () => {
  screen.innerHTML = counter++;
  screen.innerHTML = counter;
});

minus.addEventListener("click", () => {
  screen.innerHTML = counter--;
  screen.innerHTML = counter;
});

reset.addEventListener("click", () => {
  screen.innerHTML = "0️⃣";
  counter = "0";
});
