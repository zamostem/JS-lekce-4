/* cvičení 2 - cena vstupenky
Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

Založte si webovou stránku s JavaScriptem.
Nechte uživatele zadat jeho věk.
Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
0 euro pro návštěvníky mladší 6 let,
65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
50 % ze základní ceny pro ostatní (senior).
Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
*/

const vekUzivatele = prompt("Zadejte věk:");
const plnaCena = 12;
let cena = 0;

if (vekUzivatele < 6) {
  cena = 0;
} else if (vekUzivatele >= 6) {
  cena = Math.round(0.65 * plnaCena);
} else if (vekUzivatele >= 27) {
  cena = plnaCena;
} else if (vekUzivatele > 65) {
  cena = Math.round(0.5 * plnaCena);
}

document.body.innerHTML = `<p>Cena vstupenky je ${cena} €.</p>`