const btn = document.getElementById("btn");

// Changed button size
btn.addEventListener("mouseover", (event) => {
  event.target.style.scale = "1.5";
});

btn.addEventListener("mouseout", (event) => {
  event.target.style.scale = "";
});

// Changed color
const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "#fbff00";

  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 3700);
});

// Moving ball
const btnBall = document.getElementById("btnBall");
const ball = document.getElementById("ball");
let counter = 0;

btnBall.addEventListener("click", () => {
  if (counter === 0) {
    ball.setAttribute("style", "margin-left: 92%");
    counter++;
  } else {
    ball.setAttribute("style", "margin-left: 0.5%");
    counter--;
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    ball.setAttribute("style", "margin-left: 92%");
    counter++;
  } else if (event.key === "ArrowLeft") {
    ball.setAttribute("style", "margin-left: 0.5%");
    counter--;
  }
});
