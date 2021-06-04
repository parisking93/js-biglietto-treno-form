var genera = document.getElementById('genera');
 
// call back function click genera
genera.addEventListener('click', function(){
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;
    var codiceRandom = Math.floor(Math.random() * (100000 - 90000) + 90000);
    var carrozzaRandom = Math.floor(Math.random() * 9) + 1 ;
    var prezzoCorsa = km * 0.21;

    // controllo se c'è lo sconto 
    if (eta == 'over 65') {
        prezzoCorsa *= 0.6;
    } else if (eta == 'minorenne') {
        prezzoCorsa *= 0.8;
    }
    // output
    document.getElementById('sconto').innerHTML = 'sconto ' + '<br>' + eta;
    document.getElementById('carrozza').innerHTML = carrozzaRandom;
    document.getElementById('codice-cp').innerHTML = codiceRandom;
    document.getElementById('costo').innerHTML = prezzoCorsa.toFixed(2) + ' €';
});