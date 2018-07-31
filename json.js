var objectLiteral = {
  firstname: 'Mary',
  isacoder: true
}

console.log(JSON.stringify(objectLiteral));

var jsonVal = JSON.parse('{"fn":"mary", "isacoder":false}');
console.log(jsonVal);

let g = undefined || 'a';
console.log(g);
