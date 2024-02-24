// TODO
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