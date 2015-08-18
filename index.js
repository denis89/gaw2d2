window.onload= function(){

var lnListeners = function(){
var ln = document.getElementById("Select");

if(ln){
ln.addEventListener('change', function(){alert("Do great stuff")});
}

lnListeners();


}};

