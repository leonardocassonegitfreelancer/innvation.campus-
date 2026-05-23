import { useEffect, useRef } from "react";

export default function ServicesGlowBg() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let animId = 0;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight || 1);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);

      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uTime:   { value: 0 },
          uAspect: { value: canvas.offsetWidth / Math.max(canvas.offsetHeight, 1) },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
        `,
        // Near-white base with warm subtractive orbs — designed for multiply blend on white bg
        fragmentShader: `
          uniform float uTime;
          uniform float uAspect;
          varying vec2 vUv;

          float glow(vec2 uv, vec2 center, float r) {
            vec2 d = uv - center;
            d.x *= uAspect;
            return exp(-dot(d, d) / (r * r));
          }

          void main() {
            vec2 uv = vUv;
            float t = uTime * 0.08;

            vec3 col = vec3(0.97, 0.96, 0.955);

            // Brand red warm orb
            vec2 c1 = vec2(0.18 + sin(t * 1.1) * 0.14, 0.35 + cos(t * 0.85) * 0.12);
            col -= vec3(0.16, 0.10, 0.05) * glow(uv, c1, 0.38) * 0.75;

            // Amber orb
            vec2 c2 = vec2(0.78 + cos(t * 0.9) * 0.11, 0.6 + sin(t * 0.72) * 0.1);
            col -= vec3(0.12, 0.07, 0.03) * glow(uv, c2, 0.30) * 0.65;

            // Soft magenta depth
            vec2 c3 = vec2(0.5 + sin(t * 0.62 + 1.8) * 0.18, 0.5 + cos(t * 0.5) * 0.14);
            col -= vec3(0.09, 0.03, 0.07) * glow(uv, c3, 0.32) * 0.5;

            // Small accent spark
            vec2 c4 = vec2(0.88 + sin(t * 0.78 + 3.0) * 0.07, 0.15 + cos(t * 0.65 + 2.0) * 0.07);
            col -= vec3(0.18, 0.08, 0.02) * glow(uv, c4, 0.12) * 0.8;

            col = clamp(col, 0.0, 1.0);
            gl_FragColor = vec4(col, 1.0);
          }
        `,
      });

      scene.add(new THREE.Mesh(geo, mat));

      let lastMs = 0;
      function tick(ms: number) {
        animId = requestAnimationFrame(tick);
        if (ms - lastMs < 33) return;
        lastMs = ms;
        mat.uniforms.uTime.value = ms * 0.001;
        renderer.render(scene, camera);
      }
      animId = requestAnimationFrame(tick);

      function onResize() {
        if (!canvas) return;
        const w = canvas.offsetWidth;
        const h = Math.max(canvas.offsetHeight, 1);
        renderer.setSize(w, h);
        mat.uniforms.uAspect.value = w / h;
      }
      window.addEventListener("resize", onResize);

      cleanup = () => {
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
      };
    })();

    return () => {
      cancelAnimationFrame(animId);
      cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "multiply", opacity: 0.75 }}
      aria-hidden="true"
    />
  );
}
