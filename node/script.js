// node does not support import yet, must use require
const script2 = require('./script2.js');
/*
commonly used built-in modules in node
require('fs')
require('http')
*/

const a = script2.largeNumber;
const b = 1;

console.log(a*b);

/*
--save-dev is used for dependencies during development
nodemon is an npm package to always run node upon saved files.. dont need to use node *.js every time
do to this, in package.json, add "start": "nodemon" to scripts like below

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon"
},

*/
