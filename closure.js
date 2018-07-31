/*function greet(word){
  return function(name){
    console.log(word + ' ' + name);
  }
}

let hey = greet('hey');
hey('bobert');
*/

function bf(){
  let arr = [];
  for(let i = 0; i < 4; i++){
    arr.push(
      function(){
        console.log(i);
      }
    )
  }
  return arr;
}

var fs = bf();
fs[0]();
fs[1]();
fs[2]();
fs[3]();
