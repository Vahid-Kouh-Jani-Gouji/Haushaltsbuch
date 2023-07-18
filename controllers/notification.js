document.addEventListener("DOMContentLoaded", function() {
          
var notificationQueue = [] ;
// Retrieve existing saldo from localStorage 
var saldo = JSON.parse(localStorage.getItem("saldo")) ;
var saldoValue = parseInt(saldo);
if ( saldoValue <= 200){
var warningInfo="Your Balance is below than 200 EUR";
// Select the <p> element by its ID
var dangerText = document.getElementById("dangerText");

// Set the content of the <p> element

dangerText.innerHTML = warningInfo;
 }
//set close as hidden message
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

});



