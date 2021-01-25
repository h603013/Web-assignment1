document.getElementsByClassName("circle1")
const circle1 = 5;
document.getElementsByClassName("button")
const button = 10;

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

let circle1 = {name: "Van"}

let circle2 = {name: "Ellie"}

let circle3 = {name: "scarlette"}