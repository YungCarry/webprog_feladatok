
function osszead(a, b) {
    return a + b;
}

function kivonas(a, b) {
    return a - b;
}

function szorzas(a, b) {
    return a * b;
}

function osztas(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Hiba: Nullával nem lehet osztani";
    }
}


function szamol(alapmuvelet, ertek1, ertek2) {
    switch (alapmuvelet) {
        case osszead:
            return osszead(ertek1, ertek2);
        case kivonas:
            return kivonas(ertek1, ertek2);
        case szorzas:
            return szorzas(ertek1, ertek2);
        case osztas:
            return osztas(ertek1, ertek2);
        
    }
}

// Ellenőrzés
let result = szamol(osszead, 5, 3);
console.log('Az összeadás eredménye: 8, a számolt érték: ' + result);

result = szamol(kivonas, 8, 2);
console.log('A kivonás eredménye: 6, a számolt érték: ' + result);

result = szamol(szorzas, 4, 6);
console.log('A szorzás eredménye: 24, a számolt érték: ' + result);

result = szamol(osztas, 9, 3);
console.log('Az osztás eredménye: 3, a számolt érték: ' + result);