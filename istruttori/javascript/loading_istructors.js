fetch("http://localhost/poolparty/homework/istruttori/php/istructors.php").then(onResponse).then(loadIstruttori);
const section = document.querySelector("section");
function onResponse(promise){
    return promise.json();
}

function loadIstruttori(json){
  

   for(let i = 0; i < json.length; i++){
        const div = document.createElement("div");
        div.classList.add("pos");
        const img = document.createElement("img");
        const nome = json[i].Nome.replace(" ", "%20");
        const cognome = json[i].Cognome.replace(" ", "%20");

        img.src = "immagini/"+nome+"%20"+cognome+".png";
        div.appendChild(img);
        const textDiv = document.createElement("div");
        textDiv.classList.add("txt");
        const pNome = document.createElement("p");
        pNome.innerHTML = json[i].Nome;
        textDiv.appendChild(pNome);

        const pCognome = document.createElement("p");
        pCognome.innerHTML = json[i].Cognome;
        textDiv.appendChild(pCognome);

        const pDescrizione = document.createElement("p");
        pDescrizione.innerHTML = json[i].descrizione;
        textDiv.appendChild(pDescrizione);

        const pPiscina = document.createElement("p");
        pPiscina.innerHTML = json[i].Nome_piscina;
        textDiv.appendChild(pPiscina);
        div.appendChild(textDiv);

        section.appendChild(div);
        
    }

    console.log("Istruttori caricati");
}