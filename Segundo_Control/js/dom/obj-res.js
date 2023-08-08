const d = document, w = window;

export default function responMedia(id,query,mediaMobile,mediaLap){
    let punto = w.matchMedia(query);
    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = mediaLap;
        }else{
            d.getElementById(id).innerHTML = mediaMobile;
        }
        console.log("MQ",e.matches);
    };
    punto.addListener(responsive);
    responsive(punto);
}
