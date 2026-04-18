import { useState, useEffect } from "react";

const SLICES = 40;

interface Props {
  src: string;
  alt: string;
}

export default function VenetianImage({ src, alt }: Props) {
  const [current, setCurrent] = useState(src);
  const [incoming, setIncoming] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (src === current) return;
    setIncoming(src);
    setAnimKey((k) => k + 1);
    const t = setTimeout(() => {
      setCurrent(src);
      setIncoming(null);
    }, SLICES * 55 + 450);
    return () => clearTimeout(t);
  }, [src]);

  return (
    <>
      <img
        src={current}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        loading="lazy"
      />
      {incoming && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(SLICES)].map((_, i) => (
            <div
              key={`${animKey}-${i}`}
              className="absolute w-full"
              style={{
                top: `${(i / SLICES) * 100}%`,
                height: `${100 / SLICES}%`,
                backgroundImage: `url(${incoming})`,
                backgroundSize: `100% ${SLICES * 100}%`,
                backgroundPosition: `0% ${i === 0 ? "0%" : `${(i / (SLICES - 1)) * 100}%`}`,
                backgroundRepeat: "no-repeat",
                animation: `venetian-${i % 2 === 0 ? "left" : "right"} 0.45s ease ${i * 0.055}s both`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
