/* cvičení 1 - vlastnosti a metody
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět písmen.
Vypište z názvu posledních pět písmen.
*/

const title = "Pán prstenů";

document.body.innerHTML += title.toUpperCase();
document.body.innerHTML += `<br>`;​
document.body.innerHTML += title.slice(0, 5);
document.body.innerHTML += `<br>`;​
document.body.innerHTML += title.slice(6, 11);
document.body.innerHTML += `<br>`;​
​document.body.innerHTML += title.slice(title.length - 5, title.length);
document.body.innerHTML += `<br>`;​

