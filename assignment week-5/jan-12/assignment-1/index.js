
var data = 0;
  

document.getElementById("counter").innerText = data;
  
//creation of increment function
function add() {
    data = data + 1;
    document.getElementById("counter").innerText = data;
}
//creation of decrement function
function sub() {
    data = data - 1;
    document.getElementById("counter").innerText = data;
}

function clear() {
    data = 0;
    document.getElementById("counter").innerText = data;
    
}
   
    

