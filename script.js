// TODO dati json
let requestURL=`/armiAntiche.json`; //indirizzo
let request=new XMLHttpRequest(); //richiesta
request.open("get",requestURL); //la richiesta apre il file dell'indirizzo
request.responseType=`json`; //la interpreta come file JSON
request.send(); //invia la richiesta al server

request.onload=function () { //quando carica la richiesta..
    var armi=request.response; //variabile=risposta alla richiesta
    var array=armi.dueMani

    for (let index = 0; index < array.length; index++) {
        console.log(`Armi:`, armi.dueMani[index].nome);        
    }

}

//TODO form
const form=document.querySelector(`#form`);
const username=document.querySelector(`#username`);
const email=document.querySelector(`#email`);
const password=document.querySelector(`#password`);
const errorMessage=document.querySelector(`#errorMessage`);

form.addEventListener(`submit`,(e)=>{
    let messages=[];

    if (password.value===''||password.value===null) {
        messages.push('- Password obbligatoria');
        password.style.borderLeft='5px solid red';
    }
    if (password.value.length<=5||password.value.length>=21) {
        messages.push('- La password deve avere tra 6 e 20 caratteri');
        password.style.borderLeft='5px solid red';
        password.style.color='red';
    }

    if (email.value===''||email.value===null) {
        messages.push('- Email obbligatoria');
        email.style.borderLeft='5px solid red';
    }


    if (messages.length>0) {
        e.preventDefault();
        errorMessage.style.display='block';
        errorMessage.innerText=messages.join(`\n`)
    }
})