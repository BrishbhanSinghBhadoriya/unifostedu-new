"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  program: string | null;
  campaign: string;
}

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const courses = [
  "Online MBA", "Online M.Com", "Online MCA", "Online MA",
  "Online M.Sc (Mathematics)", "Online BCA", "Online BBA", "Online BA",
];

export default function EnquiryModal({ open, onClose, program, campaign }: EnquiryModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [prog, setProg] = useState(program ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync prog when the modal opens with a specific program (e.g. per-card Apply Now)
  useEffect(() => {
    if (program) setProg(program);
  }, [program, open]);

  if (!open) return null;

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : "";
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          state,
          program: prog || program,
          url: currentUrl,
          source: currentUrl,
          campaign,
          university: "Ignou University",
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error ?? "Failed to submit");

      // ── Fire OpenAI conversion on /ignou_university/thanks ────────────
      try {
        sessionStorage.setItem("lead_source", "openai");
      } catch (_) {}

      router.push("/ignou_university/thanks");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
        >
          &times;
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-gray-900 font-bold text-lg">Speak to an admission counsellor</h2>
          <div className="flex items-center justify-center gap-4 mt-2">
            {["Online Exam", "100% Placement Assistance"].map((label) => (
              <span key={label} className="flex items-center gap-1 text-teal-600 font-semibold text-xs">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            placeholder="Enter Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            placeholder="Enter email"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            pattern="[6-9][0-9]{9}"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            placeholder="Enter Phone No. (10 digits)"
            required
          />

          {/* State select */}
          <div className="relative">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white text-gray-700"
              required
            >
              <option value="" disabled>Select State</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronIcon />
          </div>

          {/* Course select */}
          <div className="relative">
            <select
              value={prog}
              onChange={(e) => setProg(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white text-gray-700"
            >
              <option value="" disabled>Select Course</option>
              {courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronIcon />
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
            <svg className="w-6 h-6 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-gray-600 text-xs">Only a certified mentor will assist you</span>
          </div>

          <p className="text-gray-500 text-xs leading-relaxed">
            I authorize a representative to contact me via phone and/or email. This will override registry on DND/NDNC.
          </p>

          {error && (
            <div className="text-red-600 text-sm font-bold text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-bold py-3 rounded-full text-sm transition-all"
          >
            {loading ? "Submitting your enquiry..." : "Apply Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Small helper to avoid repeating the chevron SVG twice
function ChevronIcon() {
  return (
    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
