const d = document,
  w = window;

export default function reading() {
  const $spechSelec = d.getElementById("speech-nav"),
    $spechArea = d.getElementById("speech-text"),
    $spechBtn = d.getElementById("speech-button"),
    spechMensage = new SpeechSynthesisUtterance();

  let voces = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
    voces = w.speechSynthesis.getVoices();

    console.log(voces);

        voces.forEach((voice) => {
            const $voz = d.createElement("option");
            $voz.value = voice.name;
            $voz.textContent = ` ${voice.name} - ${voice.lang}`;

            $spechSelec.appendChild($voz);
        });
    });
  });

  d.addEventListener("change", (e) => {
    if(e.target === $spechSelec){
        spechMensage.voice = voces.find(voice => voice.name === e.target.value);
    }
  });

  d.addEventListener("click", (e) => {
    if(e.target === $spechBtn){
        spechMensage.text = $spechArea.value;
        w.speechSynthesis.speak(spechMensage);
    }
  });
}
