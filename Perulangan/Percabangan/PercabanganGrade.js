const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Nilai : ", function (inputNilai) {
    let nilai = parseFloat(inputNilai);
    let grade;

    if (nilai >= 85) {
        grade = "A";
    } else if (nilai >= 70) {
        grade = "B";
    } else if (nilai >= 60) {
        grade = "C";
    } else if (nilai >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log("Nilai Anda : ", nilai);
    console.log("Grade : ", grade);
    rl.close();
});