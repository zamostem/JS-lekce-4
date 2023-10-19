// cvičení 1
const name = prompt("Zadejte jméno:")
const age = prompt("Zadejte věk:")
const password = prompt("Zadejte heslo:")

if(age >= 65) {
    document.body.innerHTML = `věk v pořádku`
    if(password.length >= 8) {
        document.body.innerHTML = `heslo v pořádku`
    } else {
        document.body.innerHTML = `slabé heslo`
    }
} else {
    document.body.innerHTML = `nízký věk`
}

// cvičení 2

