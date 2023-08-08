const d = document;

export default function tiempo(id,limiteTiempo,mensajeFinal){
    const $tiempo = d.getElementById(id),
    datecount = new Date(limiteTiempo).getTime();

    let tempoCount = setInterval(()=>{

        let now = new Date().getTime(),
        limitTime = datecount - now,
        
        days = Math.floor(limitTime/(1000 *60 *60 *24)),
        hours = ("0"+ Math.floor(limitTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
        minutes = ("0"+ Math.floor(limitTime % (1000*60*60)/(1000*60))).slice(-2),
        seconds = ("0"+ Math.floor(limitTime % (1000*60)/(1000))).slice(-2);

        $tiempo.innerHTML = `
        <h3><text>${days}</text> Días 
        <text>${hours}</text> Horas 
        <text>${minutes}</text> Minutos 
        <text>${seconds}</text> Segundos</h3>
        `;
        
        if (limitTime < 0){
            clearInterval(tempoCount);
            $tiempo.innerHTML = `<h3>${mensajeFinal}</h3>`;
        }
    },1000);
}