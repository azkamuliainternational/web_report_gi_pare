

let tahun = new Date().getFullYear();
let bulan = formatbulan(new Date());
let tgl = formattgl(new Date());
let compa = 1;
let kasa = 0;
let kliktgl=1;
let klikbulan=1;
let kliktahun=1;
company_text('Diksi Senja')



// console.log('window.baseurl'+window.baseurl); 
const baseurl = window.baseurl;

let menu = "penjualan";
let kateg = [];
var theMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


function jalankan() {
  // console.log(
    // "index:" + idx + " kode perusahaan:" + compa + " kode kasa" + kasa
  // );
  if (menu == "penjualan") {
    penjualan();
  }
  if (menu == "persediaan") {

    persediaan();
  }
}

 

function company1() {
  

  compa = 1;
  kasa = 0;
  penjualan();


}

function company2() {

  compa = 2;
  kasa = 3;

  penjualan();
  //  ubahjualtahun()
  // jalankan;

}
function company3() {

  compa = 2;
  kasa = 1;
  penjualan();
}
function company4() {

  compa = 3;
  kasa = 0;
  penjualan();
}

function company5() {

  compa = 4;
  kasa = 0;
  penjualan();
}

function company_text(nama){
  const companyElements = document.getElementsByClassName("companyname");
  for (let element of companyElements) {
      element.innerHTML = nama;
  }
}


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
     company_text(tab.innerHTML);
    
    // document.querySelector(".companyname").innerHTML = ;
    // console.log(tab.innerHTML)
    var tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    })

  })
})



var tabs_chart1 = document.querySelectorAll(".tabs_wrap_chart1 ul li");

tabs_chart1.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs_chart1.forEach((tab) => {
      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    })

  })
})


var tabs_chart2 = document.querySelectorAll(".tabs_wrap_chart2 ul li");

tabs_chart2.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs_chart2.forEach((tab) => {
      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    })

  })
})


var tabs_chart3 = document.querySelectorAll(".tabs_wrap_chart3 ul li");

