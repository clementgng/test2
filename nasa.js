//KzaMvPTOb6zYwIaWvIVi2PPR1LpeOja2Qe0XrIWV
//https://api.nasa.gov/planetary/apod?api_key=KzaMvPTOb6zYwIaWvIVi2PPR1LpeOja2Qe0XrIWV

/*function getjson(keyword){
  return new Promise((resolve, reject)=>{
    fetch(`https://images-api.nasa.gov/search?q=${keyword}&media_type=image`).then((r)=>{
      if(r.status===200){
        return resolve(r.json());
      }else{
        return reject(r.status, r.json());
      }
    })
  });
}*/

var button = document.querySelector("#nasaimagesearch");
var clearbutton = document.querySelector("#clearsearches");
searchStorage = window.localStorage;

clearbutton.addEventListener("click", (r)=>{
  searchStorage.clear();
})

button.addEventListener("click", (r)=>{
  var inp = document.getElementById("thingtosearch");
  var history = searchStorage
  if(!searchStorage.getItem("search")){
    searchStorage.setItem("search", inp.value);
  }
  searchImages(inp.value);
});

function searchImages(keyword){
  fetch(`https://images-api.nasa.gov/search?q=${keyword}&media_type=image`).then((r)=>{
    if(r.status===200){
      return r.json();
    }else{
      throw new Error('return status is ' + r.status);
    }

  }).then((json)=>{
    grabitems(json.collection); //grabs top collection
  })
}

function grabitems(collection){
  items = collection.items; //collection.collection.STUFF
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
}

/*function displayimage(image, idno){
  var li = document.createElement("li");
  idstr = idno.toString();
  li.innerHTML = `<img id="${idstr}"src="${image}" width="100" height="100">`;
  var idd = document.getElementById(idstr);
  idd.addEventListener("mouseover", ()=>{

  })
  document.getElementById("follows").appendChild(li);
}*/
/*function grabjsonfile(jsonfile){
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
});*/
//console.log(imgreq);
