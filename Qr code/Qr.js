let imgBox =document.getElementById("imgbox")
let qrimg =document.getElementById("qrcode")
let qrtext =document.getElementById("qrtext")
function genrateQr(){
  if(qrtext.value.length>0){

    qrimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
     imgBox.classList.add("show-img")
  }
}