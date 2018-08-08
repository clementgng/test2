const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
Seems can only do one send request per method

// callback function requires request(req) and response(res) and
next(to go to next function in middleware, dont specify next if it is the last one in middleware)

get post put delete
*/
// x-www-form-urlencoded used when bulding server for form that gets submitted
/* app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN'>");
});

app.get('/profile', (req, res) => {
  res.send("grabbing user profile");
});

app.post('/profile', (req, res) => {
  // res.se'user'mg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN'>");
  console.log(req.body);
  const user = {
    name: 'Bobby',
    hobby: 'BALL'
  };
  res.send(user);
});

app.put('/profile', (req, res) => {
  console.log(req.body);
})

app.listen(3000); // tells us which port to connect to

/* commonly used request functions
app.get('url here', (req, res) => {
  req.query
  req.body
  req.header
  req.params
}) */

/*app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/:id', (req, res) => {
  //console.log(req.query);
  //console.log(req.header);
  console.log(req.params);
  res.status(404).send("at root");
});
app.listen(3000);*/


/*
app.use((req, res, next) => {
  console.log('<h1>SUPDAWG</h1>');
  next();
})
app.get('/', (req, res) => {
  res.send("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN'>");
});
app.listen(3000);
*/

app.use(express.static(__dirname + '/public'));
app.listen(3000);
