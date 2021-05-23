fetch("http://localhost/poolparty/homework/abbonati/php/obtain_pools.php").then(onPromise).then(loadPools);

function onPromise(promise){
    return promise.json();
}



function loadPools(json){
    console.log(json);
    for(let i = 0; i < json.length; i++){
        const option = document.createElement("option");
        option.value = json[i].ID;
        option.innerHTML = json[i].Nome;
        selection.appendChild(option);
    }

}
const nome = document.querySelector('[name="nome"]');
const cognome = document.querySelector('[name="cognome"]');
const data = document.querySelector('[name="data"]');
const selection = document.querySelector('[name="piscina"]');
const submit = document.querySelector('[type="submit"]');
const inizio = document.querySelector('[name="dataabb"');
console.log(inizio);
submit.addEventListener("click", submitForm);

const time = new Date;

function submitForm(event){
   const save = new Date(data.value);
   inizio.value = time.toISOString().split('T')[0];
   console.log(inizio.value)
   const saveInizio = new Date(inizio.value);
   event.preventDefault();
    if(nome.value.length !== 0){
        console.log("Nome accertato");
        if(cognome.value.length !== 0){
            console.log("Cognome accertato");
            if(save < time){
                console.log("Nascita accertata");
                //if(/*saveInizio > time */ false){
                    console.log("Inizio accertato");
                    const form = document.querySelector("form");
                    const form_request = {method: 'post', body: new FormData(form)};
                    fetch("http://localhost/poolparty/homework/abbonati/php/insert_client.php",form_request).then(onPromise).then(status);
               // }
 
            }else{
                div.innerHTML = "Data di nascita sbagliata";
                div.classList.add("red");
                div.classList.remove("green");
            }
        }else{
            div.innerHTML = "Non hai inserito il cognome";
            div.classList.add("red");
            div.classList.remove("green");
        }
    }else{
        div.innerHTML = "Non hai inserito il nome";
        div.classList.add("red");
        div.classList.remove("green");
    }
}

const div = document.querySelector(".status");

function status(json){
    console.log(json);
    if(json){
        div.innerHTML = nome.value+" ti sei registrato, finalmente fai parte della ciurma!";
        div.classList.add("green");
        div.classList.remove("red");
    }else{
        div.innerHTML = "Sei già registrato!";
        div.classList.add("red");
        div.classList.remove("green");
    }
}