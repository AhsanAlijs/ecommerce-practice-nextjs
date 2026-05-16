"use client";

import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import { LuArrowRight, LuShieldCheck } from "react-icons/lu";

type Props = {
  email: string;
  onSuccess: () => void;
  onBack: () => void;
};

export default function OtpStep({ email, onSuccess, onBack }: Props) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  // Auto-focus first input
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (idx: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // only digits
    const next = [...otp];
    next[idx] = value;
    setOtp(next);
    setError("");
    if (value && idx < 5) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    const next = pasted.split("").concat(Array(6 - pasted.length).fill(""));
    setOtp(next);
    inputsRef.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleSubmit = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }
    setIsSubmitting(true);
    // TODO: call your API → verify OTP
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    onSuccess();
  };

  const handleResend = () => {
    if (timer > 0) return;
    setTimer(60);
    setOtp(Array(6).fill(""));
    inputsRef.current[0]?.focus();
    // TODO: call resend API
  };

  const isComplete = otp.every((d) => d !== "");

  return (
    <div>
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
        style={{ background: "var(--accent-light-blue)" }}
      >
        <LuShieldCheck className="w-7 h-7 text-[var(--primary-blue)]" />
      </div>

      <div className="text-center mb-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          Check your email
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
          We sent a 6-digit code to{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {email}
          </span>
        </p>
      </div>

      {/* OTP INPUTS */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-2">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            onPaste={handlePaste}
            className={`
              w-11 h-13 sm:w-12 sm:h-14
              text-center text-xl font-bold
              rounded-xl border-2
              bg-[var(--bg-card)] text-[var(--text-primary)]
              outline-none transition-all duration-200
              ${
                error
                  ? "border-[var(--error)] focus:ring-2 focus:ring-red-200"
                  : digit
                    ? "border-[var(--primary-blue)] focus:ring-2 focus:ring-blue-100"
                    : "border-[var(--border-light)] focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-blue-100"
              }
            `}
          />
        ))}
      </div>

      {error && (
        <p className="text-sm text-[var(--error)] font-medium text-center mb-2">
          {error}
        </p>
      )}

      {/* Resend */}
      <div className="text-center mt-5 mb-6">
        <p className="text-sm text-[var(--text-secondary)]">
          Didn&apos;t receive the code?{" "}
          {timer > 0 ? (
            <span className="font-semibold text-[var(--text-muted)]">
              Resend in {timer}s
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-blue-hover)] hover:underline"
            >
              Resend code
            </button>
          )}
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isComplete || isSubmitting}
          className="
            group w-full rounded-xl py-3.5 px-6
            text-white font-semibold
            flex items-center justify-center gap-2
            transition-all duration-300
            hover:scale-[1.01] active:scale-[0.98]
            shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
            disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
          "
          style={{ background: "var(--gradient-primary)" }}
        >
          {isSubmitting ? "Verifying..." : "Verify code"}
          <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-xl py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
        >
          Use a different email
        </button>
      </div>
    </div>
  );
}
