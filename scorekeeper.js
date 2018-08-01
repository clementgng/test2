/*var p1disp = document.querySelector("#p1disp");
var p2score = document.querySelector("#p2disp");
var h1 = document.querySelector("h1");
var p1button = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var rst = document.getElementById("rst");
var limit = document.getElementById("limit");

var scorelimit = document.getElementById("scorelimit")

var p1s = 0;
var p2s = 0;
p1button.addEventListener("click", function(){
  if(p1s<5 && p2s<5){
    p1s++;
  }
  p1disp.textContent = p1s;
});

p2.addEventListener("click", function(){
  if(p2s<5 && p1s<5){
    p2s++;
  }
  p2score.textContent = p2s;
})

rst.addEventListener("click", function(){
  p1s = 0;
  p2s = 0;
  p1disp.textContent = p1s;
  p2score.textContent = p2s;
})

limit.addEventListener("change", function(){
  val = limit.value
  scorelimit.textContent = val
});*/

function getElementsByAttribute(att, val){
  arr = [];
  var elements = document.getElementsByTagName("*");
  for(var i = 0; i < elements.length; i++){
    element = elements[i];
    if(element.getAttribute(att) === val){
      arr.push(element);
    }
  }
  return arr;
}
