/*var body2 = document.querySelector("body");
var ispink = false;

var h1 = document.querySelector("h1");
h1.style.color = "pink";

setInterval(function(){
    if(ispink){
        body2.style.background = "green";
    }else{
        body2.style.background = "white";
    }
    ispink = !ispink;
}, 1000);
*/

var p1 = document.getElementById("first");
var p2 = document.getElementsByClassName("special")[0];
var p3 = document.querySelector("p");
var p4 = document.querySelector(".special");

var butt = document.querySelector("button");
var body2 = document.querySelector("body");
var color = true;
butt.addEventListener("click", function(){
  //alert("I CLICKED THE BUTTON");
  //p3.textContent="This isn't a test";
  if(color){
    body2.style.background = "green";
  }else{
    body2.style.background="white";
  }
  color = !color;
});
