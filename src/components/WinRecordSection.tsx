import React from 'react';
import {ArrowUpRight, Award, CheckCircle2} from 'lucide-react';
import {CaseProof, ProofCategory, WIN_RECORD_STATS} from '../data/legalData';

interface WinRecordSectionProps {
  proofs: CaseProof[];
  selectedFilter: 'All Proofs' | ProofCategory;
  onSelectFilter: (filter: 'All Proofs' | ProofCategory) => void;
  onInspectProof: (proof: CaseProof) => void;
  onBookClick: () => void;
}

const FILTER_OPTIONS: Array<'All Proofs' | ProofCategory> = [
  'All Proofs',
  'Skilled & Work',
  'Tribunal Appeals',
  'Partner & Family',
  'Cancellations',
];

export const WinRecordSection: React.FC<WinRecordSectionProps> = ({
  proofs,
  selectedFilter,
  onSelectFilter,
  onInspectProof,
  onBookClick,
}) => {
  return (
    <section id="proofs" className="border-t border-b border-[#E2E4E9] bg-white">
      {/* Dark Obsidian Track Record Showcase */}
      <div className="bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Summary Statement */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#A7F3D0]">
                <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Verified Practice Record · 2024–2026</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                431 winning decisions across visas, appeals, and compliance
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Clients come to Amit when an approval cannot be left to chance—especially after
                prior refusals, corporate restructures, or strict cancellation deadlines. Every
                percentage below reflects audited file outcomes from 2024 to November 2026.
              </p>

              <div className="pt-4 border-t border-white/12 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-serif text-3xl font-semibold text-white tabular-nums">
                    431 / 445
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Total Matters Approved or Remitted
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-[#A7F3D0] tabular-nums">
                    92.8%
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    ART / AAT Refusal Appeal Win Rate
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="px-5 py-2.5 text-sm font-medium text-[#0F172A] bg-[#A7F3D0] hover:bg-[#6EE7B7] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Discuss Your Matter With Amit
                </button>
              </div>
            </div>

            {/* Right Category Win-Rate Performance Bars */}
            <div className="lg:col-span-7 bg-white/[0.04] border border-white/12 rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/12">
                <h3 className="text-sm font-semibold text-white">
                  Win Rate Breakdown by Matter Type
                </h3>
                <span className="text-xs font-mono text-slate-300 tabular-nums">
                  445 Audited Files
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {WIN_RECORD_STATS.map((stat) => {
                  const isFiltered = selectedFilter === stat.category;
                  return (
                    <div key={stat.id} className="py-5 first:pt-5 last:pb-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectFilter(stat.category)}
                          className="text-left group cursor-pointer focus-visible:outline-none"
                        >
                          <span
                            className={`text-sm font-semibold transition-colors ${
                              isFiltered
                                ? 'text-[#A7F3D0]'
                                : 'text-white group-hover:text-[#A7F3D0]'
                            }`}
                          >
                            {stat.title}
                          </span>
                        </button>
                        <div className="flex items-baseline gap-2.5 shrink-0 tabular-nums">
                          <span className="text-xs font-mono text-slate-300">
                            {stat.wonCount} / {stat.totalCount} Won
                          </span>
                          <span className="font-serif text-xl font-semibold text-[#A7F3D0]">
                            {stat.winRate}
                          </span>
                        </div>
                      </div>

                      {/* Proportion Bar */}
                      <div
                        className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden"
                        aria-hidden="true"
                      >
                        <div
                          className="h-full bg-[#34D399] rounded-full transition-all duration-300"
                          style={{width: `${stat.percentage}%`}}
                        />
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-4 text-xs text-slate-300">
                        <span>{stat.highlight}</span>
                        <button
                          type="button"
                          onClick={() => onSelectFilter(stat.category)}
                          className="text-[#A7F3D0] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          Filter Proofs ↓
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documented Case Archive & Interactive Ledger */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-[#1B4332]">Documented Case Archive</p>
            <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#111827]">
              Inspect individual winning grant notices &amp; appeals
            </h3>
          </div>

          {/* Interactive Segmented Filter Control */}
          <div
            role="tablist"
            aria-label="Filter winning cases by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F8F8F6] border border-[#E2E4E9] rounded-lg self-start"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = selectedFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectFilter(option)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1B4332] text-white'
                      : 'text-[#475569] hover:text-[#111827] hover:bg-[#EAEAE6]/70'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Winning Case Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {proofs.map((proof) => (
            <article
              key={proof.id}
              className="bg-[#F8F8F6] border border-[#E2E4E9] hover:border-[#1B4332]/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#475569]">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono">
                    <span className="text-[#111827] font-medium">{proof.referenceCode}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proof.visaSubclass}</span>
                  </div>
                  <span className="font-mono tabular-nums text-[#1B4332] font-medium">
                    Decided in {proof.processingTime}
                  </span>
                </div>

                <h4 className="mt-3 font-serif text-xl font-semibold text-[#111827]">
                  {proof.title}
                </h4>

                <p className="mt-1.5 text-xs text-[#64748B]">
                  {proof.clientProfile} · {proof.jurisdiction} · {proof.decisionDate}
                </p>

                <div className="mt-4 pt-4 border-t border-[#E2E4E9] space-y-2.5 text-sm leading-relaxed text-[#334155]">
                  <p>
                    <span className="font-semibold text-[#111827]">Barrier: </span>
                    {proof.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-[#111827]">Winning Outcome: </span>
                    {proof.outcomeSummary}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E4E9] flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1B4332]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{proof.outcomeLabel}</span>
                </span>
                <button
                  type="button"
                  onClick={() => onInspectProof(proof)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] hover:text-[#1B4332] underline underline-offset-4 decoration-[#CBD5E1] hover:decoration-[#1B4332] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
                >
                  <span>Inspect Redacted Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
