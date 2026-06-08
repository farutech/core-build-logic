// Per-capability visual identity. Drives the parametrizable CapabilityPage
// template: each solution gets its own image, accent color, decorative motif,
// hero frame and rhythm so pages feel like distinct products (Stori-style)
// instead of a flat shared template.
import productImg from "@/assets/cap-product-engineering.jpg";
import saasImg from "@/assets/cap-saas-platforms.jpg";
import architectureImg from "@/assets/cap-architecture-consulting.jpg";
import uxImg from "@/assets/cap-ux-engineering.jpg";
import automationImg from "@/assets/cap-automation-integrations.jpg";

export type CapabilitySlug =
  | "product-engineering"
  | "saas-platforms"
  | "architecture-consulting"
  | "ux-engineering"
  | "automation-integrations";

/** Decorative background pattern that gives the hero its personality. */
export type CapabilityMotif =
  | "grid"
  | "spectrum"
  | "blueprint"
  | "orbit"
  | "circuit";

/** Decoration drawn behind/around the hero image. */
export type CapabilityShape = "arch" | "diagonal" | "hex" | "blob" | "tilt";

export interface CapabilityVisual {
  image: string;
  /** Accent color in HEX, used for inline glows/borders unique to the page. */
  accent: string;
  /** Secondary accent for gradients / duotone touches. */
  accent2: string;
  /** Soft rgba shadow color derived from the accent. */
  glow: string;
  /** Layout flavor, varies the hero composition per page. */
  layout: "left" | "right" | "centered";
  /** Distinct personality controls. */
  motif: CapabilityMotif;
  shape: CapabilityShape;
  /** Vertical signature word stamped beside the hero. */
  signature: string;
  /** Headline metrics rendered in the hero band. */
  metrics: { value: string }[];
}

export const capabilityVisuals: Record<CapabilitySlug, CapabilityVisual> = {
  "product-engineering": {
    image: productImg,
    accent: "#3FC1FF",
    accent2: "#7C5CFF",
    glow: "rgba(63,193,255,0.45)",
    layout: "left",
    motif: "grid",
    shape: "arch",
    signature: "BUILD",
    metrics: [{ value: "14 wks" }, { value: "0" }, { value: "99.9%" }],
  },
  "saas-platforms": {
    image: saasImg,
    accent: "#22E07C",
    accent2: "#14B8A6",
    glow: "rgba(34,224,124,0.4)",
    layout: "right",
    motif: "spectrum",
    shape: "diagonal",
    signature: "SCALE",
    metrics: [{ value: "40+" }, { value: "6 mo" }, { value: "$0" }],
  },
  "architecture-consulting": {
    image: architectureImg,
    accent: "#FF7A1A",
    accent2: "#FF3D71",
    glow: "rgba(255,122,26,0.4)",
    layout: "left",
    motif: "blueprint",
    shape: "tilt",
    signature: "DIAGNOSE",
    metrics: [{ value: "47%" }, { value: "2–4 wks" }, { value: "10x" }],
  },
  "ux-engineering": {
    image: uxImg,
    accent: "#B66BFF",
    accent2: "#FF6BD6",
    glow: "rgba(182,107,255,0.42)",
    layout: "right",
    motif: "orbit",
    shape: "blob",
    signature: "CRAFT",
    metrics: [{ value: "12" }, { value: "200+" }, { value: "AA" }],
  },
  "automation-integrations": {
    image: automationImg,
    accent: "#36E0C0",
    accent2: "#3F9BFF",
    glow: "rgba(54,224,192,0.4)",
    layout: "centered",
    motif: "circuit",
    shape: "hex",
    signature: "CONNECT",
    metrics: [{ value: "24/7" }, { value: "0" }, { value: "4→1" }],
  },
};
