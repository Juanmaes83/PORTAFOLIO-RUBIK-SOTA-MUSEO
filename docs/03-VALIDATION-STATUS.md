# 03 — Validation Status

## Verified

- repository asset inventory;
- three sources of truth present;
- Pear public reference audit completed;
- Design DNA v1 created from documented schema;
- architecture contract frozen;
- first scroll/video slice implemented;
- `/lab` route implemented;
- missing video handled explicitly;
- scroll loop corrected so it is not recreated on every progress render;
- media proxy layering corrected.

## Automated gate

Pull request CI must pass:

- dependency install;
- TypeScript typecheck;
- Next.js production build.

The first CI attempt failed before dependency installation because `actions/setup-node` was configured with npm caching before a lockfile existed. That CI configuration error has been removed; the next run is the authoritative code/build check.

## Not yet verified

These require a real browser and/or the production video:

- perceived scroll smoothness;
- exact video seek smoothness;
- scene-to-copy synchronization against the real footage;
- typography quality at target desktop sizes;
- mobile visual polish;
- reduced-motion perceived quality;
- transition quality into the future 3D museum.

## Blocking asset

`public/media/rubik-sota-master.mp4` is not yet in GitHub.

The current visual proxy is a development instrument, not a production replacement.
