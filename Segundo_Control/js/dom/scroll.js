const d = document,
  w = window;

export function scroll(btn) {
  const $topBtn = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    if (d.documentElement.scrollTop > 350) {
      $topBtn.classList.remove("hidden");
    } 
    else {
      $topBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
