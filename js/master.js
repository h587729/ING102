document.getElementById("hover").onmouseover = function() {mouseOver()};
document.getElementById("hover").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("hover").style.color = "red";
}

function mouseOut() {
  document.getElementById("hover").style.color = "black";
}
