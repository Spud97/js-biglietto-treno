const chiloMetri = prompt("Km da percorrere")
const etaUtente = prompt("Età")
const prezzoBiglietto = km * 0.21;

if (eta < 17) {
    prezzo = ((km * 0.21) - (((km * 0.21) * 20) / 100))
} else if (eta >= 65) {
    prezzo = ((km * 0.21) - (((km * 0.21) * 40) / 100))
}

chiloMetri = document.getElementById("km");
etaUtente = document.getElementById("eta");
prezzoBiglietto = document.getElementById("prezzo");

chiloMetri.innerHTML = `${km}`
etaUtente.innerHTML = `${eta}`
prezzoBiglietto.innerHTML = `${prezzo}`

console.log (km, eta, prezzo)