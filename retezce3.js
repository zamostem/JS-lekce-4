/* cvičení 3 - doručování
Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
*/

const address = {
    street: prompt("Ulice:"),
    number: prompt("Číslo popisné:"),
    city: prompt("Město:"),
    post_code: prompt("PSČ:"),
};

const content = `
    <address>
        <p> ${address.street + " " + address.number} </p>
        <p> ${address.post_code + " " + address.city} </p>
    </address>
`;

document.body.innerHTML += content