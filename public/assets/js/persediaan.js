
let tahun = new Date().getFullYear();
let bulan = formatbulan(new Date());
let tgl = formattgl(new Date());
let compa = 1;
gudang = 0
const baseurl = "https://gi_pos.fikricloud.my.id/";
//const baseurl = "https://liberal-elf-brave.ngrok-free.app";
// const baseurl="https://serba-grosir.my.id";
let menu = 'persediaan';

let kateg = [];
var theMonths = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
// let company=(idx)=>{
//     compa=idx;
//     console.log(compa);
//     if (menu=='penjualan'){
//     penjualan();
//     }
//     if (menu=='persediaan'){
//       // document.getElementById("judul_persediaan1").innerHTML='Persediaan ';
//       persediaan();
//       }

//     return idx;

//   }

// # 18	Gudang 1	Stock/Gudang 1
// 	# 51	Stock	SB1/Stock
//     # 27	Stock	SB2/Stock
function company1() {
  compa = 1;
  gudang = 0;
  persediaan();

}

function company2() {
  compa = 2;
  gudang = 0;

  persediaan();
  //  ubahjualtahun()
  // jalankan;

}

function company3() {
  compa = 2;
  gudang = 27;
  persediaan();
}

//   pilih data perusahaan


var tabs = document.querySelectorAll(".tabs_wrap ul li");
var males = document.querySelectorAll(".male");
var females = document.querySelectorAll(".female");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    })

  })
})


// aktifkan menu bottom navvar
var pilihmenus = document.querySelectorAll(".nav__menu ul li a ")
pilihmenus.forEach((pm) => {
  pm.classList.remove('active-link')
})
pilihmenus[1].classList.add('active-link')
//text
var pilihtexts = document.querySelectorAll(".nav__menu ul li span ")
pilihtexts.forEach((tm) => {
  tm.classList.remove('active-link-text')
})
pilihtexts[1].classList.add('active-link-text')
// end

function persediaan() {
  //penambahan proxy  https://cors.iamnd.eu.org/?url= untuk menghindari sequrity
  console.log("persediaan")
  menu = 'persediaan'
  headerpersediaan();
  // document.getElementById("penjualan").hidden = true;
  // document.getElementById("persediaan").hidden = false;
  // document.getElementById("keuangan").hidden = true;
  // document.getElementById("setting").hidden = true;   




}



function headerpersediaan() {
  const url_headerpersedian = `${baseurl}/stock_persediaan/header/${compa}/subheader/${gudang}`;
  console.log(url_headerpersedian)
  fetch(url_headerpersedian, {
    method: 'GET',
  }).then(res =>
    res.json()).then(d => {
      console.log(d);
      tablepersediaan1(d.records);

    })


}



function tablepersediaan1(datajson) {


  let kategori = [];
  let jumlah = [];
  let nilai = [];
  let idheader = [];

  let totalbeli = 0;
  let totaljumlah = 0;

  let jsonData = datajson;
  let x = 0;

  for (x in jsonData) {
    totalbeli += jsonData[x].value;
    totaljumlah += jsonData[x].jumlah;

    kategori.push(jsonData[x].kategori);
    jumlah.push(jsonData[x].jumlah);
    nilai.push(jsonData[x].value);
    idheader.push(jsonData[x].id);


  } document.getElementById("back").innerHTML = '';
  document.getElementById("judul_persediaan1").innerHTML = 'Total Persediaan dengan Harga Beli';
  var myTableDiv = document.getElementById("table_persedian1");
  var strtable = '';
  // console.log('data:'+data.length);
  strtable = '<table width="100%" class="mytable">' +
    ' <thead>' +
    ' <tr>' +
    '     <th class="kiri">Kategori</th>' +
    '     <th class="kanan">Jumlah</th>' +
    '     <th class="kanan">Nilai</th>' +
    ' </tr>' +
    ' </thead>' +
    ' <tbody>';
  for (var i = 0; i < kategori.length; i++) {
    if (kategori[i] != 0) {
      strtable += '  <tr>     <td class="kiri" onclick="detail(' + idheader[i] + ',\'' + kategori[i] + '\')"><a href="#">' + (kategori[i]) + '</a></td>' +
        '     <td class="kanan">' + (jumlah[i]) + '</td>' +
        '     <td class="kanan">' + rupiah(nilai[i]) + '</td></tr>';

    };

  }

  strtable += '  </tbody>' +
    '<tfoot>' +
    '<tr>' +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan">' + (totaljumlah) + '</td>' +
    '  <td class="kanan">' + rupiah(totalbeli) + '</td>' +

    '</tr>' +
    '</tfoot>' +
    '                          </table>';


  myTableDiv.innerHTML = strtable;


}

function tabledetailpersediaan1(datajson) {


  let subheader = [];
  let jumlah = [];
  let nilai = [];

  let totalbeli = 0;
  let totaljumlah = 0;

  let jsonData = datajson;
  let x = 0;

  for (x in jsonData) {
    totalbeli += jsonData[x].value;
    totaljumlah += jsonData[x].jumlah;

    subheader.push(jsonData[x].subheader);
    jumlah.push(jsonData[x].jumlah);
    nilai.push(jsonData[x].value);


  }
  document.getElementById("judul_persediaan1").innerHTML = 'Kategori Product: ' + kateg[1];
  document.getElementById("back").innerHTML = '<span onclick="headerpersediaan();" ><a href="#">Back</a></span>';
  var myTableDiv = document.getElementById("table_persedian1");
  var strtable = '';
  // console.log('data:'+data.length);
  strtable = '<table width="100%" class="mytable">' +
    ' <thead>' +
    ' <tr>' +
    '     <th class="kiri">Nama Product</th>' +
    '     <th class="kanan">Jumlah</th>' +
    '     <th class="kanan">Nilai</th>' +
    ' </tr>' +
    ' </thead>' +
    ' <tbody>';
  for (var i = 0; i < subheader.length; i++) {
    if (subheader[i] != 0) {
      strtable += '  <tr>     <td class="kiri">' + (subheader[i]) + '</a></td>' +
        '     <td class="kanan">' + (jumlah[i]) + '</td>' +
        '     <td class="kanan">' + rupiah(nilai[i]) + '</td></tr>';
    };
  }

  strtable += '  </tbody>' +
    '<tfoot>' +
    '<tr>' +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan">' + (totaljumlah) + '</td>' +
    '  <td class="kanan">' + rupiah(totalbeli) + '</td>' +

    '</tr>' +
    '</tfoot>' +
    '                          </table>';


  myTableDiv.innerHTML = strtable;


}

function detail(idheader, namakategori) {
  const url_headerpersedian = `${baseurl}/stock_persediaan/subheader/${compa}/${idheader}/${gudang}`;
  //  console.log(url_bulan)
  fetch(url_headerpersedian, {
    method: 'GET',
  }).then(res =>
    res.json()).then(d => {
      console.log('respon' + d);
      kateg[0] = idheader;
      kateg[1] = namakategori;
      console.log('namakategori' + kateg);
      tabledetailpersediaan1(d.records);

    })



}
