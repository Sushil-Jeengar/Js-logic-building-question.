// generate random colors in box

let boxex = document.querySelector(".container").children


function getRandomcolor(){
  let val1 = Math.ceil(0+Math.random()*255)
  let val2 = Math.ceil(0+Math.random()*255)
  let val3 = Math.ceil(0+Math.random()*255)
  return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxex).forEach(e => {
    e.style.backgroundColor = getRandomcolor()
    e.style.Color = getRandomcolor()
})