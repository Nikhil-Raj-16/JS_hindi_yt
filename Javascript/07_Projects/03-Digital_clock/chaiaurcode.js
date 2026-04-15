// document.querySelector('#clock')
const clock = document.getElementById('clock');


// milliseconds time - 1000 ms == 1s
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)   