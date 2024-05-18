const sisiPertama = document.getElementById('sisi1')
const sisiKedua = document.getElementById('sisi2')
const sisiKetiga = document.getElementById('sisi3')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener('click', function () {
    let s1 = parseFloat(sisiPertama.value)
    let s2 = parseFloat(sisiKedua.value) 
    let s3 = parseFloat(sisiKetiga.value) 
    let k = s1 + s2 + s3
    output.innerHTML = `Diketahui sisi pertama ${s1} cm, sisi kedua ${s2} cm, sisi ketiga ${s3} cm, maka kelilingnya adalah ${k} cm`
})