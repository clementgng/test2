const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplacehodler.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map((url) => {
  return fetch(url).then(response => response.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
}).catch(() => {
  console.log('errored');
})
/*
remember that A FETCH RETURNS A PROMISE

promises can only resolve or reject ONCE ONLY

example we misspelt one of the urls when grabbing the data, use catch to catch if there is a rejection anddo stuff
*/