tabs_chart3.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs_chart3.forEach((tab) => {
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
var pilihmenus = document.querySelectorAll(".nav__menu ul li a ");
pilihmenus.forEach((pm) => {
  pm.classList.remove("active-link");
});
pilihmenus[0].classList.add("active-link");

var pilihtexts = document.querySelectorAll(".nav__menu ul li span ");
pilihtexts.forEach((tm) => {
  tm.classList.remove("active-link-text");
});
pilihtexts[0].classList.add("active-link-text");



document.getElementById("tgl").valueAsDate = new Date();



function penjualan() {
  menu = "penjualan";
 
  penjualantahun(tahun);
  // penjualanbulan(bulan);
  grafik_bulan();
  grafik_tgl();
  // penjualantgl(tgl)
}


function grafik_tahun(hasil) {
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  jsonData = hasil;

  let x = 0;
  for (x in jsonData) {
    totaljual += jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;
    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(
      jsonData[x].bulan.charAt(0).toUpperCase() + jsonData[x].bulan.slice(1)
    );
    margin.push(jsonData[x].margin / 1000);
  }

  addTable1(xaxis, data, margin, totaljual, totalmargin);

  var options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "(Dalam ribuan)",
      align: "left",
      margin: 0,
      offsetX: 0,
      offsetY: 0,

      floating: true,
      style: {
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: undefined,
        color: "blue",
      },
    },
    colors: ["#1D5D9B", "#03C988"],
    series: [
      {
        name: "Penjualan (" + rupiah(totaljual) + ")",
        type: "column",
        data: data,
      },
      {
        name: "Margin (" + rupiah(totalmargin) + ")",
        type: "column",
        data: margin,
      },
    ],
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "Tanggal",
      categories: xaxis,
      title: {
        text: "Tahun " + tahun,
        style: {
          color: "brown",
          fontSize: "12px",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Penjualan (Ribuan)",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: "#008FFB",
            fontWeight: 10,
            fontSize: "10px",
          },
          formatter: (value) => rupiah(value),
        },
        title: {
          text: undefined,
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
  };
  document.getElementById("grafik_penjualan_tahun").innerHTML = "";

  var chart1 = new ApexCharts(
    document.querySelector("#grafik_penjualan_tahun"),
    options
  );
  chart1.render();
}

async function grafik_bulan() {
  klikbulan=1;
  document.getElementById("table2").style.display = "none";
  document.getElementById("grafik_penjualan_bulan").style.display = "block";
  bulan =
  padTo2Digits(document.getElementById("bulan-dropdown").value) +
  document.getElementById("tahunbulan-dropdown").value;
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  let jsonData = await penjualanbulan(bulan);
  let x = 0;
  //console.log('bulan'+theMonths[+(bulan.substr(0,2))])

  for (x in jsonData) {
    totaljual = totaljual + jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;

    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(jsonData[x].tanggal);
    margin.push(jsonData[x].margin / 1000);
  }
  // console.log(data);
  // console.log(xaxis);
  // console.log("total jual"+totaljual);

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "(Dalam ribuan)",
      align: "left",
      margin: 0,
      offsetX: 0,
      offsetY: 0,

      floating: true,
      style: {
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: undefined,
        color: "blue",
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#D4ADFC", "#03C988"],
    series: [
      {
        name: "Penjualan (" + rupiah(totaljual) + ")",
        type: "area",
        data: data,
      },
      {
        name: "Margin (" + rupiah(totalmargin) + ")",
        type: "area",
        data: margin,
      },
    ],
    xaxis: {
      position: "bottom",
      type: "Tanggal",
      categories: xaxis,
      title: {
        text: theMonths[+bulan.substr(0, 2) - 1] + " " + tahun,
        style: {
          color: "brown",
          fontSize: "12px",
        },
      },
      labels: {
        show: true,
        hideOverlappingLabels: true,
        rotate: 0,

        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Penjualan (Ribuan)",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
          formatter: (value) => rupiah(value),
        },
        title: {
          text: undefined,
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: [1, 1],
    },
  };

  document.getElementById("grafik_penjualan_bulan").innerHTML = "";
  var chart2 = new ApexCharts(
    document.querySelector("#grafik_penjualan_bulan"),
    options
  );

  chart2.render();

  return totaljual;
}

async function grafik_tgl() {
  kliktgl=1;
  document.getElementById("table3").style.display = "none";
  document.getElementById("grafik_penjualan_tgl").style.display = "block";
  tgl = formattgl(new Date(document.getElementById("tgl").value));

  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  jsonData = await penjualantgl(tgl);
  // jsonData = hasil;
  // console.log(jsonData)
  
  let x = 0;

  for (x in jsonData) {
    totaljual = totaljual + jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;

    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(jsonData[x].jam);
    margin.push(jsonData[x].margin / 1000);
  }

  const tanggal =
    tgl.substr(0, 2) + "/" + tgl.substr(2, 2) + "/" + tgl.substr(4, 4);
  // console.log("total jual" + totaljual);

  var options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "(Dalam ribuan)",
      align: "left",
      margin: 0,
      offsetX: 0,
      offsetY: 0,

      floating: true,
      style: {
        fontSize: "14px",
        fontWeight: "normal",
        fontFamily: undefined,
        color: "blue",
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#0000FF", "#03C988"],
    series: [
      {
        name: "Penjualan (" + rupiah(totaljual) + ")",
        type: "bar",
        data: data,
      },
      {
        name: "Margin (" + rupiah(totalmargin) + ")",
        type: "line",
        data: margin,
      },
    ],
    xaxis: {
      position: "bottom",
      type: "Tanggal",
      categories: xaxis,
      title: {
        text:
          getDayName(
            tgl.substr(2, 2) + "/" + tgl.substr(0, 2) + "/" + tgl.substr(4, 4),
            "id-ID"
          ) +
          "," +
          tanggal,
        style: {
          fontSize: "12px",
          color: "brown",
        },
      },
      labels: {
        show: true,
        hideOverlappingLabels: true,
        rotate: 0,

        style: {
          colors: [],
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Penjualan (Ribuan)",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
          formatter: (value) => rupiah(value),
        },
        title: {
          text: undefined,
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: [0, 2],
    },
    markers: {
      size: [1, 1],
    },
  };
  // addTable3(xaxis, data, margin, totaljual, totalmargin);

  document.getElementById("grafik_penjualan_tgl").innerHTML = "";
   var chart = new ApexCharts(
    document.querySelector("#grafik_penjualan_tgl"),
    options
  );
  chart.render();
  document.getElementById("grafik_penjualan_tgl").innerHTML = "";
  chart.render();
}

function pie_tgl(hasil) {
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  jsonData = hasil;

  let x = 0;
  for (x in jsonData) {
    totaljual += jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;
    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(jsonData[x].kategori);
    margin.push(jsonData[x].margin / 1000);
  }

  var options = {
    series: data,
    chart: {
      type: "donut",
    },
    labels: xaxis,
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },

    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  document.getElementById("grafik_penjualan_tgl").innerHTML = "";
  document.getElementById("tgl").valueAsDate = tgl;

  document.getElementById("total_penjualan_tgl").innerHTML =
    "Total Penjualan: " + rupiah(totaljual);
  document.getElementById("margin_penjualan_tgl").innerHTML =
    "Margin: " + rupiah(totalmargin);

  var chart = new ApexCharts(
    document.querySelector("#grafik_penjualan_tgl"),
    options
  );
  chart.render();
}

function isitahun() {
  let dateDropdown = document.getElementById("tahun-dropdown");

  let currentYear = new Date().getFullYear();
  let earliestYear = 2020;
  while (currentYear >= earliestYear) {
    let dateOption = document.createElement("option");
    dateOption.text = currentYear;
    dateOption.value = currentYear;
    dateDropdown.add(dateOption);
    currentYear -= 1;
  }
  isibulantahun();
  isibulan();
  penjualan();
}

function isibulantahun() {
  let dateDropdown = document.getElementById("tahunbulan-dropdown");

  let currentYear = new Date().getFullYear();
  let earliestYear = 2020;
  while (currentYear >= earliestYear) {
    let dateOption = document.createElement("option");
    dateOption.text = currentYear;
    dateOption.value = currentYear;
    dateDropdown.add(dateOption);
    currentYear -= 1;
  }
  //penjualan();
}

function isibulan() {
  let dateDropdown = document.getElementById("bulan-dropdown");
  // console.log(theMonths);
  var today = new Date();
  var aMonth = today.getMonth();
  // console.log(aMonth);
  var i;
  for (i = 0; i < 12; i++) {
    let dateOption = document.createElement("option");
    dateOption.text = theMonths[i];
    // console.log(theMonths[i]);
    dateOption.value = i + 1;
    dateOption.id = theMonths[i];
    dateDropdown.add(dateOption);
  }
  document.getElementById(theMonths[aMonth]).selected = "true";
}

function penjualantahun(tahun) {
 

  const url_tahun = `${baseurl}/pos_order_year/grafik/${compa}/${tahun}/${kasa}`;
  // console.log("url" + url_tahun);
  fetch(url_tahun, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((d) => {
      // console.log("haloo" + JSON.stringify(d));
      grafik_tahun(d.records);
    });
}

async function penjualanbulan(bulan) {
  const url_bulan = `${baseurl}/pos_order_month/grafik/${compa}/${bulan}/${kasa}`;
  //console.log(url_bulan)
  try {
    const res = await fetch(url_bulan, {
      method: "GET",
    });

    const data = await res.json();
    return data.records; // Return the records for further use
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function penjualantgl(tgl) {
  const url_tgl = `${baseurl}/pos_order_today/grafik/${compa}/${tgl}/${kasa}`;
  //  console.log(url_bulan)
  try {
    const res = await fetch(url_tgl, {
      method: "GET",
    });

    const data = await res.json();
    return data.records; // Return the records for further use
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



function ubahjualbulan() {
  bulan =
    padTo2Digits(document.getElementById("bulan-dropdown").value) +
    document.getElementById("tahunbulan-dropdown").value;
  // console.log("ubahjualbulan:" + bulan);
  if (klikbulan==1){
    grafik_bulan();
  }
  if (klikbulan==2){
    data_bulan();
  }
  if (klikbulan==3){
    kategori_bulan();
  }
  
  
}

function ubahjualtahun() {
  tahun = document.getElementById("tahun-dropdown").value;
  penjualantahun(tahun);

}

function ubahtgl() {
  tgl = formattgl(new Date(document.getElementById("tgl").value));
  // const displayValuetgl = document.getElementById("grafik_penjualan_tgl").style.display ;
  if (kliktgl==1){
    grafik_tgl();
  }
  if (kliktgl==2){
    data_tgl();
  }
  if (kliktgl==3){
    kategori_tgl();
  }
  if (kliktgl==4){
    barang_tgl();
  }

}

function addTable1(xaxis, data, margin, totaljual, totalmargin) {
  var myTableDiv = document.getElementById("table1");
  var strtable = "";
  // console.log('data:'+data.length);
  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">Bulan</th>' +
    '     <th class="kanan">Penjualan</th>' +
    '     <th class="kanan">Margin</th>' +
    " </tr>" +
    " </thead>" +
    " <tbody>";
  for (var i = 0; i < data.length; i++) {
    if (data[i] != 0) {
      strtable +=
        '  <tr>     <td class="kiri">' +
        xaxis[i] +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(data[i] * 1000) +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(margin[i] * 1000) +
        "</td></tr>";
    }
  }

  strtable +=
    "  </tbody>" +
    "<tfoot>" +
    "<tr>" +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan">' +
    rupiah(totaljual) +
    "</td>" +
    '  <td class="kanan">' +
    rupiah(totalmargin) +
    "</td>" +
    "</tr>" +
    "</tfoot>" +
    "                          </table>";

  myTableDiv.innerHTML = strtable;
}

function addTable2(xaxis, data, margin, totaljual, totalmargin) {
 
  var myTableDiv = document.getElementById("table2");
  var strtable = "";
  var hari = "";
  // console.log('jumlah tanggal data jual:'+data.length);

  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">Tanggal</th>' +
    '     <th class="kanan">Penjualan</th>' +
    '     <th class="kanan">Margin</th>' +
    " </tr>" +
    " </thead>" +
    " <tbody>";
  for (var i = 0; i < data.length; i++) {
    if (data[i] != 0) {
      // console.log('bulan:'+bulan+'/'+bulan.length);

      //  if (bulan.length==6) {
      hari = getDayName(
        bulan.substr(0, 2) + "/" + xaxis[i] + "/" + bulan.substr(2, 6),
        "id-ID"
      );
     
      if (hari == "Minggu") {
        strtable +=
          '  <tr ">     <td class="kiri" style="color:red;">' +
          xaxis[i] +
          " " +
          hari +
          "</td>" +
          '     <td class="kanan" style="color:red;">' +
          rupiah(data[i] * 1000) +
          "</td>" +
          '     <td class="kanan" style="color:red;">' +
          rupiah(margin[i] * 1000) +
          "</td></tr>";
      } else {
        strtable +=
          '  <tr ">     <td class="kiri" >' +
          xaxis[i] +
          " " +
          hari +
          "</td>" +
          '     <td class="kanan" >' +
          rupiah(data[i] * 1000) +
          "</td>" +
          '     <td class="kanan" >' +
          rupiah(margin[i] * 1000) +
          "</td></tr>";
      }
    }
  }

  strtable +=
    "  </tbody>" +
    "<tfoot>" +
    "<tr>" +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan">' +
    rupiah(totaljual) +
    "</td>" +
    '  <td class="kanan">' +
    rupiah(totalmargin) +
    "</td>" +
    "</tr>" +
    "</tfoot>" +
    "                          </table>";

  myTableDiv.innerHTML = strtable;
}

function addTable3(xaxis, data, margin, totaljual, totalmargin,judulkolom1) {
  var myTableDiv = document.getElementById("table3");
  var strtable = "";
  //console.log('data tabel 3:'+data.length);
  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">'+judulkolom1+'</th>' +
    '     <th class="kanan">Penjualan</th>' +
    '     <th class="kanan">Margin</th>' +
    " </tr>" +
    " </thead>" +
    " <tbody>";
  for (var i = 0; i < data.length; i++) {
    if (data[i] != 0) {
      strtable +=
        '  <tr>     <td class="kiri">' +
        xaxis[i] +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(data[i] * 1000) +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(margin[i] * 1000) +
        "</td></tr>";
    }
  }

  strtable +=
    "  </tbody>" +
    "<tfoot>" +
    "<tr>" +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan">' +
    rupiah(totaljual) +
    "</td>" +
    '  <td class="kanan">' +
    rupiah(totalmargin) +
    "</td>" +
    "</tr>" +
    "</tfoot>" +
    "                          </table>";

  myTableDiv.innerHTML = strtable;
}

function data1() {
  var t = document.getElementById("toggle1").style.color;
  // console.log(t);
  if (t == "green") {
    // console.log('betul');
    document.getElementById("toggle1").style.color = "blue";
    document.getElementById("table1").style.display = "flex";
    document.getElementById("grafik_penjualan_tahun").style.display = "none";
    document.getElementById("toggle1").textContent = "Data";

    // console.log(document.getElementById("table1").style.display);

    return true;
  } else {
    // console.log('salah');
    document.getElementById("toggle1").textContent = "Grafik";
    document.getElementById("toggle1").style.color = "green";
    document.getElementById("table1").style.display = "none";
    document.getElementById("grafik_penjualan_tahun").style.display = "block";

    return false;
  }
}

function grafik_1() {
  document.getElementById("table1").style.display = "none";
  document.getElementById("grafik_penjualan_tahun").style.display = "block";
}

function data_1() {
  document.getElementById("table1").style.display = "flex";
  document.getElementById("grafik_penjualan_tahun").style.display = "none";
  // console.log(document.getElementById("table1").style.display);
}

// function grafik_2() {
//   document.getElementById("table2").style.display = "none";
//   document.getElementById("grafik_penjualan_bulan").style.display = "block";
// }

async function data_bulan() {
  klikbulan=2;
  document.getElementById("table2").style.display = "flex";
  document.getElementById("grafik_penjualan_bulan").style.display = "none";
  bulan =
  padTo2Digits(document.getElementById("bulan-dropdown").value) +
  document.getElementById("tahunbulan-dropdown").value;
 
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  let jsonData =  await penjualanbulan(bulan);
  let x = 0;

  for (x in jsonData) {
    totaljual = totaljual + jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;

    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(jsonData[x].tanggal);
    margin.push(jsonData[x].margin / 1000);
  }
  addTable2(xaxis, data, margin, totaljual, totalmargin);
}

function grafik_3() {
  document.getElementById("table3").style.display = "none";
  document.getElementById("grafik_penjualan_tgl").style.display = "block";
}

async function data_tgl() {
  kliktgl=2;
  document.getElementById("table3").style.display = "flex";
  document.getElementById("grafik_penjualan_tgl").style.display = "none";
  // console.log(document.getElementById("table3").style.display);
  tgl = formattgl(new Date(document.getElementById("tgl").value));
  
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  jsonData = await penjualantgl(tgl);
  
  let x = 0;

  for (x in jsonData) {
    totaljual = totaljual + jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;

    xaxis.push(jsonData[x].jam);
    margin.push(jsonData[x].margin/1000 );    
    data.push(jsonData[x].amount_total/1000 );
  }

  addTable3(xaxis, data, margin, totaljual, totalmargin,'JAM');
  

}


function data2() {
  var t = document.getElementById("toggle2").style.color;
  // console.log(t);
  if (t == "green") {
    // console.log('betul');
    document.getElementById("toggle2").textContent = "Data";

    document.getElementById("toggle2").style.color = "blue";
    document.getElementById("table2").style.display = "flex";
    document.getElementById("grafik_penjualan_bulan").style.display = "none";

    // console.log(document.getElementById("table2").style.display);

    return true;
  } else {
    // console.log('salah');
    document.getElementById("toggle2").textContent = "Grafik";

    document.getElementById("toggle2").style.color = "green";
    document.getElementById("table2").style.display = "none";
    document.getElementById("grafik_penjualan_bulan").style.display = "block";

    return false;
  }
}

function data3() {
  var t = document.getElementById("toggle3").style.color;
  // console.log(t);
  if (t == "green") {
    // console.log('betul');
    document.getElementById("toggle3").textContent = "Data";

    document.getElementById("toggle3").style.color = "blue";
    document.getElementById("table3").style.display = "flex";
    document.getElementById("grafik_penjualan_tgl").style.display = "none";

    // console.log(document.getElementById("table3").style.display);

    return true;
  } else {
    // console.log('salah');
    document.getElementById("toggle3").textContent = "Grafik";

    document.getElementById("grafik_penjualan_tgl").style.display = "block";

    document.getElementById("toggle3").style.color = "green";
    document.getElementById("table3").style.display = "none";

    return false;
  }
}

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

// penjualan kategori bulan
async function kategori_bulan() {
  klikbulan=3;
  document.getElementById("table2").style.display = "flex";
  document.getElementById("grafik_penjualan_bulan").style.display = "none";
  bulan =
  padTo2Digits(document.getElementById("bulan-dropdown").value) +
  document.getElementById("tahunbulan-dropdown").value;
  const url_bulan = `${baseurl}/pos_order_month/kategori/${compa}/${bulan}/${kasa}`;
   console.log(url_bulan)
  try {
    const res = await fetch(url_bulan, {
      method: "GET",
    });

    const datahasil = await res.json();
    jsonData = datahasil.records;
    let data = [];
    let xaxis = [];
    let margin = [];
    let totaljual = 0;
    let totalmargin = 0;

    for (x in jsonData) {
      totaljual = totaljual + jsonData[x].amount_total;
      totalmargin += jsonData[x].margin;
      xaxis.push(jsonData[x].kategori);
      data.push(jsonData[x].amount_total/1000 );       
      margin.push(jsonData[x].margin/1000 );
    }

    addTable_kategori_bulan(xaxis, data, margin, totaljual, totalmargin);
     // Return the records for further use
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}





// penjualan kategori bulan
async function payment_bulan() {
  klikbulan=4;
  document.getElementById("table2").style.display = "flex";
  document.getElementById("grafik_penjualan_bulan").style.display = "none";
  bulan =
  padTo2Digits(document.getElementById("bulan-dropdown").value) +
  document.getElementById("tahunbulan-dropdown").value;
  const url_bulan = `${baseurl}/pos_order_month/payment/${compa}/${bulan}/${kasa}`;
   console.log(url_bulan)
  try {
    const res = await fetch(url_bulan, {
      method: "GET",
    });

    const datahasil = await res.json();
    jsonData = datahasil.records;
    let data = [];
    let xaxis = [];
    let nos = [];
    let totaljual = 0;
    let no = 0;

    for (x in jsonData) {
      totaljual = totaljual + jsonData[x].amount_total;
      no += 1;
      xaxis.push(jsonData[x].nama);
      data.push(jsonData[x].amount_total );       
      nos.push(no );
    }

    addTable_payment_bulan(xaxis, data,nos, totaljual);
     // Return the records for further use
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}



function addTable_payment_bulan(xaxis, data,nos, totaljual) {
  var myTableDiv = document.getElementById("table2");
  var strtable = "";
  // console.log('data:'+data.length);
  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">No.</th>' +
    '     <th class="kanan">Nama</th>' +
    '     <th class="kanan">Total</th>' +
    " </tr>" +
    " </thead>" +
    " <tbody>";
  for (var i = 0; i < data.length; i++) {
    if (data[i] != 0) {
      strtable +=
        '  <tr>     <td class="kiri">' +
        nos[i] +
        "</td>" +
        '     <td class="kiri">' +
        xaxis[i]  +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(data[i]) +
        "</td></tr>";
    }
  }

  strtable +=
    "  </tbody>" +
    "<tfoot>" +
    "<tr>" +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan"></td>' +
    '  <td class="kanan">' +
    rupiah(totaljual) +
    "</td>" +
    "</tr>" +
    "</tfoot>" +
    "                          </table>";

  myTableDiv.innerHTML = strtable;
}





// penjualan per kategori

async function kategori_tgl() {
  kliktgl=3;
  document.getElementById("table3").style.display = "flex";
  document.getElementById("grafik_penjualan_tgl").style.display = "none";
  tgl = formattgl(new Date(document.getElementById("tgl").value));
  const url_tgl = `${baseurl}/pos_order_today/kategori/${compa}/${tgl}/${kasa}`;
  //  console.log(url_bulan)
  try {
    const res = await fetch(url_tgl, {
      method: "GET",
    });

    const datahasil = await res.json();
    jsonData = datahasil.records;
    let data = [];
    let xaxis = [];
    let margin = [];
    let totaljual = 0;
    let totalmargin = 0;

    for (x in jsonData) {
      totaljual = totaljual + jsonData[x].amount_total;
      totalmargin += jsonData[x].margin;
      xaxis.push(jsonData[x].kategori);
      data.push(jsonData[x].amount_total/1000 );       
      margin.push(jsonData[x].margin/1000 );
    }

    addTable3(xaxis, data, margin, totaljual, totalmargin,'KATEGORI');
     // Return the records for further use
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

async function barang_tgl() {
  kliktgl=4;
  document.getElementById("table3").style.display = "flex";
  document.getElementById("grafik_penjualan_tgl").style.display = "none";

  tgl = formattgl(new Date(document.getElementById("tgl").value));
  const url_tgl = `${baseurl}/pos_order_today/1000/${compa}/${tgl}/${kasa}`;
  //  console.log(url_bulan)
  try {
    const res = await fetch(url_tgl, {
      method: "GET",
    });

    const datahasil = await res.json();
    jsonData = datahasil.records;
    console.log(jsonData)
    let total = [];
    let qty = [];
    let xaxis = [];
    let margin = [];
    let totaljual = 0;
    let totalmargin = 0;

    for (x in jsonData) {
      totaljual = totaljual + jsonData[x].amount_total;
      totalmargin += jsonData[x].margin;
      xaxis.push(jsonData[x].nama);
      qty.push(jsonData[x].qty ); 
      total.push(jsonData[x].amount_total );        
      margin.push(jsonData[x].margin );
    }

    addTablebarang(xaxis, qty,total, margin, totaljual, totalmargin);
     // Return the records for further use
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function addTablebarang(xaxis, qty,total, margin, totaljual, totalmargin) {
  var myTableDiv = document.getElementById("table3");
  var strtable = "";
  //console.log('data tabel 3:'+data.length);
  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">Nama</th>' +
    '     <th class="kanan">Qty</th>' +
    '     <th class="kanan">Penjualan</th>' +
    '     <th class="kanan">Margin</th>' +
    " </tr>" +
    " </thead>" +
    " <tbody>";
  for (var i = 0; i < total.length; i++) {
    if (total[i] != 0) {
      strtable +=
        '  <tr>     <td class="kiri">' +
        xaxis[i] +
        "</td>" +
        '     <td class="kanan">' +
        (qty[i] ) +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(total[i] ) +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(margin[i] ) +
        "</td></tr>";
    }
  }

  strtable +=
    "  </tbody>" +
    "<tfoot>" +
    "<tr>" +
    '  <td scope="row">Total</td>' +
    '  <td scope="row"></td>' +
    '  <td class="kanan">' +
    rupiah(totaljual) +
    "</td>" +
    '  <td class="kanan">' +
    rupiah(totalmargin) +
    "</td>" +
    "</tr>" +
    "</tfoot>" +
    "                          </table>";

  myTableDiv.innerHTML = strtable;
}


function addTable_kategori_bulan(xaxis, data, margin, totaljual, totalmargin) {
  var myTableDiv = document.getElementById("table2");
  var strtable = "";
  // console.log('data:'+data.length);
  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">Kategori</th>' +
    '     <th class="kanan">Penjualan</th>' +
    '     <th class="kanan">Margin</th>' +
    " </tr>" +
    " </thead>" +
    " <tbody>";
  for (var i = 0; i < data.length; i++) {
    if (data[i] != 0) {
      strtable +=
        '  <tr>     <td class="kiri">' +
        xaxis[i] +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(data[i] * 1000) +
        "</td>" +
        '     <td class="kanan">' +
        rupiah(margin[i] * 1000) +
        "</td></tr>";
    }
  }

  strtable +=
    "  </tbody>" +
    "<tfoot>" +
    "<tr>" +
    '  <th scope="row">Totals</th>' +
    '  <td class="kanan">' +
    rupiah(totaljual) +
    "</td>" +
    '  <td class="kanan">' +
    rupiah(totalmargin) +
    "</td>" +
    "</tr>" +
    "</tfoot>" +
    "                          </table>";

  myTableDiv.innerHTML = strtable;
}

