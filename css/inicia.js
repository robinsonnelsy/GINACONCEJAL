

function getidval(){
  return  document.getElementById(st).value;
}

function mostid(st){    document.getElementById(st).style.display="block";}
function ocutid(st){    document.getElementById(st).style.display="none";}

iniciat();


function iniciat(){  
  ocutid("idnuevosuser");

}

//  funciones todo de  menuusuarios 

function clNuevoUsuario(){ mostid("idnuevosuser");}

function clCitas(){
  ocutid("idnuevosuser")
}












// reloj

///  aca  reloj body
var sccanvas=0.5;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17*sccanvas;
ctx.lineCap = 'round';
ctx.shadowBlur = 15*sccanvas;
ctx.shadowColor = '#28d1fa';
function degToRad(degree) {
  var factor = Math.PI/180;
  return degree*factor;
}
 var vw=window.innerWidth;
 var vh=window.innerHeight;
function renderTime() {
  
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds+ (milliseconds/1000);
  
  // Background
  gradient = ctx.createRadialGradient(200*sccanvas,200*sccanvas,5*sccanvas,200*sccanvas,200*sccanvas,300*sccanvas);
  gradient.addColorStop(0,'#1f1f1f');
  gradient.addColorStop(1, '#1f1f1f');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,400*sccanvas,400*sccanvas);
  
  // Hours
  ctx.beginPath();
  ctx.arc(200*sccanvas, 200*sccanvas, 170*sccanvas, degToRad(270), degToRad((hours*30)-90));
  ctx.stroke();
  
  // Minutes
   ctx.beginPath();
  ctx.arc(200*sccanvas, 200*sccanvas, 140*sccanvas, degToRad(270), degToRad((minutes*6)-90));
  ctx.stroke();
  // Seconds
   ctx.beginPath();
  ctx.arc(200*sccanvas, 200*sccanvas, 110*sccanvas, degToRad(270), degToRad((newSeconds*6)-90));
  ctx.stroke();
  // Date 
  ctx.font = "10px Helvetica";
  ctx.fillStyle = '#28d1fa';
  ctx.fillText(today, 140*sccanvas, 200*sccanvas);
  
  // Time
  ctx.font = "7.5px Helvetica";
  ctx.fillStyle = '#28d1fa';
  ctx.fillText(time, 140*sccanvas, 230*sccanvas);
  ctx.font = "12px Helvetica";
  ctx.fillStyle = '#28d1fa';
  ctx.fillText("Giovanni"+"\n"+"RD", 140*sccanvas*0.5, 230*sccanvas*0.5);
  ctx.fillText("mobil: 3107686072"+"\n"+"", 140*sccanvas*0.6, 230*sccanvas*1.1);
  ctx.fillText("Robinson"+"\n"+"RD", 140*sccanvas*0.3, 230*sccanvas*0.7);
  
}
setInterval(renderTime, 40);












