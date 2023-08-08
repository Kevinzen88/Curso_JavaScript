const d = document;

export default function sorteo(btn, selector) {
  const getWinner = (selector) => {
    const $gamers = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $gamers.length),
      winner = $gamers[random];

    console.log($gamers, random, winner);
    return `El Ganador es ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
