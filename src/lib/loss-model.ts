/**
 * The loss estimator's model. It is the gated Prüfquoten-Radar dashboard's
 * method, with the hospital-specific inputs replaced by what the reader types
 * in, so nothing on the public page says anything about a named hospital.
 *
 *   loss 2026 = audits × (1 − unbeanstandete Quote) × Ø Differenzbetrag
 *   loss 2027 = loss 2026 × cohort factor
 *
 * Every constant below is a published figure, or derived from one, and carries
 * its source. Change them here and nowhere else.
 */

// ---- Ø Differenzbetrag per MD region, § 17c Abs. 6 KHG, reporting year 2025.
// The latest published year; the dashboard projects 2026 with it too.
export const DIFF_YEAR = 2025;

export const MD_DIFF_2025 = {
  'Baden-Württemberg': 2233.21,
  Bayern: 2262.63,
  'Berlin-Brandenburg': 2487.02,
  Bremen: 2124.39,
  Hessen: 2044.01,
  'Mecklenburg-Vorpommern': 1931.57,
  Niedersachsen: 2197.5,
  Nord: 2213.6,
  Nordrhein: 2307.59,
  'Rheinland-Pfalz': 2145.3,
  Saarland: 1794.25,
  Sachsen: 2495.85,
  'Sachsen-Anhalt': 2000.4,
  Thüringen: 2195.24,
  'Westfalen-Lippe': 2112.24,
} as const;

export type MdRegion = keyof typeof MD_DIFF_2025;

/** Regional values weighted by each region's contested audits in 2025
 *  (SUM_AP − SUM_US, § 275c Abs. 4 SGB V): 570,699 cases nationwide. */
export const NATIONAL_DIFF_2025 = 2219.32;

/** Bundesland → MD region. NRW has two MD regions, so it appears twice. */
export const STATES: { id: string; name: string; md: MdRegion }[] = [
  { id: 'bw', name: 'Baden-Württemberg', md: 'Baden-Württemberg' },
  { id: 'by', name: 'Bayern', md: 'Bayern' },
  { id: 'be', name: 'Berlin', md: 'Berlin-Brandenburg' },
  { id: 'bb', name: 'Brandenburg', md: 'Berlin-Brandenburg' },
  { id: 'hb', name: 'Bremen', md: 'Bremen' },
  { id: 'hh', name: 'Hamburg', md: 'Nord' },
  { id: 'he', name: 'Hessen', md: 'Hessen' },
  { id: 'mv', name: 'Mecklenburg-Vorpommern', md: 'Mecklenburg-Vorpommern' },
  { id: 'ni', name: 'Niedersachsen', md: 'Niedersachsen' },
  { id: 'nw-no', name: 'Nordrhein-Westfalen · Nordrhein', md: 'Nordrhein' },
  { id: 'nw-wl', name: 'Nordrhein-Westfalen · Westfalen-Lippe', md: 'Westfalen-Lippe' },
  { id: 'rp', name: 'Rheinland-Pfalz', md: 'Rheinland-Pfalz' },
  { id: 'sl', name: 'Saarland', md: 'Saarland' },
  { id: 'sn', name: 'Sachsen', md: 'Sachsen' },
  { id: 'st', name: 'Sachsen-Anhalt', md: 'Sachsen-Anhalt' },
  { id: 'sh', name: 'Schleswig-Holstein', md: 'Nord' },
  { id: 'th', name: 'Thüringen', md: 'Thüringen' },
];

// ---- Beds → audits. Only used when the reader does not know their volume.
/** Prüffähige Schlussrechnungen 2025 (§ 275c Abs. 4 SGB V, all reporting
 *  hospitals, 14,884,723) ÷ beds 2024 (Destatis, Grunddaten der Krankenhäuser,
 *  472,900). */
export const BILLS_PER_BED = 31.48;

/** Realised audit rate (SUM_AP ÷ bills) by 2026 quota tier, 2026 Q1–Q2. */
export const REALISED_RATE_2026: Record<Tier2026, number> = { 5: 0.058, 10: 0.0855, 15: 0.1126 };

// ---- The two quota ladders.
export type Tier2026 = 5 | 10 | 15;

/** § 275c Abs. 2 SGB V until 31.12.2026. */
export function tier2026(quote: number): Tier2026 {
  if (quote >= 60) return 5;
  if (quote >= 40) return 10;
  return 15;
}

/** § 275c SGB V as amended by the GKV-BStabG, from 1.1.2027.
 *  `null` = no ceiling. */
export function tier2027(quote: number): 5 | 20 | 40 | null {
  if (quote >= 80) return 5;
  if (quote >= 65) return 20;
  if (quote >= 50) return 40;
  return null;
}

// ---- Cohort factors. Kaysers Consilium, "Verdreifachung der Prüffälle ab 2027
// möglich", 13.07.2026: permitted audits nationwide per cohort, before and
// after. Kept as raw pairs so the factor and its citation always agree. The
// study models the uncapped band at 40 %, and so does the default here.
export interface Cohort {
  from: Tier2026;
  to: 5 | 20 | 40;
  before: number;
  after: number;
  hospitals: number;
}

