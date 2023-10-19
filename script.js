

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

const order = {
    id: 37214,
    product: "pěnová matrace",
    delivery: "28.10.2023",
};

document.body.innerHTML = `
<h2>Detail objednavky</h2>

<p>ID objednavky: ${order.id}</p>
<p>Nazev produktu: ${order.product}</p>
<p>Ocekavana doba: ${order.delivery}</p>
<p>Delka jmena produktu: ${order.product.length}</p>
<p>?ateaticka operace: ${365 + 44 - 12}</p>
`
document.body.innerHTML += title.length;
 // znak ` - alt gr +ý

const vek = 18
const preference = "cervene"
const naSklade = true
const dostupne = false

 // < <= > >=
 // == === - 3x= kontrolují nejen hodnotu, ale i datový typ, v JavaScriptu vždy používáme ===!
 // != !==

 if(naSklade === false) { 
    document.body.innerHTML = `<p>produkt je na sklade</p>`
} else { 
    document.body.innerHTML = `<p>produkt neni na sklade</p>`
}

 // String vs. Number
/*if("100" === "100") {
    document.body.innerHTML = `<p>pravda</p>`
} else {
    document.body.innerHTML = `<p>nepravda</p>`
}
*/

 /*if(vek >= 18) {
    document.body.innerHTML = `Je ti vic nez 18, ,uzes nakupovat`

    if(preference === "cervene") {
        document.body.innerHTML = `Je ti vic nez 18, muzes nakupovat, tady je vyber cerveneho vina`
    }
 } else {
    document.body.innerHTML = `Je ti mene nez 18, nemuzes nakupovat`
 }
 */

const znamka = 1

if(znamka === 1) {
    document.body.innerHTML = `vyborny`
} else if(znamka === 2) {
    document.body.innerHTML = `chvalitebny`
} else if(znamka === 3) {
    document.body.innerHTML = `dobry`
} else if(znamka === 4) {
    document.body.innerHTML = `dostatecny`
} else {
    document.body.innerHTML = `nedostatecny`
}

