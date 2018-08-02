/* var objectLiteral = {
  firstname: 'Mary',
  isacoder: true
}

console.log(JSON.stringify(objectLiteral));

var jsonVal = JSON.parse('{"fn":"mary", "isacoder":false}');
console.log(jsonVal);

let g = undefined || 'a';
console.log(g); */

const a = new XMLHttpRequest();
a.addEventListener('readystatechange', (r) => {
  if (r.target.status === 200) {
    console.log(a.responseText); // this is alrd ya json format
    const stringy = JSON.stringify(a.responseText);
    const response = JSON.parse(stringy);
  }
});
a.open('GET', 'people.json', true);
a.send();

/*
install nodejs
go to windows cmd

npm install -g live-server
live-server

this will open up whatever is index.html to http://127.0.0.1:8080/
*/
// vAH2GGIEATQnBVXMclE2IGV6i0GyVngKThcGZ5kHgHMxLo9Ow2
// hey
