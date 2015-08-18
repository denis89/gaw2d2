// You have to click on the 1st Distance Result Button in order to calculate the other 2 Distance Results.
window.onload= function(){
// Subway mit 3 Linien
var subway = {
n:["Times Square", "34th", "28th", "23th", "Union Square", "8th"], 
l:["8th", "6th","Union Square", "3rd", "1st"], 
six:["Grand Central","33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// Line N Start

var resListeners = function (){

var result = document.getElementById("Result");

result.addEventListener('click', function(){  var amountofstopps = Math.abs(subway.n.indexOf(document.getElementById("End").value)-subway.n.indexOf(document.getElementById("Start").value));

  alert(+amountofstopps+ " Stop(s)") 
       }) };
resListeners();

// Line N End

// Line L Start
var resLListeners = function (){

var result = document.getElementById("Result");

result.addEventListener('click', function(){  var amountofstopps = Math.abs(subway.n.indexOf(document.getElementById("EndL").value)-subway.n.indexOf(document.getElementById("StartL").value));

  alert(+amountofstopps+ " Stop(s)") 
       }) };
resLListeners();

// Line L End

// Line 6 Start

var res6Listeners = function (){

var result = document.getElementById("Result");

result.addEventListener('click', function(){  var amountofstopps = Math.abs(subway.n.indexOf(document.getElementById("End").value)-subway.n.indexOf(document.getElementById("Start").value));

  alert(+amountofstopps+ " Stop(s)") 
       }) };
res6Listeners();

// Line 6 End


//Curley of window.onload
};


// Line N Start
//var startListeners = function(){
//var ln = document.getElementById("Start");
//ln.addEventListener('change', function(){//console.log( subway.n.indexOf(document.//getElementById("Start").value))}) };
//
////startListeners();
//
//
//var endListeners = function(){
//var ln = document.getElementById("End");
//ln.addEventListener('change', function(){//console.log( subway.n.indexOf(document.//getElementById("End").value))}) };

//endListeners();

//var startLListeners = function(){
//var ln = document.getElementById("StartL");
//ln.addEventListener('change', function(){//console.log( subway.n.indexOf(document.//getElementById("StartL").value))}) };
//
////startListeners();
//
//
//var endLListeners = function(){
//var ln = document.getElementById("EndL");
//ln.addEventListener('change', function(){//console.log( subway.n.indexOf(document.//getElementById("EndL").value))}) };

//endListeners();

//var start6Listeners = function(){
//var ln = document.getElementById("Start6");
//ln.addEventListener('change', function(){//console.log( subway.n.indexOf(document.//getElementById("Start6").value))}) };
//
////startListeners();
//
//
//var end6Listeners = function(){
//var ln = document.getElementById("End6");
//ln.addEventListener('change', function(){//console.log( subway.n.indexOf(document.//getElementById("End6").value))}) };
//
////endListeners();