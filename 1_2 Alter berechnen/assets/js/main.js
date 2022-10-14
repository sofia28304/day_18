// function berechneAlter(event) {
//     // Website Reload wird verhindert
//     event.preventDefault();

//     const geburtsJahr = document.getElementById("Geburtsjahr").value - 2022;

//     // spricht das element mit der Id "result" und beschreibt diese mit Inhalt aus Variable number.
//     document.getElementById("result").innerHTML = berechnung;

// }

// Hier nochmal meine Avriablen Namen anpassen!|
function AlterBerechnen(event) {
    event.preventDefault();

    const eingabeZahl = document.getElementById("Geburtsjahr").value;

    document.getElementById("output").innerHTML = 2022 - eingabeZahl
}