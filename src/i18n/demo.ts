import type { Lang } from "./ui";

const en = {
  review: "Review documents",
  sentStep: "Sent",
  send: "Send documents",
  sent: "Documents sent",
  confirmation: "The selected documents were sent to the MD in this example.",
  include: "Include for sending",
  select: "Select at least one document to continue.",
  clinic: "Example hospital · Internal medicine",
  patient: "Synthetic patient · Case 024 · Stay: 12–15 May 2026",
  diagnosis: "Diagnosis",
  diagnosisText:
    "Community-acquired pneumonia with an initial oxygen requirement.",
  course: "Hospital course",
  courseText:
    "Admitted with fever, cough and shortness of breath. Intravenous antibiotic treatment and supplemental oxygen were started. Clinical improvement over the course of the admission; discharge on day 4.",
  discharge: "Discharge status",
  dischargeText:
    "Stable general condition at discharge. Further care arranged with the primary care team.",
  assessment: "Day 3 · 08:15 · Medical review",
  assessmentText:
    "Breathlessness on exertion persists. Oxygen saturation 91% on room air, 95% with 2 L/min oxygen. Continue intravenous treatment and inpatient monitoring; reassess oxygen requirement tomorrow.",
  nursing: "Day 3 · 14:30 · Nursing note",
  nursingText:
    "Mobilisation to the bathroom with assistance. Supplemental oxygen continued. Respiratory observations recorded; medical team informed of persistent exertional symptoms.",
  plan: "Day 3 · 16:45 · Plan",
  planText:
    "Discharge assessment planned after repeat clinical review and reassessment without supplemental oxygen.",
  rules: "Linked rule references",
  ruleText:
    "Supported by coding guideline DEMO-12 and SEG 4 example DEMO-024, linked to the documented treatment course.",
  fictional: "Illustrative references · fictional identifiers",
};

const de: typeof en = {
  review: "Unterlagen prüfen",
  sentStep: "Versendet",
  send: "Unterlagen senden",
  sent: "Unterlagen versendet",
  confirmation:
    "Die ausgewählten Unterlagen wurden in diesem Beispiel an den MD übermittelt.",
  include: "Zum Versand auswählen",
  select: "Wählen Sie mindestens ein Dokument aus.",
  clinic: "Beispielklinikum · Innere Medizin",
  patient: "Synthetischer Patient · Fall 024 · Aufenthalt: 12.–15.05.2026",
  diagnosis: "Diagnose",
  diagnosisText: "Ambulant erworbene Pneumonie mit initialem Sauerstoffbedarf.",
  course: "Stationärer Verlauf",
  courseText:
    "Aufnahme bei Fieber, Husten und Dyspnoe. Beginn einer intravenösen Antibiotikatherapie und Sauerstoffgabe. Im Verlauf klinische Besserung; Entlassung an Tag 4.",
  discharge: "Entlassungsbefund",
  dischargeText:
    "Bei Entlassung stabiler Allgemeinzustand. Weiterbetreuung durch die hausärztliche Praxis vereinbart.",
  assessment: "Tag 3 · 08:15 Uhr · Ärztliche Visite",
  assessmentText:
    "Weiterhin Belastungsdyspnoe. SpO₂ unter Raumluft 91 %, unter 2 l/min Sauerstoff 95 %. Intravenöse Therapie und stationäre Überwachung fortführen; Sauerstoffbedarf morgen erneut beurteilen.",
  nursing: "Tag 3 · 14:30 Uhr · Pflegebericht",
  nursingText:
    "Mobilisation ins Bad mit Unterstützung. Sauerstoffgabe fortgesetzt. Atemparameter dokumentiert; ärztliches Team über anhaltende Belastungsbeschwerden informiert.",
  plan: "Tag 3 · 16:45 Uhr · Weiteres Vorgehen",
  planText:
    "Entlassungsfähigkeit nach erneuter klinischer Visite und Beurteilung ohne zusätzliche Sauerstoffgabe prüfen.",
  rules: "Verknüpfte Regelreferenzen",
  ruleText:
    "Gestützt durch Kodierrichtlinie DEMO-12 und SEG-4-Beispiel DEMO-024, verknüpft mit dem dokumentierten Behandlungsverlauf.",
  fictional: "Beispielreferenzen · fiktive Kennungen",
};

