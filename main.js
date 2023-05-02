const colors = ["red", "green", "blue", "purple", "orange"];

function isElementOutOfViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom < 0 ||
    rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.top > window.innerHeight
  );
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("click", function (event) {
  const x = event.pageX;
  const y = event.pageY;

  const el = document.createElement("span");
  el.classList.add("span-circle");

  // st the coords to the click location
  el.style.top = `${y}px`;
  el.style.left = `${x}px`;
  el.style.backgroundColor = getRandomColor();

  const body = document.body;
  body.appendChild(el);

  const intervalId = setInterval(() => {
    // move the circles "down" the document
    let currYval = parseInt(el.style.top.replace("px", ""), 10);
    el.style.top = `${(currYval += 10)}px`;

    // remove the element, and clear the interval once it's OOB
    if (isElementOutOfViewport(el)) {
      body.removeChild(el);
      clearInterval(intervalId);
    }
  }, 54);
});
