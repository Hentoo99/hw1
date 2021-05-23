//script per la sezione dei preferiti.
const sezionePreferiti = document.getElementById("preferiti");
let divPreferiti;
let listPreferiti =[];
function loadDiv(){
    divPreferiti = document.querySelectorAll(".preferito");
    saveSections = document.querySelectorAll(".sezione");
    console.log("Div presi");
    pMostraDettagli = document.querySelectorAll(".dettagli");
    for(let i = 0; i < divPreferiti.length; i++){
        divPreferiti[i].addEventListener("click", addSezionePreferiti);
    }
    for(let i of pMostraDettagli){
        i.addEventListener("click", addDescrizione);
    }
}


function addSezionePreferiti(event){
    console.log("Cliccato");
    const addfavo = event.currentTarget;
    const sectionElement = event.currentTarget.parentNode;
    if(listPreferiti.includes(sectionElement)){
        console.log("c'è sta già un elemento");
    }else{
        listPreferiti.push(sectionElement);
        console.log("inserito nella lista");
        const sectionClone = event.currentTarget.parentNode.cloneNode(true);
        sectionClone.classList.remove("sezione");
        const prefButton = sectionClone.querySelector(".preferito");
        prefButton.classList.remove("preferito");
        prefButton.classList.add("removepreferito");
        prefButton.removeEventListener("click", addSezionePreferiti);
        prefButton.addEventListener("click", removeSezionePreferiti);
        const dettagli = sectionClone.querySelector(".dettagli");
        dettagli.addEventListener("click", addDescrizione);
        sezionePreferiti.appendChild(sectionClone);
        barraPreferiti();
    }
}

function removeSezionePreferiti(event){
    console.log("rimuovo sezione");
    const divToDelete = event.currentTarget.parentNode;
    sezionePreferiti.removeChild(divToDelete);
    listPreferiti.splice(divToDelete,1);
    console.log(listPreferiti.length);
    barraPreferiti();
}

function barraPreferiti(){
    if(listPreferiti.length === 0){
        sezionePreferiti.style.display = "none";
    }else{
        sezionePreferiti.style.display = "flex";
    }
}

//script per i paragrafi
let pMostraDettagli ;
//const paragraph = document.querySelectorAll(".dettaglinascosti");



function addDescrizione(event){
    console.log("Aggiungo descrizione");
    const mostraDettagli = event.currentTarget;
    mostraDettagli.classList.remove("dettagli");
    mostraDettagli.classList.add("dettaglinascosti");

    const paragrafo = event.currentTarget.parentNode;
    const daVedere = paragrafo.querySelector("p");
    daVedere.classList.remove("dettaglinascosti");
    daVedere.classList.add("dettagli");
    daVedere.addEventListener("click", removeDescrizione);
}

function removeDescrizione(event){
    console.log("Rimuovo descrizione");
    const paragrafo = event.currentTarget;
    const mostraDettagli = event.currentTarget.parentNode;
    const daVedere = mostraDettagli.querySelector(".dettaglinascosti");

    paragrafo.classList.remove("dettagli");
    paragrafo.classList.add("dettaglinascosti");
    
    daVedere.classList.remove("dettaglinascosti");
    daVedere.classList.add("dettagli");
    //l'ho messo solo perchè se attiviamo i dettagli e poi i preferiti, nella sezione preferiti non ti permette di rimettere la sezione in nascosta...
    daVedere.addEventListener("click", addDescrizione);
}


//script per la barra di ricerca.
const barraDiRicerca = document.querySelector(".ricerca");
let saveSections;
const argument = document.querySelector(".argument");
const elemTrovati = document.querySelector(".hidden");

barraDiRicerca.addEventListener("keyup", barraSearch);

function barraSearch(){
        let list = [];
        //l'ho fatto principalmente perchè così me li carica appena completati le fetch
       if(saveSections.length === 0){
           
       }
        if(check(barraDiRicerca.value, list)){
            const divBarra = document.getElementById("barradiricerca");
            if(list.length === 0){
                console.log("Nessuno elemento trovato");
                ripristina();
            }else{
                elemTrovati.style.display = "flex";
                
                for(let i = 0; i < list.length; i++){
                    divBarra.appendChild(list[i]);
                    for(let j = 0; j < saveSections.length; j++){
                        if(!list.includes(saveSections[j])){
                          if(divBarra.contains(saveSections[j])){
                            argument.appendChild(saveSections[j]);
                          }
                        }
                    } 
                }
            }  
        }
}

function ripristina(){
        let divSezioni = document.getElementsByClassName("sezione");
        for(let i = 0; i < divSezioni.length; i++){
            argument.appendChild(saveSections[i]);
        }
        elemTrovati.style.display = "none";
}

function checkList(list, elem){
    if(list.length === 0){
        list.push(elem);
        return true;
    }else{
        for(let i = 0; i < list.length; i++){
            if(list[i] !== elem){
                list.push(elem);
                return true;
            }
        }
    }

    return false;
}
function check(testo, list){
    if(testo.length === 0){
        console.log("Ripristino");
        ripristina();
        return false;
    }    
    let divSezioni = document.getElementsByClassName("sezione");
    let save;
  
    for(let i = 0; i < divSezioni.length; i++){
        //cerca il titolo
        let titolo = divSezioni[i].getElementsByTagName("h1")[0];
        if(titolo.textContent.includes(testo)){
            console.log("true titolo: " + i);
            checkList(list, divSezioni[i]);
           
        }
        //cerca paragrafo
        let paragrafo = divSezioni[i].getElementsByTagName("p")[0].innerHTML;
        if(paragrafo.includes(testo)){
            console.log("true paragrafo: "+i);
            checkList(list, divSezioni[i]);

        }
    }   
    return true;
    
}


