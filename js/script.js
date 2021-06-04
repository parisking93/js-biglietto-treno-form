var genera = document.getElementById('genera');
 
// call back function click genera
genera.addEventListener('click', function(){
    var nome = document.getElementById('nome').value;
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    var km = parseFloat(document.getElementById('km').value);
    console.log(typeof km);
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
    if (nome !== "" && !(isNaN(km)) && isNaN(nome)) {
        // output
        document.getElementById("invisibile").className = "block"; 
        document.getElementById('nome-pass').innerHTML = nome;
        document.getElementById('sconto').innerHTML = 'Sconto ' + '<br>' + eta;
        document.getElementById('carrozza').innerHTML = carrozzaRandom;
        document.getElementById('codice-cp').innerHTML = codiceRandom;
        document.getElementById('costo').innerHTML = prezzoCorsa.toFixed(2) + ' €';

    } else {
        alert('inserisci i giusti dati nei campi o non lasciare campi vuoti');
    }
    
});

var annulla = document.getElementById('annulla');

annulla.addEventListener('click', function(){
    // azzero tutto 
    nome.value = "";
    km.value= "";
    document.getElementById("invisibile").className = "none"; 
});