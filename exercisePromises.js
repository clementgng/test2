// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
/*const prom = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
})*/

/*prom.then((result) => {
  return result
  //console.log(result);
});*/
// #2) Run the above promise and make it console.log "success"
/*const prom = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
})

prom.then((result) => {
  console.log(result);
});*/

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
/*let prom = Promise.resolve(setTimeout( () => {console.log('suc7cess')}, 4000));
prom.then( res => {
  console.log('test2');
  console.log(res);
});*/

// #4) Catch this error and console log 'Ooops something went wrong'
//Promise.reject('failed')

/*const prom = Promise.reject('failed');
prom.then(r => {
  console.log(r);
}).catch(() => {
  console.log('Ooops something went wrong');
})*/

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

const prom = Promise.all(urls.map((url) => {
  return fetch(url).then( (response) => {return response.json()})
}));

prom.then((links) => {
  console.log(links[0]);
  console.log(links[1]);
  console.log(links[2]);
  console.log(links[3]);
}).catch(() => {
  console.log('FAIL');
})

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