const COHORTS = {
  top: { from: 5, to: 5, before: 15587, after: 15587, hospitals: 146 },
  upper: { from: 5, to: 20, before: 35234, after: 86000, hospitals: 232 },
  lower5: { from: 5, to: 40, before: 25173, after: 129201, hospitals: 140 },
  lower10: { from: 10, to: 40, before: 288539, after: 1018416, hospitals: 729 },
  lower15: { from: 15, to: 40, before: 75823, after: 181122, hospitals: 199 },
} satisfies Record<string, Cohort>;

export function cohortFor(quote: number): Cohort {
  const from = tier2026(quote);
  if (from === 10) return COHORTS.lower10;
  if (from === 15) return COHORTS.lower15;
  if (quote >= 80) return COHORTS.top;
  if (quote >= 65) return COHORTS.upper;
  return COHORTS.lower5;
}

export const UNCAPPED_DEFAULT = 40;

export interface Inputs {
  /** Unbeanstandete Quote 2026, 0–100. */
  quote: number;
  /** Audits per year. Takes precedence over beds. */
  audits?: number | null;
  beds?: number | null;
  /** Key of STATES, or null for the national figure. */
  state?: string | null;
  /** Rate assumed for the uncapped band, 40–100. */
  uncappedRate?: number;
}

export interface Result {
  audits: number;
  auditsEstimated: boolean;
  contestedShare: number;
  diff: number;
  md: MdRegion | null;
  tier2026: Tier2026;
  tier2027: 5 | 20 | 40 | null;
  cohort: Cohort;
  /** The rate the 2027 figure is computed with (the tier, or the chosen
   *  assumption when uncapped). */
  rate2027: number;
  factor: number;
  audits2027: number;
  loss2026: number;
  loss2027: number;
}

export function estimate(input: Inputs): Result | null {
  const { quote } = input;
  if (!Number.isFinite(quote) || quote < 0 || quote > 100) return null;

  const t26 = tier2026(quote);
  let audits: number;
  let auditsEstimated = false;
  if (input.audits != null && input.audits > 0) {
    audits = input.audits;
  } else if (input.beds != null && input.beds > 0) {
    audits = input.beds * BILLS_PER_BED * REALISED_RATE_2026[t26];
    auditsEstimated = true;
  } else {
    return null;
  }

  const stateRow = STATES.find((s) => s.id === input.state);
  const md = stateRow?.md ?? null;
  const diff = md ? MD_DIFF_2025[md] : NATIONAL_DIFF_2025;

  const t27 = tier2027(quote);
  const cohort = cohortFor(quote);
  const base = cohort.after / cohort.before;
  // Uncapped: scale the study's 40 % factor to the chosen rate. Permitted
  // audits are the rate times the bills, so the scaling is linear.
  const rate2027 = t27 ?? clamp(input.uncappedRate ?? UNCAPPED_DEFAULT, 40, 100);
  const factor = t27 === null ? (base * rate2027) / cohort.to : base;

  const contestedShare = 1 - quote / 100;
  const loss2026 = audits * contestedShare * diff;

  return {
    audits,
    auditsEstimated,
    contestedShare,
    diff,
    md,
    tier2026: t26,
    tier2027: t27,
    cohort,
    rate2027,
    factor,
    audits2027: audits * factor,
    loss2026,
    loss2027: loss2026 * factor,
  };
}

// ---- The improvement scenario: the same hospital with a higher quote.
/** Percentage points added to the unbeanstandete Quote. */
export const IMPROVEMENT_PP = 20;

export interface Improvement {
  quote: number;
  tier2027: 5 | 20 | 40 | null;
  rate2027: number;
  audits2027: number;
  loss2026: number;
  loss2027: number;
  /** Revenue kept that the base case loses. */
  gain2026: number;
  gain2027: number;
}

/**
 * 2026: the audit volume is already set, so only the contested share moves.
 * 2027: the higher quote can also land in a lower quota band. Permitted audits
 * scale linearly with the quota, so the 2027 volume scales by the ratio of the
 * two rates (same assumption as the uncapped scaling above).
 */
export function improve(base: Result, uncappedRate = UNCAPPED_DEFAULT): Improvement {
  const quote = Math.min(100, (1 - base.contestedShare) * 100 + IMPROVEMENT_PP);
  const t27 = tier2027(quote);
  const rate2027 = t27 ?? clamp(uncappedRate, 40, 100);
  const audits2027 = base.audits2027 * (rate2027 / base.rate2027);
  const share = 1 - quote / 100;
  const loss2026 = base.audits * share * base.diff;
  const loss2027 = audits2027 * share * base.diff;
  return {
    quote,
    tier2027: t27,
    rate2027,
    audits2027,
    loss2026,
    loss2027,
    gain2026: base.loss2026 - loss2026,
    gain2027: base.loss2027 - loss2027,
  };
}

function clamp(v: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, v));
}
