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

    var message = `${ucapan}, perkenalkan aku Aliezzar Wijaya, ini adalah website kalkulator pertamaku!`;
    alert(message);
}

// Memanggil showGreeting ketika halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    showSelamat();
});