const button = document.querySelector("#menuacomparsa");
const nav = document.querySelector("#menu");
button.addEventListener("click", showMenu);
const body = document.querySelector("body");


function showMenu(){
    nav.style.display = "flex";
    nav.classList.add("class");
    body.classList.add("scorrimento");
    button.addEventListener("click", removeMenu);
    button.removeEventListener("click", showMenu);
}

function removeMenu(){
    nav.style.display = "none";
    nav.classList.remove("class");
    body.classList.remove("scorrimento");
    button.addEventListener("click", showMenu);
    button.removeEventListener("click", removeMenu);


}