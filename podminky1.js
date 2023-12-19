/* cvičení 1
V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).
*/
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


