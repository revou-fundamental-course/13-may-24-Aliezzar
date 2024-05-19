const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah
    ${l} cm2`
})

function showSelamat() {
    var now = new Date();
    var jam = now.getHours();
    var ucapan;

    if (jam >= 0 && jam < 12) {
        ucapan = "Selamat Pagiii";
    } else if (jam >= 12 && jam < 15) {
        ucapan = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
        ucapan = "Selamat Sore";
    } else {
        ucapan = "Selamat Malam";
    }

    var message = `${ucapan} pengunjung website!!`;
    alert(message);
}

// Memanggil showGreeting ketika halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    showSelamat();
});

const sisiPertama = document.getElementById('sisi1')
const sisiKedua = document.getElementById('sisi2')
const sisiKetiga = document.getElementById('sisi3')
const jawab = document.getElementById('hitung')
const keluar = document.getElementById('output')
jawab.addEventListener('click', function () {
    let s1 = parseFloat(sisiPertama.value)
    let s2 = parseFloat(sisiKedua.value) 
    let s3 = parseFloat(sisiKetiga.value) 
    let k = s1 + s2 + s3
    keluar.innerHTML = `Diketahui sisi pertama ${s1} cm, sisi kedua ${s2} cm, sisi ketiga ${s3} cm, maka kelilingnya adalah ${k} cm`
})
