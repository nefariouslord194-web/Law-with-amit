import React, {useEffect} from 'react';
import {X} from 'lucide-react';
import {LegalBriefing, ProofCategory} from '../data/legalData';

interface BriefingModalProps {
  briefing: LegalBriefing | null;
  onClose: () => void;
  onAskAboutRule: (category: ProofCategory, topic: string) => void;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({
  briefing,
  onClose,
  onAskAboutRule,
}) => {
  useEffect(() => {
    if (!briefing) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [briefing, onClose]);

  if (!briefing) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-[#E2E4E9] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#E2E4E9] bg-[#F8F8F6] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <span>{briefing.date}</span>
              <span aria-hidden="true">·</span>
              <span>{briefing.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{briefing.impactedVisas}</span>
            </div>
            <h3
              id="briefing-modal-title"
              className="mt-1.5 font-serif text-xl sm:text-2xl font-semibold text-[#111827]"
            >
              {briefing.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close briefing"
            className="p-2 text-[#475569] hover:text-[#111827] hover:bg-[#EAEAE6] rounded-md transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          <p className="text-sm sm:text-base leading-relaxed text-[#334155]">
            {briefing.summary}
          </p>

          <div className="pt-4 border-t border-[#E2E4E9]">
            <h4 className="text-xs font-semibold text-[#111827]">
              Practical Implications for Applicants
            </h4>
            <ul className="mt-3 space-y-3">
              {briefing.keyTakeaways.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-baseline gap-3 text-sm leading-relaxed text-[#334155]"
                >
                  <span className="font-mono text-xs text-[#1B4332] font-semibold tabular-nums">
                    0{idx + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#E2E4E9] bg-[#F8F8F6] flex items-center justify-between gap-4">
          <span className="text-xs text-[#64748B]">Briefing by Amit · @lawwithamit</span>
          <button
            type="button"
            onClick={() => onAskAboutRule(briefing.relatedCategory, briefing.title)}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Check Your Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};
