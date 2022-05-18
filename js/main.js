const chiloMetri = prompt("Km da percorrere")
const etaUtente = prompt("Età")
let prezzoBiglietto = chiloMetri * 0.21;

if (etaUtente < 18) {
    prezzoBiglietto = ((chiloMetri * 0.21) - (((chiloMetri * 0.21) * 20) / 100)).toFixed(2)
} else if (etaUtente >= 65) {
    prezzoBiglietto = ((chiloMetri * 0.21) - (((chiloMetri * 0.21) * 40) / 100)).toFixed(2)
} else {
    prezzoBiglietto = (chiloMetri * 0.21).toFixed(2)
}

chiloMetriSegnati = document.getElementById("km");
etaUtenteSegnata = document.getElementById("eta");
prezzoBigliettoSegnato = document.getElementById("prezzo");

chiloMetriSegnati.innerHTML = `${chiloMetri}`
etaUtenteSegnata.innerHTML = `${etaUtente}`
prezzoBigliettoSegnato.innerHTML = `${prezzoBiglietto}`

console.log (km, eta, prezzo)