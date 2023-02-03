
const jam = document.getElementById('jam');

setInterval(function(){
    const time = new Date();
    Array.from(jam.children)[0].innerHTML = String(time.getHours()).padStart(2, "0");
    Array.from(jam.children)[1].innerHTML = String(time.getMinutes()).padStart(2, "0");
    Array.from(jam.children)[3].innerHTML = String(time.getSeconds()).padStart(2, "0");
}, 1000)