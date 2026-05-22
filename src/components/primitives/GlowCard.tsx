import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlowCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  return (
    <Tag
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface/60 backdrop-blur-sm transition-all duration-500",
        "border border-border hover:border-primary/30",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(63,193,255,0.12),transparent_50%)] before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
        className,
      )}
      onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        e.currentTarget.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
      }}
    >
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
