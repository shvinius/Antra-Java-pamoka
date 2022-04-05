window.onload = function() {
    let pirmosKrastinesLaukelis;
    let antrosKrastinesLaukelis;
    let plotoSkaiciavimoMygtukas;
    let plotoRezultatoPastraipa;

    pirmosKrastinesLaukelis = document.getElementById("pirmosKrastinesIvedimas");
    console.log(pirmosKrastinesLaukelis);           // testuoju ar gerai išsaugojo - išvedu tą kintamąjį, kad pamatyti kas jame yra išsaugota

    antrosKrastinesLaukelis = document.getElementById("antrosKrastinesIvedimas");
    console.log(antrosKrastinesLaukelis);

    plotoSkaiciavimoMygtukas = document.getElementById("plotoSkaiciavimoMygtukas");
    console.log(plotoSkaiciavimoMygtukas);

    plotoRezultatoPastraipa = document.getElementById("plotoRezultatoPastraipa");
    console.log(plotoRezultatoPastraipa);


    plotoSkaiciavimoMygtukas.onclick = function() {
        console.log("Paspaudžiau mygtuką");  // testuoju ar veikia mygtukas - jeigu išveda tekstą, kai paspaudžiu mygtuką - reiškias veikia.
        let krastine1;
        let krastine2;
        let plotas;

        krastine1 = pirmosKrastinesLaukelis.valueAsNumber;
        krastine2 = antrosKrastinesLaukelis.valueAsNumber;

        console.log(krastine1);
        console.log(krastine2);

        plotas = skaiciuotiPlotaStaciakampio(krastine1, krastine2);
        console.log("Stačiakmpio plotas yra: " + plotas);

        plotoRezultatoPastraipa.innerHTML = "Stačiakampio plotas yra: " + plotas;
    }

}

// Papildomos funkcijos
function skaiciuotiPlotaStaciakampio(a, b) {
    let rezultatas;
    rezultatas = a * b;
    return rezultatas;
}

