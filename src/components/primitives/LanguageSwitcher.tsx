import { useLang } from "@/i18n/useT";
import type { Lang } from "@/i18n/config";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border bg-surface/50 p-0.5 text-xs",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono tracking-wider transition-colors",
            lang === o.code
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
