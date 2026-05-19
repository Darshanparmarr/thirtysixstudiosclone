import { useEffect, useMemo, useRef, useState } from "react";
import canvasImages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MOBILE_QUERY = "(max-width: 768px)";
const DESKTOP_MULTIPLIER = 1.5;
const MOBILE_MULTIPLIER = 0.4;

function readMultiplier() {
  if (typeof window === "undefined") return DESKTOP_MULTIPLIER;
  return window.matchMedia(MOBILE_QUERY).matches
    ? MOBILE_MULTIPLIER
    : DESKTOP_MULTIPLIER;
}

const imageCache = new Map();

function loadImage(src) {
  let entry = imageCache.get(src);
  if (entry) return entry;
  const img = new Image();
  img.decoding = "async";
  img.src = src;
  entry = { img, ready: img.complete, promise: null };
  if (!entry.ready) {
    entry.promise = new Promise((resolve) => {
      img.onload = () => {
        entry.ready = true;
        resolve(img);
      };
      img.onerror = () => resolve(null);
    });
  }
  imageCache.set(src, entry);
  return entry;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const canvasRef = useRef(null);
  const indexRef = useRef({ value: startIndex });
  const lastDrawnRef = useRef(-1);
  const tweenRef = useRef(null);
  const visibleRef = useRef(true);
  const [multiplier, setMultiplier] = useState(readMultiplier);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const handler = () => setMultiplier(readMultiplier());
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const scrollSpeed = useMemo(
    () => (Math.random() * 0.9 + 0.1).toFixed(1),
    []
  );

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const i = Math.floor(indexRef.current.value);
    if (i === lastDrawnRef.current) return;
    const entry = loadImage(canvasImages[i]);
    if (!entry.ready) {
      entry.promise?.then(() => {
        if (Math.floor(indexRef.current.value) === i) draw();
      });
      return;
    }
    lastDrawnRef.current = i;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctx.drawImage(entry.img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
  };

  useEffect(() => {
    for (let i = 0; i < numImages; i++) loadImage(canvasImages[startIndex + i]);
  }, [startIndex, numImages]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastDrawnRef.current = -1;
      draw();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRef.current = entry.isIntersecting;
          const tween = tweenRef.current;
          if (!tween) continue;
          if (entry.isIntersecting) tween.play();
          else tween.pause();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(canvas);
    return () => io.disconnect();
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion) {
      draw();
      return;
    }
    tweenRef.current = gsap.to(indexRef.current, {
      value: startIndex + numImages - 1,
      duration,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        if (!visibleRef.current) return;
        draw();
      },
    });
    return () => tweenRef.current?.kill();
  }, [startIndex, numImages, duration]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={scrollSpeed}
      ref={canvasRef}
      className="absolute pointer-events-none will-change-transform"
      style={{
        width: `${size * multiplier}px`,
        height: `${size * multiplier}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex,
      }}
    />
  );
}

export default Canvas;
