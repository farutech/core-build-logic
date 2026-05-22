import { Link } from "@tanstack/react-router";
import { GlowCard } from "@/components/primitives/GlowCard";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CapabilityItem {
  to: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface DynamicCapabilitiesGridProps {
  items: CapabilityItem[];
  className?: string;
}

/**
 * Dynamic grid that adapts its layout based on item count to avoid awkward gaps.
 * 
 * Layout patterns:
 * - 1 item: Full width
 * - 2 items: 2 columns equal
 * - 3 items: 3 columns equal
 * - 4 items: 2x2 grid
 * - 5 items: First row 3, second row 2 (centered)
 * - 6 items: 2 rows of 3
 * - 7+ items: Optimized rows to minimize gaps
 */
export function DynamicCapabilitiesGrid({ items, className }: DynamicCapabilitiesGridProps) {
  const count = items.length;

  // Determine grid layout based on count
  const getGridClass = () => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 4) return "grid-cols-1 sm:grid-cols-2";
    if (count === 5) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6";
    if (count === 6) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 7) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6";
    if (count === 8) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  // Get span class for individual items based on count and position
  const getItemSpan = (index: number) => {
    if (count === 5) {
      // First 3 items span 2 cols each (fills 6 cols), last 2 span 3 cols each (fills 6 cols)
      if (index < 3) return "lg:col-span-2";
      return "lg:col-span-3";
    }
    if (count === 7) {
      // First 4 items: each spans 3 cols (fills 2 rows of 2)
      // Wait, let's think differently:
      // Row 1: 3 items (2 cols each = 6 cols)
      // Row 2: 4 items -> doesn't work well
      // Better: Row 1: 4 items, Row 2: 3 items centered
      // 4 items = span 3 each (but 4*3=12, need 6 cols)
      // Let's use: first row 3 items (2 cols each), second row 4 items
      // But 4 items in 6 cols is tricky
      // Alternative: Row 1: 4 items spanning 1.5 cols each (not possible)
      // Best solution: Use flex for complex layouts
      // For 7: first 3 span 2, next 2 span 2, last 2 span 3
      if (index < 3) return "lg:col-span-2";
      if (index < 5) return "lg:col-span-2";
      return "lg:col-span-3";
    }
    return "";
  };

  // For complex layouts, use a custom approach
  if (count === 5) {
    return (
      <div className={cn("flex flex-col gap-4", className)}>
        {/* First row: 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.slice(0, 3).map((item) => (
            <CapabilityCard key={item.to} item={item} />
          ))}
        </div>
        {/* Second row: 2 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-2/3 lg:mx-auto">
          {items.slice(3).map((item) => (
            <CapabilityCard key={item.to} item={item} />
          ))}
        </div>
      </div>
    );
  }

  if (count === 7) {
    return (
      <div className={cn("flex flex-col gap-4", className)}>
        {/* First row: 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item) => (
            <CapabilityCard key={item.to} item={item} />
          ))}
        </div>
        {/* Second row: 3 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4 lg:mx-auto">
          {items.slice(4).map((item) => (
            <CapabilityCard key={item.to} item={item} />
          ))}
        </div>
      </div>
    );
  }

  // Default grid for other counts
  return (
    <div className={cn("grid gap-4", getGridClass(), className)}>
      {items.map((item, index) => (
        <CapabilityCard key={item.to} item={item} className={getItemSpan(index)} />
      ))}
    </div>
  );
}

interface CapabilityCardProps {
  item: CapabilityItem;
  className?: string;
}

function CapabilityCard({ item, className }: CapabilityCardProps) {
  return (
    <GlowCard className={className}>
      <Link to={item.to} className="block h-full p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <h3 className="mt-6 font-display text-xl sm:text-2xl font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
      </Link>
    </GlowCard>
  );
}
