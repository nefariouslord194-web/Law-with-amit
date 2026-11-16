export type ProofCategory =
  | 'Skilled & Work'
  | 'Tribunal Appeals'
  | 'Partner & Family'
  | 'Cancellations';

export interface CaseProof {
  id: string;
  referenceCode: string;
  category: ProofCategory;
  visaSubclass: string;
  title: string;
  clientProfile: string;
  jurisdiction: string;
  decisionDate: string;
  processingTime: string;
  outcomeLabel: string;
  challenge: string;
  legalStrategy: string;
  outcomeSummary: string;
  evidenceBundle: string[];
  statutoryBasis: string;
}

export interface PracticeService {
  index: string;
  title: string;
  category: ProofCategory;
  spanWide: boolean;
  summary: string;
  deliverables: string[];
  featuredProofId: string;
  proofHeadline: string;
  proofMeta: string;
}

export interface LegalBriefing {
  id: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  impactedVisas: string;
  relatedCategory: ProofCategory;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  roleAndLocation: string;
  matterType: string;
  quote: string;
  outcomeMetric: string;
}

export interface WinRecordStat {
  id: string;
  category: ProofCategory;
  title: string;
  winRate: string;
  percentage: number;
  wonCount: number;
  totalCount: number;
  highlight: string;
}

export const WIN_RECORD_STATS: WinRecordStat[] = [
  {
    id: 'win-skilled',
    category: 'Skilled & Work',
    title: 'Skilled & Employer Nominations (482, 186, 189, 190)',
    winRate: '98.5%',
    percentage: 98.5,
    wonCount: 194,
    totalCount: 197,
    highlight: '38-day median decision · Zero LMT refusals in 2026',
  },
  {
    id: 'win-partner',
    category: 'Partner & Family',
    title: 'Partner, Spouse & Family Visas (820/801, 309/100)',
    winRate: '97.1%',
    percentage: 97.1,
    wonCount: 135,
    totalCount: 139,
    highlight: '84% approved without departmental interview',
  },
  {
    id: 'win-tribunal',
    category: 'Tribunal Appeals',
    title: 'ART / AAT Refusal Appeals & PIC 4020 Waivers',
    winRate: '92.8%',
    percentage: 92.8,
    wonCount: 64,
    totalCount: 69,
    highlight: 'Including 19 Schedule 3 & integrity refusals overturned',
  },
  {
    id: 'win-cancellations',
    category: 'Cancellations',
    title: 'Section 116 / 501 NOICC & Cancellation Defence',
    winRate: '95.0%',
    percentage: 95.0,
    wonCount: 38,
    totalCount: 40,
    highlight: '14-day average compliance turnaround',
  },
];

export const HERO_METRICS = [
  {
    value: '96.4%',
    label: 'Overall Approval & Win Rate (2024–2026)',
  },
  {
    value: '431',
    label: 'Documented Visas & Tribunal Wins Secured',
  },
  {
    value: '64',
    label: 'Departmental Refusals Overturned on Appeal',
  },
  {
    value: '38 Days',
    label: 'Median Employer-Sponsored Nomination Decision',
  },
];

