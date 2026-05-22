import { useLocale, type Locale } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "es", label: "Espanol", flag: "ES" },
];

interface LanguageSwitcherProps {
  className?: string;
  variant?: "icon" | "full";
}

export function LanguageSwitcher({ className, variant = "icon" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={variant === "icon" ? "icon" : "sm"}
          className={cn(
            "text-muted-foreground hover:text-foreground",
            variant === "icon" ? "h-9 w-9" : "gap-2",
            className
          )}
        >
          <Globe className="h-4 w-4" />
          {variant === "full" && (
            <span className="text-xs font-medium uppercase">{locale}</span>
          )}
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={cn(
              "flex items-center justify-between gap-3 cursor-pointer",
              locale === lang.code && "bg-accent/50"
            )}
          >
            <span>{lang.label}</span>
            <span className="text-xs text-muted-foreground font-mono">{lang.flag}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
