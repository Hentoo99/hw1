fetch("http://localhost/poolparty/homework/chisiamo/php/desctiption.php").then(onPromise).then((json) =>{
    const divdescrizione = document.querySelector(".description");

    for(let i = 0; i < json.length; i++){
        const p = document.createElement("p");
        p.innerHTML = json[i];
        divdescrizione.appendChild(p);
    }

    console.log("Descrizione caricata")
});

function onPromise(promise){
    return promise.json();
}