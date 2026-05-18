# Animation System

## Approach

This portfolio uses a layered, premium motion system focused on cinematic flow and performance safety:

- Hero-first storytelling with sequenced entrance motion.
- Section-by-section viewport reveals with once-only triggers.
- Progressive staggered cards/items for scanning rhythm.
- Subtle parallax depth on decorative layers and hero visual.
- Reserved, high-end micro-interactions on buttons, cards, and nav links.

All motion is intentionally restrained to preserve readability and avoid visual noise.

## Reusable Components

Core motion utilities are in `src/components/ui/reveal.jsx`:

- `Reveal` / `FadeUp`: base fade + upward reveal.
- `HeroReveal`: first-render premium intro motion.
- `SlideIn`: directional reveal (x/y).
- `StaggerContainer` / `StaggerItem`: sequence orchestration.
- `AnimatedHeading` / `AnimatedText`: semantic wrappers for polished typography reveal.
- `ParallaxSection`: lightweight scroll-depth transform.
- `SectionTransition`: subtle section divider reveal.
- `PremiumButton`: restrained premium hover/tap response.
- `FloatingAccent`: soft ambient floating glow accent.

Other reusable wrappers:

- `AnimatedCard` in `src/components/ui/animated-card.jsx`.
- `MotionSection` in `src/components/ui/motion-section.jsx` for section-level reveal behavior.

## Where Animations Were Added

- `Hero`: sequenced intro, CTA cadence, social reveal, visual reveal + subtle float, ambient accents.
- `About`, `Skills`, `Experience`, `Contact`: heading/content/card reveal flow.
- `Projects`: heading reveal, sticky filter rhythm on large screens, staggered cards, depth accent.
- `Entrepreneurial`, `AI Workflow`, `Education`: staggered content consistency.
- `Footer`: subtle final reveal.
- Global section continuity via `SectionTransition` in `src/app/page.jsx`.

## Performance Considerations

- Motion focuses on `transform` and `opacity` only.
- Hover effects are CSS-first where possible.
- Framer Motion is used for high-value scroll/sequence interactions only.
- `prefers-reduced-motion` is respected.
- Existing `content-visibility` optimization is preserved.
- Most pages/components stay server-rendered; client boundaries are scoped to interactive/motion wrappers.
