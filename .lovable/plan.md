# FaruTech — Refactor Estratégico Completo

## 1. Reposicionamiento de marca

**De:** "software house que hace desarrollo, consultoría y SaaS"
**A:** **"Ingeniería digital para plataformas que tienen que escalar de verdad."**

- **Tagline maestro:** *Engineering the digital frontier.*
- **Subtagline operativo:** *Construimos productos digitales serios, escalables y preparados para evolucionar.*
- **Pilares de marca:**
  1. **Criterio de ingeniería** — decisiones arquitectónicas justificadas, no recetas.
  2. **Escalabilidad real** — multi-tenant, performance, observabilidad desde el día 1.
  3. **Ejecución premium** — UX, motion, código mantenible.
  4. **Socio estratégico** — no vendor, no "fábrica de horas".
- **Tono de voz:** técnico, directo, confiado, sin buzzwords. Frases cortas. Verbos en presente. Cero "soluciones a la medida de tu negocio".

## 2. Sistema visual (branding aplicado)

Análisis del logo: isotipo geométrico con plano gris (estructura), azul cyan (escala/tecnología), verde (crecimiento) y punto naranja (acento humano/spark). Esto define el sistema.

- **Paleta (modo oscuro como default — premium tech):**
  - `--bg`: `#050507` (deep black con tinte azul)
  - `--surface`: `#0B0D12`
  - `--surface-elevated`: `#11141B`
  - `--border`: `rgba(255,255,255,0.08)`
  - `--text`: `#F5F7FA`
  - `--muted`: `#8A95A5`
  - `--primary` (cyan): `#3FC1FF` → glow `#00F5FF`
  - `--accent` (green): `#22E07C`
  - `--spark` (orange — usar SOLO en micro-acentos): `#FF7A1A`
  - `--gradient-hero`: `linear-gradient(135deg, #3FC1FF 0%, #22E07C 100%)`
  - `--gradient-glow`: radial cyan→transparente para halos
- **Tipografía:**
  - Display/H1–H2: **Geist** (o Inter Display fallback) — tracking ajustado negativo en headlines grandes.
  - UI/Body: **Inter** o **Geist Sans**.
  - Mono (snippets, etiquetas técnicas): **JetBrains Mono** o **Geist Mono**.
- **Tokens de superficie:** radius `0.75rem` por defecto, `1.25rem` en cards hero. Borders 1px translúcidos. Glow sutil con `box-shadow` cyan al 15%.
- **Texturas:** noise SVG sutil (opacity 3-5%) sobre fondos oscuros. Gradient mesh radial en hero.

## 3. Arquitectura del sitio (sitemap)

```
/                          Home — narrativa completa condensada
/capabilities              Hub de servicios (replaces "Servicios")
  /capabilities/product-engineering
  /capabilities/saas-platforms
  /capabilities/architecture-consulting
  /capabilities/ux-engineering
  /capabilities/automation-integrations
/methodology               Cómo trabajamos (Discovery → Scale)
/stack                     Stack tecnológico + criterio de decisión
/work                      Casos de uso / proyectos (conceptuales si hace falta)
/studio                    Quiénes somos (reemplaza /nosotros)
/careers                   Carreras (cultura + roles)
/contact (panel)           Drawer global, no página — disparable desde cualquier ruta
```

Navegación: `Capabilities ▾` (mega-menu), `Methodology`, `Stack`, `Work`, `Studio`, botón **Start a project** (abre drawer).

## 4. Estrategia UX y narrativa por página

### Home — flujo narrativo (8 actos)
1. **Hero** — headline doble línea con palabra en gradient cyan→green. Subhead 1 frase. 2 CTAs: *Start a project* (primary) / *See how we build* (ghost). Visual: render 3D abstracto del isotipo o mesh de nodos animado (Three.js solo si aporta — alternativa: canvas WebGL ligero o SVG animado con GSAP).
2. **Proof bar** — stats (`10x faster delivery`, `99.9% uptime`, `50+ platforms shipped`) + logos de stack (AWS, Vercel, Supabase, Stripe, Kubernetes…).
3. **Capabilities grid (bento)** — 5 tarjetas asimétricas, una grande "Product Engineering", resto en grid. Hover: glow + reveal de sub-bullets.
4. **Methodology timeline** — 5 pasos verticales con línea animada al scroll (GSAP ScrollTrigger).
5. **Architecture showcase** — diagrama interactivo de un sistema típico (microservices + API gateway + queues + data layer). SVG animado.
6. **Stack** — carrusel infinito de logos + filtros por capa (Frontend / Backend / Infra / Data / AI).
7. **Work / case snippets** — 3 cards con métrica + screenshot mock.
8. **CTA final** — "What are you building?" + abre drawer.

