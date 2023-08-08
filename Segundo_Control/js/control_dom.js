//Exportacion de archivos generales
import { digitalAlarm, digitalClock } from "./dom/reloj.js";
import { atajo, movimiento } from "./dom/teclado.js";
import { scroll } from "./dom/scroll.js";
import { darkMode, activeDarkTheme } from "./dom/black-theme.js";
import { default as hamburgerMenu } from "./dom/men-hamburge.js";

//Exprotacion de archivos del sistema
import userAgent from "./dom/deteccion.js";
import geoLocal from "./dom/geo.js";
import formTester from "./dom/Prueba_respon.js";
import redStatus from "./dom/red-activada.js";

//Exportacion de archivos moviles
import responMedia from "./dom/obj-res.js";
import tiempo from "./dom/cuentaRe.js";
import webCam from "./dom/cam-detec.js";
import filter from "./dom/filtro.js";
import sorteo from "./dom/sorteo.js";
import slider from "./dom/slider.js";
import espia from "./dom/scroll-es.js";
import smart from "./dom/video.js";
import formValid from "./dom/valid-form.js";
import reading from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  
  hamburgerMenu("#menu", ".panel", ".menu a");
  digitalClock("#reloj", "#on-Reloj", "#of-Reloj");
  digitalAlarm("asset/paladome.mp3", "#on-Alarma", "#of-Alarma");
  tiempo("countdown", "April 20,2023 15:3:30", "hola buenas");
  scroll(".scroll-top-btn");
  darkMode(".dark-btn", "dark-theme");

  activeDarkTheme({
    btn: ".dark-btn",
    classDark: "dark-theme",
  });

  responMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_black rel="noopener">ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );

  responMedia(
    "mapas",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/q48KEdjQ3aYuRx2EA" target="_black rel="noopener">ver video</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59801.49282935353!2d-90.1156919477658!3d20.481890748011054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f88486920920cd%3A0x76eb64086208fb6a!2zSGFsYWNow7MsIFl1Yy4!5e0!3m2!1ses-419!2smx!4v1679515322663!5m2!1ses-419!2smx" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  formTester("responsive");

  userAgent("#user-device");

  webCam("cam");

  geoLocal("geolocation");

  filter(".card-filtro", ".cards-figure");

  sorteo("#winner-btn", ".player");

  slider();

  espia();

  smart();

  formValid();
});

d.addEventListener("keydown", (e) => {
  atajo(e);
  movimiento(e, ".figura", ".escenario");
});

redStatus();
reading();
