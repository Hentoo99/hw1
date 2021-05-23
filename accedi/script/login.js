//login 
const button_login = document.querySelector('[name="invia"]');
button_login.addEventListener("click", loginButton);


function loginButton(event){
    event.preventDefault();
    const form = document.querySelectorAll("form")[0];
    const form_request = {method: 'post', body: new FormData(form)};
    fetch("http://localhost/poolparty/homework/accedi/php/login.php", form_request).then(onPromise).then(login_result);
}
function login_result(json){
    const success = document.querySelector(".codes");
  
   if(json){
        //andato a buon fine
       
        success.classList.add("done");
        success.classList.remove("error");
        success.innerHTML = "Hai effettuato il login!";

    }else{
        success.classList.add("error");
        success.classList.remove("done");
        success.innerHTML = "Username o password sbagliata...";
    }
}
//SCRIPT PER LA REGISTRAZIONE
const username = document.querySelector('[name="nuser"]');
const password = document.querySelector('[name="npass"]');
const invia = document.querySelector('[name="ninvia"]');
const rpassword = document.querySelector('[name="rpass"]');
console.log(rpassword);
rpassword.addEventListener("keyup", equalPassword);

function equalPassword(event){
  
    if(rpassword.value == password.value){
        changeColor(2);
        checkEqualPass = true;

    }else{
        ripristina(2);
        checkEqualPass = false;
    }
}

invia.addEventListener("click", checkBeforeSubmint);

function checkBeforeSubmint(event){
    event.preventDefault();
    if(checkLength){
        if(checkUpperCase){
            if(checkEqualPass){
                //invio il form
                const form = document.querySelectorAll("form")[1];
                const form_request = {method: 'post', body: new FormData(form)};
                fetch("http://localhost/poolparty/homework/accedi/page_login.php", form_request).then(onPromise).then(show);
            
            }
        }
    }
}


function onPromise(promise){
    console.log("Promise");
    return promise.json();
}
function show(json){
    const success = document.querySelector(".codes");
  
   if(json){
        //andato a buon fine
       
        success.classList.add("done");
        success.classList.remove("error");
        success.innerHTML = "Utente registrato! Effettua il login!";

    }else{
        success.classList.add("error");
        success.classList.remove("done");
        success.innerHTML = "Utente già presente! Effettua il login invece...";
    }
}

let checkLength = false;
let checkUpperCase = false;
let checkEqualPass = false;

const section = document.querySelector("section");
const paragraph = document.querySelectorAll(".check, .hidden p");


password.addEventListener("keyup", checkPass);

function checkPass(){
    equalPassword();
    if(password.value.length === 0){
        ripristina(0);
        ripristina(1);
        checkLength = false;
        checkUpperCase = false;
    }

   if(password.value.length >= 8 && password.value.length <= 16){
       changeColor(0);
       checkLength = true;

   }else{
       ripristina(0);
       checkLength = false;
   }

   if(hasUpperCase(password.value)){
       changeColor(1);
       checkUpperCase = true;
   }

   
}

function changeColor(int){
    paragraph[int].classList.remove("red");
    paragraph[int].classList.add("green");
}
function ripristina(int){
    
    paragraph[int].classList.remove("green");
    paragraph[int].classList.add("red");
    
}
//funzione che mi controlla se la stringa abbaia almeno un carattere maiuscolo
function hasUpperCase(string){
    return string.match(/[a-z]/) && string.match(/[A-Z]/);
}

const buttonRegister = document.querySelector(".butregi");
buttonRegister.addEventListener("click", showRegister);
const registerDivs = document.querySelectorAll(".hidden");
const login = document.querySelector(".login");



function showRegister(event){
    event.preventDefault();
    const success = document.querySelector(".codes");
    success.innerHTML = [];

    
    for(let i = 0; i < registerDivs.length; i++){
        registerDivs[i].classList.remove("hidden");
    }
    login.classList.add("hidden");
    buttonRegister.parentNode.classList.add("hidden");
    buttonLogin.parentNode.classList.remove("hidden");
}

const buttonLogin = document.querySelector(".butlog");
buttonLogin.addEventListener("click", showLogin);

function showLogin(event){
    login.classList.remove("hidden");
    const success = document.querySelector(".codes");
    success.innerHTML = [];
    for(let i = 0; i < registerDivs.length; i++){
        registerDivs[i].classList.add("hidden");
    }
    buttonRegister.parentNode.classList.remove("hidden");
    buttonLogin.parentNode.classList.add("hidden");
}