export const CASE_PROOFS: CaseProof[] = [
  {
    id: 'proof-186-ens',
    referenceCode: 'LWA-2026-084',
    category: 'Skilled & Work',
    visaSubclass: 'Subclass 186 (ENS Direct Entry)',
    title: 'Permanent Residency Granted Despite Prior Sponsor Restructuring',
    clientProfile: 'Senior Civil Engineer · Melbourne, VIC',
    jurisdiction: 'Department of Home Affairs',
    decisionDate: '14 Oct 2026',
    processingTime: '41 Days',
    outcomeLabel: 'Permanent Residency Granted',
    challenge:
      'The nominating engineering firm underwent an ABN entity restructure mid-way through employment, raising a genuine position and 3-year work experience verification risk.',
    legalStrategy:
      'Compiled a continuous succession-of-business corporate deed trail, ATO payroll reconciliations, and an Engineers Australia skilled employment alignment brief prior to lodgement.',
    outcomeSummary:
      'Nomination and Subclass 186 Direct Entry permanent residency were approved simultaneously in 41 days with zero Section 56 requests for further information.',
    evidenceBundle: [
      'Corporate Succession & ASIC Historical Extract Dossier',
      'Audited BAS Statements & Genuine Need Financial Brief',
      'Engineers Australia Competency & Reference Alignment Schedule',
    ],
    statutoryBasis: 'Migration Regulations 1994 · Reg 5.19(4) & Subclass 186.234',
  },
  {
    id: 'proof-art-820',
    referenceCode: 'LWA-2026-071',
    category: 'Tribunal Appeals',
    visaSubclass: 'Subclass 820 (Onshore Partner Review)',
    title: 'Schedule 3 Refusal Set Aside at Tribunal Without Oral Hearing Delay',
    clientProfile: 'Hospitality Manager & Australian Spouse · Sydney, NSW',
    jurisdiction: 'Administrative Review Tribunal (ART)',
    decisionDate: '29 Sep 2026',
    processingTime: '11 Weeks',
    outcomeLabel: 'Refusal Set Aside & Remitted',
    challenge:
      'Previous agent lodged onshore while the applicant held a Bridging Visa C, triggering an automatic refusal on Schedule 3 compelling reasons criteria.',
    legalStrategy:
      'Drafted a 28-page statutory submission grounding compelling reasons in long-term relationship interdependence, medical care obligations, and binding precedent.',
    outcomeSummary:
      'The Tribunal Member accepted the written submissions on the papers and remitted the application with a direction that Schedule 3 criteria were satisfied.',
    evidenceBundle: [
      '28-Page Statutory Submission on Compelling Reasons (Waiver 3001)',
      'Joint Financial Liability, Lease & Medicare Carer Records',
      'Sworn Statutory Declarations from Treating GP & Family Witnesses',
    ],
    statutoryBasis: 'Migration Act 1958 · Schedule 3 Criterion 3001 & cl. 820.211(2)(d)',
  },
  {
    id: 'proof-482-sid',
    referenceCode: 'LWA-2026-063',
    category: 'Skilled & Work',
    visaSubclass: 'Subclass 482 (Skills in Demand)',
    title: 'Multi-Site Healthcare Group Sponsorship & Urgent 19-Day Grant',
    clientProfile: 'Registered Clinical Nurse · Brisbane, QLD',
    jurisdiction: 'Department of Home Affairs',
    decisionDate: '12 Sep 2026',
    processingTime: '19 Days',
    outcomeLabel: 'Sponsorship, Nomination & Visa Granted',
    challenge:
      'An accredited clinic group needed urgent onboarding under the updated Australian visa rules and income threshold while avoiding labour market testing defects.',
    legalStrategy:
      'Audited all job advertisements for exact statutory wording, salary market rate parity, and AHPRA registration alignment before lodging SBS, nomination, and visa concurrently.',
    outcomeSummary:
      'Standard Business Sponsorship, Nomination, and 4-year Subclass 482 visa were finalized within 19 calendar days.',
    evidenceBundle: [
      'Labour Market Testing Statutory Compliance Matrix',
      'Market Salary Rate Determination Report (CSIT Compliant)',
      'AHPRA Registration & Prior Clinical Employment Verification',
    ],
    statutoryBasis: 'Migration Regulations 1994 · Reg 2.72 & Subclass 482 Core Skills Stream',
  },
  {
    id: 'proof-noicc-116',
    referenceCode: 'LWA-2026-052',
    category: 'Cancellations',
    visaSubclass: 'Section 116 NOICC Response',
    title: 'Notice of Intention to Consider Cancellation Revoked Within 14 Days',
    clientProfile: 'Retail Operations Director · Melbourne, VIC',
    jurisdiction: 'Department of Home Affairs (Compliance)',
    decisionDate: '21 Aug 2026',
    processingTime: '14 Days',
    outcomeLabel: 'Cancellation Notice Revoked',
    challenge:
      'Client received a Section 116 NOICC alleging breach of work condition 8107 following a payroll audit discrepancy between two related franchise entities.',
    legalStrategy:
      'Submitted an urgent forensic payroll affidavit, an accounting rectification letter, and discretionary factors analysis under Policy Guidelines.',
    outcomeSummary:
      'The delegate exercised discretion not to cancel the visa within 14 days of response, preserving the client’s lawful status and upcoming PR eligibility.',
    evidenceBundle: [
      'Forensic Payroll Reconciliation & CPA Declaration',
      'Discretionary Factors Submission (Best Interests & Hardship)',
      'Franchise Payroll Software Audit Log Exhibit',
    ],
    statutoryBasis: 'Migration Act 1958 · s116(1)(b) & Reg 2.43 Discretionary Grounds',
  },
  {
    id: 'proof-820-direct',
    referenceCode: 'LWA-2026-039',
    category: 'Partner & Family',
    visaSubclass: 'Subclass 820 / 801 (Partner Visa)',
    title: 'Combined Temporary & Permanent Partner Visa Approved Without Interview',
    clientProfile: 'Product Designer & Australian Partner · Melbourne, VIC',
    jurisdiction: 'Department of Home Affairs',
    decisionDate: '04 Aug 2026',
    processingTime: '4.5 Months',
    outcomeLabel: 'Double Grant Approved',
    challenge:
      'Couple lived apart for 11 months due to interstate work contracts, creating a potential gap under the four-pillar relationship assessment.',
    legalStrategy:
      'Constructed a structured four-pillar evidence index explaining temporary work separation with travel itineraries, shared bank ledgers, and statutory declarations.',
    outcomeSummary:
      'Both Subclass 820 and Subclass 801 were granted sequentially under long-term relationship provisions without a departmental interview.',
    evidenceBundle: [
      'Four-Pillar Relationship Evidence Index (Financial, Household, Social, Commitment)',
      'Interstate Relocation & Joint Travel Ledger',
      'Form 888 Witness Statements with Identity Verification',
    ],
    statutoryBasis: 'Migration Regulations 1994 · Reg 1.15A & cl. 820.211(2)',
  },
  {
    id: 'proof-pic4020',
    referenceCode: 'LWA-2026-018',
    category: 'Tribunal Appeals',
    visaSubclass: 'PIC 4020 Integrity Waiver',
    title: '3-Year Ban Avoided via Compelling Circumstances Waiver Submission',
    clientProfile: 'Software Specialist · Perth, WA',
    jurisdiction: 'Department of Home Affairs / ART',
    decisionDate: '19 Jun 2026',
    processingTime: '9 Weeks',
    outcomeLabel: 'PIC 4020 Waiver Granted',
    challenge:
      'An overseas education consultant previously uploaded an inaccurate employment letter on a prior student visa, exposing the applicant to a 3-year PIC 4020 exclusion.',
    legalStrategy:
      'Presented full transparency affidavits, proof of innocent reliance, and compelling Australian regional employer reliance evidence to satisfy PIC 4020(4).',
    outcomeSummary:
      'The delegate accepted the waiver submission, clearing the applicant’s integrity record and permitting skilled visa approval.',
    evidenceBundle: [
      'Full-Disclosure Chronology & Forensic Communication Log',
      'Regional Employer Impact & Essential Skill Shortfall Brief',
      'Third-Party Agent Misconduct Documentary Proof',
    ],
    statutoryBasis: 'Public Interest Criterion 4020(4)(b) · Compelling & Compassionate Grounds',
  },
  {
    id: 'proof-190-state',
    referenceCode: 'LWA-2026-011',
    category: 'Skilled & Work',
    visaSubclass: 'Subclass 190 (State Nominated PR)',
    title: 'Victorian State Nomination & Family PR Granted Prior to Age Threshold',
    clientProfile: 'ICT Security Architect & Family of 3 · Melbourne, VIC',
    jurisdiction: 'Live in Melbourne / Home Affairs',
    decisionDate: '08 May 2026',
    processingTime: '52 Days',
    outcomeLabel: 'Family Permanent Residency Granted',
    challenge:
      'Applicant was 11 weeks from turning 45, requiring zero-error EOI points verification and rapid state nomination lodgement before the statutory points drop.',
    legalStrategy:
      'Pre-audited ACS skilled employment dates, superior English evidence, and partner points prior to ROI submission to secure priority invitation.',
    outcomeSummary:
      'Victorian nomination was issued in 12 days and the Subclass 190 permanent visa for all three family members was granted 40 days later.',
    evidenceBundle: [
      'ACS Skills & Points Audit Matrix (85 Points Verified)',
      'ATO Income Statements & Payslip Chronology',
      'Priority Age-Threshold Lodgement Submission',
    ],
    statutoryBasis: 'Migration Regulations 1994 · Subclass 190 & Schedule 6D Points Test',
  },
  {
    id: 'proof-s501-character',
    referenceCode: 'LWA-2026-004',
    category: 'Cancellations',
    visaSubclass: 'Section 501 Character Submission',
    title: 'Notice of Visa Refusal Under Character Grounds Overcome on Direction 110',
    clientProfile: 'Construction Project Supervisor · Sydney, NSW',
    jurisdiction: 'Visa Applicant Character Consideration Unit',
    decisionDate: '26 Mar 2026',
    processingTime: '7 Weeks',
    outcomeLabel: 'Character Clearance Approved',
    challenge:
      'Historic overseas traffic and minor public order convictions triggered a Section 501 natural justice letter threatening permanent exclusion.',
    legalStrategy:
      'Structured a detailed Direction 110 submission addressing rehabilitation, community safety, Australian family ties, and employer reliance.',
    outcomeSummary:
      'VACCU exercised discretion not to refuse the visa under Section 501(1), clearing the applicant for immediate visa grant.',
    evidenceBundle: [
      'Direction 110 Primary & Other Considerations Legal Brief',
      'Forensic Psychologist Risk & Rehabilitation Assessment',
      'Employer & Community Character References with Statutory Verification',
    ],
    statutoryBasis: 'Migration Act 1958 · s501(1) & Ministerial Direction No. 110',
  },
];

