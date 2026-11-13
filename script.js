// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Highlight the section being read in the menu
const navAnchors = [...document.querySelectorAll(".nav-links a")];
const sections = navAnchors
  .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) =>
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

// Demo video: play on its own unless the visitor asked for less motion
const demo = document.querySelector("video[data-demo]");
if (demo) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    demo.controls = true;
  } else {
    demo.muted = true;
    demo.play().catch(() => { demo.controls = true; });
  }
}
