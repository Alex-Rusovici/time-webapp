export default function MovingClock() {
  if (typeof window !== 'undefined') {
    const deg = 6;

    const hours = document.getElementsByClassName('.hr');
    const minutes = document.getElementsByClassName('.min');
    const seconds = document.getElementsByClassName('.sec');

    setInterval(() => {
      let day = new Date();

      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      minutes.style.transform = `rotateZ(${mm}deg)`;
      seconds.style.transform = `rotateZ(${ss}deg)`;
    });
  }
}
