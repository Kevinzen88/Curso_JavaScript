const d = document;


export function digitalClock(relojControl, btnInicio, btnFinal) {
  let tempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnInicio)) {
      tempo = setInterval(() => {
        let relojTiempo = new Date().toLocaleTimeString();
        d.querySelector(
          relojControl
        ).innerHTML = `<div class="reloj" >**** ${relojTiempo} ****</div>`;
      }, 1000);

      e.target.disable = true;
    }
    if (e.target.matches(btnFinal)) {
      clearInterval(tempo);
      d.querySelector(relojControl).innerHTML = `<div class="reloj" >**** 00:00:00 ****</div>`;
      d.querySelector(btnInicio).disable = false;
    }
  });
}








export function digitalAlarm(alarma, btnInicio, btnFinal) {
  let alarmaTempo;
  const $alarm = d.createElement("audio");

  $alarm.src = alarma;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnInicio)) {
      alarmaTempo = setTimeout(() => {
        $alarm.play();
        d.getElementById("img1").src = "/asset/img/link_gif.gif";
      }, 2000);

      e.target.disable = true;
    }
    if (e.target.matches(btnFinal)) {
      clearTimeout(alarmaTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.getElementById("img1").src = "/asset/img/link_png.png";
      d.querySelector(btnInicio).disable = false;
    }
  });
}
