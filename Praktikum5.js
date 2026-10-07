const readline = require ("readline");
const rl = readline .createInterface ({
    input : process.stdin,
    output : process.stdout,
});

rl.question ( "Masukan Angka : " , function (angka) {
    angka = Number(angka);
    if (angka % 2 === 0) {
        console.log ( "angka " , angka, " adalah bilangan genap.");
    } else { 
        console.log ( "angka " , angka, "Adalah Bilangan Ganjil.");
    }
    rl.close();
});