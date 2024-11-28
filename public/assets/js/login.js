
const db=window.db

const baseurl=window.baseurl;
 function displayLoading() {
    document.getElementById("loading").style.visibility = "visible";
    document.getElementById("loginbutton").style.visibility = "hidden";

     setTimeout(() => {
        hideLoading() ;
        document.getElementById("warning").innerHTML='Password Salah / Server Error';

     }, 5000);
 }

// hiding loading 
function hideLoading() {
    document.getElementById("loading").style.visibility = "hidden";
    document.getElementById("loginbutton").style.visibility = "visible";
    document.getElementById("warning").innerHTML='';
}


function loginButton() {
  
     
          
                  let origin = window.location.origin;
                  location.href=origin+'/penjualan'
}



