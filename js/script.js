var genera = document.getElementById('genera');
 
// call back function click genera
genera.addEventListener('click', function(){
    var nome = document.getElementById('nome').value;
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    var km = parseFloat(document.getElementById('km').value);
    var eta = document.getElementById('eta').value;
    eta = eta.charAt(0).toUpperCase() + eta.slice(1);
    var codiceRandom = Math.floor(Math.random() * (100000 - 90000) + 90000);
    var carrozzaRandom = Math.floor(Math.random() * 9) + 1 ;
    var prezzoCorsa = km * 0.21;

    // controllo se c'è lo sconto 
    if (eta == 'Over 65') {
        prezzoCorsa *= 0.6;
    } else if (eta == 'Minorenne') {
        prezzoCorsa *= 0.8;
    } else {
        eta = 'Nessuno';
    }
    
    // controllo che se l'utente inserisci il cognome allora la prima lettera del cognome è uppercase
    for (i = 0; i < nome.length; i++) {
        if (nome[i] == ' ') {
            var cognome = nome.slice(++i);
            nome = nome.slice(0,i);
            cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
            var addCognome = true;
        }
    }

    if (nome !== "" && !(isNaN(km)) && isNaN(nome)) {
        // output
        document.getElementById("invisibile").className = "flex"; 
        if (addCognome == !(undefined)) {
            document.getElementById('nome-pass').innerHTML = nome + cognome;
        } else {
            document.getElementById('nome-pass').innerHTML = nome;
        }
        document.getElementById('sconto').innerHTML = 'Sconto ' + '<br>' + eta;
        document.getElementById('carrozza').innerHTML = carrozzaRandom;
        document.getElementById('codice-cp').innerHTML = codiceRandom;
        document.getElementById('costo').innerHTML = prezzoCorsa.toFixed(2) + ' €';

    } else {
        alert('Inserisci i GIUSTI dati nei campi o non lasciare campi vuoti.... anche spazi prima delle parole o numeri non sono concessi');
    }
    
});

var annulla = document.getElementById('annulla');

annulla.addEventListener('click', function(){
    // azzero tutto 
    nome.value = "";
    km.value= "";
    document.getElementById("invisibile").className = "none"; 
});