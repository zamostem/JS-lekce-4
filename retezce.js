// cvičení 1
const title = "Pán prstenů"

document.body.innerHTML += title.toUpperCase();
document.body.innerHTML += `<br>`;​
document.body.innerHTML += title.slice(0, 5);
document.body.innerHTML += `<br>`;​
document.body.innerHTML += title.slice(6, 11);
document.body.innerHTML += `<br>`;​
​document.body.innerHTML += title.slice(title.length - 5, title.length);
document.body.innerHTML += `<br>`;​


// cvičení 2
const email = prompt("Zadej email:");
const atIndex = email.indexOf("@");

const parsedEmail = {
userName: email.slice(0, atIndex),
domain: email.slice(atIndex + 1, email.length),
}

document.body.innerHTML += "<p>Uživatelské jméno: " + parsedEmail.userName + "</p>";
document.body.innerHTML += "<p>Doména: " + parsedEmail.domain + "</p>";
