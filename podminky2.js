// cvičení 2

const vekUzivatele = prompt("Zadejte věk:");
const plnaCena = 12;

const cena = "";
if (vekUzivatele < 6) {
  cena = 0;
} else if (vekUzivatele >= 6) {
  cena = Math.round(0.65 * plnaCena);
} else if (vekUzivatele >= 27) {
  cena = plnaCena;
} else if (vekUzivatele > 65) {
  cena = Math.round(0.5 * plnaCena);
}

document.body.innerHTML = `<p>Cena vstupenky je ${cena} €.`