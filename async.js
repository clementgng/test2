/*async function users() {
  const user = await fetch('https://swapi.co/api/people/2'); // user is a promise
  const data = await user.json(); // get the response and put it into json array format
  console.log(data);
}*/

// users();

const urls2 = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/peop2le/4'
];

/*const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]*/

/*const sw = async function () {
  const [one, two, three] = await Promise.all(urls.map(url => {
    fetch(url).then(response => response.json())
  }));
  console.log('users', one);
  console.log('posts', two);
  console.log('albums', three);
};*/

const getDatasw = async function() {
  try {
    const [ one, two, three, four ] = await Promise.all(urls2.map(url =>
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', one);
    console.log('posts', two);
    console.log('albums', three);
    console.log('stuff', four);
  } catch (err) {
    console.log('YOU SUCK');
  }
};

getDatasw();
