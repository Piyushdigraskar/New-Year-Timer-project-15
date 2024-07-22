const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const yearEl = document.getElementById("year");


const newYearTime = new Date("jan 1, 2025 00:00:00").getTime();


updateCountDown();
function updateCountDown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/ hour)
    const m = Math.floor((gap%hour)/ minute)
    const s = Math.floor((gap%minute)/ second)
    const y = new Date().getFullYear();

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    console.log(y);
    yearEl.innerText = y;
    setTimeout(updateCountDown, 1000);
}

