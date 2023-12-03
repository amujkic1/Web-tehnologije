//Varijable koje prate da li su predmeti sa prve/druge godine vidljivi
let vidljivaPrva = false; 
let vidljivaDruga = false;

function prvaGodina() {
    const predmetiPrvaGodina = document.getElementById("predmetiPrvaGodina");

    //Ako su predmeti izlistani, sakrij ih
    if (vidljivaPrva) {
        predmetiPrvaGodina.innerHTML = ''; // Ukloni vidljivi sadržaj
        vidljivaPrva = false; // Ažuriraj stanje predmeti vidljivi/nisu vidljivi
    } else {
        // Ako predmeti nisu vidljivi, izlistaj ih
        let predmeti = ["IM1", "IF1", "OE", "LAG", "UUP", "IM2", "TP", "OS", "VIS", "MLTI"];

        for (let predmet of predmeti) {
            const p = document.createElement("p");
            p.innerText = '-' + predmet;
            predmetiPrvaGodina.appendChild(p);
        }

        vidljivaPrva = true; // Ažuriraj stanje predmeti vidljivi/nisu vidljivi
    }
}

function drugaGodina() {
    const predmetiDrugaGodina = document.getElementById("predmetiDrugaGodina");

    //Ako su predmeti izlistani, sakrij ih
    if (vidljivaDruga) {
        predmetiDrugaGodina.innerHTML = ''; // Ukloni vidljivi sadržaj
        vidljivaDruga = false; // Ažuriraj stanje predmeti vidljivi/nisu vidljivi
    } else {
        // Ako predmeti nisu vidljivi, izlistaj ih
        let predmeti = ["ASP", "RPR", "DM", "LD", "OBP", "SP", "NA", "OOAD", "ORM", "AFJ", "RA", "RMA", "US", "DPS", "CCI"];

        for (let predmet of predmeti) {
            const p = document.createElement("p");
            p.innerText = '-' + predmet;
            predmetiDrugaGodina.appendChild(p);
        }

        vidljivaDruga = true; // Ažuriraj stanje predmeti vidljivi/nisu vidljivi
    }
}
