// počet znaků
const password = prompt("Zadej heslo").length

document.body.innerHTML = password

// všechno velkým / malým písmem
document.body.innerHTML = "Kristyna".toUpperCase()
document.body.innerHTML = "Kristyna".toLowerCase()

/*
Ceske Budejovice
ceske budejovice
Ceske budejovice
ceske Budejovice
*/

// trim ořezává přebytečné mezery na začátku a na konci
document.body.innerHTML = "  Kristyna  ".trim() 

// slice - výřez slova, interval zleva uzavřený a zprava otevřený
document.body.innerHTML = "Kristyna".slice(3, 7)
//                         01234567 ->  "styn"
document.body.innerHTML = "Kristyna".indexOf("s")
//                         01234567 ->  "styn"