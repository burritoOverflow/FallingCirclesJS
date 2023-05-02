const colors = ["red", "green", "blue", "purple", "orange"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("click", function (event) {
  const x = event.pageX;
  const y = event.pageY;

  const el = document.createElement("span");
  el.style.position = "absolute";
  el.style.top = `${y}px`;
  el.style.left = `${x}px`;
  el.style.backgroundColor = getRandomColor();
  el.style.height = "25px";
  el.style.width = "25px";
  el.style.borderRadius = "50%";

  const body = document.body;
  body.appendChild(el);

  setInterval(() => {
    let currYval = parseInt(el.style.top.replace("px", ""), 10);
    el.style.top = `${(currYval += 10)}px`;
  }, 54);
});