const fr: typeof en = {
  review: "Vérifier les pièces",
  sentStep: "Envoyé",
  send: "Envoyer les documents",
  sent: "Documents envoyés",
  confirmation:
    "Dans cet exemple, les documents sélectionnés ont été transmis au MD.",
  include: "Inclure dans l’envoi",
  select: "Sélectionnez au moins un document.",
  clinic: "Hôpital fictif · Médecine interne",
  patient: "Patient fictif · Cas 024 · Séjour : 12–15 mai 2026",
  diagnosis: "Diagnostic",
  diagnosisText: "Pneumonie communautaire avec besoin initial en oxygène.",
  course: "Évolution hospitalière",
  courseText:
    "Admission pour fièvre, toux et dyspnée. Antibiothérapie intraveineuse et oxygénothérapie instaurées. Amélioration clinique pendant le séjour ; sortie au jour 4.",
  discharge: "État à la sortie",
  dischargeText:
    "État général stable. Suivi organisé avec le médecin traitant.",
  assessment: "Jour 3 · 08:15 · Visite médicale",
  assessmentText:
    "Dyspnée d’effort persistante. SpO₂ à 91 % à l’air ambiant, 95 % sous 2 L/min d’oxygène. Poursuite du traitement intraveineux et de la surveillance hospitalière ; réévaluation demain.",
  nursing: "Jour 3 · 14:30 · Note infirmière",
  nursingText:
    "Déplacement aux toilettes avec aide. Oxygénothérapie poursuivie. Paramètres respiratoires consignés ; équipe médicale informée des symptômes persistants à l’effort.",
  plan: "Jour 3 · 16:45 · Conduite à tenir",
  planText:
    "Évaluer la possibilité de sortie après un nouvel examen clinique et une réévaluation sans apport d’oxygène.",
  rules: "Références associées",
  ruleText:
    "Appuyé par la directive de codage DEMO-12 et l’exemple SEG 4 DEMO-024, reliés à l’évolution documentée.",
  fictional: "Références illustratives · identifiants fictifs",
};
const nl: typeof en = {
  review: "Documenten beoordelen",
  sentStep: "Verzonden",
  send: "Documenten verzenden",
  sent: "Documenten verzonden",
  confirmation:
    "De geselecteerde documenten zijn in dit voorbeeld naar de MD verzonden.",
  include: "Selecteren voor verzending",
  select: "Selecteer minstens één document.",
  clinic: "Voorbeeldziekenhuis · Interne geneeskunde",
  patient: "Fictieve patiënt · Casus 024 · Opname: 12–15 mei 2026",
  diagnosis: "Diagnose",
  diagnosisText:
    "Buiten het ziekenhuis opgelopen pneumonie met aanvankelijke zuurstofbehoefte.",
  course: "Klinisch verloop",
  courseText:
    "Opname met koorts, hoesten en dyspneu. Intraveneuze antibiotica en zuurstoftoediening gestart. Klinische verbetering tijdens de opname; ontslag op dag 4.",
  discharge: "Toestand bij ontslag",
  dischargeText:
    "Stabiele algemene toestand. Vervolgzorg met de huisarts afgesproken.",
  assessment: "Dag 3 · 08:15 · Artsenvisite",
  assessmentText:
    "Aanhoudende inspanningsdyspneu. SpO₂ 91% bij kamerlucht, 95% met 2 L/min zuurstof. Intraveneuze behandeling en klinische bewaking voortzetten; morgen opnieuw beoordelen.",
  nursing: "Dag 3 · 14:30 · Verpleegkundige rapportage",
  nursingText:
    "Mobilisatie naar het toilet met hulp. Zuurstoftoediening voortgezet. Ademhalingswaarden vastgelegd; arts geïnformeerd over aanhoudende inspanningsklachten.",
  plan: "Dag 3 · 16:45 · Beleid",
  planText:
    "Ontslag beoordelen na herhaalde visite en beoordeling zonder extra zuurstof.",
  rules: "Gekoppelde richtlijnen",
  ruleText:
    "Onderbouwd met codeerrichtlijn DEMO-12 en SEG 4-voorbeeld DEMO-024, gekoppeld aan het vastgelegde behandelverloop.",
  fictional: "Voorbeeldreferenties · fictieve nummers",
};
const it: typeof en = {
  review: "Verifica documenti",
  sentStep: "Inviati",
  send: "Invia documenti",
  sent: "Documenti inviati",
  confirmation:
    "In questo esempio, i documenti selezionati sono stati trasmessi al MD.",
  include: "Includi nell’invio",
  select: "Seleziona almeno un documento.",
  clinic: "Ospedale di esempio · Medicina interna",
  patient: "Paziente fittizio · Caso 024 · Ricovero: 12–15 maggio 2026",
  diagnosis: "Diagnosi",
  diagnosisText:
    "Polmonite acquisita in comunità con necessità iniziale di ossigeno.",
  course: "Decorso ospedaliero",
  courseText:
    "Ricovero per febbre, tosse e dispnea. Avviate terapia antibiotica endovenosa e ossigenoterapia. Miglioramento clinico durante il ricovero; dimissione al giorno 4.",
  discharge: "Condizioni alla dimissione",
  dischargeText:
    "Condizioni generali stabili. Concordato il proseguimento delle cure con il medico di famiglia.",
  assessment: "Giorno 3 · 08:15 · Visita medica",
  assessmentText:
    "Persiste dispnea da sforzo. SpO₂ 91% in aria ambiente, 95% con ossigeno a 2 L/min. Proseguire terapia endovenosa e monitoraggio ospedaliero; rivalutazione domani.",
  nursing: "Giorno 3 · 14:30 · Nota infermieristica",
  nursingText:
    "Mobilizzazione in bagno con assistenza. Ossigenoterapia proseguita. Parametri respiratori registrati; équipe medica informata dei sintomi persistenti sotto sforzo.",
  plan: "Giorno 3 · 16:45 · Programma",
  planText:
    "Valutare la dimissibilità dopo nuova visita e rivalutazione senza ossigeno supplementare.",
  rules: "Riferimenti collegati",
  ruleText:
    "Supportato dalla linea guida di codifica DEMO-12 e dall’esempio SEG 4 DEMO-024, collegati al decorso documentato.",
  fictional: "Riferimenti illustrativi · identificativi fittizi",
};
const es: typeof en = {
  review: "Revisar documentos",
  sentStep: "Enviados",
  send: "Enviar documentos",
  sent: "Documentos enviados",
  confirmation:
    "En este ejemplo, los documentos seleccionados se han enviado al MD.",
  include: "Incluir en el envío",
  select: "Selecciona al menos un documento.",
  clinic: "Hospital de ejemplo · Medicina interna",
  patient: "Paciente ficticio · Caso 024 · Ingreso: 12–15 de mayo de 2026",
  diagnosis: "Diagnóstico",
  diagnosisText:
    "Neumonía adquirida en la comunidad con necesidad inicial de oxígeno.",
  course: "Evolución hospitalaria",
  courseText:
    "Ingreso por fiebre, tos y disnea. Inicio de antibioterapia intravenosa y oxigenoterapia. Mejoría clínica durante el ingreso; alta el día 4.",
  discharge: "Estado al alta",
  dischargeText:
    "Estado general estable. Seguimiento acordado con atención primaria.",
  assessment: "Día 3 · 08:15 · Visita médica",
  assessmentText:
    "Persiste disnea de esfuerzo. SpO₂ del 91 % al aire ambiente, 95 % con oxígeno a 2 L/min. Mantener tratamiento intravenoso y vigilancia hospitalaria; reevaluar mañana.",
  nursing: "Día 3 · 14:30 · Nota de enfermería",
  nursingText:
    "Movilización al baño con ayuda. Se mantiene el oxígeno. Parámetros respiratorios registrados; equipo médico informado de síntomas persistentes con el esfuerzo.",
  plan: "Día 3 · 16:45 · Plan",
  planText:
    "Valorar el alta tras nueva revisión clínica y reevaluación sin oxígeno suplementario.",
  rules: "Referencias vinculadas",
  ruleText:
    "Respaldado por la directriz de codificación DEMO-12 y el ejemplo SEG 4 DEMO-024, vinculados al curso clínico documentado.",
  fictional: "Referencias ilustrativas · identificadores ficticios",
};
const copy: Record<Lang, typeof en> = { en, de, fr, nl, it, es };
export const demoCopy = (lang: Lang) => copy[lang];
