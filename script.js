function pilKom() {
    let comp = Math.random();
// console.log(comp);

if ( comp < 0.34) return  'gajah';
if ( comp >= 0.34 && comp < 0.67) return 'semut';
    return 'orang';
};

//rules
function hasil (comp, player) {
if (player == comp)return 'SERI';
if ( player == 'gajah') return ( comp == 'orang') ? 'MENANG': 'KALAH';
if ( player =='orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
if ( player == 'semut')return (comp == 'orang') ? 'KALAH' : 'MENANG';
}

function putar (){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuAwal > 1000){
            clearInterval;
            return
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if ( i == gambar.length) i = 0;
    },100);
}
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = pilKom();
        const pilihanPlayer = pil.className;
        const hasilGame = hasil(pilihanKomputer, pilihanPlayer);

        // putar();

        // setTimeout(function () {
            const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasilGame;});
        // },1500)
        
});


// console.log(pilihan);
// const PGajah = document.querySelector('.gajah');
// PGajah.addEventListener('click', function(){
//     const pilihanKomputer = pilKom();
//     const pilihanPlayer = PGajah.className;
//     const hasilGame = hasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasilGame;
// });
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = pilKom();
//     const pilihanPlayer = pOrang.className;
//     const hasilGame = hasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasilGame;
// });
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = pilKom();
//     const pilihanPlayer = pSemut.className;
//     const hasilGame = hasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
//     const info = document.querySelector('.info');
//     info.innerHTML = hasilGame;
// });

// pemberitahuan
// alert('ezar');
// mikwsnjkmwbsk
// var angka = prompt('masukan nama anda');
// alert(angka);

// var konfirmasi = confirm('yakin');
// alert(konfirmasi);

// operator aritmetika + - / * %
// console.log(14 % 5);



// var angka = 1;
// while(angka <= 10) {
//     console.log('ezar');
// angka = angka + 1;
// }