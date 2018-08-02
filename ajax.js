/*var ajaxRequest = new XMLHttpRequest();
ajaxRequest.addEventListener('readystatechange', function(r) {
  if(r.target.status === 200) {
    console.log(r.target.response);
  }
});
ajaxRequest.open("GET", "https://api.github.com/users/cassidoo", true);
ajaxRequest.send();*/
/*fetch("https://api.github.com/users/cassidoo").then((r)=>{
    console.log(r.status);
    return r.json();
}).then((j)=>{
    console.log(j);
});*/
var disp = document.getElementById('display');
var button = document.querySelector("button");


button.addEventListener("click", (r)=>{
    var inp = document.querySelector("#username");
    console.log(inp.value);
    getGitHubUser(inp.value);
});

function getGitHubUser(username){
    fetch("https://api.github.com/users/" + username).then((r)=>{
        console.log(r.status);
        return r.json();
    }).then((object)=>{
      console.log(object);
        obj = object;
        assignVals(obj);
        getFollowers(obj.followers_url);
    })
}
function assignVals(obj){
    disp.textContent = obj.login + " " + obj.name + " " + obj.location + " " + obj.bio + " " + obj.followers;
}

function getFollowers(followers_urls){
    fetch(followers_urls).then((r)=>{
        return r.json();
    }).then((obj)=>{
        followers = obj;
        createFollowers(followers);
    });
}

function createFollowers(followers){
    for(var i = 0; i < followers.length; i++){
        follower = followers[i];
        var li = document.createElement('li');
        li.innerHTML = '<a href="' + follower.html_url + '">' + '<img src="' + follower.avatar_url + '"alt="' + follower.login + '"width=100"' + '"height=100"' + '"/>' + '</a>';
        document.getElementById("follows").appendChild(li);
    }
}
/*button2.addEventListener("click", ()=>{
    name = inp.value;
    console.log(name);
    fetch("https://api.github.com/users/" + name).then((r) => {
        console.log(r.status);
        return r.json();
    }).then((obj) =>{
        //var obj = JSON.parse(j);
        console.log(obj);
        //ava.setAttribute("src", obj.avatar_url);
        var avata = document.createElement("IMG");
        avata.src = obj.avatar_url;
        //avata.src = "https://avatars2.githubusercontent.com/u/1454517?v=4";
        var body = document.getElementsByTagName("BODY")[0];
        body.appendChild(avata);
        disp.textContent = obj.login + " " + obj.name + " " + obj.location + " " + obj.bio + " " + obj.followers;
        return fetch(obj.followers_url);
    }).then((r)=>{
        console.log(r.status);
        return r.json();
    }).then((followersurl)=>{
        console.log(followersurl);
        var body = document.getElementsByTagName("BODY")[0];
        for(var i = 0; i < followersurl.length; i++){
            follower = followersurl[i];
            var avata = document.createElement("IMG");
            var para = document.createElement("P");
            var node = document.createTextNode(follower.login);
            avata.src = follower.avatar_url;
            //avata.src = "https://avatars2.githubusercontent.com/u/1454517?v=4";
            para.appendChild(node);
            body.appendChild(para);
            body.appendChild(avata);
        }
    });
})*/



/*fetch("https://api.github.com/users/cassidoo/followers").then((r)=>{
    console.log(r.status);
    return r.json();
}).then((obj)=>{
    var body = document.getElementsByTagName("BODY")[0];
    for(var i = 0; i < obj.length; i++){
        follower = obj[i];
        var avata = document.createElement("IMG");
        var para = document.createElement("P");
        var node = document.createTextNode(follower.login);
        avata.src = follower.avatar_url;
        //avata.src = "https://avatars2.githubusercontent.com/u/1454517?v=4";
        para.appendChild(node);
        body.appendChild(para);
        body.appendChild(avata);
    }
})*/
