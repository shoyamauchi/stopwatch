let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes =0;
let seconds =0;
let milliseconds =0;

let newHours =0;
let newMinutes =0;
let newSeconds =0;
let newMilliseconds =0;

let status ="able";
let interval;

function stopWatch(){
  milliseconds++;
  if(milliseconds / 100 == 1){
   seconds++;
   milliseconds = 0;
   if(seconds / 60 == 1){
   minutes++;
   seconds = 0;
    if(minutes / 60 == 1){
    hours++;
    minutes = 0;
    }
   }
  }
  
  if(milliseconds < 10){
    newMilliseconds = "0" + milliseconds;
  }else{
   newMilliseconds = milliseconds;
  }
  if(seconds < 10){
    newSeconds = "0" + seconds;
  }else{
   newSeconds = seconds;
  }
  if(minutes < 10){
    newMinutes = "0" + minutes;
  }else{
   newMinutes = minutes;
  }
  if(hours < 10){
    newHours = "0" + hours;
  }
  else{
   newHours = hours;
  }
  
 
  display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds + ":" + newMilliseconds;
}


start.addEventListener("click",function(){
   if(status == "able"){
    interval = setInterval(stopWatch, 10);
    status = "disable";
   }
})

stop.addEventListener("click",function(){
   if(status == "disable"){
    clearInterval(interval); 
    status = "able";
   }
})

reset.addEventListener("click",function(){
   clearInterval(interval); 
   display.innerHTML = "00:00:00:00"
   hours = 0;
   minutes = 0;
   seconds = 0;
   status = "able";
})

//ボタンの不活性化
start.addEventListener("click",function(){
   start.style.color = `#5f5f5f`;
   start.style.backgroundColor = `#c6c6c6`;
   start.style.border = `2px solid #c6c6c6`;
   start.style.pointerEvents = `none`;
   
   stop.style.color = ``;
   stop.style.backgroundColor = ``;
   stop.style.border = ``;
   stop.style.pointerEvents = ``;
})

stop.addEventListener("click",function(){
   start.style.color = ``;
   start.style.backgroundColor = ``;
   start.style.border = ``;
   start.style.pointerEvents = ``;
   
   stop.style.color = `#5f5f5f`;
   stop.style.backgroundColor = `#c6c6c6`;
   stop.style.border = `2px solid #c6c6c6`;
   stop.style.pointerEvents = `none`;
})

reset.addEventListener("click",function(){
   start.style.color = ``;
   start.style.backgroundColor = ``;
   start.style.border = ``;
   start.style.pointerEvents = ``;
   
   stop.style.color = ``;
   stop.style.backgroundColor = ``;
   stop.style.border = ``;
   stop.style.pointerEvents = ``;
})