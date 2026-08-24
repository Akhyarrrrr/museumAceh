import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

function setupLenis() {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // smooth-scroll anchor links through lenis
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"], a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const el = document.querySelector(url.hash);
    if (!el) return;
    e.preventDefault();
    lenis!.scrollTo(el as HTMLElement, { offset: -80 });
  });
}

function setupReveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? "0");
    gsap.fromTo(
      el,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((wrap) => {
    const step = parseFloat(wrap.dataset.revealStagger ?? "0.12");
    gsap.fromTo(
      wrap.children,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: step,
        scrollTrigger: { trigger: wrap, start: "top 85%" },
      },
    );
  });
}

function setupParallax() {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const strength = parseFloat(el.dataset.parallax ?? "0.15");
    gsap.fromTo(
      el,
      { yPercent: -strength * 100 },
      {
        yPercent: strength * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

function setupMarquees() {
  gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((el) => {
    const speed = parseFloat(el.dataset.marqueeSpeed ?? "40"); // px/s
    const distance = el.scrollWidth / 2;
    const tl = gsap.to(el, {
      x: -distance,
      duration: distance / speed,
      ease: "none",
      repeat: -1,
    });
    el.addEventListener("mouseenter", () => tl.timeScale(0.2));
    el.addEventListener("mouseleave", () => tl.timeScale(1));
  });
}

function setupCounters() {
  gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
    const target = parseInt(el.dataset.counter ?? "0", 10);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toLocaleString("en-US");
      },
    });
  });
}

function setupHeroReveal(scope: ParentNode = document) {
  if (reduced()) return;
  const lines = scope.querySelectorAll<HTMLElement>("[data-hero-line] > *");
  if (!lines.length) return;
  gsap.fromTo(
    lines,
    { yPercent: 110 },
    {
      yPercent: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.12,
      delay: 0.2,
    },
  );
  const fadeUps = scope.querySelectorAll<HTMLElement>("[data-hero-fade]");
  gsap.fromTo(
    fadeUps,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9, stagger: 0.12 },
  );
}

export function initAnimations() {
  if (reduced()) return; // ponytail: reduced-motion users get a static site, by design
  setupLenis();
  setupHeroReveal();
  setupReveals();
  setupParallax();
  setupMarquees();
  setupCounters();
  window.addEventListener("load", () => ScrollTrigger.refresh());
}
