import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

type FormState = {
  industry: string;
  description: string;
  stage: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
};

const empty: FormState = {
  industry: "", description: "", stage: "", timeline: "",
  budget: "", name: "", email: "", company: "",
};

export function ContactDrawer() {
  const t = useT();
  const { open, closeDrawer } = useContactDrawer();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((d) => ({ ...d, [k]: v }));

  const canNext =
    (step === 0 && data.industry && data.description.trim().length > 10) ||
    (step === 1 && data.stage) ||
    (step === 2 && data.timeline && data.budget) ||
    step === 3;

  const handleSubmit = () => {
    if (!data.name || !data.email) return;
    console.log("Lead submitted:", data);
    setSubmitted(true);
    toast.success(t.contact.toast);
  };

  const reset = () => {
    setStep(0);
    setData(empty);
    setSubmitted(false);
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(o) => {
        if (!o) {
          closeDrawer();
          setTimeout(reset, 300);
        }
      }}
    >
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg border-l border-border bg-background p-0 flex flex-col overflow-hidden"
      >
        <div className="px-8 pt-8">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-all duration-500",
                  i <= step ? "bg-gradient-to-r from-primary to-accent" : "bg-border",
                )}
              />
            ))}
          </div>
          <SheetHeader className="mt-6 text-left p-0">
            <SheetTitle className="text-2xl font-semibold tracking-tight">
              {submitted ? t.contact.headerSubmitted : t.contact.header}
            </SheetTitle>
            <SheetDescription className="text-muted-foreground">
              {submitted
                ? t.contact.descSubmitted
                : t.contact.descStep.replace("{{step}}", String(step + 1))}
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8">
          {submitted ? (
            <SuccessState message={t.contact.successMsg} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {step === 0 && (
                  <>
                    <div>
                      <Label className="mb-3 block">{t.contact.industryLabel}</Label>
                      <div className="flex flex-wrap gap-2">
                        {t.contact.industries.map((i) => (
                          <Chip key={i} active={data.industry === i} onClick={() => update("industry", i)}>
                            {i}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="desc" className="mb-3 block">{t.contact.descLabel}</Label>
                      <Textarea
                        id="desc"
                        rows={5}
                        placeholder={t.contact.descPlaceholder}
                        value={data.description}
                        onChange={(e) => update("description", e.target.value)}
                        className="bg-surface/50 border-border resize-none"
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <div>
                    <Label className="mb-3 block">{t.contact.stageLabel}</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {t.contact.stages.map((s) => (
                        <button
                          key={s}
                          onClick={() => update("stage", s)}
                          className={cn(
                            "rounded-xl border p-4 text-left transition-all",
                            data.stage === s
                              ? "border-primary/50 bg-primary/5"
                              : "border-border bg-surface/30 hover:border-foreground/20",
                          )}
                        >
                          <div className="font-medium">{s}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {t.contact.stageHints[s] ?? ""}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <Label className="mb-3 block">{t.contact.timelineLabel}</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.contact.timelines.map((tl) => (
                          <Chip key={tl} active={data.timeline === tl} onClick={() => update("timeline", tl)}>
                            {tl}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="mb-3 block">{t.contact.budgetLabel}</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.contact.budgets.map((b) => (
                          <Chip key={b} active={data.budget === b} onClick={() => update("budget", b)}>
                            {b}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">{t.contact.nameLabel}</Label>
                      <Input id="name" value={data.name} onChange={(e) => update("name", e.target.value)} className="bg-surface/50 border-border" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 block">{t.contact.emailLabel}</Label>
                      <Input id="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className="bg-surface/50 border-border" />
                    </div>
                    <div>
                      <Label htmlFor="company" className="mb-2 block">{t.contact.companyLabel}</Label>
                      <Input id="company" value={data.company} onChange={(e) => update("company", e.target.value)} className="bg-surface/50 border-border" />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {!submitted && (
          <div className="flex items-center justify-between border-t border-border p-6">
            <Button variant="ghost" size="sm" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
              <ArrowLeft className="mr-1 h-4 w-4" /> {t.contact.back}
            </Button>
            {step < 3 ? (
              <Button
                size="sm"
                disabled={!canNext}
                onClick={() => setStep((s) => Math.min(3, s + 1))}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                {t.contact.continue} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                size="sm"
                disabled={!data.name || !data.email}
                onClick={handleSubmit}
                className="bg-gradient-to-r from-primary to-accent text-background hover:opacity-90"
              >
                {t.contact.send} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Chip({
  children, active, onClick,
}: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-all",
        active
          ? "border-primary/50 bg-primary/10 text-foreground"
          : "border-border bg-surface/30 text-muted-foreground hover:text-foreground hover:border-foreground/20",
      )}
    >
      {children}
    </button>
  );
}

function SuccessState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent"
      >
        <Check className="h-8 w-8 text-background" strokeWidth={3} />
      </motion.div>
      <p className="mt-6 text-sm text-muted-foreground max-w-xs">{message}</p>
    </div>
  );
}
