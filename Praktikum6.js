const readline = require ( 'readline');
const  rl = readline.createInterface  ({
    input : process.stdin,
    output : process.stdout
});

rl.question ( "Masukan Nama Mahasiswa : " , function (inputNama){
    rl.question ( "Masukan Nilai Tugas : " , function (inputTugas) {
        rl.question ( "Masukan Nilai UTS : " , function (inputUTS) {
            rl.question ( "Masukan Nilai UAS : " , function (inputUAS) {
                let nama = String (inputNama);
                let nilaiTugas = parseFloat (inputTugas);
                let nilaiUTS = parseFloat (inputUTS);
                let nilaiUAS = parseFloat (inputUAS);

const nilaiAkhir = (nilaiTugas * 0.30) + (nilaiUTS * 0.30) + (nilaiUAS * 0.40); 
let grade;
if (nilaiAkhir >= 85) {
    grade = "A";
}else if (nilaiAkhir >= 70){
    grade = "B";
}else if (nilaiAkhir >= 60) {
    grade = "C";
}else if (nilaiAkhir >= 50) {
    grade = "D";
}else {
    grade = "E";
}

console.log ( "Nama Mahasiswa : ", nama);
console.log ( "Nilai Tugas : ", nilaiTugas);
console.log ( "Nilai UTS : ", nilaiUTS);
console.log ( "Nilai UAS : ", nilaiUAS);
console.log ( "Nilai Akhir : ", nilaiAkhir.toFixed(2));
console.log ( "Grade : ", grade);

            rl.close();
            });
        });
    });
});