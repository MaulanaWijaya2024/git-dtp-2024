function hitung() {
   // Ambil nilai dari input
   const angka1 = parseFloat(document.getElementById('angka1').value);
   const angka2 = parseFloat(document.getElementById('angka2').value);
   const operasi = document.getElementById('operasi').value;
 
   // Lakukan perhitungan berdasarkan operasi yang dipilih
   let hasil;
   switch (operasi) {
     case 'tambah':
       hasil = angka1 + angka2;
       break;
     case 'kurang':
       hasil = angka1 - angka2;
       break;
     case 'kali':
       hasil = angka1 * angka2;
       break;
     case 'bagi':
       if (angka2 === 0) {
         hasil = "Tidak dapat membagi dengan nol";
       } else {
         hasil = angka1 / angka2;
       }
       break;
   }
 
   // Tampilkan hasil
   document.getElementById('hasil').textContent = hasil;
 }