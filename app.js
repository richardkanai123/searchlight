// ityped js
const tagline = document.querySelector(".tagline");
ityped.init(tagline, {
  showCursor: true,
  startDelay: 600,
  loop: false,
  backDelay: 500,
  typeSpeed: 150,
  strings: ["Here to make text speak for you!"],
});

// Gsap

gsap.to(".banner_image", { duration: 2.5, y: -100, ease: "power1.out" });
