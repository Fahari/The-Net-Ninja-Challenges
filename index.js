window.onkeyup = keyup;
let input;
let tick = document.getElementById("tick");
let border = document.getElementById("email");
function keyup(e) {
  input = e.target.value;
  var validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(validator)) {
    tick.style.visibility = "visible";
    border.style.outlineColor = "rgb(96, 189, 9)"
  } else {
    tick.style.visibility = "hidden";
    border.style.outlineColor = "initial"
  }
}
