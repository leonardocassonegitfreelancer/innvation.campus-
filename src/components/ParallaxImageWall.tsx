import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
 * ParallaxImageWall — infinite horizontal multi-layer image wall (WebGL / Three.js).
 *
 * Adapted from the "Infinite Parallax Gallery – 5-Layer Scrolling Image Wall"
 * CodePen by Toc (ol-ivier), used under the MIT License (notice retained below).
 *
 *   The MIT License (MIT)
 *   Copyright (c) 2026 Toc (https://codepen.io/ol-ivier/pen/LERzpKJ)
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 * Adaptations for this project: ES-module `three` import (no global window.THREE),
 * full React lifecycle teardown, runs as a sized banner (not fixed fullscreen),
 * uses caller-supplied images, drops the mouse-wheel page-scroll hijack, and
 * honours prefers-reduced-motion.
 */

interface LayerCfg {
  scale: number;
  speed: number;
  opacity: number;
}

const DEFAULT_LAYERS: LayerCfg[] = [
  { scale: 1.5, speed: 80, opacity: 1.0 },
  { scale: 1.0, speed: 40, opacity: 0.85 },
  { scale: 0.8, speed: 30, opacity: 0.7 },
  { scale: 0.6, speed: 20, opacity: 0.55 },
  { scale: 0.5, speed: 15, opacity: 0.4 },
];

const BASE = 160; // base sprite edge in px (scaled per layer)
const DEFAULT_SPACING: [number, number] = [0.5, 0.9];

export interface ParallaxImageWallProps {
  /** Image URLs to scatter across the layers. */
  images: string[];
  className?: string;
  /** Cap on how many distinct textures to load (perf). */
  maxImages?: number;
  layers?: LayerCfg[];
  /** Gap between sprites as a fraction of sprite width (min, max). Higher = sparser. */
  spacing?: [number, number];
}

export default function ParallaxImageWall({
  images,
  className,
  maxImages = 24,
  layers: layerCfg = DEFAULT_LAYERS,
  spacing = DEFAULT_SPACING,
}: ParallaxImageWallProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || typeof window === "undefined") return;

    // Unique URLs, capped and shuffled.
    const urls = Array.from(new Set(images)).filter(Boolean);
    if (urls.length === 0) return;
    for (let i = urls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [urls[i], urls[j]] = [urls[j], urls[i]];
    }
    const useUrls = urls.slice(0, maxImages);

    const DEPTH = layerCfg.length;
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    let camera: THREE.OrthographicCamera | null = null;
    let lanes: THREE.Sprite[][] = Array.from({ length: DEPTH }, () => []);
    const textures: THREE.Texture[] = [];
    let speedFactor = 1; // direction: +1 / -1 (set by drag)
    let dragVelocity = 0;
    let dragActive = false;
    let lastX = 0;
    let lastTime = 0;
    let raf = 0;
    let ready = false;

    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    function disposeLanes() {
      for (const lane of lanes) {
        for (const s of lane) {
          scene.remove(s);
          (s.material as THREE.SpriteMaterial).dispose();
        }
      }
      lanes = Array.from({ length: DEPTH }, () => []);
    }

    function addSprite(layerIndex: number, startX: number) {
      const cfg = layerCfg[layerIndex];
      const texture = textures[Math.floor(Math.random() * textures.length)];
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: cfg.opacity,
      });
      const sprite = new THREE.Sprite(mat);
      const img = texture.image as { width?: number; height?: number } | undefined;
      let width = BASE;
      let height = BASE;
      if (img && img.width && img.height) {
        const ratio = img.width / img.height;
        if (ratio > 1) {
          width = BASE;
          height = BASE / ratio;
        } else {
          height = BASE;
          width = BASE * ratio;
        }
      }
      const sizeVar = rand(0.85, 1.15);
      const w = width * cfg.scale * sizeVar;
      const h = height * cfg.scale * sizeVar;
      const gap = w * rand(spacing[0], spacing[1]);
      const vh = container!.clientHeight;
      sprite.scale.set(w, h, 1);
      sprite.position.set(
        startX + w / 2 + gap,
        rand(h / 2, Math.max(h / 2, vh - h / 2)),
        -layerIndex * 50,
      );
      sprite.userData = {
        speed: cfg.speed * rand(0.45, 1.15),
        width: w,
        height: h,
        seed: rand(0, 1000),
        baseY: sprite.position.y,
        opacity: cfg.opacity,
      };
      lanes[layerIndex].push(sprite);
      scene.add(sprite);
    }

    function fillViewport() {
      const w = container!.clientWidth;
      for (let l = 0; l < DEPTH; l++) {
        let lane = lanes[l];
        let rightMost = lane.length
          ? Math.max(...lane.map((s) => s.position.x + s.userData.width / 2))
          : -w * 1.2;
        while (rightMost < w) {
          addSprite(l, rightMost);
          lane = lanes[l];
          rightMost = Math.max(
            ...lane.map((s) => s.position.x + s.userData.width / 2),
          );
        }
      }
    }

    function cleanupSprites() {
      const w = container!.clientWidth;
      const buffer = w * 0.5;
      for (let l = 0; l < DEPTH; l++) {
        const lane = lanes[l];
        const max = Math.max(8, Math.ceil(w / 120) + 4);
        if (lane.length <= max) continue;
        for (let i = lane.length - 1; i >= 0; i--) {
          const s = lane[i];
          const ud = s.userData;
          const off =
            speedFactor >= 0
              ? s.position.x - ud.width / 2 > w + buffer
              : s.position.x + ud.width / 2 < -buffer;
          if (off) {
            scene.remove(s);
            (s.material as THREE.SpriteMaterial).dispose();
            lane.splice(i, 1);
            if (lane.length <= max) break;
          }
        }
      }
    }

    function setSize() {
      const w = container!.clientWidth;
      const h = container!.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      if (!camera) {
        camera = new THREE.OrthographicCamera(0, w, h, 0, -1000, 1000);
        camera.position.z = 10;
      } else {
        camera.right = w;
        camera.top = h;
        camera.updateProjectionMatrix();
      }
    }

    function render() {
      if (camera) renderer.render(scene, camera);
    }

    function animate() {
      raf = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min(40, now - lastTime) / 1000;
      lastTime = now;
      const w = container!.clientWidth;
      dragVelocity *= 0.92;
      if (dragVelocity !== 0) speedFactor = Math.sign(dragVelocity) || speedFactor;
      if (Math.random() < 0.01) cleanupSprites();
      for (const lane of lanes) {
        for (const s of lane) {
          const ud = s.userData;
          s.position.x += ud.speed * speedFactor * dt;
          if (speedFactor > 0 && s.position.x - ud.width / 2 > w) {
            s.position.x = -ud.width / 2 - rand(0, ud.width);
          } else if (speedFactor < 0 && s.position.x + ud.width / 2 < 0) {
            s.position.x = w + ud.width / 2 + rand(0, ud.width);
          }
          const pulse = 1 + Math.sin(now * 0.001 + ud.seed) * 0.015;
          s.scale.x = ud.width * pulse;
          s.scale.y = ud.height * pulse;
          s.position.y = ud.baseY + Math.sin(now * 0.001 + ud.seed) * 5;
        }
      }
      render();
    }

    setSize();

    const onResize = () => {
      setSize();
      if (ready) {
        disposeLanes();
        fillViewport();
        render();
      }
    };
    window.addEventListener("resize", onResize);

    // Horizontal drag flips scroll direction (with inertia). Touch stays passive
    // so the page can still scroll vertically.
    const getX = (e: MouseEvent | TouchEvent) =>
      "touches" in e ? e.touches[0]?.clientX ?? lastX : (e as MouseEvent).clientX;
    const onDown = (e: MouseEvent | TouchEvent) => {
      dragActive = true;
      lastX = getX(e);
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragActive) return;
      const x = getX(e);
      dragVelocity = (x - lastX) * 0.02;
      lastX = x;
    };
    const onUp = () => {
      dragActive = false;
    };
    container.addEventListener("mousedown", onDown);
    container.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    container.addEventListener("touchstart", onDown, { passive: true });
    container.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    // Load textures, then build + start.
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";
    let pending = useUrls.length;
    const onSettled = (tex: THREE.Texture) => {
      textures.push(tex);
      if (--pending === 0) {
        ready = true;
        fillViewport();
        lastTime = performance.now();
        if (reduceMotion) render();
        else animate();
      }
    };
    useUrls.forEach((url) => {
      loader.load(
        url,
        (tex) => onSettled(tex),
        undefined,
        () => {
          // Skip failed loads but keep the ready countdown honest.
          if (--pending === 0 && textures.length) {
            ready = true;
            fillViewport();
            lastTime = performance.now();
            if (reduceMotion) render();
            else animate();
          }
        },
      );
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousedown", onDown);
      container.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      container.removeEventListener("touchstart", onDown);
      container.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
      disposeLanes();
      for (const t of textures) t.dispose();
      renderer.dispose();
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [images, maxImages, layerCfg, spacing]);

  return <div ref={ref} className={className} aria-hidden="true" style={{ cursor: "grab" }} />;
}
