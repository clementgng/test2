const fs = require('fs'); // fs means FileSystem

// readFile is asynchronous
fs.readFile('./test.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('ASYNC', data.toString());
});

// readFileSync is synchronous
const file = fs.readFileSync('./test.txt');
console.log('SYNC', file.toString());

// append text to a file
// fs.appendFile('./test.txt', ' BALL BALL BALL', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// WRITE
fs.writeFile('super.txt', 'i am writing to a file', err => {
  if (err) {
    console.log(err);
  }
})

// DELETE
fs.unlink('./super.txt', err => {
  if (err) {
    console.log(err);
  }
  console.log('i got to the end of unlink method')
})
