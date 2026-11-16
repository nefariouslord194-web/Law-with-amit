import React, {useEffect, useState} from 'react';
import {AlertCircle, CheckCircle2, Copy, Check} from 'lucide-react';
import {ProofCategory} from '../data/legalData';

interface ConsultationFormProps {
  preselectedCategory: ProofCategory | '';
  contextNote: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  category?: string;
  summary?: string;
}

const CHECKLIST_BY_CATEGORY: Record<ProofCategory, string[]> = {
  'Skilled & Work': [
    'Current passport bio-page and latest VEVO visa grant letter',
    'Updated CV / resume and skills assessment outcome (if completed)',
    'Sponsor ABN / employment contract or job offer salary details',
  ],
  'Tribunal Appeals': [
    'Full Department of Home Affairs refusal decision record (all pages)',
    'Exact date the refusal email was received (28-day statutory deadline)',
    'Prior lodgement Form 956 / IMMI Account submission summary',
  ],
  'Partner & Family': [
    'Chronology of relationship milestones (cohabitation, marriage, registration)',
    'Current visa status of applicant and Australian citizen/PR sponsor',
    'Joint bank statements, lease agreements, or shared financial evidence',
  ],
  Cancellations: [
    'Full Notice of Intention to Consider Cancellation (NOICC) letter',
    'Exact response deadline stated on the departmental notice',
    'Employment records, payslips, or compliance correspondence',
  ],
};

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  preselectedCategory,
  contextNote,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<ProofCategory | ''>(preselectedCategory);
  const [visaStatus, setVisaStatus] = useState('Onshore (In Australia)');
  const [preferredMode, setPreferredMode] = useState('Video Call (Zoom / Teams)');
  const [summary, setSummary] = useState(contextNote);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  useEffect(() => {
    if (preselectedCategory) {
      setCategory(preselectedCategory);
    }
  }, [preselectedCategory]);

  useEffect(() => {
    if (contextNote) {
      setSummary(contextNote);
    }
  }, [contextNote]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address for your case confirmation.';
    }
    if (!/^[+\d\s()-]{8,20}$/.test(phone.trim())) {
      nextErrors.phone = 'Enter a valid mobile or WhatsApp number.';
    }
    if (!category) {
      nextErrors.category = 'Select the legal matter most relevant to your situation.';
    }
    if (summary.trim().length < 15) {
      nextErrors.summary = 'Please provide a brief summary of your visa history or deadline (at least 15 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const suffix = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`LWA-REQ-${suffix}`);
  };

  const handleCopyRef = () => {
    if (!submittedRef) return;
    navigator.clipboard?.writeText(submittedRef).catch(() => {});
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setSummary('');
    setErrors({});
  };

  if (submittedRef && category) {
    const prepList = CHECKLIST_BY_CATEGORY[category];
    return (
      <div className="bg-white border border-[#E2E4E9] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2E4E9]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#1B4332] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                Case Assessment Request Logged
              </h3>
              <p className="mt-1 text-sm text-[#475569]">
                Thank you, {fullName}. Amit’s office will confirm your consultation slot via{' '}
                <span className="font-medium text-[#111827]">{email}</span> within one business day.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-[#F8F8F6] border border-[#E2E4E9] rounded-lg">
          <div>
            <p className="text-xs text-[#64748B]">Reference Number</p>
            <p className="font-mono text-sm font-medium text-[#111827] tabular-nums">
              {submittedRef}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyRef}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#111827] bg-white border border-[#E2E4E9] hover:bg-[#EAEAE6] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedRef ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#1B4332]" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy Reference</span>
              </>
            )}
          </button>
        </div>

        <div>
          <p className="text-xs font-semibold text-[#111827]">
            Prepare Before Your {category} Consultation
          </p>
          <ul className="mt-3 space-y-2.5">
            {prepList.map((item, idx) => (
              <li key={idx} className="flex items-baseline gap-2.5 text-sm text-[#334155]">
                <span className="font-mono text-xs text-[#1B4332] tabular-nums">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#E2E4E9] flex items-center justify-between gap-4">
          <span className="text-xs text-[#64748B]">
            Format: {preferredMode} · {visaStatus}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium text-[#1B4332] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
          >
            Submit Another Matter
          </button>
        </div>
      </div>
    );
  }

  const isUrgentMatter = category === 'Cancellations' || category === 'Tribunal Appeals';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#E2E4E9] rounded-xl p-6 sm:p-8 space-y-5"
    >
      <div className="pb-4 border-b border-[#E2E4E9]">
        <h3 className="font-serif text-2xl font-semibold text-[#111827]">
          Request a Case Assessment
        </h3>
        <p className="mt-1 text-sm text-[#475569]">
          Receive a direct legal review of your eligibility, refusal notice, or sponsorship pathway.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-medium text-[#334155] mb-1.5">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Aarav Sharma"
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
          />
          {errors.fullName && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#334155] mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#334155] mb-1.5">
            Phone or WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+61 400 000 000"
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
          />
          {errors.phone && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block text-xs font-medium text-[#334155] mb-1.5">
            Legal Matter Type
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ProofCategory)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
          >
            <option value="">Select matter category</option>
            <option value="Skilled & Work">Skilled &amp; Employer Visas (482 / 186 / 190)</option>
            <option value="Tribunal Appeals">Refusal Appeal / Tribunal Review (ART)</option>
            <option value="Partner & Family">Partner &amp; Family Migration (820 / 309)</option>
            <option value="Cancellations">Visa Cancellation / NOICC Urgent Defence</option>
          </select>
          {errors.category && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.category}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="visaStatus" className="block text-xs font-medium text-[#334155] mb-1.5">
            Current Location &amp; Status
          </label>
          <select
            id="visaStatus"
            value={visaStatus}
            onChange={(e) => setVisaStatus(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
          >
            <option value="Onshore (In Australia)">Onshore — Currently in Australia</option>
            <option value="Offshore (Outside Australia)">Offshore — Applying from Overseas</option>
            <option value="Bridging Visa / Urgent Deadline">Bridging Visa / Active Statutory Deadline</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredMode" className="block text-xs font-medium text-[#334155] mb-1.5">
            Consultation Format
          </label>
          <select
            id="preferredMode"
            value={preferredMode}
            onChange={(e) => setPreferredMode(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
          >
            <option value="Video Call (Zoom / Teams)">Video Call (Australia &amp; Worldwide)</option>
            <option value="In-Person Chambers (Melbourne)">In-Person Chambers (Melbourne)</option>
            <option value="Telephone Consultation">Direct Telephone Assessment</option>
          </select>
        </div>
      </div>

      {isUrgentMatter && (
        <div className="px-4 py-3 bg-[#FFFBEB] border border-[#FDE68A] rounded-md flex items-start gap-2.5 text-xs text-[#92400E]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <strong>Statutory Deadline Notice:</strong> ART appeals and NOICC responses carry strict
            non-extendable time limits. Include the exact date on your departmental letter below.
          </span>
        </div>
      )}

      <div>
        <label htmlFor="summary" className="block text-xs font-medium text-[#334155] mb-1.5">
          Brief Case Summary &amp; Key Dates
        </label>
        <textarea
          id="summary"
          rows={3}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Outline your current visa subclass, employer/sponsor situation, or any refusal/NOICC deadline..."
          className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8F6] border border-[#D4D8DF] rounded-md text-[#111827] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]"
        />
        {errors.summary && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.summary}</span>
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs text-[#64748B]">
          Protected by solicitor-client confidentiality.
        </span>
        <button
          type="submit"
          className="px-6 py-3 text-sm font-medium text-white bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B4332]"
        >
          Schedule Case Assessment
        </button>
      </div>
    </form>
  );
};
