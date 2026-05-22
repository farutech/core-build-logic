import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/primitives/Logo";

export function Hero() {
  const openDrawer = useContactDrawer((s) => s.openDrawer);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 noise">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh opacity-80 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Now building: a multi-tenant analytics platform for a Series B fintech.
        </motion.div>

        <div className="mt-8 grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
            >
              Engineering<br />
              <span className="text-gradient">the digital</span><br />
              <span className="text-gradient">frontier.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              We build scalable platforms, multi-tenant SaaS, and critical
              systems for teams that can't afford to rewrite. No shortcuts.
              No tech debt. Just engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                onClick={() => openDrawer("hero")}
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-6 rounded-full"
              >
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="h-12 px-6 rounded-full hover:bg-surface"
              >
                <a href="#methodology">See how we build</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square hidden md:block"
          >
            <div className="absolute inset-0 bg-glow opacity-80" />
            <Logo className="relative w-full h-full animate-float drop-shadow-[0_0_60px_rgba(63,193,255,0.4)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
