fetch("http://localhost/poolparty/homework/lezioneprivata/php/obtain_istructors.php").then(onPromise).then(saveIstructors);
const selectPool = document.querySelector("[name='piscina']");
const selectIstruttore = document.querySelector("[name='istruttore']");
const data = document.querySelector("[name='data']");

const submit = document.querySelector("[name='invio']");
submit.addEventListener("click", submitForm);
const time = new Date();





function submitForm(event){
    console.log("CIAOO");
    event.preventDefault();

    const save = new Date(data.value);

    
    if(save > time){
        console.log("invio il form");
        const form = document.querySelectorAll("form")[0];
        const form_request = {method: 'post', body: new FormData(form)};
        fetch("http://localhost/poolparty/homework/lezioneprivata/php/insert_lezione.php",form_request).then(onPromise).then(show);
    }else{
        div.classList.remove("hidden");
        div.innerHTML = [];
        div.classList.remove("done");
        div.classList.remove("error");

        div.classList.add("error");
        div.classList.remove("done");
        div.innerHTML = "Controlla la data";


    }
}
const div = document.querySelector(".hidden");

function show(json){
    console.log(json);
    div.classList.remove("hidden");
    div.innerHTML = [];
    div.classList.remove("done");
    div.classList.remove("error");
    if(json){
        div.innerHTML = "Ti sei prenotato per il giorno: "+ data.value;
        div.classList.add("done");
        div.classList.remove("error");
    }else{
        div.innerHTML = "Sei già registrato!";
        div.classList.add("error");
        div.classList.remove("done");
    }

    aggiornaLezioni();

}

selectPool.addEventListener("onchange", onClick);

function onClick(){
    const id = selectPool.value;
    while(selectIstruttore.firstChild){
        selectIstruttore.removeChild(selectIstruttore.firstChild);
    }
    for(let i = 0; i< istruttori.length; i++){
        if(istruttori[i].ID_piscina === id){
            const option = document.createElement("option");
            option.value = istruttori[i].ID_istruttore;
            option.innerHTML = istruttori[i].Nome + " "+ istruttori[i].Cognome;
            selectIstruttore.appendChild(option);
        }
    }
    
   
}

function onPromise(promise){
    return promise.json();
}

const istruttori = [];
const saveNomiPiscina = [];
function saveIstructors(json){
    //salvo gli istruttori
    for(let i = 0; i < json.length; i++){
        istruttori.push(json[i]);
    }
    console.log("istruttori presi");
    console.log(istruttori);
    for(let i = 0; i < json.length; i++){
        if(!saveNomiPiscina.includes(json[i].Nome_piscina)){
            saveNomiPiscina.push(json[i].Nome_piscina);
            const option = document.createElement("option");
            option.value = json[i].ID_piscina;
            option.innerHTML = json[i].Nome_piscina;
            selectPool.appendChild(option);
        }
    }
    console.log("piscine caricate");
    onClick();
    aggiornaLezioni();
}


//controllo se ho delle lezioni private già settate.
function aggiornaLezioni(){
    fetch("http://localhost/poolparty/homework/lezioneprivata/php/check_lezioni.php").then(onPromise).then(showLezioni);
}
const registro = document.createElement("div");
console.log(registro);
const section = document.querySelector("section");
section.appendChild(registro);
function showLezioni(json){
    saveDates = json;

    if(json){
        registro.innerHTML =[];

        console.log(json);
        for(let i = 0; i < json.length; i++){
            const divLezione = document.createElement("div");
            registro.appendChild(divLezione);
            const p = document.createElement("p");
            p.innerHTML = "Hai lezione giorno "+ json[i].data + " con " + json[i].Nome + " " + json[i].Cognome + " nella piscina " + json[i].Nome_piscina + ".";
            divLezione.appendChild(p);
        }
    }
    putDate(json)
}


//funzione per la rimozione delle lezioni
const buttonDelete = document.querySelector('[name="elimina"]');
const selectDate = document.querySelector('[name="delete"]');
function putDate(json){
    while(selectDate.firstChild){
        selectDate.removeChild(selectDate.firstChild);
    }    
    for(let i = 0; i < json.length; i++){
        const option = document.createElement("option");
        option.innerHTML = json[i].data;
        option.innerHTML = json[i].data;
        selectDate.appendChild(option);
    }
}
buttonDelete.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Elimino");
    //form 

    const form = document.querySelectorAll("form")[1];
    const form_request = {method: 'post', body: new FormData(form)};
    console.log(form);
    fetch("http://localhost/poolparty/homework/lezioneprivata/php/delete_lezione.php",form_request).then(onPromise).then(deleteDate);
  
});


function deleteDate(json){
    if(json){
        aggiornaLezioni();
        div.classList.remove("hidden");
        div.innerHTML = "Hai eliminato una lezione!";
        div.classList.add("done");
        div.classList.remove("error");
    }
}
