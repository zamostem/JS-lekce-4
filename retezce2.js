// cvičení 2

const email = prompt("Zadej email:");
const atIndex = email.indexOf("@");

const parsedEmail = {
    userName: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1, email.length),
};

document.body.innerHTML += "<p>Uživatelské jméno: " + parsedEmail.userName + "</p>";
document.body.innerHTML += "<p>Doména: " + parsedEmail.domain + "</p>";

