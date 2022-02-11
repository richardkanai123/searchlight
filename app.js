import { init } from "ityped";

const tagline = document.querySelector(".tagline");

init(tagline, {
  showCursor: false,
  startDelay: 500,
  loop: true,
  strings: ["try", "One!!"],
});
