let titolo = [];
let immagini = [];
let paragrafi = [];
fetch("http://localhost/poolparty/homework/homepage/php/contenuti.php").then(onPromise).then(saveContenuti);

function onPromise(promise){
    return promise.json();
}

function saveContenuti(json){
    console.log(json);
    //caricamento titoli
    for(let i = 0; i < json[0].length; i++){
        titolo.push(json[0][i]);
    }
    for(let i = 0; i < json[1].length; i++){
        paragrafi.push(json[1][i]);
    }
    for(let i = 0; i < json[2].length; i++){
        immagini.push(json[2][i]);
    }
    inizializza();    
}
function inizializza(){
    const div = [];

    if(titolo.length !== 0 && immagini.length !== 0 && immagini.length !== 0){
        const sezioneArgument = document.querySelector(".argument");

        for(let i = 0; i < 2; i++){
            div[i] = document.createElement("div");
            div[i].classList.add("sezione");
            const titoloh1 = document.createElement("h1");
            titoloh1.appendChild(document.createTextNode(titolo[i]));
            div[i].appendChild(titoloh1);
    
            const divPreferiti = document.createElement("div");
            divPreferiti.classList.add("preferito");
            divPreferiti.appendChild(document.createTextNode("Preferiti"));
            div[i].appendChild(divPreferiti);
            if(i === 0){
                const divImg = document.createElement("div");
                divImg.classList.add("size");
                const immagine = [];
                for(let j = 0; j < 2; j++){
                    immagine[j] = document.createElement("img");
                    immagine[j].src = immagini[j];
                    divImg.appendChild(immagine[j]);
                }
                div[i].appendChild(divImg);
                const parag = document.createElement("div");
                const paragNascos = document.createElement("p");
                paragNascos.innerHTML = paragrafi[i];
                paragNascos.classList.add("dettaglinascosti");
                parag.appendChild(paragNascos);
                const paragNotNascos = document.createElement("p");
                paragNotNascos.classList.add("dettagli");
                paragNotNascos.innerHTML = "Mostra dettagli";
                parag.appendChild(paragNotNascos);
                div[i].appendChild(parag);
                
            }else{
                const divCenter = document.createElement("div");
                divCenter.classList.add("center");
                const divImgLast = document.createElement("img");
                divImgLast.src = immagini[2];
                divCenter.appendChild(divImgLast);
                div[i].appendChild(divCenter);
    
                const paragNascos = document.createElement("p");
                paragNascos.innerHTML = paragrafi[i];
                paragNascos.classList.add("dettaglinascosti");
                divCenter.appendChild(paragNascos);
    
                const paragNotNascos = document.createElement("p");
                paragNotNascos.classList.add("dettagli");
                paragNotNascos.innerHTML = "Mostra dettagli";
                divCenter.appendChild(paragNotNascos);
    
                div[i].appendChild(divCenter);
            }
            sezioneArgument.appendChild(div[i]);
        }
        console.log("Elementi caricati");
        loadDiv();

    }
}

