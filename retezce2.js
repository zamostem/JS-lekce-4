/* cvičení 2 - e-maily
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/

const email = prompt("Zadej email:");
const atIndex = email.indexOf("@");

const parsedEmail = {
    userName: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1, email.length),
};

document.body.innerHTML += "<p>Uživatelské jméno: " + parsedEmail.userName + "</p>";
document.body.innerHTML += "<p>Doména: " + parsedEmail.domain + "</p>";

