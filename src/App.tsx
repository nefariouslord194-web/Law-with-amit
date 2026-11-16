import React, {useMemo, useRef, useState} from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import {Navbar} from './components/Navbar';
import {ProofDossierModal} from './components/ProofDossierModal';
import {BriefingModal} from './components/BriefingModal';
import {ConsultationForm} from './components/ConsultationForm';
import {WinRecordSection} from './components/WinRecordSection';
import {
  CASE_PROOFS,
  CLIENT_TESTIMONIALS,
  CaseProof,
  HERO_METRICS,
  LEGAL_BRIEFINGS,
  LegalBriefing,
  PRACTICE_SERVICES,
  ProofCategory,
} from './data/legalData';

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState<'All Proofs' | ProofCategory>('All Proofs');
  const [activeProof, setActiveProof] = useState<CaseProof | null>(null);
  const [activeBriefing, setActiveBriefing] = useState<LegalBriefing | null>(null);
  const [preselectedCategory, setPreselectedCategory] = useState<ProofCategory | ''>('');
  const [bookingContextNote, setBookingContextNote] = useState('');
  const [portraitFailed, setPortraitFailed] = useState(false);

  const bookingSectionRef = useRef<HTMLElement | null>(null);

  const filteredProofs = useMemo(() => {
    if (selectedFilter === 'All Proofs') return CASE_PROOFS;
    return CASE_PROOFS.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  const scrollToBooking = () => {
    bookingSectionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const handleBookSimilar = (category: ProofCategory, refCode: string) => {
    setActiveProof(null);
    setPreselectedCategory(category);
    setBookingContextNote(
      `Requesting assessment regarding a matter similar to documented proof ${refCode} (${category}).`
    );
    setTimeout(scrollToBooking, 80);
  };

  const handleAskAboutRule = (category: ProofCategory, topic: string) => {
    setActiveBriefing(null);
    setPreselectedCategory(category);
    setBookingContextNote(`Seeking eligibility advice regarding: ${topic}.`);
    setTimeout(scrollToBooking, 80);
  };

  const openProofById = (proofId: string) => {
    const found = CASE_PROOFS.find((p) => p.id === proofId);
    if (found) setActiveProof(found);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#111827]">
      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-10 lg:pt-16 lg:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              <div>
                <p className="text-xs sm:text-sm font-medium text-[#475569]">
                  Australian Migration &amp; Legal Counsel · Melbourne &amp; Sydney
                </p>

                <h1 className="mt-4 font-serif text-[clamp(2.25rem,4vw,3.65rem)] leading-[1.08] font-semibold tracking-tight text-[#111827]">
                  Australian visa strategy backed by documented approvals.
                </h1>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#334155] max-w-2xl">
                  Amit advises skilled professionals, sponsoring employers, and families on
                  complex Australian visa applications, Administrative Review Tribunal appeals, and
                  cancellation defence—proven through real grant records, not generic promises.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={scrollToBooking}
                    className="px-6 py-3.5 text-sm font-medium text-white bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B4332]"
                  >
                    Schedule Case Assessment
                  </button>

                  <a
                    href="#proofs"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111827] hover:text-[#1B4332] underline underline-offset-4 decoration-[#CBD5E1] hover:decoration-[#1B4332] transition-colors whitespace-nowrap shrink-0 py-2"
                  >
                    <span>Explore 431 Winning Cases</span>
                    <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#E2E4E9] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#475569]">
                <div>
                  <span className="font-medium text-[#111827]">Direct Counsel Preparation</span>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                    Every statutory submission and evidentiary bundle is drafted and reviewed by
                    Amit directly.
                  </p>
                </div>
                <div>
                  <span className="font-medium text-[#111827]">Fixed-Fee Written Scopes</span>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                    Clear legal fees agreed upfront before any Home Affairs or Tribunal lodgement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Dominant Portrait Anchor */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-1 flex flex-col bg-white border border-[#E2E4E9] rounded-xl overflow-hidden">
                <div className="relative flex-1 min-h-[380px] sm:min-h-[430px] lg:min-h-0 overflow-hidden bg-[#EAEAE6]">
                  {!portraitFailed ? (
                    <img
                      src="/assets/aistudio/Screenshot_20261116_191049_Instagram_6bfbe777.jpg"
                      alt="Amit, Australian immigration and legal counsel, seated in his office with framed academic and legal credentials behind him"
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitFailed(true)}
                      className="w-[122%] max-w-none h-auto block select-none"
                      style={{transform: 'translate(-1%, -14.5%)'}}
                    />
                  ) : (
                    <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EAEAE6] to-[#DDE2DF]">
                      <Scale className="w-10 h-10 text-[#1B4332]" aria-hidden="true" />
                      <p className="mt-3 font-serif text-xl font-semibold text-[#111827]">
                        Amit · Principal Counsel
                      </p>
                      <p className="mt-1 text-xs text-[#475569]">
                        Australian Migration &amp; Legal Practice (@lawwithamit)
                      </p>
                    </div>
                  )}
                </div>

                <div className="px-5 py-3.5 bg-white border-t border-[#E2E4E9] flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Amit · Principal Counsel
                    </p>
                    <p className="text-xs text-[#64748B]">
                      Australian Visa &amp; Tribunal Practice · @lawwithamit
                    </p>
                  </div>
                  <a
                    href="#credentials"
                    className="text-xs font-medium text-[#1B4332] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                  >
                    View Credentials
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width 4-Column Quantitative Proof Strip */}
          <div className="mt-10 bg-white border border-[#E2E4E9] rounded-xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E4E9]">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="p-5 sm:p-6">
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#111827] tabular-nums">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm leading-snug text-[#475569]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES THROUGH PROOFS (ASYMMETRIC BENTO) */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-14 border-t border-[#E2E4E9]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#1B4332]">Practice Areas &amp; Proof</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827]">
                Legal services substantiated by real grants
              </h2>
            </div>
            <p className="text-sm text-[#475569] max-w-md">
              Every practice area pairs exact statutory deliverables with an anonymized recent
              decision you can inspect directly.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRACTICE_SERVICES.map((service) => (
              <article
                key={service.index}
                className={`bg-white border border-[#E2E4E9] hover:border-[#1B4332]/40 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-sm ${
                  service.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs text-[#64748B]">
                    <span className="font-mono font-medium text-[#1B4332] tabular-nums">
                      Service {service.index}
                    </span>
                    <span>{service.category}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-xl sm:text-2xl font-semibold text-[#111827]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                    {service.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-2.5 text-sm text-[#475569]"
                      >
                        <span className="font-mono text-xs text-[#9A7B3E] tabular-nums">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Adjacent Proof Anchor (separated by hairline rule, no nested card box) */}
                <div className="mt-6 pt-5 border-t border-[#E2E4E9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#1B4332]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>Verified Outcome · {service.proofMeta}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#111827]">
                      {service.proofHeadline}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openProofById(service.featuredProofId)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#111827] bg-[#F8F8F6] hover:bg-[#EAEAE6] border border-[#E2E4E9] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-center"
                  >
                    <span>Inspect Proof Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WINNING RECORD & CASE PROOF VAULT */}
        <WinRecordSection
          proofs={filteredProofs}
          selectedFilter={selectedFilter}
          onSelectFilter={setSelectedFilter}
          onInspectProof={setActiveProof}
          onBookClick={scrollToBooking}
        />

        {/* CREDENTIALS & NEW VISA RULE BRIEFINGS */}
        <section id="credentials" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Credentials & Chambers Standards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-medium text-[#1B4332]">Qualifications &amp; Standing</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#111827]">
                  Accountable legal representation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  Every immigration pathway depends on statutory precision. Amit’s practice
                  combines formal Australian legal and graduate migration training with regular
                  public briefings on Department of Home Affairs rule changes.
                </p>
              </div>

              <div className="border-t border-[#E2E4E9] divide-y divide-[#E2E4E9]">
                <div className="py-4 flex items-start gap-3">
                  <Scale className="w-4 h-4 text-[#1B4332] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Victoria University &amp; ACAP Academic Foundation
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                      Formal Australian tertiary credentials displayed in chambers, specializing in
                      statutory migration law and client advocacy.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3">
                  <ShieldCheck
                    className="w-4 h-4 text-[#1B4332] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Audit-Ready Evidentiary Bundles
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                      Applications are lodged decision-ready with indexed schedules to minimize
                      Section 56 delays and PIC 4020 scrutiny.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3">
                  <FileText
                    className="w-4 h-4 text-[#1B4332] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Public Rule Briefings (@lawwithamit)
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                      Translating complex Australian visa rule amendments into clear guidance for
                      workers, sponsors, and families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Rule-Change Briefings */}
            <div className="lg:col-span-7 bg-white border border-[#E2E4E9] rounded-xl p-6 sm:p-8">
              <div className="pb-5 border-b border-[#E2E4E9] flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-[#1B4332]">Practice Notes &amp; Reels</p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#111827]">
                    Recent Australian Visa Rule Briefings
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#64748B] hidden sm:inline">
                  @lawwithamit
                </span>
              </div>

              <div className="divide-y divide-[#E2E4E9]">
                {LEGAL_BRIEFINGS.map((brief) => (
                  <article key={brief.id} className="py-5 first:pt-5 last:pb-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#64748B]">
                      <span>{brief.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{brief.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>{brief.impactedVisas}</span>
                    </div>

                    <h4 className="mt-2 font-serif text-lg font-semibold text-[#111827]">
                      {brief.title}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{brief.summary}</p>

                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => setActiveBriefing(brief)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap"
                      >
                        <span>Read Full Legal Briefing</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ATTRIBUTABLE CLIENT REVIEWS */}
        <section id="reviews" className="bg-[#0F172A] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/15">
              <div>
                <p className="text-xs font-medium text-[#A7F3D0]">Client Outcomes</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Verified client stories from granted files
                </h2>
              </div>
              <p className="text-sm text-slate-300 max-w-md">
                Every testimonial reflects a completed matter with concrete timelines and verified
                departmental or Tribunal outcomes.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLIENT_TESTIMONIALS.map((review) => (
                <article
                  key={review.id}
                  className="bg-white/5 border border-white/12 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                      <span>{review.matterType}</span>
                      <span className="font-mono text-[#A7F3D0] tabular-nums">
                        {review.outcomeMetric}
                      </span>
                    </div>

                    <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-slate-100">
                      “{review.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/12">
                    <p className="text-sm font-semibold text-white">{review.clientName}</p>
                    <p className="mt-0.5 text-xs text-slate-300">{review.roleAndLocation}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION & CLIENT INTAKE */}
        <section
          id="book"
          ref={bookingSectionRef}
          className="max-w-6xl mx-auto px-6 py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Intake Process & Direct Contact */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs font-medium text-[#1B4332]">Engage Counsel</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827]">
                  Start with an honest, evidence-led case review
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#334155]">
                  Whether you are planning an employer-sponsored nomination, responding to a NOICC,
                  or appealing a refusal within a 28-day window, you receive clear advice on legal
                  viability before committing to full representation.
                </p>
              </div>

              <div className="border-t border-[#E2E4E9] divide-y divide-[#E2E4E9]">
                <div className="py-4">
                  <p className="font-mono text-xs text-[#1B4332] font-medium">
                    01. Merit &amp; Risk Check
                  </p>
                  <p className="mt-1 text-sm text-[#334155]">
                    We review your visa history, refusal reasons, and statutory criteria to verify
                    a realistic pathway.
                  </p>
                </div>
                <div className="py-4">
                  <p className="font-mono text-xs text-[#1B4332] font-medium">
                    02. Fixed-Fee Scope &amp; Document Checklist
                  </p>
                  <p className="mt-1 text-sm text-[#334155]">
                    You receive a transparent written cost agreement and a tailored checklist of
                    required evidentiary records.
                  </p>
                </div>
                <div className="py-4">
                  <p className="font-mono text-xs text-[#1B4332] font-medium">
                    03. Lodgement &amp; Direct Advocacy
                  </p>
                  <p className="mt-1 text-sm text-[#334155]">
                    Submissions are lodged directly with Home Affairs or the Administrative Review
                    Tribunal with full representation until decision.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#475569] space-y-1.5">
                <p>
                  <strong className="text-[#111827]">Chambers Hours:</strong> Mon–Fri, 9:00 AM –
                  6:00 PM AEST (Urgent NOICC &amp; Tribunal triage available)
                </p>
                <p>
                  <strong className="text-[#111827]">Direct Channels:</strong> Melbourne Chambers ·
                  Video Consultations Australia-Wide · @lawwithamit
                </p>
              </div>
            </div>

            {/* Right: Validated Booking Form */}
            <div className="lg:col-span-7">
              <ConsultationForm
                preselectedCategory={preselectedCategory}
                contextNote={bookingContextNote}
              />
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-white border-t border-[#E2E4E9]">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
              href="#"
              className="font-serif text-lg font-semibold text-[#111827] whitespace-nowrap shrink-0"
            >
              LawWithAmit
            </a>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#475569]"
            >
              <a href="#services" className="hover:text-[#111827] transition-colors">
                Services
              </a>
              <a href="#proofs" className="hover:text-[#111827] transition-colors">
                Case Proofs
              </a>
              <a href="#credentials" className="hover:text-[#111827] transition-colors">
                Credentials
              </a>
              <a href="#reviews" className="hover:text-[#111827] transition-colors">
                Client Reviews
              </a>
              <a href="#book" className="hover:text-[#111827] transition-colors">
                Book Consultation
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E2E4E9] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#64748B]">
            <p className="max-w-3xl leading-relaxed">
              Disclaimer: Information and anonymized case outcomes published on this website provide
              general guidance on Australian migration law and do not constitute formal legal advice
              until a written client retainer is executed. Past outcomes do not guarantee identical
              results on distinct factual records.
            </p>
            <p className="whitespace-nowrap shrink-0">
              © 2026 LawWithAmit Legal &amp; Migration Practice
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProofDossierModal
        proof={activeProof}
        onClose={() => setActiveProof(null)}
        onBookSimilar={handleBookSimilar}
      />

      <BriefingModal
        briefing={activeBriefing}
        onClose={() => setActiveBriefing(null)}
        onAskAboutRule={handleAskAboutRule}
      />
    </div>
  );
}
