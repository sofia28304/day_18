function BerechnenDiff(event) {
    event.preventDefault();

    const alter1 = document.getElementById("alter1").value;
    const alter2 = document.getElementById("alter2").value;

    let Differenz = alter1 - alter2;
    Differenz *= -1;

    document.getElementById("output").innerHTML = Differenz;
}