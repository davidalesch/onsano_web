/**
 * Copy for the loss estimator: /loss-estimator/ (EN) and /de/verlustrechner/ (DE)
 * DE is the source for this page, since the reader is German hospital
 * Medizincontrolling; the other locales link to the EN page until translated.
 * Every constant the copy refers to lives in ../lib/loss-model.ts.
 */
import type { Lang } from './ui';

export type EstimatorLang = 'en' | 'de';

export const estimatorPath: Record<EstimatorLang, string> = {
  en: '/loss-estimator/',
  de: '/de/verlustrechner/',
};

export function estimatorHref(lang: Lang): string {
  return lang === 'de' ? estimatorPath.de : estimatorPath.en;
}

const de = {
  'meta.title': 'Verlustrechner MD-Prüfungen 2026 und 2027, Onsano',
  'meta.description':
    'Modellierter Erlösverlust durch MD-Prüfungen für 2026 und nach der Prüfquotenreform 2027, aus zwei Kennzahlen Ihres Hauses und veröffentlichten Statistiken.',
  'nav.label': 'Verlustrechner',

  eyebrow: 'Onsano · Verlustrechner',
  title: 'Was kosten Sie MD-Prüfungen, heute und ab 2027?',
  subtitle:
    'Links zwei Kennzahlen Ihres Hauses eingeben, rechts das Ergebnis ablesen. Gerechnet wird in Ihrem Browser, es werden keine Daten übertragen.',
  dataAsOf: 'Datenstand: § 275c SGB V bis Q2 2026 · § 17c KHG 2025',

  'input.step': '1',
  'input.title': 'Ihre Angaben',
  'input.required': 'Pflichtfeld',
  'input.optional': 'Optional',

  'volume.label': 'Prüfvolumen pro Jahr',
  'volume.mode': 'Eingabe als',
  'volume.mode.audits': 'Prüfungen',
  'volume.mode.beds': 'Betten',
  'volume.unit.audits': 'Prüfungen',
  'volume.unit.beds': 'Betten',
  'volume.help.audits': 'Abgeschlossene MD-Prüfungen Ihres Hauses in zwölf Monaten.',
  'volume.help.beds': 'Nicht zur Hand? Aus der Bettenzahl schätzen wir {audits} Prüfungen pro Jahr.',
  'volume.help.bedsEmpty': 'Nicht zur Hand? Aus der Bettenzahl schätzen wir das Prüfvolumen.',

  'quote.label': 'Unbeanstandete Quote 2026',
  'quote.help': 'Anteil der Prüfungen ohne Rechnungsminderung.',
  'quote.band': 'Prüfquote {from} bis 2026, {to} ab 2027',

  'state.label': 'Bundesland',
  'state.national': 'Bundesdurchschnitt',
  'state.help': 'Ø Differenzbetrag je beanstandetem Fall: {diff} ({md}).',
  'state.nationalMd': 'alle MD-Regionen',

  'uncapped.label': 'Prüfquote für „unbegrenzt“',
  'uncapped.help': 'Ab 2027 ohne Obergrenze. Standard: 40 %, wie in der Simulation.',
  'uncapped.inactive': 'Nur bei unter 50 % unbeanstandet.',

  'output.step': '2',
  'output.title': 'Ergebnis',
  'output.empty': 'Bitte Prüfvolumen und unbeanstandete Quote eingeben.',
  'output.loss2026': 'Verlust 2026',
  'output.loss2026.sub': '{contested} beanstandete Fälle × Ø {diff}',
  'output.loss2027': 'Erwarteter Verlust 2027',
  'output.loss2027.sub': '{delta} gegenüber 2026',
  'output.loss2027.same': 'Prüfquote bleibt gleich',
  'output.quota': 'Prüfquote',
  'output.quota.sub': 'bis 2026 → ab 2027',
  'output.audits': 'Prüfungen pro Jahr',
  'output.audits.sub': '2026 → 2027, modelliert',
  'output.uncapped': 'unbegrenzt',
  'output.uncappedAt': 'unbegrenzt, gerechnet mit {rate}',

  'chart.title': 'Verlust pro Jahr im Vergleich',
  'chart.2026': '2026',
  'chart.2027': '2027',
  'chart.improved': '2027 mit {quote} unbeanstandet',

  'gain.eyebrow': 'Potenzial',
  'gain.title': 'Wenn Ihre unbeanstandete Quote um {pp} Prozentpunkte steigt',
  'gain.value.sub': 'mehr Erlös pro Jahr ab 2027',
  'gain.detail': '{from} → {to} unbeanstandet · Prüfquote 2027: {tierTo} statt {tierFrom}',
  'gain.detailSameTier': '{from} → {to} unbeanstandet · Prüfquote 2027 bleibt {tier}',
  'gain.2026': 'Bereits 2026: {gain} mehr Erlös',

  'method.summary': 'Rechenweg und Quellen',
  'method.col.step': 'Schritt',
  'method.col.value': 'Wert',
  'method.col.source': 'Grundlage',
  'method.audits': 'Prüfungen pro Jahr',
  'method.audits.input': 'Ihre Angabe',
  'method.audits.beds':
    '{beds} Betten × {billsPerBed} Schlussrechnungen je Bett × {rate} realisierte Prüfquote (Stufe {tier}). GKV-Spitzenverband § 275c Abs. 4 SGB V, 2025 und Q1–Q2 2026; Destatis Grunddaten der Krankenhäuser 2024 (472.900 Betten).',
  'method.contested': 'Davon beanstandet',
  'method.contested.source': '100 % − unbeanstandete Quote',
  'method.diff': 'Ø Differenzbetrag',
  'method.diff.source': 'GKV-Spitzenverband, § 17c Abs. 6 KHG, 2025 ({md})',
  'method.loss2026': 'Verlust 2026',
  'method.loss2026.source': 'Prüfungen × beanstandet × Differenzbetrag',
  'method.factor': 'Faktor 2027',
  'method.factor.source':
    'Kaysers Consilium, Simulation vom 13.07.2026: Kohorte {from} → {to}, zulässige Prüfungen bundesweit {before} → {after}',
  'method.factor.uncapped': '; „unbegrenzt“ dort mit 40 % angesetzt, hier mit {rate}',
  'method.loss2027': 'Verlust 2027',
  'method.loss2027.source': 'Verlust 2026 × Faktor 2027',
  'method.gain': 'Potenzial ab 2027',
  'method.gain.source':
    'Gleiche Rechnung mit {quote} unbeanstandet; Prüfvolumen 2027 skaliert mit der Prüfquote ({rateFrom} → {rateTo})',

  'note.model':
    'Modellierte Schätzung, kein gemeldeter Wert. Die Prüfquote wird aus der eingegebenen Quote abgeleitet; maßgeblich ist tatsächlich das vorletzte Quartal. Aufschläge nach § 275c Abs. 3 SGB V sind nicht enthalten.',
  'note.sources':
    'Quellen: GKV-Spitzenverband (§ 275c Abs. 4 SGB V, § 17c Abs. 6 KHG) · Kaysers Consilium, 13.07.2026 · GKV-BStabG, BGBl. I 2026 Nr. 228 · Destatis 2024',

  'cta.title': 'Fragen zu Ihren Zahlen?',
  'cta.body': 'Sprechen wir darüber, wie Sie Erlöse sichern, die Sie längst erwirtschaftet haben.',
};

