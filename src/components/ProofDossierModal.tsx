import React, {useEffect} from 'react';
import {CheckCircle2, FileCheck2, Scale, X} from 'lucide-react';
import {CaseProof, ProofCategory} from '../data/legalData';

interface ProofDossierModalProps {
  proof: CaseProof | null;
  onClose: () => void;
  onBookSimilar: (category: ProofCategory, refCode: string) => void;
}

export const ProofDossierModal: React.FC<ProofDossierModalProps> = ({
  proof,
  onClose,
  onBookSimilar,
}) => {
  useEffect(() => {
    if (!proof) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [proof, onClose]);

  if (!proof) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#E2E4E9] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E2E4E9] flex items-start justify-between gap-4 bg-[#F8F8F6]">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#475569]">
              <span>{proof.referenceCode}</span>
              <span aria-hidden="true">·</span>
              <span>{proof.visaSubclass}</span>
              <span aria-hidden="true">·</span>
              <span>{proof.decisionDate}</span>
            </div>
            <h3
              id="dossier-title"
              className="mt-1.5 font-serif text-xl sm:text-2xl font-semibold text-[#111827]"
            >
              {proof.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dossier"
            className="p-2 text-[#475569] hover:text-[#111827] hover:bg-[#EAEAE6] rounded-md transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Verified Grant Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E4E9]">
            <div className="flex items-center gap-2.5 text-[#1B4332] font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{proof.outcomeLabel}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#475569] tabular-nums">
              <span>{proof.jurisdiction}</span>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-[#111827]">
                Decided in {proof.processingTime}
              </span>
            </div>
          </div>

          {/* Client & Statutory Ground */}
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs font-medium text-[#64748B]">Client Profile (Anonymized)</p>
              <p className="mt-1 font-medium text-[#111827]">{proof.clientProfile}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-[#64748B]">Statutory Provision</p>
              <p className="mt-1 font-mono text-xs text-[#111827]">{proof.statutoryBasis}</p>
            </div>
          </div>

          {/* Legal Argument */}
          <div className="space-y-4 pt-2 border-t border-[#E2E4E9]">
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-[#64748B]">
                01. The Legal Barrier
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-[#334155]">{proof.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-[#64748B]">
                02. Counsel Strategy
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-[#334155]">
                {proof.legalStrategy}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-[#64748B]">
                03. Documented Decision Outcome
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-[#111827] font-medium">
                {proof.outcomeSummary}
              </p>
            </div>
          </div>

          {/* Evidence Bundle Submitted */}
          <div className="pt-4 border-t border-[#E2E4E9]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
              <FileCheck2 className="w-4 h-4 text-[#1B4332]" aria-hidden="true" />
              <span>Redacted Evidence Bundle Submitted</span>
            </div>
            <ul className="mt-3 space-y-2">
              {proof.evidenceBundle.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[#334155] flex items-baseline gap-2.5"
                >
                  <span className="font-mono text-xs text-[#64748B] tabular-nums">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-[#E2E4E9] bg-[#F8F8F6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <Scale className="w-3.5 h-3.5 text-[#9A7B3E]" aria-hidden="true" />
            <span>Identifiable client details redacted under legal privilege.</span>
          </div>
          <button
            type="button"
            onClick={() => onBookSimilar(proof.category, proof.referenceCode)}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Assess a Similar Case
          </button>
        </div>
      </div>
    </div>
  );
};
