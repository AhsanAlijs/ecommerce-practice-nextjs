"use client";

import Link from "next/link";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";

export default function SuccessStep() {
  return (
    <div className="text-center py-4">
      {/* Animated success icon */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div
          className="absolute inset-0 rounded-full opacity-20 animate-ping"
          style={{ background: "var(--success)" }}
        />
        <div
          className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-[var(--shadow-md)]"
          style={{ background: "var(--success)" }}
        >
          <LuCircleCheck className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
        Password reset!
      </h2>
      <p className="text-sm text-[var(--text-secondary)] leading-6 mb-8 max-w-xs mx-auto">
        Your password has been successfully reset. You can now log in with your
        new password.
      </p>

      <Link
        href="/login"
        className="
          group w-full rounded-xl py-3.5 px-6
          text-white font-semibold
          inline-flex items-center justify-center gap-2
          transition-all duration-300
          hover:scale-[1.01] active:scale-[0.98]
          shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
        "
        style={{ background: "var(--gradient-primary)" }}
      >
        Continue to login
        <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}