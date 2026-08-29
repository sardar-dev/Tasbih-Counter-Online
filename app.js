// Selecting Elements

let screen = document.querySelector(".display");
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

let counter = "";

// plus button
add.addEventListener("click", () => {
  screen.innerHTML = counter++;
  screen.innerHTML = counter;
});

// minus button
minus.addEventListener("click", () => {
  if (counter <= 0) {
    screen.innerHTML = "0";
  } else {
    screen.innerHTML = counter--;
  }
  screen.innerHTML = counter;
});

// reset button
reset.addEventListener("click", () => {
  screen.innerHTML = "0";
  counter = "0";
});
