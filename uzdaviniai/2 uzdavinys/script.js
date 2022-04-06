window.onload = function() {
    let pirmosLaukelis;
    let antrosLaukelis;
    let treciosLaukelis;
    let ketvirtosLaukelis;
    let rezultatoMygtukas;
    let atstumoRezultatas;

    pirmosLaukelis = document.getElementById("x1");
    console.log(pirmosLaukelis);
    antrosLaukelis = document.getElementById("y1");
    console.log(antrosLaukelis);
    treciosLaukelis = document.getElementById("x2");
    console.log(treciosLaukelis);
    ketvirtosLaukelis = document.getElementById("y2");
    console.log(ketvirtosLaukelis);
    rezultatoMygtukas = document.getElementById("rezultatoMygtukas");
    console.log(rezultatoMygtukas);
    atstumoRezultatas = document.getElementById("atstumoRezultatas");
    console.log(atstumoRezultatas);

    rezultatoMygtukas.onclick = function() {
        console.log ("Turi veikti");
        let pirmaKoordinate;
        let antraKoordinate;
        let treciaKoordinate;
        let ketvirtaKoordinate;
        let atstumas;

        pirmaKoordinate = pirmosLaukelis.valueAsNumber;
        antraKoordinate = antrosLaukelis.valueAsNumber;
        treciaKoordinate = treciosLaukelis.valueAsNumber;
        ketvirtaKoordinate = ketvirtosLaukelis.valueAsNumber;

        console.log(pirmaKoordinate);
        console.log(antraKoordinate);
        console.log(treciaKoordinate);
        console.log(ketvirtaKoordinate);

        atstumas = apskaiciuotiAtstumaTarpKoordinaciu(pirmaKoordinate, antraKoordinate, treciaKoordinate, ketvirtaKoordinate);
        console.log(atstumas);

        atstumoRezultatas.innerHTML = "Atstumas tarp koordinačių:" + atstumas;
    }
}
function apskaiciuotiAtstumaTarpKoordinaciu(a1, b1, a2, b2) {
    let rezultatas;
    rezultatas = Math.sqrt(Math.pow((a1-a2),2) + (Math.pow((b1-b2),2)));
    return rezultatas;
}
