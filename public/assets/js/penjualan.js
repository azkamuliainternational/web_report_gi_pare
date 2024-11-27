// # 1	Gudang 1
// # 2	Gudang 2
// # 3	Star Baby Shop 2
// # 4	Star Baby Shop 1

let tahun = new Date().getFullYear();
let bulan = formatbulan(new Date());
let tgl = formattgl(new Date());
let compa = 1;
let kasa = 0;
const baseurl = "https://gi_pos.fikricloud.my.id";
//const baseurl = "https://liberal-elf-brave.ngrok-free.app";
// const baseurl="https://serba-grosir.my.id";
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
  console.log(
    "index:" + idx + " kode perusahaan:" + compa + " kode kasa" + kasa
  );
  if (menu == "penjualan") {
    penjualan();
  }
  if (menu == "persediaan") {
    // document.getElementById("judul_persediaan1").innerHTML='Persediaan ';
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


https://pare.realpos-id.my.id/penjualan

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
var pilihmenus = document.querySelectorAll(".nav__menu ul li a ");
pilihmenus.forEach((pm) => {
  pm.classList.remove("active-link");
});
pilihmenus[0].classList.add("active-link");
//text
var pilihtexts = document.querySelectorAll(".nav__menu ul li span ");
pilihtexts.forEach((tm) => {
  tm.classList.remove("active-link-text");
});
pilihtexts[0].classList.add("active-link-text");

// end

document.getElementById("tgl").valueAsDate = new Date();

//  end  pilih data perusahaan

function penjualan() {
  menu = "penjualan";
  // penambahan proxy  https://cors.iamnd.eu.org/?url= untuk menghindari sequrity

  penjualantahun(tahun);
  penjualanbulan(bulan);
  penjualantgl(tgl);
}
// const rupiah = (number)=>{
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR", minimumFractionDigits: 0,
//   }).format(number);
// }

function grafik_tahun(hasil) {
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  jsonData = hasil;
  // const rupiah = (number)=>{
  //     return new Intl.NumberFormat("id-ID", {
  //       style: "currency",
  //       currency: "IDR", minimumFractionDigits: 0,
  //     }).format(number);
  //   }
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
  // console.log(data);
  // console.log(xaxis);
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

function grafik_bulan(hasil) {
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  let jsonData = hasil;
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
  // addTable2(xaxis,data,margin,totaljual,totalmargin);
  return totaljual;
}

function grafik_tgl(hasil) {
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  jsonData = hasil;
  let x = 0;

  for (x in jsonData) {
    totaljual = totaljual + jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;

    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(jsonData[x].jam);
    margin.push(jsonData[x].margin / 1000);
  }
  // console.log(data);
  // console.log(xaxis);
  const tanggal =
    tgl.substr(0, 2) + "/" + tgl.substr(2, 2) + "/" + tgl.substr(4, 4);
  console.log("total jual" + totaljual);

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
  addTable3(xaxis, data, margin, totaljual, totalmargin);
  // document.getElementById("tgl").valueAsDate = tgl;
  document.getElementById("grafik_penjualan_tgl").innerHTML = "";
  // document.getElementById("total_penjualan_bulan").innerHTML ="Total Penjualan: "+rupiah(totaljual);
  // document.getElementById("margin_penjualan_bulan").innerHTML ="Margin: "+rupiah(totalmargin);
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
  // const rupiah = (number)=>{
  //     return new Intl.NumberFormat("id-ID", {
  //       style: "currency",
  //       currency: "IDR", minimumFractionDigits: 0,
  //     }).format(number);
  //   }
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
  // document.getElementById("hasiltgl").innerHTML = formattgl(tgl);
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
  //  var url1 = baseurl + "/web/session/authenticate";

  //  fetch(url1, {
  //   method: "POST",
  //  headers: {
  //  'Accept': 'application/json, text/plain, */*',
  //   "Content-Type": "application/json",
  // 'Access-Control-Allow-Origin':'*',
  //  },
  //  body: JSON.stringify({
  //   jsonrpc: "2.0",
  //  params: { db: "diksi", login: "admin@gmail.com", password: "@123" },
  //  }),
  //})
  //  .then((res) => res.json())
  // .then((d) => {
  //   console.log("haloo" + JSON.stringify(d));
  //    grafik_tahun(d.records);
  //  });

  const url_tahun = `${baseurl}/pos_order_year/grafik/${compa}/${tahun}/${kasa}`;
  console.log("url" + url_tahun);
  fetch(url_tahun, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((d) => {
      console.log("haloo" + JSON.stringify(d));
      grafik_tahun(d.records);
    });
}

function penjualanbulan(bulan) {
  const url_bulan = `${baseurl}/pos_order_month/grafik/${compa}/${bulan}/${kasa}`;
  //console.log(url_bulan)
  fetch(url_bulan, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((d) => {
      console.log("hasil data bulan" + bulan);
      console.log(d);


      addTable2(d.records);
      console.log(grafik_bulan(d.records));
    });
}

function penjualantgl(tgl) {
  const url_bulan = `${baseurl}/pos_order_today/grafik/${compa}/${tgl}/${kasa}`;
  //  console.log(url_bulan)
  fetch(url_bulan, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((d) => {
      //   console.log(d);
      grafik_tgl(d.records);
    });
}

function ubahjualbulan() {
  bulan =
    padTo2Digits(document.getElementById("bulan-dropdown").value) +
    document.getElementById("tahunbulan-dropdown").value;
  console.log("ubahjualbulan:" + bulan);

  penjualanbulan(bulan);
}

function ubahjualtahun() {
  tahun = document.getElementById("tahun-dropdown").value;
  penjualantahun(tahun);
  // document.getElementById('toggle1').style.color="grey";
  // document.getElementById('table1').style.display="none";
}

function ubahtgl() {
  tgl = formattgl(new Date(document.getElementById("tgl").value));
  penjualantgl(tgl);
  //document.getElementById("hasiltgl").innerHTML = formattgl(tgl);
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

function addTable2(hasil) {
  let data = [];
  let xaxis = [];
  let margin = [];
  let totaljual = 0;
  let totalmargin = 0;

  let jsonData = hasil;
  let x = 0;

  for (x in jsonData) {
    totaljual = totaljual + jsonData[x].amount_total;
    totalmargin += jsonData[x].margin;

    data.push(jsonData[x].amount_total / 1000);
    xaxis.push(jsonData[x].tanggal);
    margin.push(jsonData[x].margin / 1000);
  }

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
      //  console.log((bulan+hari))
      //  }else{

      //  hari=getDayName((bulan.getMonth()+1)+'/'+xaxis[i]+'/'+bulan.getFullYear(),'id-ID');
      // console.log(formatbulan(formatbulan(bulan)+hari))
      // }

      //   console.log('hari:'+bulan.getMonth()+'/'+xaxis[i]+'/'+bulan.getFullYear()+getDayName(bulan.getMonth()+'/'+xaxis[i]+'/'+bulan.getFullYear(),'id-ID'));

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

function addTable3(xaxis, data, margin, totaljual, totalmargin) {
  var myTableDiv = document.getElementById("table3");
  var strtable = "";
  //console.log('data tabel 3:'+data.length);
  strtable =
    '<table width="100%" class="mytable">' +
    " <thead>" +
    " <tr>" +
    '     <th class="kiri">Jam</th>' +
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
  console.log(t);
  if (t == "green") {
    // console.log('betul');
    document.getElementById("toggle1").style.color = "blue";
    document.getElementById("table1").style.display = "flex";
    document.getElementById("grafik_penjualan_tahun").style.display = "none";
    document.getElementById("toggle1").textContent = "Data";

    console.log(document.getElementById("table1").style.display);

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

function data2() {
  var t = document.getElementById("toggle2").style.color;
  console.log(t);
  if (t == "green") {
    // console.log('betul');
    document.getElementById("toggle2").textContent = "Data";

    document.getElementById("toggle2").style.color = "blue";
    document.getElementById("table2").style.display = "flex";
    document.getElementById("grafik_penjualan_bulan").style.display = "none";

    console.log(document.getElementById("table2").style.display);

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
  console.log(t);
  if (t == "green") {
    // console.log('betul');
    document.getElementById("toggle3").textContent = "Data";

    document.getElementById("toggle3").style.color = "blue";
    document.getElementById("table3").style.display = "flex";
    document.getElementById("grafik_penjualan_tgl").style.display = "none";

    console.log(document.getElementById("table3").style.display);

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
