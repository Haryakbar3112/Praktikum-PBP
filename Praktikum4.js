const readline = require ( "readline");
const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

rl.question( "Masukan Umur Anda : ", function (umur) {
    umur = parseInt (umur);
    console.log("umur anda : ", umur);
    console.log ( "Tahun Depan Umur Anda : ", umur + 1);
    rl.close();
});