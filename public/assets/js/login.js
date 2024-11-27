//  const btn = document.getElementById("#loginButton");

// adding event listener to button
// btn.addEventListener("click", fetchHandler);

// selecting loading div

// showing loading

// const baseurl="https://serba-grosir.my.id";
// const db="sg-main"
// const axios = require('axios').default;
const db="diksi"

const baseurl="https://gi_pos.fikricloud.my.id";
 function displayLoading() {
    document.getElementById("loading").style.visibility = "visible";
    document.getElementById("loginbutton").style.visibility = "hidden";
    //   loader.classList.add("display");
     // to stop loading after some time
     setTimeout(() => {
        hideLoading() ;
        document.getElementById("warning").innerHTML='Password Salah / Server Error';
        //  loader.classList.remove("display");
     }, 5000);
 }

// hiding loading 
function hideLoading() {
    document.getElementById("loading").style.visibility = "hidden";
    document.getElementById("loginbutton").style.visibility = "visible";
    document.getElementById("warning").innerHTML='';
}

//// dummy url
// var url = "https://cors.iamnd.eu.org/?url=http://serba-grosir.my.id/web/session/authenticate"
// var url = "https://serba-grosir.my.id/web/session/authenticate"

function loginButton() {
  
     
          
                  let origin = window.location.origin;
                  location.href=origin+'/penjualan'
}

    //  fetch(url, {
    //        method: 'POST',
    //       //  mode: 'cors',
    //       //  credentials: 'include',
    //       //  headers: {
    //       //   //  'Accept': 'application/json, text/plain, */*',
    //           'Content-Type': 'application/json',
    //       //    'Access-Control-Allow-Origin':'*',
        
    //       //  },           
    //        body: JSON.stringify({"jsonrpc":"2.0","params":{"db":"sg-main","login":nama,"password":password}})
    //      }).then(res => res.json())
    //        .then(res => {
    //         //  console.log('body:'+`{"jsonrpc":"2.0","params":{"db":"sg-main","login":nama,"password":password}}`)
    //         hideLoading() ;            
    //         console.log(res.result)
    //         if (res.result==undefined ) {
    //             // var warning=document.getElementById("#warning")
    //             warning.innerHTML='Password Salah / Server Error';

    //         }
    //         else
    //         {
    //           let origin = window.location.origin;
    //           location.href=origin+'/penjualan'
    //         }
         
        
    //     })
    //     .catch((error) => console.error(error));;


    //  fetch(finalURL)
    //       .then(response => response.json())
    //       .then(json => {
    //           hideLoading()
    //           textOutput.innerText = json.contents.translated;
    //       })

