let count = 0

function einMehr() {
    count += 1
    document.getElementById("counter").innerHTML = count;
}
function einWeniger() {
    count -= 1
    document.getElementById("counter").innerHTML = count;
}
function zehnMehr() {
    count += 10
    document.getElementById("counter").innerHTML = count;
}
function zehnWeniger() {
    count -= 10
    document.getElementById("counter").innerHTML = count;
}
function hundertMehr() {
    count += 100
    document.getElementById("counter").innerHTML = count;
}
function hundertWeniger() {
    count -= 100
    document.getElementById("counter").innerHTML = count;
}
function resetNull() {
    count = 0
    document.getElementById("counter").innerHTML = 0;
}
// es geht auch mit count=count * 0 oder mit count=count-count
// Funktion geht nur wenn der Funktionsname resetNull. reset geht nicht und resetNULL geht auch nicht. Der Name wird aber als Funktionsname erkannt und erscheint in blau. Wieso?
function malZwei() {
    count *= 2
    document.getElementById("counter").innerHTML = count;
}

 // count;
    // document.getElementById("counter").innerHTML = count;

// function Rechner(event) {
//     event.preventDefault();

//     document.getElementById("counter").value + 1;
//     const print = document.getElementById("counter");
//     document.getElementById("counter").innerHTML = ausgabeZahl;
// }

//  textField = document.getElementById("number"); textField.value = "number" + 1;

// function einMehr(event) {
//     let Ergebnis = document.getElementById("number").value * 2;
// }

//     const alter2 = document.getElementById("alter2").value;
// let Differenz = alter1 - alter2;
// Differenz *= -1;
