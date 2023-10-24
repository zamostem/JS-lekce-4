// cvičení 1
const title = "Pán prstenů";

document.body.innerHTML += title.toUpperCase();
document.body.innerHTML += `<br>`;​
document.body.innerHTML += title.slice(0, 5);
document.body.innerHTML += `<br>`;​
document.body.innerHTML += title.slice(6, 11);
document.body.innerHTML += `<br>`;​
​document.body.innerHTML += title.slice(title.length - 5, title.length);
document.body.innerHTML += `<br>`;​

