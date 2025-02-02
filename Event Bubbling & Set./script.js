document.querySelector(".grandfather").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("grandfather is clicked");
});

document.querySelector(".father").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("father is clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child is clicked");
});

function randomcolor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1} , ${val2} , ${val3})`;
}

setInterval(() => {
  document.querySelector(".grandfather").style.background = randomcolor();
}, 1000);

setInterval(() => {
  document.querySelector(".father").style.background = randomcolor();
}, 1000);

setInterval(() => {
  document.querySelector(".child").style.background = randomcolor();
}, 1000);
