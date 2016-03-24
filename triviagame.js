var submitButton = document.getElementById("submitButton");
var gameboard = document.getElementById("gameboard");

var points = 0;

submitButton.addEventListener("click", function(evt){
// document.getElementById("gameboard").style.display = "none";    

if (document.getElementById('correct1').checked) {
  increase points
}
if (document.getElementById('correct2').checked) {
  increase points
}

gameboard.innerHTML = points

evt.preventDefault()
});
