const d = document,
  w = window;

export default function smart() {
  const $video = d.querySelectorAll("video[data-video-majora]");

  const a = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) => {
        if (d.visibilityState === "visible") {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });
  };

  const observer = new IntersectionObserver(a, { threshold: 0.5 });

  $video.forEach((el) => observer.observe(el));
}
