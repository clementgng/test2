/*var objectLiteral = {
  firstname: 'Mary',
  isacoder: true
}

console.log(JSON.stringify(objectLiteral));

var jsonVal = JSON.parse('{"fn":"mary", "isacoder":false}');
console.log(jsonVal);

let g = undefined || 'a';
console.log(g);*/

var a = new XMLHttpRequest();
a.addEventListener("readystatechange", (r)=>{
    if (r.target.status===200){
        console.log(a.responseText); //this is alrd ya json format
        stringy = JSON.stringify(a.responseText);
        var response = JSON.parse(stringy);
    }
});
a.open("GET", "people.json", true);
a.send();

/*
install nodejs
go to windows cmd

npm install -g live-server
live-server

this will open up whatever is index.html to http://127.0.0.1:8080/
*/