export const PRACTICE_SERVICES: PracticeService[] = [
  {
    index: '01',
    title: 'Skilled & Employer-Sponsored Visas (482, 186, 189, 190)',
    category: 'Skilled & Work',
    spanWide: true,
    summary:
      'End-to-end preparation for Skills in Demand (482), Employer Nomination Scheme (186), and State Nominated pathways—structured around airtight Labour Market Testing and skills assessments.',
    deliverables: [
      'Labour Market Testing & Salary Parity Compliance Audit',
      'Skills Assessment Strategy (ACS, Engineers Australia, VETASSESS)',
      'Direct Entry & Temporary Residence Transition Nominations',
    ],
    featuredProofId: 'proof-186-ens',
    proofHeadline: 'Subclass 186 ENS Direct Entry approved in 41 days despite corporate restructure',
    proofMeta: 'Ref LWA-2026-084 · Department of Home Affairs · 0 RFI Delays',
  },
  {
    index: '02',
    title: 'Visa Refusal Appeals & Tribunal Representation (ART)',
    category: 'Tribunal Appeals',
    spanWide: false,
    summary:
      'Strategic merit reviews before the Administrative Review Tribunal, curing statutory defects, Schedule 3 barriers, and PIC 4020 integrity allegations.',
    deliverables: [
      'Detailed Merits & Jurisdictional Error Assessment',
      'Written Statutory Submissions & Witness Preparation',
      'Oral Advocacy at Tribunal Hearings',
    ],
    featuredProofId: 'proof-art-820',
    proofHeadline: 'Schedule 3 Partner refusal set aside on the papers in 11 weeks',
    proofMeta: 'Ref LWA-2026-071 · Administrative Review Tribunal',
  },
  {
    index: '03',
    title: 'Partner, Spouse & Family Migration (820/801, 309/100)',
    category: 'Partner & Family',
    spanWide: false,
    summary:
      'Four-pillar relationship evidentiary dossiers designed to prevent Section 56 delays, even where couples face interstate separation or complex visa histories.',
    deliverables: [
      'Four-Pillar Documentary Index & Chronology',
      'Form 888 & Statutory Declaration Drafting',
      'Long-Term Relationship & Waiver Advocacy',
    ],
    featuredProofId: 'proof-820-direct',
    proofHeadline: 'Double 820/801 Partner grant approved in 4.5 months without interview',
    proofMeta: 'Ref LWA-2026-039 · Department of Home Affairs',
  },
  {
    index: '04',
    title: 'Visa Cancellations, NOICC & Compliance Defence',
    category: 'Cancellations',
    spanWide: true,
    summary:
      'Rapid-response legal submissions for Section 116 and Section 501 Notices of Intention to Consider Cancellation, bridging visa regularization, and employer sponsorship audits.',
    deliverables: [
      'Urgent 5-to-14 Day NOICC Statutory Response',
      'Character & Discretionary Hardship Submissions',
      'Bridging Visa E & Lawful Status Stabilization',
    ],
    featuredProofId: 'proof-noicc-116',
    proofHeadline: 'Section 116 NOICC formally revoked within 14 days of submission',
    proofMeta: 'Ref LWA-2026-052 · Home Affairs Compliance Division',
  },
];

