const clock = document.querySelector(".clock");
const date = new Date();
const localTime = date.toLocaleTimeString('hu',);
clock.textContent=localTime;