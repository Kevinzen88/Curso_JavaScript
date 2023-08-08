const d = document;
let x = 0;
let y = 0;


export function movimiento(e, objeto, lugar) {
  const $objecto = d.querySelector(objeto),
    $espacio = d.querySelector(lugar),
    areaObj = $objecto.getBoundingClientRect(),
    espacioMov = $espacio.getBoundingClientRect();


    //Controlador de nave y cambio de escena
  switch (e.keyCode) {
    case 37:
      if (areaObj.left > espacioMov.left) {
        e.preventDefault();
        d.getElementById("img2").src = "/asset/img/nave-atras.gif";
        x--;
      }
      break;
    case 38:
      if (areaObj.top > espacioMov.top) {
        e.preventDefault();
        d.getElementById("img2").src = "/asset/img/nave-arriba.gif";
        y--;
      }
      break;
    case 39:
      if (areaObj.right < espacioMov.right) {
        e.preventDefault();
        d.getElementById("img2").src = "/asset/img/nave-adelante.gif";
        x++;
      }
      break;
    case 40:
      if (areaObj.bottom < espacioMov.bottom) {
        e.preventDefault();
        d.getElementById("img2").src = "/asset/img/nave-abajo.gif";
        y++;
      }
      break;
    default:
      break;
  }
  $objecto.style.transform = `translate(${x * 15}px,${y * 15}px)`;
}

//Función para los atajos de teclado
export function atajo(e) {
  if (e.key === "q" && e.ctrlKey) {
    alert("Esto es una alerta del sistema");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Esto es una confirmación del sistema");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Esto es un aviso del sistema");
  }
}
