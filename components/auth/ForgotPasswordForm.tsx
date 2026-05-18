"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft, LuMail, LuShieldCheck, LuKey } from "react-icons/lu";
import EmailStep from "./forgot-password-steps/EmailStep";
import OtpStep from "./forgot-password-steps/OtpStep";
import ResetStep from "./forgot-password-steps/ResetStep";
import SuccessStep from "./forgot-password-steps/SuccessStep";

type Step = 1 | 2 | 3 | 4;

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<Step>(1);
  const [email, setEmail] = useState("");

  const steps = [
    { num: 1, label: "Email", icon: <LuMail className="w-4 h-4" /> },
    { num: 2, label: "Verify", icon: <LuShieldCheck className="w-4 h-4" /> },
    { num: 3, label: "Reset", icon: <LuKey className="w-4 h-4" /> },
  ];

  return (
    <section className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center px-4 py-10 font-[family-name:var(--font-body)]">
      <div className="w-full max-w-md">
        {/* Back to login */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors mb-6 group"
        >
          <LuArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to login
        </Link>

        <div className="bg-[var(--bg-card)] rounded-3xl shadow-[var(--shadow-lg)] border border-[var(--border-light)] overflow-hidden">
          {/* HEADER WITH LOGO */}
          <div
            className="px-8 pt-8 pb-6 relative overflow-hidden"
            style={{ background: "var(--gradient-dark)" }}
          >
            {/* Decorative blob */}
            <div
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />

            <div className="relative z-10 flex items-center gap-2 mb-6">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-[var(--shadow-md)]"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span className="font-bold">E</span>
              </div>
              <span className="font-semibold text-white">Ecommerce</span>
            </div>

            {/* PROGRESS STEPS */}
            {step < 4 && (
              <div className="relative z-10 flex items-center justify-between">
                {steps.map((s, idx) => (
                  <div
                    key={s.num}
                    className="flex items-center flex-1 last:flex-none"
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        className={`
                          w-9 h-9 rounded-full flex items-center justify-center
                          font-semibold text-sm transition-all duration-300
                          ${
                            step >= s.num
                              ? "text-white shadow-[var(--shadow-md)]"
                              : "bg-white/10 text-gray-400 border border-white/20"
                          }
                        `}
                        style={
                          step >= s.num
                            ? { background: "var(--gradient-primary)" }
                            : undefined
                        }
                      >
                        {s.icon}
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          step >= s.num ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>

                    {/* Connector line */}
                    {idx < steps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-2 mb-5 bg-white/10 relative overflow-hidden">
                        <div
                          className="absolute inset-0 transition-transform duration-500 origin-left"
                          style={{
                            background: "var(--gradient-primary)",
                            transform: step > s.num ? "scaleX(1)" : "scaleX(0)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* STEP CONTENT */}
          <div className="p-8">
            {step === 1 && (
              <EmailStep
                onSuccess={(emailValue) => {
                  setEmail(emailValue);
                  setStep(2);
                }}
              />
            )}

            {step === 2 && (
              <OtpStep
                email={email}
                onSuccess={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && <ResetStep email={email} onSuccess={() => setStep(4)} />}

            {step === 4 && <SuccessStep />}
          </div>
        </div>

        {/* Footer help text */}
        {step < 4 && (
          <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
            Need help?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--primary-blue)] hover:underline"
            >
              Contact support
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