### Landings de capability (todas con la misma estructura)
1. Hero impacto (no descriptivo) — ej. para SaaS Platforms: *"Multi-tenant. Billing-ready. Built to grow without rewrites."*
2. **Problemas reales** — 3-4 cards con dolor cliente (procesos lentos, sistemas desconectados, deuda técnica, costos cloud descontrolados).
3. **Cómo lo resolvemos** — bullets con outcome, no features.
4. **Arquitectura visual** — diagrama específico de esa capability.
5. **Stack relevante**.
6. **Casos de uso** (3 escenarios).
7. **CTA contextual** ("Diseñemos tu arquitectura SaaS").

### Methodology
Timeline horizontal con scroll-snap: Discovery → Architecture → Design → Build → Scale. Cada paso: deliverables + duración típica + herramientas.

### Studio
Manifiesto ("Code is craft"), 4 valores, mapa global con nodos pulsantes (solo si hay distribución real), grid de equipo con hover de specialty.

### Careers
Hero ambicioso + valores + proceso de hiring (timeline) + open roles (lista filtrable) + dropzone "Send your GitHub/LinkedIn".

## 5. Contact drawer (pieza crítica)

**No es página.** Es `Sheet` lateral derecho (shadcn `Sheet`) disparable desde cualquier botón. 4 pasos con progress bar superior:

1. **What are you building?** — chips de industria (SaaS, FinTech, E-commerce, HealthTech, EdTech, Internal Tools, Other) + textarea "Describe in one paragraph".
2. **Stage** — Idea / MVP / Scaling / Rebuild / Migration.
3. **Scope** — sliders de timeline (weeks) y budget (range).
4. **Contact** — nombre, email, company, link opcional.

Microinteracciones: validación inline, transiciones de step con Framer Motion (slide + fade), submit con success state animado (checkmark draw SVG). Datos a Lovable Cloud (tabla `leads`).

## 6. Sistema de motion

- **Lenis** para smooth scroll global.
- **Framer Motion** para componentes y transiciones de UI.
- **GSAP + ScrollTrigger** para narrativa de scroll (timeline methodology, reveal de diagramas, parallax sutil).
- **Three.js** SOLO en el hero (render 3D del isotipo o mesh shader) — lazy-loaded, fallback estático para mobile/low-power.
- Principios: easing `cubic-bezier(0.22, 1, 0.36, 1)`, duraciones 300–600ms, nunca rebote, respetar `prefers-reduced-motion`.

## 7. Arquitectura frontend

- **TanStack Start** (ya en stack) + React 19 + Vite 7 + TypeScript estricto.
- **Routing:** file-based en `src/routes/` siguiendo arquitectura del sitemap (cada capability como ruta propia con `head()` SEO único).
- **Estilos:** Tailwind v4 + tokens en `src/styles.css` (oklch para paleta).
- **UI:** shadcn/ui (Sheet, Dialog, Tabs, Accordion, Form) + Radix primitives.
- **Estado:** Zustand para drawer global + step state; React Query para leads/futuros datos.
- **Animación:** framer-motion + gsap + lenis + (opcional) three.
- **Forms:** react-hook-form + zod.
- **Backend:** Lovable Cloud para captura de leads (tabla `leads` con RLS insert-only público), server fn `submitLead` con rate limiting.
- **SEO:** `head()` por ruta con title/description/og únicos, JSON-LD `Organization` en root, sitemap dinámico via server route.

### Estructura de componentes
```
src/
  components/
    layout/        Header, Footer, Shell
    contact/       ContactDrawer, steps/*
    home/          Hero, Bento, Methodology, ArchShowcase, StackMarquee
    primitives/    GradientText, GlowCard, NoiseOverlay, AnimatedBorder
    visuals/       HeroCanvas (three), ArchitectureDiagram (svg)
  routes/          (sitemap)
  lib/             leads.functions.ts, motion.ts
  stores/          useContactDrawer.ts
  styles.css
```

