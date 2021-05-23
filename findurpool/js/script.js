const sumbit = document.querySelectorAll('input')[1];
const text = document.querySelector("input");
const divHidden = document.querySelector(".hidden");
const finddiv = document.querySelector(".hidden");


sumbit.addEventListener("click", searchPool);

function searchPool(event){
 

      const form = document.querySelector("form");
      const form_request = {method: 'post', body: new FormData(form)};
      fetch("http://localhost/poolparty/homework/findurpool/php/findpool.php", form_request).then(onResponse).then(pools);
      event.preventDefault();

}

function onResponse(promise){
    return promise.json();
}

function pools(json){
    console.log(json);
    
    const divPiscina = document.querySelector(".piscina");
    console.log(finddiv);
    const array = json;
    finddiv.innerHTML = [];
    divPiscina.innerHTML = [];
    const find = document.createElement("h1");
    finddiv.appendChild(find);
    find.innerHTML = "A "+ array[0].Citta + " ci sono "+ array.length + " piscine"; 
    finddiv.classList.remove("hidden");   
    for(let i = 0; i < array.length; i++){
        const div = document.createElement("div");
         console.log(i);
        const h1 = document.createElement("h1");
        h1.innerHTML = array[i].Nome;
        div.appendChild(h1);

        const citta = document.createElement("p");
        citta.innerHTML = array[i].Citta;
        div.appendChild(citta);

        const indirizzo = document.createElement("p");
        indirizzo.innerHTML = array[i].Via;
        div.appendChild(indirizzo);

        divPiscina.appendChild(div);
    }
}

