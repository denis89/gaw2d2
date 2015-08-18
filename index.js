window.onload= function(){

var subway = {
n:["Times Square", "34th", "28th", "23th", "Union Square", "8th"], 
l:["8th", "6th","Union Square", "3rd", "1st"], 
six:["Grand Central","33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var startListeners = function(){
var ln = document.getElementById("Start");
ln.addEventListener('change', function(){console.log( subway.n.indexOf(document.getElementById("Start").value))}) };

//startListeners();


var endListeners = function(){
var ln = document.getElementById("End");
ln.addEventListener('change', function(){console.log( subway.n.indexOf(document.getElementById("End").value))}) };

//endListeners();
var resListeners = function (){

var result = document.getElementById("Result");

result.addEventListener('click', function(){  console.log(subway.n.indexOf(document.getElementById("End").value)-subway.n.indexOf(document.getElementById("Start").value)) 
       }) };
resListeners();
//Curley of window.onload
};

