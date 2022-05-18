let chiloMetri = prompt("Km da percorrere")
let etaUtente = prompt("Età")
let prezzoBiglietto = chiloMetri * 0.21;

if (etaUtente < 17) {
    prezzoBiglietto = ((chiloMetri * 0.21) - (((chiloMetri * 0.21) * 20) / 100))
} else if (eta >= 65) {
    prezzoBiglietto = ((chiloMetri * 0.21) - (((chiloMetri * 0.21) * 40) / 100))
} else {
    prezzoBiglietto = chiloMetri * 0.21
}

chiloMetri = document.getElementById("km");
etaUtente = document.getElementById("eta");
prezzoBiglietto = document.getElementById("prezzo");

chiloMetri.innerHTML = `${chiloMetri}`
etaUtente.innerHTML = `${etaUtente}`
prezzoBiglietto.innerHTML = `${prezzoBiglietto}`

console.log (km, eta, prezzo)