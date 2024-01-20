const center = document.querySelector(".center");
const secondElements = document.querySelectorAll(".second > div");
const minuteElements = document.querySelectorAll(".minute > div");
const hourElements = document.querySelectorAll(".hour > div");

const update = () => {
  const curTime = new Date();

  center.innerHTML = curTime.getHours() < 12 ? "AM" : "PM";

  const curSecond = addZeroBefore(curTime.getSeconds());
  secondElements.forEach((element) => (element.innerHTML = curSecond));

  const curMinute = addZeroBefore(curTime.getMinutes());
  minuteElements.forEach((element) => (element.innerHTML = curMinute));

  const curHour = addZeroBefore(curTime.getHours() % 12 || 12);
  hourElements.forEach((element) => (element.innerHTML = curHour));
};

const addZeroBefore = (n) => (n < 10 ? "0" : "") + n;

setInterval(update, 1000);

window.onload = () => {
  update();

  const curTime = new Date();
  const delay =
    curTime.getHours() * 3600 +
    curTime.getMinutes() * 60 +
    curTime.getSeconds();

  document.querySelector(".clock").style.cssText = `--delay: ${-delay}s`;
};