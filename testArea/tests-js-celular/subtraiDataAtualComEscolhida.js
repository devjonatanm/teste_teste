// "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"

var now = new Date(); // data atual
var eventDate = new Date("Jan 1, 2022 00:00:00"); // data configurada inicial

var currentTime = now.getTime(); // CONVERTE data atual em números
var eventTime = eventDate.getTime(); // CONVERTE data que coloquei em números
var remTime = currentTime - eventTime; // subtrai um valor enorme dessas duas datas

//AQUI CALCULA DIA, HORA, MES E SEGUNDOS
var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((remTime % (1000 * 60)) / 1000);


console.log(d + " dias " + h + ":" + m + ":" + s)
console.log(now.getTime())

