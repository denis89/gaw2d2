window.onload= function(){

var subway = {n:["Times Square", "34th", "28th", "23th", "Union Square", "8th"], l:["8th", "6th","Union Square", "3rd", "1st"], six:["Grand Central","33rd", "28th", "23rd", "Union Square", "Astor Place"]};

var lnListeners = function(){
var ln = document.getElementById("Select");
ln.addEventListener('change', function(){alert("Do great stuff")})};


lnListeners();


};

