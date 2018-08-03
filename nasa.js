// KzaMvPTOb6zYwIaWvIVi2PPR1LpeOja2Qe0XrIWV
// https://api.nasa.gov/planetary/apod?api_key=KzaMvPTOb6zYwIaWvIVi2PPR1LpeOja2Qe0XrIWV

/* function getjson(keyword){
  return new Promise((resolve, reject)=>{
    fetch(`https://images-api.nasa.gov/search?q=${keyword}&media_type=image`).then((r)=>{
      if(r.status===200){
        return resolve(r.json());
      }else{
        return reject(r.status, r.json());
      }
    })
  });
} */

const button = document.querySelector('#nasaimagesearch');
const clearbutton = document.querySelector('#clearsearches');
const searchStorage = window.localStorage;

function grabitems(collection) {
  const { items } = collection; // collection.collection.STUFF
  console.log(collection);
  items.forEach((item) => {
    const image = item.links[0].href;
    const collectionjson = item.href;
    fetch(collectionjson)
      .then((r) => {
        // fetch collection.json file from nasa api
        // console.log(collectionjson);
        if (r.status === 200) {
          return r.json();
        }
        throw new Error(`return status is ${r.status}`);
      })
      .then((jsonfile) => {
        // grab metadatajson file from collectionjson
        const metadatajson = jsonfile[jsonfile.length - 1];
        return fetch(metadatajson);
      })
      .then((res) => {
        // fetch metadatajson file
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(`return status bad ${res.status}`);
      })
      .then((metdjson) => {
        console.log(image);
        // console.log(metdjson["AVAIL:Description"]);
        const descriptions = metdjson['AVAIL:Description'];
        const titles = metdjson['AVAIL:Title'];

        const li = document.createElement('LI');
        const img = li.appendChild(document.createElement('img'));
        img.outerHTML = `<img src="${image}" width="100" height="100;"/>`;
        document.getElementById('follows').appendChild(li);
        img.addEventListener('mouseover', () => {
          alert(descriptions);
          alert(titles);
        });
      });
  });
}

function searchImages(keyword) {
  fetch(`https://images-api.nasa.gov/search?q=${keyword}&media_type=image`)
    .then((r) => {
      if (r.status === 200) {
        return r.json();
      }
      throw new Error(`return status is ${r.status}`);
    })
    .then((json) => {
      grabitems(json.collection); // grabs top collection
    });
}

clearbutton.addEventListener('click', () => {
  searchStorage.clear();
});

button.addEventListener('click', () => {
  const inp = document.getElementById('thingtosearch');
  if (!searchStorage.getItem('search')) {
    searchStorage.setItem('search', inp.value);
  }
  searchImages(inp.value);
});

/* function displayimage(image, idno){

  idstr = idno.toString();
  li.innerHTML = `<img id="${idstr}"src="${image}" width="100" height="100">`;
  var idd = document.getElementById(idstr);
  idd.addEventListener("mouseover", ()=>{

  })
  document.getElementById("follows").appendChild(li);
} */

/* function grabitems(collection){
  const {items} = collection; //collection.collection.STUFF
  //console.log(items.length);
  for(let i = 0; i < items.length; i++){
    let item = items[i];
    let image = item.links[0].href;
    collectionjson = item.href;
    fetch(collectionjson).then((r)=>{ //fetch collection.json file from nasa api
      if(r.status===200){
        return r.json();
      }else{
        throw new Error('return status is ' + r.status);
      }
    }).then((jsonfile)=>{
      metadatajson = jsonfile[jsonfile.length-1]; //grab metadatajson file from collectionjson
      console.log(i);
      fetch(metadatajson).then((res)=>{ //fetch metadatajson file
        if(res.status===200){
          return res.json();
        }else{
          throw new Error('return status bad ' + r.status)
        }
      }).then((metdjson)=>{
        //console.log(metdjson);
        //console.log(metdjson["AVAIL:Description"]);
        let descriptions = metdjson["AVAIL:Description"];
        let titles = metdjson["AVAIL:Title"];
        let nasaid = metdjson["AVAIL:NASAID"];

        let li = document.createElement("LI");
        let lister = 'li_'+i;
        //console.log(lister2);
        li.innerHTML = `<img id="${lister}"src="${image}" width="100" height="100"/>`; //li is created in memory, but not added to DOM tree
        document.getElementById("follows").appendChild(li); //add li to the DOM tree
        let idd = document.getElementById(lister); //now we can change the li and do stuff because we've added to DOM tree
        idd.addEventListener("mouseover", (thing)=>{
          alert(descriptions);
          alert(titles);
        })

      })
    })
  }
} */

/* function displayimage(image, idno){
  var li = document.createElement("li");
  idstr = idno.toString();
  li.innerHTML = `<img id="${idstr}"src="${image}" width="100" height="100">`;
  var idd = document.getElementById(idstr);
  idd.addEventListener("mouseover", ()=>{

  })
  document.getElementById("follows").appendChild(li);
} */
/* function grabjsonfile(jsonfile){
  var getreq = new XMLHttpRequest();
  getreq.open("GET", jsonfile)
  getreq.resposeType = 'json';
  getreq.send();
  return getreq;
}

var imgreq = new XMLHttpRequest();
var nasa = "https://images-api.nasa.gov"
imgreq.open("GET", nasa, true);
imgreq.send();
imgreq.addEventListener("readystatechange", (r)=>{
  if(r.target.status===200){
    console.log(r);
  }
}); */
// console.log(imgreq);
