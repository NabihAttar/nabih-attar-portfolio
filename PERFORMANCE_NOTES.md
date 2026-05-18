# Performance Notes

## What Was Optimized

- Built a reusable motion architecture instead of one-off animations, reducing duplicate logic and bundle churn.
- Scoped Framer Motion to high-impact areas (hero sequencing, viewport reveals, stagger, subtle parallax).
- Used CSS transitions for simple hover interactions to keep runtime work low.
- Kept animation properties GPU-friendly (`transform`, `opacity`) and avoided layout-triggering properties.
- Preserved server-first rendering model and restricted `"use client"` boundaries to motion/interactive wrappers.
- Maintained `content-visibility` + intrinsic size hints for non-critical sections.
- Kept continuous motion minimal and subtle (floating accents only).
- Added/kept reduced-motion support for accessibility and low-power devices.

## What Could Affect Lighthouse

- Additional Framer Motion primitives increase JS slightly; impact should stay moderate due to scoped usage.
- Sticky project filter on large screens adds visual complexity; monitor long-task behavior on low-end hardware.
- Hero above-the-fold now includes richer sequencing and visual depth; verify LCP remains healthy in production.
- Decorative depth layers (glow/dot/parallax accents) are lightweight, but still should be checked on mobile GPUs.

## What To Test After Implementation

1. Production run:
   - `npm run build`
   - `npm run start`
2. Lighthouse:
   - Mobile first, then desktop, in Incognito.
   - Run multiple times and average.
3. Key metrics to monitor:
   - Performance score target 90+
   - LCP
   - INP / TBT
   - CLS (verify no layout shift from motion)
4. Manual QA:
   - Confirm no hydration warnings/errors in console.
   - Check smoothness on low-end mobile emulation.
   - Validate reduced-motion behavior.
   - Verify sticky project filter and section transitions feel smooth, not jumpy.

