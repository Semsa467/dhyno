function tampilkan() {
    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let tahun = document.getElementById("tahun").value;

    // Hitung usia (tahun sekarang - tahun lahir)
    let sekarang = new Date().getFullYear();
    let usia = sekarang - tahun;

    // Tampilkan
    document.getElementById("hasil").innerHTML = `
        Nama : ${nama} <br>
        NIM : ${nim} <br>
        Usia : ${usia} tahun
    `;
}