export const LEGAL_BRIEFINGS: LegalBriefing[] = [
  {
    id: 'brief-new-visa-rules',
    date: 'November 2026',
    readTime: '3 min brief',
    title: 'New Australian Visa Rules: Core Skills Threshold & 186 Pathway Changes',
    summary:
      'Breaking down how the latest Core Skills Income Threshold adjustments, Skills in Demand (482) mobility rules, and employer nomination reforms affect current visa holders and 2026 applicants.',
    keyTakeaways: [
      'Visa holders changing sponsors now have an extended 180-day window to secure a new nomination without breaching condition 8107.',
      'All work experience accumulated with accredited or non-accredited sponsors now counts toward the 2-year Temporary Residence Transition (186) pathway.',
      'Labour Market Testing advertisements must strictly match the ANZSCO/OSCA occupation title and indexed salary floor at the exact date of lodgement.',
    ],
    impactedVisas: 'Subclass 482 · Subclass 186 · Bridging Visas',
    relatedCategory: 'Skilled & Work',
  },
  {
    id: 'brief-art-transition',
    date: 'October 2026',
    readTime: '4 min brief',
    title: 'Administrative Review Tribunal (ART): Preparing Stronger Merits Bundles',
    summary:
      'What changed under the ART procedural framework and why early, structured statutory submissions increasingly resolve clear-cut refusals without waiting years for an oral hearing.',
    keyTakeaways: [
      'Submitting a complete legal submission and fresh evidentiary bundle within 28 days of lodgement improves eligibility for early on-the-papers remittal.',
      'Strict 28-day statutory appeal deadlines remain non-extendable—missing the filing window forfeits Tribunal jurisdiction.',
      'For PIC 4020 and Schedule 3 matters, contemporaneous documentary proof carries far greater weight than post-refusal declarations alone.',
    ],
    impactedVisas: 'ART Merits Review · Schedule 3 · PIC 4020',
    relatedCategory: 'Tribunal Appeals',
  },
  {
    id: 'brief-noicc-response',
    date: 'September 2026',
    readTime: '3 min brief',
    title: 'Responding to a Section 116 NOICC Without Triggering a 3-Year Exclusion',
    summary:
      'Why the first 7 days after receiving a Notice of Intention to Consider Cancellation are decisive—and how discretionary submissions protect your future PR pathway.',
    keyTakeaways: [
      'Never submit an unverified informal email reply; every admission in a NOICC response becomes permanent departmental record.',
      'Even where a technical breach occurred, delegates must weigh mandatory discretionary factors including ties to Australia and employer impact.',
      'If cancellation occurs, immediate Bridging Visa E and ART lodgement timelines apply within days, not weeks.',
    ],
    impactedVisas: 's116 NOICC · Condition 8107 · s48 Bar Mitigation',
    relatedCategory: 'Cancellations',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    clientName: 'Rohan Verma',
    roleAndLocation: 'Senior Civil Engineer · Melbourne, VIC',
    matterType: 'Subclass 186 Direct Entry',
    quote:
      'Another firm told me my employer’s ABN restructure reset my 3-year experience clock. Amit mapped the corporate succession documents, lodged a clean legal brief, and our family received permanent residency in 41 days.',
    outcomeMetric: 'PR Granted in 41 Days',
  },
  {
    id: 'test-2',
    clientName: 'Priya & Daniel Mercer',
    roleAndLocation: 'Hospitality Manager & Electrician · Sydney, NSW',
    matterType: 'ART Partner Appeal (Schedule 3)',
    quote:
      'Our previous agent lodged onshore on the wrong bridging visa and got us refused. Amit took over the Tribunal appeal, built a thorough compelling-reasons dossier, and won a remittal without us even facing an adversarial hearing.',
    outcomeMetric: 'Refusal Overturned in 11 Weeks',
  },
  {
    id: 'test-3',
    clientName: 'Harpreet Singh',
    roleAndLocation: 'Retail Operations Director · Melbourne, VIC',
    matterType: 'Section 116 NOICC Defence',
    quote:
      'Receiving a cancellation notice put my business and my family’s future at risk. Amit worked directly with my accountant over the weekend, filed our statutory response, and Home Affairs revoked the notice within two weeks.',
    outcomeMetric: 'NOICC Revoked in 14 Days',
  },
];
