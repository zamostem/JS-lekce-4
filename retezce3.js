// cvičení 3

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