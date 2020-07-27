function readFortune() {
    var newFortune = document.getElementById('fortune');
    var personFirst = document.getElementById('firstName');
    var personLast = document.getElementById('lastName');
    var age = document.getElementById('age');
    var birthMonth = document.getElementById('birthMonth');
    var color = document.getElementById('color');
    var siblings = document.getElementById('siblings');
    var yearsToRetirement;
    var bankBalance;


    if (age % 2 == 0) {
        yearsToRetirement = 20;
    } else {
        yearsToRetirement = 300;
    }

    if (birthMonth <= 6) {
        bankBalance = "$1 million"
    } else {
        bankBalance = "$2 million"
    }

    newFortune.innerHTML =
        "Hello " + personFirst.value + " " + personLast.value +
        ". You will retire in " + yearsToRetirement + " years with " + bankBalance + " dollars in the bank."
        ;
}