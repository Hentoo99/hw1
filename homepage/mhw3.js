



function ricercaMeteo(event){
  event.preventDefault();
  const input = document.querySelector(".ricercameteo").value.replace(" ", "%20");
  if(input.length !== 0){
    let completeUrl = "http://localhost/poolparty/homework/homepage/php/weatherstack.php?" + "&query="+input;
    fetch(completeUrl).then(onPromise).then(onWeather);
  }else{
    console.log("nessuna città inserita");
  }
}



const buttonCerca = document.querySelector(".Cerca");
buttonCerca.addEventListener("click", ricercaMeteo);



function onWeather(json){
    const divCitta = document.querySelector(".citta");
    divCitta.innerHTML = "";

    console.log(json);
    const descrizioneMeteo = "A "+ json.location.name + " e' "+ json.current.weather_descriptions[0];
    const img = document.createElement("img");
    img.src = json.current.weather_icons[0];

    divCitta.appendChild(img);
    const h1 = document.createElement("h1");
    h1.innerHTML = descrizioneMeteo;
    divCitta.appendChild(h1);
}




//OAuth script 
const follow = "https://open.spotify.com/user/hentolinizzatorhd";
const buttonFollow = document.querySelector(".follow");
const buttonPlaylist = document.querySelector(".playlist");
buttonFollow.addEventListener("click", followPoolParty);

let playlis = null;
function followPoolParty(){
  window.open(follow);
}

function onPromise(promise)
{
  return promise.json();
}
function onTokenJson(json)
{
  console.log("token ricevuto");
  fetch("https://api.spotify.com/v1/playlists/1XrOBHAEoouDXtQEV4oEiy", {
    headers:
    {
      'Authorization': 'Bearer ' + json.access_token
    }
  
  }).then(onPromise).then(saveJson);
}
function saveJson(json){
  playlis = json.tracks.items;
  console.log("PResi");
  buttonPlaylist.addEventListener("click", startPlaylist);

}

//faccio comparire la modale con gli elementi
function playlist(){
    const sezione = document.getElementById("modale");
    sezione.addEventListener("click", removeModale);
    console.log(sezione);
   
    const tracksPlaylist = playlis;
    console.log(tracksPlaylist);
    const h1 = document.createElement("h1");
    h1.innerHTML = "Apri playlist!";
    const link = document.createElement("a");
    link.href = "https://open.spotify.com/playlist/1XrOBHAEoouDXtQEV4oEiy";
    link.appendChild(h1);
    sezione.appendChild(link);
    for(let i = 0; i < tracksPlaylist.length; i++){
      let img = document.createElement("img");
      let a = document.createElement("a");
      a.href = "https://open.spotify.com/track/"+ tracksPlaylist[i].track.id;
      img.src = tracksPlaylist[i].track.album.images[0].url;
      a.appendChild(img);
      sezione.appendChild(a);
    }

    console.log("Playlist radio di PoolParty e' stata caricata!");
}

function removeModale(){
    const divModale = document.getElementById("modale");
    divModale.innerHTML = "";
    modale.setAttribute("id", "");
    const body = document.querySelector("body");
    body.classList.remove("scorrimento");
    console.log(divModale);
}



fetch("http://localhost/poolparty/homework/homepage/php/spotify.php").then(onPromise).then(onTokenJson);




function startPlaylist(){
      const body = document.querySelector("body");
      body.classList.add("scorrimento");
      const modale = document.querySelector(".sezionemodale");
      modale.setAttribute("id", "modale");

      playlist();
}
