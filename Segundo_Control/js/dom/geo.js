const d = document,
  n = navigator;

export default function geoLocal(id) {
  const $id = d.getElementById(id),
    option = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `
            <p>Tu Posición :</p>
            <ul>
                <li><text>Latitud</text>: <b>${coords.latitude}</b></li>
                <li><text>Longitud</text>: <b>${coords.longitude}</b></li>
                <li><text>Precisión</text>: <b>${coords.accuracy}</b> metros</li>
            </ul>

            <a href="https:www.google.com/maps/@${coords.latitude},${coords.longitude},20z target="_black" rel="noopener">Ver en Google Maps</a>
        `;
  };

  const error = (err) => {
    console.log(err);
  };

  n.geolocation.getCurrentPosition(success, error, option);
}
