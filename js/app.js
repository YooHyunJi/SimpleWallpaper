const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);


if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogInSubmit);
}else{
    setGreeting();
}


function onLogInSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    setGreeting();
}


function setGreeting(){
    userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerHTML = `Hello ${userName}!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}