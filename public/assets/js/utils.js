
//   pilih data perusahaan
var divtab=document.querySelector(".wrapper")
divtab.style.display="block"


var tabs = document.querySelectorAll(".tabs_wrap ul li");
var males = document.querySelectorAll(".male");
var females = document.querySelectorAll(".female");
var all = document.querySelectorAll(".item_wrap");


tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
      // console.log(tab)
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

	})
})
// aktifkan menu bottom navvar
var pilihmenus=document.querySelectorAll(".nav__menu ul li a ")
  pilihmenus.forEach((pm)=>{    
   pm.classList.remove('active-link')
  })
  pilihmenus[3].classList.add('active-link')
  //text
  var pilihtexts=document.querySelectorAll(".nav__menu ul li span ")
  pilihtexts.forEach((tm)=>{    
   tm.classList.remove('active-link-text')
  })
  pilihtexts[3].classList.add('active-link-text')
// end





function formatbulan(date) {
    return [
  
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('')
  }
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  

function formattgl(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('')
}
const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR", minimumFractionDigits: 0,
  }).format(number);
}


function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
startTime();