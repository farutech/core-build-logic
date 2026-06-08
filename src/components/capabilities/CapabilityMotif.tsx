// Decorative identity layers for capability pages. Each `motif` renders a
// distinct accent-colored background pattern, and each `shape` renders a
// unique frame decoration behind the hero image, all driven by the per-slug
// config so every solution page reads as its own product.
import type { CapabilityMotif as Motif, CapabilityShape } from "@/lib/capabilityConfig";

/** Full-bleed background pattern unique to each solution. */
export function CapabilityMotif({ variant }: { variant: Motif }) {
  switch (variant) {
    case "grid":
      return (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "linear-gradient(var(--cap-accent) 1px, transparent 1px), linear-gradient(90deg, var(--cap-accent) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 30% 20%, #000 0%, transparent 75%)",
            maskImage:
              "radial-gradient(70% 60% at 30% 20%, #000 0%, transparent 75%)",
          }}
        />
      );

    case "spectrum":
      return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute -right-10 h-[2px] origin-right"
              style={{
                top: `${12 + i * 9}%`,
                width: `${60 - i * 8}%`,
                background:
                  "linear-gradient(90deg, transparent, var(--cap-accent))",
                opacity: 0.35 - i * 0.04,
              }}
            />
          ))}
        </div>
      );

    case "blueprint":
      return (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            background:
              "repeating-linear-gradient(45deg, var(--cap-accent) 0 1px, transparent 1px 16px)",
            WebkitMaskImage:
              "radial-gradient(60% 70% at 75% 30%, #000 0%, transparent 70%)",
            maskImage:
              "radial-gradient(60% 70% at 75% 30%, #000 0%, transparent 70%)",
          }}
        />
      );

    case "orbit":
      return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {[300, 540, 780].map((d, i) => (
            <div
              key={d}
              className="absolute rounded-full border"
              style={{
                width: d,
                height: d,
                right: -d / 3,
                top: -d / 4,
                borderColor: "var(--cap-accent)",
                opacity: 0.16 - i * 0.03,
              }}
            />
          ))}
        </div>
      );

    case "circuit":
      return (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            background:
              "radial-gradient(var(--cap-accent) 1.4px, transparent 1.4px)",
            backgroundSize: "30px 30px",
            WebkitMaskImage:
              "radial-gradient(75% 70% at 50% 25%, #000 0%, transparent 78%)",
            maskImage:
              "radial-gradient(75% 70% at 50% 25%, #000 0%, transparent 78%)",
          }}
        />
      );

    default:
      return null;
  }
}

const shapeMask: Record<CapabilityShape, string> = {
  arch: "radial-gradient(72% 78% at 50% 40%, #000 32%, transparent 74%)",
  diagonal: "radial-gradient(82% 70% at 42% 50%, #000 26%, transparent 72%)",
  hex: "radial-gradient(64% 74% at 50% 48%, #000 36%, transparent 72%)",
  blob: "radial-gradient(76% 72% at 56% 44%, #000 28%, transparent 72%)",
  tilt: "radial-gradient(80% 72% at 58% 42%, #000 28%, transparent 73%)",
};

/** Per-shape decoration drawn behind the hero image. */
export function HeroFrame({
  shape,
  children,
}: {
  shape: CapabilityShape;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Accent decoration unique to each personality */}
      {shape === "arch" && (
        <div
          aria-hidden
          className="absolute inset-x-6 top-2 bottom-10 rounded-t-[999px] border border-t-2"
          style={{ borderColor: "color-mix(in oklab, var(--cap-accent) 45%, transparent)" }}
        />
      )}
      {shape === "diagonal" && (
        <div
          aria-hidden
          className="absolute inset-4"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--cap-accent) 22%, transparent), transparent 60%)",
            clipPath: "polygon(0 12%, 100% 0, 100% 88%, 0 100%)",
          }}
        />
      )}
      {shape === "tilt" && (
        <div
          aria-hidden
          className="absolute inset-6 rounded-xl border"
          style={{
            borderColor: "color-mix(in oklab, var(--cap-accent) 40%, transparent)",
            transform: "rotate(-4deg)",
          }}
        />
      )}
      {shape === "blob" && (
        <div
          aria-hidden
          className="absolute inset-8 blur-2xl"
          style={{
            background: "var(--cap-glow)",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            opacity: 0.5,
          }}
        />
      )}
      {shape === "hex" && (
        <div
          aria-hidden
          className="absolute inset-6"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--cap-accent) 18%, transparent), transparent)",
            clipPath:
              "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)",
          }}
        />
      )}

      <div
        className="relative"
        style={{
          WebkitMaskImage: shapeMask[shape],
          maskImage: shapeMask[shape],
        }}
      >
        {children}
      </div>
    </div>
  );
}
