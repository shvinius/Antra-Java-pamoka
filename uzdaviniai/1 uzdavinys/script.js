window.onload = function() {
    let pirmosLaukelis;
    let antrosLaukelis;
    let plotoMygtukas;
    let plotoRezultatas;
    let perimetroMygtukas;

    pirmosLaukelis = document.getElementById("pirma");
    console.log(pirmosLaukelis);
    antrosLaukelis = document.getElementById("antra");
    console.log(antrosLaukelis);
    plotoMygtukas = document.getElementById("plotoMygtukas");
    console.log(plotoMygtukas);
    plotoRezultatas = document.getElementById("plotoRezultatas");
    console.log(plotoRezultatas);
    perimetroMygtukas = document.getElementById("perimetroMygtukas");
    console.log(perimetroMygtukas);

    plotoMygtukas.onclick = function() {
        console.log ("Veikia");
        let pirmaKrastine;
        let antraKrastine;
        let plotas;
    

        pirmaKrastine = pirmosLaukelis.valueAsNumber;
        antraKrastine = antrosLaukelis.valueAsNumber;

        console.log(pirmaKrastine);
        console.log(antraKrastine);

        plotas = apskaiciuotiStaciakampioPlota(pirmaKrastine, antraKrastine);
        console.log(plotas);
        

        plotoRezultatas.innerHTML = "Rezultatas:" + plotas;
    
    }
    perimetroMygtukas.onclick = function() {
        console.log ("Veikia");
        let pirmaKrastine;
        let antraKrastine;
        let perimetras;
    

        pirmaKrastine = pirmosLaukelis.valueAsNumber;
        antraKrastine = antrosLaukelis.valueAsNumber;

        console.log(pirmaKrastine);
        console.log(antraKrastine);

        perimetras = apskaiciuotiStaciakampioPerimetra(pirmaKrastine, antraKrastine);
        console.log(perimetras);
        

        plotoRezultatas.innerHTML = "Rezultatas:" + perimetras;
    }   
}    
function apskaiciuotiStaciakampioPlota(a, b) {
    let rezultatas;
    rezultatas = a * b;
    return rezultatas;
}
function apskaiciuotiStaciakampioPerimetra(a, b) {
    let rezultatas;
    rezultatas = 2 * (a + b);
    return rezultatas;
}