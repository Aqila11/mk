// toggle
const navU = document.querySelector(".nav-u");
// klik
document.querySelector("#hamburger-menu").onclick = () => {
  navU.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navU.contains(e.target)) {
    navU.classList.remove("active");
  }
});

// scramble text
/* const targetText = "MPK 31";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const element = document.getElementById("scramble-text");
let iterations = 0;

const interval = setInterval(() => {
  element.innerText = targetText
    .split("")
    .map((letter, index) => {
      if (index < iterations) {
        return targetText[index]; // Memunculkan huruf yang benar satu per satu
      }
      return chars[Math.floor(Math.random() * chars.length)]; // Mengacak sisa huruf
    })
    .join("");

  if (iterations >= targetText.length) {
    clearInterval(interval);
  }
  iterations += 1 / 3; // Mengatur kecepatan perubahan teks
}, 30);

const quotes = document.querySelectorAll(".quote");

function setupSplits() {
  quotes.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = SplitText.create(quote, {
      type: "words,chars",
      linesClass: "split-line",
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "center center",
        markers: { startColor: "#dfdcff", endColor: "transparent" },
      },
      duration: 0.6,
      ease: "circ.out",
      y: 80,
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits(); */
