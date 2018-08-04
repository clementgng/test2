const promisedthing = new Promise((resolve, reject) => {
  if (true) {
    resolve('We resolved this promisedthing');
  } else {
    reject('We failed')
  }
})

const promisedthing2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'suh');
})

const promisedthing3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'dude');
})
// Promise.all takes in an array of promises and returns them AFTER they are all resolved or rejected
Promise.all([promisedthing, promisedthing2, promisedthing3])
  .then((values) => {
    console.log(values);
  })

promisedthing
  .then((result) => {
    return result + '!';
  })
  .then((result2) => {
    return result2 + '?';
  })
  .catch(() => { // catch only catches if there is a failure in its predecessor and the promised variable function
    console.log('WE ERORED U FAILED');
  })
  .then((result3) => { // catch WILL NOT catch this because it is after
    console.log(result3 + '$');
  })

/* promisedthing.then((result) => {
   console.log(result);
}) */

/* Promises are good for asynchronous programming
When you don't want JS to block the execution of some code such as:
grabbing an API call
grabbing data from a database
optimizing an image

use a promise so it can run asynchronously in the background while the JS program runs synchrnously
when the promise is resolved or rejected, you get a response

*/
