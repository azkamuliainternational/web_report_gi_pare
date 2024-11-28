
baseurl=window.baseurl
let tgl = formattgl(new Date());
let compa = 1;
let kasa = 0;
document.getElementById("tgl").valueAsDate = new Date();
function penjualantgl_kategori(tgl) {
    const url_bulan = `${baseurl}/pos_order_today/kategori/${compa}/${tgl}/${kasa}`;
    //  console.log(url_bulan)
    fetch(url_bulan, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
          console.log(d);
       // jual_tgl_kategori(d.records);
      });
  }
  