## 8. Estrategia de contenido (muestra de copy)

- **Hero H1:** `Engineering the digital frontier.`
- **Hero sub:** `Construimos plataformas escalables, SaaS multi-tenant y sistemas críticos para equipos que no pueden permitirse reescribir.`
- **Capability cards:**
  - *Product Engineering* — "De idea a plataforma en producción. Sin atajos, sin deuda."
  - *SaaS Platforms* — "Multi-tenant, billing y observabilidad desde el día uno."
  - *Architecture & Consulting* — "Diagnóstico técnico honesto. Roadmap accionable."
  - *UX Engineering* — "Interfaces que escalan con tu producto."
  - *Automation & Integrations* — "Conectamos lo que ya tienes con lo que necesitas."
- **CTAs:** `Start a project` · `Design your architecture` · `Tell us what you're building` · `Let's talk platforms`.

## 9. Performance y Core Web Vitals

- LCP < 1.8s: hero text como HTML (no canvas dependent), preload font, three.js lazy.
- CLS < 0.05: width/height en todos los visuales, font-display swap.
- INP < 200ms: drawer y forms con useTransition, debounce inputs.
- Imágenes via `vite-imagetools` (avif/webp).
- Route-based code splitting automático (TanStack auto-splitter).
- Three.js solo cliente, dynamic import, fallback SVG.

## 10. SEO

- Per-route `head()` con title/desc únicos.
- og:image generada para cada capability (1200×630).
- JSON-LD Organization + Service en cada landing.
- Sitemap server route + robots.txt.
- Semántica fuerte (H1 único, headings jerárquicos).
- Slugs en inglés para alcance internacional + soporte futuro i18n.

## 11. Responsive strategy

- Mobile-first con breakpoints `sm 640 / md 768 / lg 1024 / xl 1280`.
- Header colapsa a drawer en `<md`. Mega-menu se convierte en accordion.
- Bento se reordena a stack en mobile preservando jerarquía.
- Three.js hero se reemplaza por imagen estática + gradient en mobile.
- Drawer de contacto = full-screen en mobile.

## 12. Plan de implementación (fases)

1. **Fase 1 — Foundation:** tokens en `styles.css`, fuentes, Header/Footer/Shell, ContactDrawer (vacío), Lenis, motion primitives.
2. **Fase 2 — Home completo:** las 8 secciones con copy real, hero canvas opcional.
3. **Fase 3 — Capabilities:** 5 landings con template compartido.
4. **Fase 4 — Methodology / Stack / Studio / Careers.**
5. **Fase 5 — Contact drawer funcional + Lovable Cloud (tabla `leads`) + email notification.**
6. **Fase 6 — SEO, sitemap, performance pass, QA responsive.**

## Notas técnicas (sección para perfil técnico)

- TanStack Start file-routing en `src/routes/` — un archivo por ruta del sitemap, cada uno con `head()`.
- ContactDrawer montado en `__root.tsx` para disponibilidad global; estado en Zustand store `useContactDrawer`.
- Lead submission: `submitLead.functions.ts` con `createServerFn` + zod validator + insert a `leads` (Lovable Cloud). RLS: anon `INSERT` only, no `SELECT`.
- Three.js hero: componente `<HeroCanvas client:only />` con `React.lazy` + Suspense fallback SVG. Bundle separado.
- GSAP ScrollTrigger registrado una sola vez en `lib/motion.ts`. Cleanup en unmount.
- Tokens oklch en `:root` (modo oscuro como default — no class `.dark`, el sitio es dark-first; modo light opcional en fase posterior).

## Preguntas abiertas (a confirmar antes de construir)

1. ¿Idioma del sitio: **inglés**, **español** o **bilingüe** desde día 1?
2. ¿Casos en `/work` son **reales** (necesito nombres/screenshots) o **conceptuales**?
3. ¿Equipo real para `/studio` y `/careers` con fotos, o avatares/placeholders?
4. ¿Confirmas **dark-first** sin modo claro en esta fase?

Si me confirmas estos 4 puntos, arranco con la Fase 1 inmediatamente al aprobar el plan.