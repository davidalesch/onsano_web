import { fr, nl, it, es } from "./product-locales";
import type { Lang } from "./ui";
const en = {
  progress: "Progress",
  evidenceStep: "Evidence",
  draftStep: "Draft",
  sourcesConnected: "Sources connected",
  landscapeLabel: "FROM RECORD TO REASONING",
  footerConversation: "Let’s start a conversation.",
  footerCare: "For healthcare. With care.",
  menuLabel: "Open navigation",
  products: "Products",
  workflow: "How it works",
  trust: "Trust & security",
  demo: "Explore the agents",
  book: "Let’s talk",
  eyebrow: "FOR THE CARE ALREADY GIVEN",
  title: "Care delivered.",
  title2: "Revenue defended.",
  lead: "Your teams do the work that matters. Our AI agents help make sure the paperwork stands behind it. From the first MD query to a well-grounded objection.",
  heroNote: "Built for German hospitals. Designed around your team.",
  trail: ["The record", "The evidence", "Your decision"],
  record: "Discharge report",
  record2: "Treatment notes",
  evidence: "Every claim, connected.",
  evidenceBody: "The right passage. In the right context.",
  review: "Ready for your review",
  reviewBody: "You have the final word.",
  problemKicker: "GOOD CARE DESERVES A STRONG CASE",
  problemTitle: "The care was delivered.\nThe record needs to show it.",
  problemBody:
    "An audit turns everyday documentation into a high-stakes evidence search. The answer may already be in the record. Finding it, connecting it, and making the case is what takes time.",
  pain: [
    [
      "Scattered records",
      "One question. Dozens of documents. The relevant detail is rarely in the first place you look.",
    ],
    [
      "Complex requirements",
      "Clinical evidence and coding rules need to tell the same story. Every detail counts.",
    ],
    [
      "Time better spent",
      "Your experts should be evaluating the case, not assembling it from scratch.",
    ],
  ],
  productKicker: "MEET YOUR NEW TEAMMATES",
  productTitle: "Two agents.\nOne stronger case.",
  productBody:
    "Purpose-built support at the moments when hospital revenue is on the line. Explore a simplified example of each workflow.",
  md: "MD Audit Agent",
  mdLabel: "01 / UNDERSTAND & PREPARE",
  mdTitle: "Find the evidence.\nSee the whole picture.",
  mdBody:
    "Turn an MD query into a focused review. The agent reads the question, finds relevant passages in the case record, and prepares a source-linked response for your team.",
  mdBullets: [
    "Match audit requirements to existing documentation",
    "See supporting evidence and gaps side by side",
    "Review a draft with links back to its sources",
  ],
  objection: "Widerspruch Agent",
  obLabel: "02 / EVALUATE & RESPOND",
  obTitle: "A considered response.\nNot just more words.",
  obBody:
    "Work through a disputed MD finding, one argument at a time. The agent weighs the submitted record and relevant coding rules to draft an objection—or explain where the evidence falls short.",
  obBullets: [
    "Address each disputed finding individually",
    "Bring the record and relevant rules together",
    "Challenge what is supported. Recognise what is not.",
  ],
  try: "Book a demo",
  illustrative: "Interactive example · synthetic data",
  case: "Example case / 024",
  query: "MD query",
  queryText: "Is the documented inpatient stay supported by the record?",
  run: "Find supporting evidence",
  again: "Start again",
  source: "View source",
  closeSource: "Close source",
  sourceTitle: "Treatment notes · page 2",
  sourceText:
    "Day 3: continued inpatient monitoring and treatment are documented. Discharge was planned following reassessment.",
  results: "Evidence located",
  resultText: "Treatment notes document continued monitoring on day 3.",
  gap: "For your attention",
  gapText: "The reason for day 4 is not evidenced in the available record.",
  draft: "Prepare response",
  ready: "Draft for human review",
  readyText:
    "The record supports continued inpatient care on day 3 [1]. The available documentation does not establish the reason for day 4. Please review before responding.",
  finding: "Disputed finding",
  findingText: "The final two inpatient days are not considered justified.",
  evaluate: "Evaluate finding",
  argument: "Suggested position",
  argumentText:
    "Challenge day 3 using the documented monitoring. Do not contest day 4 on the evidence available.",
  rule: "Record + applicable rules",
  ruleText:
    "In the product, relevant coding rules are retrieved for the specific dispute. This demo does not provide a legal assessment.",
  objectionDraft: "Draft objection",
  objectionText:
    "We request reconsideration of day 3 based on the submitted treatment notes [1]. We do not challenge day 4 on the documentation available. This draft requires your review.",
  workflowKicker: "FITS THE WAY YOU WORK",
  workflowTitle: "From scattered records\nto a clear next step.",
  steps: [
    [
      "Bring the case together",
      "Connect to your KIS and LE-Portal to bring case records and audit correspondence together.",
    ],
    [
      "Let the agents do the groundwork",
      "Connect requirements to evidence, surface uncertainty, and assemble a response.",
    ],
    [
      "Make the call",
      "Your team checks the sources, edits the draft, and decides what to submit.",
    ],
  ],
  trustKicker: "TRUST IS PART OF THE PRODUCT",
  trustTitle: "Sensitive data.\nThoughtful design.",
  trustBody:
    "Healthcare AI needs clear boundaries. We build for traceable evidence, deliberate data handling, and people who stay in control.",
  trustItems: [
    [
      "Human oversight",
      "Drafts stay drafts until your team reviews them. Agents do not independently submit responses or make billing decisions.",
    ],
    [
      "Traceable sources",
      "Supporting claims link back to the record. Missing evidence is surfaced so your team can judge the strength of the case.",
    ],
    [
      "Deliberate data handling",
      "Field-level data classification and metadata-only logging by default are built into the core architecture.",
    ],
    [
      "A considered deployment",
      "Data flows, processing arrangements, access, and retention need to be agreed with your hospital before production use.",
    ],
  ],
  faqTitle: "A little more clarity.",
  faqs: [
    [
      "Does Onsano replace our Medizincontrolling team?",
      "No. Onsano supports the research and drafting work. Your experts review the sources, assess the argument, and retain responsibility for the final response.",
    ],
    [
      "Can we use it with our existing systems?",
      "Onsano is being built around existing hospital workflows, with ISiK/FHIR integration work in the core platform. We discuss system compatibility, document access, and deployment scope with each hospital.",
    ],
    [
      "Are these demos the actual product?",
      "These are simplified, interactive illustrations using entirely synthetic data. They show the workflow, not the complete interface, live AI output, or a guaranteed outcome.",
    ],
    [
      "How do we get started?",
      "Book a conversation with us. We will walk through the agents, understand your audit workflow, and discuss what an evaluation could look like.",
    ],
  ],
  contactKicker: "LET’S BUILD A STRONGER CASE",
  contactTitle: "More time for expertise.\nLess time in paperwork.",
  contactBody: "See what Onsano could do for your Medizincontrolling team.",
  contactEmail: "Or get in touch",
  footer: "Behind every strong case,\nthere’s good care.",
};
const de: typeof en = {
  ...en,
  progress: "Fortschritt",
  evidenceStep: "Evidenz",
  draftStep: "Entwurf",
  sourcesConnected: "Quellen verknüpft",
  landscapeLabel: "VON DER AKTE ZUM ARGUMENT",
  footerConversation: "Lassen Sie uns sprechen.",
  footerCare: "Für das Gesundheitswesen. Mit Sorgfalt.",
  menuLabel: "Menü öffnen",
  products: "Produkte",
  workflow: "So funktioniert’s",
  trust: "Vertrauen & Sicherheit",
  demo: "Agenten entdecken",
  book: "Gespräch vereinbaren",
  eyebrow: "FÜR DIE BEREITS ERBRACHTE VERSORGUNG",
  title: "Leistung erbracht.",
  title2: "Erlöse verteidigt.",
  lead: "Ihr Team leistet, was zählt. Unsere KI-Agenten helfen, dass die Dokumentation dahintersteht. Von der ersten MD-Anfrage bis zum fundierten Widerspruch.",
  heroNote: "Für deutsche Krankenhäuser. Rund um Ihr Team entwickelt.",
  trail: ["Die Akte", "Die Evidenz", "Ihre Entscheidung"],
  record: "Entlassungsbericht",
  record2: "Verlaufsdokumentation",
  evidence: "Jede Aussage mit Beleg.",
  evidenceBody: "Die richtige Passage. Im richtigen Kontext.",
  review: "Bereit für Ihre Prüfung",
  reviewBody: "Sie haben das letzte Wort.",
  problemKicker: "GUTE VERSORGUNG VERDIENT STARKE ARGUMENTE",
  problemTitle: "Die Leistung ist erbracht.\nDie Akte muss sie belegen.",
  problemBody:
    "Eine Prüfung macht aus alltäglicher Dokumentation eine anspruchsvolle Belegsuche. Die Antwort steht oft schon in der Akte. Sie zu finden, einzuordnen und zu begründen kostet Zeit.",
  pain: [
    [
      "Verteilte Unterlagen",
      "Eine Frage. Dutzende Dokumente. Die entscheidende Information steht selten dort, wo man zuerst sucht.",
    ],
    [
      "Komplexe Anforderungen",
      "Klinische Evidenz und Kodierrichtlinien müssen zusammenpassen. Jedes Detail zählt.",
    ],
    [
      "Zeit für Expertise",
      "Ihre Fachleute sollten den Fall beurteilen, statt die Unterlagen mühsam zusammenzustellen.",
    ],
  ],
  productKicker: "IHRE NEUEN TEAMKOLLEGEN",
  productTitle: "Zwei Agenten.\nEin stärkerer Fall.",
  productBody:
    "Gezielte Unterstützung, wenn Krankenhauserlöse auf dem Spiel stehen. Entdecken Sie beide Abläufe an einem vereinfachten Beispiel.",
  md: "MD-Prüfagent",
  mdLabel: "01 / VERSTEHEN & VORBEREITEN",
  mdTitle: "Evidenz finden.\nDen Überblick behalten.",
  mdBody:
    "Aus einer MD-Anfrage wird eine gezielte Prüfung. Der Agent liest die Fragestellung, findet relevante Passagen in der Fallakte und erstellt einen quellenverknüpften Antwortentwurf für Ihr Team.",
  mdBullets: [
    "Prüfanforderungen mit vorhandener Dokumentation abgleichen",
    "Belege und Lücken nebeneinander erkennen",
    "Einen Entwurf mit direkten Quellenverweisen prüfen",
  ],
  obLabel: "02 / BEWERTEN & ANTWORTEN",
  obTitle: "Eine fundierte Antwort.\nNicht einfach mehr Text.",
  obBody:
    "Bearbeiten Sie strittige MD-Feststellungen Argument für Argument. Der Agent bewertet eingereichte Unterlagen und relevante Kodierrichtlinien, um einen Widerspruch zu entwerfen – oder fehlende Evidenz offenzulegen.",
  obBullets: [
    "Jede strittige Feststellung einzeln bearbeiten",
    "Fallakte und relevante Regeln zusammenführen",
    "Belegtes verteidigen. Grenzen der Evidenz erkennen.",
  ],
  try: "Demo ausmachen",
  illustrative: "Interaktives Beispiel · synthetische Daten",
  case: "Beispielfall / 024",
  query: "MD-Anfrage",
  queryText: "Ist die stationäre Verweildauer durch die Dokumentation belegt?",
  run: "Belege finden",
  again: "Neu starten",
  source: "Quelle ansehen",
  closeSource: "Quelle schließen",
  sourceTitle: "Verlaufsdokumentation · Seite 2",
  sourceText:
    "Tag 3: Fortgesetzte stationäre Überwachung und Behandlung sind dokumentiert. Die Entlassung wurde nach erneuter Beurteilung geplant.",
  results: "Belege gefunden",
  resultText:
    "Die Verlaufsdokumentation belegt die fortgesetzte Überwachung an Tag 3.",
  gap: "Bitte beachten",
  gapText:
    "Der Grund für Tag 4 ist in den verfügbaren Unterlagen nicht belegt.",
  draft: "Antwort vorbereiten",
  ready: "Entwurf zur fachlichen Prüfung",
  readyText:
    "Die Akte stützt die fortgesetzte stationäre Versorgung an Tag 3 [1]. Der Grund für Tag 4 geht aus den verfügbaren Unterlagen nicht hervor. Bitte vor einer Antwort prüfen.",
  finding: "Strittige Feststellung",
  findingText:
    "Die letzten beiden stationären Tage werden als nicht begründet angesehen.",
  evaluate: "Feststellung bewerten",
  argument: "Vorgeschlagene Position",
  argumentText:
    "Tag 3 mit der dokumentierten Überwachung begründen. Tag 4 auf Basis der vorhandenen Evidenz nicht anfechten.",
  rule: "Akte + relevante Regeln",
  ruleText:
    "Im Produkt werden passende Kodierrichtlinien für den konkreten Streitpunkt abgerufen. Diese Demo liefert keine rechtliche Bewertung.",
  objectionDraft: "Widerspruch entwerfen",
  objectionText:
    "Wir bitten um erneute Prüfung von Tag 3 anhand der eingereichten Verlaufsdokumentation [1]. Tag 4 fechten wir auf Basis der verfügbaren Dokumentation nicht an. Dieser Entwurf bedarf Ihrer Prüfung.",
  workflowKicker: "PASST IN IHREN ARBEITSALLTAG",
  workflowTitle: "Von verteilten Unterlagen\nzum klaren nächsten Schritt.",
  steps: [
    [
      "Den Fall zusammenführen",
      "Wir binden KIS und LE-Portal an, um Fallunterlagen und Prüfkorrespondenz zusammenzuführen.",
    ],
    [
      "Die Vorarbeit übernehmen lassen",
      "Anforderungen und Belege verknüpfen, Unsicherheiten aufzeigen und eine Antwort vorbereiten.",
    ],
    [
      "Die Entscheidung treffen",
      "Ihr Team prüft die Quellen, bearbeitet den Entwurf und entscheidet über die Einreichung.",
    ],
  ],
  trustKicker: "VERTRAUEN IST TEIL DES PRODUKTS",
  trustTitle: "Sensible Daten.\nDurchdachtes Design.",
  trustBody:
    "KI im Gesundheitswesen braucht klare Grenzen. Wir entwickeln für nachvollziehbare Belege, bewussten Datenumgang und Menschen, die die Kontrolle behalten.",
  trustItems: [
    [
      "Menschliche Kontrolle",
      "Entwürfe bleiben Entwürfe, bis Ihr Team sie geprüft hat. Agenten reichen keine Antworten selbstständig ein und treffen keine Abrechnungsentscheidungen.",
    ],
    [
      "Nachvollziehbare Quellen",
      "Belegte Aussagen verweisen auf die Akte. Fehlende Evidenz wird offengelegt, damit Ihr Team die Tragfähigkeit beurteilen kann.",
    ],
    [
      "Bewusster Datenumgang",
      "Datenklassifizierung auf Feldebene und standardmäßige Protokollierung ausschließlich von Metadaten sind in der Kernarchitektur verankert.",
    ],
    [
      "Durchdachte Einführung",
      "Datenflüsse, Verarbeitungsvereinbarungen, Zugriffe und Aufbewahrung müssen vor dem Produktiveinsatz mit Ihrem Krankenhaus abgestimmt werden.",
    ],
  ],
  faqTitle: "Ein bisschen mehr Klarheit.",
  faqs: [
    [
      "Ersetzt Onsano unser Medizincontrolling?",
      "Nein. Onsano unterstützt Recherche und Entwurf. Ihre Fachleute prüfen die Quellen, bewerten die Argumentation und verantworten die finale Antwort.",
    ],
    [
      "Funktioniert Onsano mit unseren bestehenden Systemen?",
      "Onsano wird für bestehende Klinikabläufe entwickelt. Die Kernplattform enthält Arbeiten an ISiK/FHIR-Anbindungen. Kompatibilität, Dokumentenzugriff und Einsatzumfang stimmen wir mit jedem Krankenhaus ab.",
    ],
    [
      "Zeigen die Demos das tatsächliche Produkt?",
      "Dies sind vereinfachte interaktive Beispiele mit ausschließlich synthetischen Daten. Sie zeigen den Ablauf, nicht die vollständige Oberfläche, echte KI-Ausgaben oder garantierte Ergebnisse.",
    ],
    [
      "Wie können wir starten?",
      "Vereinbaren Sie ein Gespräch. Wir zeigen Ihnen die Agenten, lernen Ihren Prüfprozess kennen und besprechen eine mögliche Evaluation.",
    ],
  ],
  contactKicker: "GEMEINSAM FÜR STÄRKERE FÄLLE",
  contactTitle: "Mehr Zeit für Expertise.\nWeniger für Papierarbeit.",
  contactBody: "Entdecken Sie, was Onsano für Ihr Medizincontrolling tun kann.",
  contactEmail: "Oder schreiben Sie uns",
  footer: "Hinter jedem starken Fall\nsteht gute Versorgung.",
};
const copy: Record<Lang, typeof en> = { en, de, fr, nl, it, es };
export function productCopy(lang: Lang) {
  return copy[lang];
}
