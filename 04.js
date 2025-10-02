class Mahasiswa {
    constructor(nama, nim, ipk) {
        this.nama = nama; // Atribut publik
        this.nim = nim;   // Atribut publik
        let _ipk = ipk;   // Atribut private menggunakan closure

        // Getter untuk mengakses ipk
        this.getIpk = function() {
            return _ipk;
        };

        // Setter untuk mengubah ipk dengan validasi
        this.setIpk = function(ipkBaru) {
            if (ipkBaru >= 0 && ipkBaru <= 4.0) {
                _ipk = ipkBaru;
            } else {
                console.log('IPK harus antara 0 dan 4.0');
            }
        };
    }
}

// Membuat objek mahasiswa
let mahasiswa1 = new Mahasiswa('Budi Santoso', '123456789', 3.5);
let mahasiswa2 = new Mahasiswa('Ani Wijaya', '987654321', 3.8);

// Menampilkan data mahasiswa
console.log('=== Data Mahasiswa 1 ===');
console.log('Nama:', mahasiswa1.nama);
console.log('NIM:', mahasiswa1.nim);
console.log('IPK:', mahasiswa1.getIpk()); // Memanggil getter

// Mengubah IPK menggunakan setter
console.log('\n=== Mengubah IPK Mahasiswa 1 ===');
mahasiswa1.setIpk(3.75); // Valid
console.log('IPK baru:', mahasiswa1.getIpk());

mahasiswa1.setIpk(5.0); // Tidak valid
console.log('IPK tetap:', mahasiswa1.getIpk());

// Menampilkan data mahasiswa 2
console.log('\n=== Data Mahasiswa 2 ===');
console.log('Nama:', mahasiswa2.nama);
console.log('NIM:', mahasiswa2.nim);
console.log('IPK:', mahasiswa2.getIpk());
