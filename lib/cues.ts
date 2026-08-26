export type EditorialCue = {
  id: string;
  start: number;
  peak: number;
  end: number;
  eyebrow: string;
  headline: string;
  body?: string;
  align: 'left' | 'center' | 'right';
};

export const editorialCues: EditorialCue[] = [
  {
    id: 'threshold',
    start: 0.02,
    peak: 0.12,
    end: 0.31,
    eyebrow: 'Rubik Sota / Portfolio Museum',
    headline: 'The portfolio begins before the museum doors open.',
    body: 'Scroll controls the film. The film controls the rhythm.',
    align: 'left',
  },
  {
    id: 'collection',
    start: 0.27,
    peak: 0.43,
    end: 0.64,
    eyebrow: 'A curated body of work',
    headline: 'Projects are not cards. They become exhibits.',
    body: 'Each transition prepares the visitor for spatial exploration.',
    align: 'right',
  },
  {
    id: 'enter',
    start: 0.60,
    peak: 0.74,
    end: 0.92,
    eyebrow: 'The threshold',
    headline: 'From editorial motion into an interactive gallery.',
    body: 'The museum is the portfolio. The interface is the visit.',
    align: 'left',
  },
];

export function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function smoothstep(edge0: number, edge1: number, value: number) {
  if (edge0 === edge1) return value < edge0 ? 0 : 1;
  const x = clamp01((value - edge0) / (edge1 - edge0));
  return x * x * (3 - 2 * x);
}

export function cueStrength(cue: EditorialCue, progress: number) {
  if (progress <= cue.start || progress >= cue.end) return 0;
  if (progress <= cue.peak) return smoothstep(cue.start, cue.peak, progress);
  return 1 - smoothstep(cue.peak, cue.end, progress);
}

export function activeCueId(progress: number) {
  let best = { id: 'none', strength: 0 };
  for (const cue of editorialCues) {
    const strength = cueStrength(cue, progress);
    if (strength > best.strength) best = { id: cue.id, strength };
  }
  return best.id;
}
