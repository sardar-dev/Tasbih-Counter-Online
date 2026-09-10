// Selecting Elements
let screen = document.querySelector(".display");
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

// Initialize counter from localStorage
let counter = Number(localStorage.getItem("tasbih_counter")) || 0;
screen.innerHTML = counter;

// Function to trigger the pulse animation on the counter
function pulseScreen() {
  screen.classList.remove("pulse");
  void screen.offsetWidth; // Trigger reflow to restart animation
  screen.classList.add("pulse");
}

// Plus button
add.addEventListener("click", () => {
  counter++;
  localStorage.setItem("tasbih_counter", counter);
  screen.innerHTML = counter;
});

// Minus button
minus.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    localStorage.setItem("tasbih_counter", counter);
    screen.innerHTML = counter;
  }
});

// Reset button
reset.addEventListener("click", () => {
  counter = 0;
  localStorage.removeItem("tasbih_counter");
  screen.innerHTML = "0";
});

// ==========================================
// ANIMATIONS (Ripple & Pulse)
// ==========================================

// 1. Add pulse animation to screen whenever counter changes
[add, minus, reset].forEach((btn) => {
  btn.addEventListener("click", pulseScreen, true); 
  // 'true' captures the event in the early phase so it fires instantly
});

// 2. Ripple effect on all buttons
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    
    // Calculate click position for the ripple
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    
    this.appendChild(ripple);
    
    // Remove ripple element after animation finishes
    setTimeout(() => ripple.remove(), 600);
  });
});
