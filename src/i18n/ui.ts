export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

/**
 * UI strings. EN is the default/reference. Keep keys in sync across locales.
 * Legal page bodies (Impressum/Datenschutz) stay German-only and live elsewhere.
 */
export const ui = {
  en: {
    'nav.problem': 'Problem',
    'nav.approach': 'Approach',
    'nav.compliance': 'Compliance',
    'nav.contact': 'Contact',
    'cta.call': 'Schedule a call',
    'hero.eyebrow': 'AI-native revenue protection for hospitals',
    'hero.title.line1': 'Protect the revenue',
    'hero.title.line2': 'you’ve already earned.',
    'hero.subtitle': 'Earned by your clinicians. At risk in the paperwork.',
    'hero.lead':
      'Onsano brings AI agents into hospital documentation and audit workflows — keeping records complete and cases defensible, so earned revenue survives the audit.',
    'hero.scroll': 'Scroll',
    'problem.kicker': 'The problem',
    'problem.title': 'Hospitals lose millions each year to lost insurer audits.',
    'problem.body':
      'The cause usually isn’t the care that was given — it’s the documentation of it. When records are incomplete, correct cases get downcoded or denied on audit, and the revenue quietly disappears. It’s avoidable.',
    'approach.kicker': 'The approach',
    'approach.title': 'An intelligence layer that resolves bottlenecks at the source.',
    'approach.body':
      'Onsano’s agents run on top of the systems hospitals already use. They see where revenue starts to leak and close the gap at its root — inside existing workflows, not alongside new ones.',
    'approach.layerLabel': 'Onsano',
    'approach.systemsLabel': 'Existing hospital systems',
    'compliance.kicker': 'Compliance',
    'compliance.title': 'Built with compliance as a first principle, not an afterthought.',
    'compliance.item1.title': 'GDPR-minded architecture',
    'compliance.item1.body': 'Data handling is designed around GDPR requirements from day one, not retrofitted later.',
    'compliance.item2.title': 'Human-in-the-loop by design',
    'compliance.item2.body': 'Agents assist and draft — people stay in control of every decision that matters.',
    'compliance.item3.title': 'Audit-ready by default',
    'compliance.item3.body': 'Documentation is structured to hold up to scrutiny, not just to get created.',
    'contact.title': 'If you work in healthcare and recognise the problem, we’d like to hear from you.',
    'contact.emailLabel': 'Or write to us at',
    'footer.tagline': 'AI-native workflows for hospitals.',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    'nav.problem': 'Problem',
    'nav.approach': 'Ansatz',
    'nav.compliance': 'Compliance',
    'nav.contact': 'Kontakt',
    'cta.call': 'Gespräch vereinbaren',
    'hero.eyebrow': 'KI-native Erlössicherung für Krankenhäuser',
    'hero.title.line1': 'Erlöse schützen,',
    'hero.title.line2': 'die Ihnen zustehen.',
    'hero.subtitle': 'Erbracht von Ihrem Klinikpersonal. Gefährdet in der Aktenlage.',
    'hero.lead':
      'Onsano bringt KI-Agenten in Dokumentations- und Prüfprozesse — damit Akten vollständig und Fälle prüfsicher bleiben und erwirtschaftete Erlöse die Prüfung überstehen.',
    'hero.scroll': 'Scrollen',
    'problem.kicker': 'Das Problem',
    'problem.title': 'Krankenhäuser verlieren jährlich Millionen durch verlorene Rechnungsprüfungen.',
    'problem.body':
      'Die Ursache ist selten die erbrachte Leistung — sondern ihre Dokumentation. Ist die Akte unvollständig, werden korrekte Fälle bei der Prüfung gekürzt oder abgelehnt, und der Erlös verschwindet still. Das ist vermeidbar.',
    'approach.kicker': 'Der Ansatz',
    'approach.title': 'Eine Intelligenzschicht, die Engpässe an der Wurzel löst.',
    'approach.body':
      'Onsanos Agenten laufen auf den Systemen, die Kliniken bereits nutzen. Sie erkennen, wo Erlöse zu entgleiten beginnen, und schließen die Lücke an der Wurzel — in bestehenden Abläufen, nicht daneben.',
    'approach.layerLabel': 'Onsano',
    'approach.systemsLabel': 'Bestehende Kliniksysteme',
    'compliance.kicker': 'Compliance',
    'compliance.title': 'Compliance ist bei uns Grundprinzip, kein Nachgedanke.',
    'compliance.item1.title': 'DSGVO-orientierte Architektur',
    'compliance.item1.body': 'Der Umgang mit Daten ist von Anfang an auf die DSGVO ausgelegt — nicht nachträglich angepasst.',
    'compliance.item2.title': 'Human-in-the-loop per Design',
    'compliance.item2.body': 'Agenten unterstützen und entwerfen — Menschen behalten die Kontrolle über jede wichtige Entscheidung.',
    'compliance.item3.title': 'Prüfsicher von Grund auf',
    'compliance.item3.body': 'Dokumentation ist so strukturiert, dass sie einer Prüfung standhält — nicht nur, dass sie entsteht.',
    'contact.title': 'Arbeiten Sie im Gesundheitswesen und kennen das Problem? Wir würden gerne von Ihnen hören.',
    'contact.emailLabel': 'Oder schreiben Sie uns an',
    'footer.tagline': 'KI-native Workflows für Krankenhäuser.',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}
