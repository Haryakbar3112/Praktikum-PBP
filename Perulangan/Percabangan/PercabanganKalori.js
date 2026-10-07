const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalKalori = 0;
let totalLari = 0;
let totalPushup = 0;
let totalPlank = 0;

function tampilkanHasil() {
    console.log("\n===== HASIL =====");
    console.log("Kalori dari Lari    : " + totalLari + " kalori");
    console.log("Kalori dari Push-up : " + totalPushup.toFixed(2) + " kalori");
    console.log("Kalori dari Plank   : " + totalPlank + " kalori");
    console.log("Total kalori terbakar: " + totalKalori.toFixed(2) + " kalori");
    rl.close();
}

function pilihOlahraga() {
    console.log("\nPilih olahraga:");
    console.log("1. Lari (60 kalori setiap 5 menit)");
    console.log("2. Push-up (200 kalori setiap 30 menit)");
    console.log("3. Plank (5 kalori setiap 1 menit)");
    console.log("4. Selesai / Hitung total");

    rl.question("Masukkan pilihan (1-4) : ", function (inputPilihan) {
        let pilihan = Number(inputPilihan);

        if (pilihan === 4) {
            tampilkanHasil();
            return;
        }

        if (isNaN(pilihan) || pilihan < 1 || pilihan > 3) {
            console.log("Pilihan tidak valid, coba lagi.");
            pilihOlahraga();
            return;
        }

        rl.question("Masukkan lama waktu (menit) : ", function (inputMenit) {
            let menit = Number(inputMenit);

            if (isNaN(menit) || menit <= 0) {
                console.log("Lama waktu harus berupa angka lebih dari 0.");
                pilihOlahraga();
                return;
            }

            let kalori = 0;
            if (pilihan === 1) {
                kalori = (menit / 5) * 60;
                totalLari += kalori;
                console.log("Lari " + menit + " menit membakar " + kalori + " kalori.");
            } else if (pilihan === 2) {
                kalori = (menit / 30) * 200;
                totalPushup += kalori;
                console.log("Push-up " + menit + " menit membakar " + kalori.toFixed(2) + " kalori.");
            } else {
                kalori = menit * 5;
                totalPlank += kalori;
                console.log("Plank " + menit + " menit membakar " + kalori + " kalori.");
            }

            totalKalori += kalori;
            pilihOlahraga();
        });
    });
}

console.log("=== Program Penghitung Kalori Olahraga ===");
pilihOlahraga();