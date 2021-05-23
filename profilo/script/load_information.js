fetch("http://localhost/poolparty/homework/profilo/php/find_information.php").then(onResponse).then(prova);
fetch("http://localhost/poolparty/homework/profilo/php/find_num_abb.php").then(onResponse).then((json) => {
    if(json[0] != null){
         //vuol dire che è definito.
         divStatistiche.classList.remove("hidden");

         const p = document.createElement("p");
         p.innerHTML = "Abbonamenti avuti: " + json[0].num_abbonamenti;
         divStats.appendChild(p);
    }
})

fetch("http://localhost/poolparty/homework/profilo/php/find_num_pvt.php").then(onResponse).then((json) => {
   console.log(json);
    if(json[0] != null){
    divStatistiche.classList.remove("hidden");

    const p = document.createElement("p");
    p.innerHTML = "Lezioni private svolte: " + json[0].num_lezioni_pvt;
    divStats.appendChild(p);
   }
})


function onResponse(promise){
    return promise.json();
}
const divNoAbbonamento = document.getElementsByClassName("hidden")[0];

const divPiscinaPreferita = document.getElementById("preferita");
const divProfilo = document.getElementById("profilo");
const divStatistiche = document.getElementById("statistiche");

const divStats = document.createElement("div");
divStatistiche.appendChild(divStats);
divStats.classList.add("piscina");



function prova(json){
  
   
    if(json[0].Cognome != undefined){
        //profilo
        console.log(divProfilo);
        const div = document.createElement("div");
        div.classList.add("profile");
        div.classList.add("nome");

        const pNome = document.createElement("p");
        const pCognome = document.createElement("p");
        const pDate = document.createElement("p");
        const pEta = document.createElement("p");

        pNome.innerHTML = "Nome: "+json[0].Nome;
        pCognome.innerHTML ="Cognome: "+ json[0].Cognome;
        pDate.innerHTML = "Nato il: "+json[0].Data_nascita;
        pEta.innerHTML = "Eta: " +json[0].Eta;
        
        div.appendChild(pNome);
        div.appendChild(pCognome);
        div.appendChild(pDate);
        div.appendChild(pEta);
        divProfilo.appendChild(div);
        
        //Piscina Preferita


        const divPiscina = document.createElement("div");
        divPiscina.classList.add("piscina");

        const h1 = document.createElement("h1");
        h1.textContent = json[1].Nome;
        divPiscina.appendChild(h1);

        const pLuogo = document.createElement("p");
        pLuogo.innerHTML = json[1].Citta;
        divPiscina.appendChild(pLuogo);

        const pVia = document.createElement("p");
        pVia.innerHTML = json[1].Via;
        divPiscina.appendChild(pVia);

        divPiscinaPreferita.appendChild(divPiscina);

    }else{
        //mostro nessun elem
        divPiscinaPreferita.classList.add("hidden");
        divProfilo.classList.add("hidden");
        divStatistiche.classList.add("hidden");
        divNoAbbonamento.classList.remove("hidden");
        divNoAbbonamento.classList.add("noabbonamento");
        
        const h1 = document.createElement("h1");
        h1.innerHTML = json

        divNoAbbonamento.appendChild(h1);

        const p = document.createElement("p");
        p.innerHTML = "Devi prima fare un abbonamento!";
        divNoAbbonamento.appendChild(p);

    }
}