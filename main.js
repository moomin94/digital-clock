const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const meridiem = document.querySelector(".meridiem");
const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  hours.innerText =
    date.getHours() > 12
      ? String(date.getHours() - 12).padStart(2, "0")
      : String(date.getHours()).padStart(2, "0");
  minutes.innerText = String(date.getMinutes()).padStart(2, "0");
  seconds.innerText = String(date.getSeconds()).padStart(2, "0");
  meridiem.innerText = date.getHours() > 12 ? "PM" : "AM";
}

getClock();
setInterval(getClock, 1000);
