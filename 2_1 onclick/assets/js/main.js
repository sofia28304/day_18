// Gib dem Button die Funktion changeHeadline() mit.
//Im JavaScript nutzt du jetzt den Button, um der Headline das neue CSS Styling zuzuweisen.
//Erstelle auch einen Button “Headline zurücksetzen” und weise ihm die Funktion resetHeadline() zu.
//Wie der Name schon sagt, soll das Styling der Headline beim Klicken auf den Button zurückgesetzt werden, also musst du die Funktion im JavaScript dementsprechend definieren.

// function myFunction() {
//     document.getElementById("headStyle").style.color = "green";
// }
// function zurück() {
//     document.getElementById("headStyle").style.color = "black";
// }


function myFunction() {
    document.getElementById("headStyle").classList.add("newStyle");
}
function zurück() {
    document.getElementById("headStyle").classList.remove("newStyle");
}