const en: Record<keyof typeof de, string> = {
  'meta.title': 'MD audit loss estimator 2026 and 2027, Onsano',
  'meta.description':
    'Modelled revenue lost to MD audits in 2026 and after the 2027 audit-quota reform, from two figures of your hospital and published statistics.',
  'nav.label': 'Loss estimator',

  eyebrow: 'Onsano · Loss estimator',
  title: 'What do MD audits cost you, today and from 2027?',
  subtitle:
    'Enter two figures for your hospital on the left, read the result on the right. Everything is computed in your browser; no data is sent.',
  dataAsOf: 'Data: § 275c SGB V to Q2 2026 · § 17c KHG 2025',

  'input.step': '1',
  'input.title': 'Your figures',
  'input.required': 'Required',
  'input.optional': 'Optional',

  'volume.label': 'Audit volume per year',
  'volume.mode': 'Enter as',
  'volume.mode.audits': 'Audits',
  'volume.mode.beds': 'Beds',
  'volume.unit.audits': 'audits',
  'volume.unit.beds': 'beds',
  'volume.help.audits': 'Completed MD audits of your hospital over twelve months.',
  'volume.help.beds': 'Not to hand? From the bed count we estimate {audits} audits per year.',
  'volume.help.bedsEmpty': 'Not to hand? We estimate the audit volume from the bed count.',

  'quote.label': 'Uncontested rate 2026',
  'quote.help': 'Share of audits closed without a bill reduction.',
  'quote.band': 'Audit quota {from} to 2026, {to} from 2027',

  'state.label': 'Federal state',
  'state.national': 'National average',
  'state.help': 'Avg. reduction per contested case: {diff} ({md}).',
  'state.nationalMd': 'all MD regions',

  'uncapped.label': 'Audit quota for “uncapped”',
  'uncapped.help': 'No ceiling from 2027. Default: 40%, as in the simulation.',
  'uncapped.inactive': 'Only below 50% uncontested.',

  'output.step': '2',
  'output.title': 'Result',
  'output.empty': 'Enter audit volume and uncontested rate.',
  'output.loss2026': 'Loss 2026',
  'output.loss2026.sub': '{contested} contested cases × avg. {diff}',
  'output.loss2027': 'Expected loss 2027',
  'output.loss2027.sub': '{delta} vs. 2026',
  'output.loss2027.same': 'Audit quota unchanged',
  'output.quota': 'Audit quota',
  'output.quota.sub': 'to 2026 → from 2027',
  'output.audits': 'Audits per year',
  'output.audits.sub': '2026 → 2027, modelled',
  'output.uncapped': 'uncapped',
  'output.uncappedAt': 'uncapped, computed at {rate}',

  'chart.title': 'Loss per year compared',
  'chart.2026': '2026',
  'chart.2027': '2027',
  'chart.improved': '2027 at {quote} uncontested',

  'gain.eyebrow': 'Potential',
  'gain.title': 'If your uncontested rate rises by {pp} percentage points',
  'gain.value.sub': 'more revenue per year from 2027',
  'gain.detail': '{from} → {to} uncontested · audit quota 2027: {tierTo} instead of {tierFrom}',
  'gain.detailSameTier': '{from} → {to} uncontested · audit quota 2027 stays {tier}',
  'gain.2026': 'Already in 2026: {gain} more revenue',

  'method.summary': 'Calculation and sources',
  'method.col.step': 'Step',
  'method.col.value': 'Value',
  'method.col.source': 'Basis',
  'method.audits': 'Audits per year',
  'method.audits.input': 'Your input',
  'method.audits.beds':
    '{beds} beds × {billsPerBed} final bills per bed × {rate} realised audit rate ({tier} tier). GKV-Spitzenverband § 275c(4) SGB V, 2025 and Q1–Q2 2026; Destatis Grunddaten der Krankenhäuser 2024 (472,900 beds).',
  'method.contested': 'Of which contested',
  'method.contested.source': '100% − uncontested rate',
  'method.diff': 'Avg. reduction amount',
  'method.diff.source': 'GKV-Spitzenverband, § 17c(6) KHG, 2025 ({md})',
  'method.loss2026': 'Loss 2026',
  'method.loss2026.source': 'Audits × contested × reduction amount',
  'method.factor': 'Factor 2027',
  'method.factor.source':
    'Kaysers Consilium, simulation of 13 July 2026: cohort {from} → {to}, permitted audits nationwide {before} → {after}',
  'method.factor.uncapped': '; “uncapped” modelled there at 40%, here at {rate}',
  'method.loss2027': 'Loss 2027',
  'method.loss2027.source': 'Loss 2026 × factor 2027',
  'method.gain': 'Potential from 2027',
  'method.gain.source':
    'Same calculation at {quote} uncontested; 2027 audit volume scales with the quota ({rateFrom} → {rateTo})',

  'note.model':
    'Modelled estimate, not a reported value. The audit quota is derived from the rate you enter; in practice the quarter before last decides. Surcharges under § 275c(3) SGB V are not included.',
  'note.sources':
    'Sources: GKV-Spitzenverband (§ 275c(4) SGB V, § 17c(6) KHG) · Kaysers Consilium, 13 July 2026 · GKV-BStabG, BGBl. I 2026 Nr. 228 · Destatis 2024',

  'cta.title': 'Questions about your numbers?',
  'cta.body': 'Let’s talk about protecting revenue you have already earned.',
};

export const estimatorCopy = { de, en };
export type EstimatorKey = keyof typeof de;
