console.log("i am here ")
var header = document.getElementById("navbarSupportedContent");
var btns = header.getElementsByClassName("nav-item");
console.log(btns.length)

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}