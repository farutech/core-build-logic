import logo from "@/assets/logo.webp";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return <img src={logo} alt="FaruTech" className={className} loading="eager" decoding="async" />;
}
