const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekPalindrome() {
    rl.question("Masukan Kata untuk mengecek palindrome menggunakan perulangan : ", function (inputKata) {
        let kata = String(inputKata);
        let panjangKata = kata.length;
        let kataTerbalik = "";
        let isPalindrome = true;

        for (let i = panjangKata - 1; i >= 0; i--) {
            kataTerbalik += kata[i];
        }

        for (let i = 0; i < panjangKata; i++) {
            if (kata[i] !== kataTerbalik[i]) {
                isPalindrome = false;
                break;
            }
        }

        console.log("Kata Sesudah Dibalik adalah: " + kataTerbalik);

        if (isPalindrome) {
            console.log("Kata tersebut adalah palindrome.");
        } else {
            console.log("Kata tersebut bukan palindrome.");
        }

        rl.question("Ingin mengecek kata lain? (y/n) : ", function (jawaban) {
            if (jawaban.toLowerCase() === 'y') {
                cekPalindrome();
            } else {
                console.log("Program selesai.");
                rl.close();
            }
        });
    });
}

cekPalindrome();