// Der Name "doppeln" ist hier frei wählbar und kann alles sein. 

function wirDoppeln(event) {
    event.preventDefault();
    // die eventZeile tragen wir erstmal einfach so ein, warum weiß ich gerade nicht. Mach' es einfach.
    const ausgabeZahl = document.getElementById("number").value * 2;

    document.getElementById("output").innerHTML = ausgabeZahl;
    // document.write("output")

    // oder let Zahl = eingabeZahl * 2
    // für die Ausgabe in der Konsole wäre nötig:  console.log(output)
}


// wenn logInputValue stattfindet, dann soll  xy.innerHTML*2 event"
