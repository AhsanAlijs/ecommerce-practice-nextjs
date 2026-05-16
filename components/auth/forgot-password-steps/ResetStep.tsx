"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuArrowRight, LuKey } from "react-icons/lu";
import PasswordInput from "@/components/ui/fields/PasswordInput";
import { ResetPasswordSchema } from "@/validations/forgotPasswordSchema";
import { ResetPasswordValues } from "@/types";

type Props = {
  onSuccess: () => void;
};

export default function ResetStep({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ResetPasswordValues>({
    mode: "all",
    resolver: yupResolver(ResetPasswordSchema),
  });

  const password = watch("password", "");

  // Strength meter
  const getStrength = (pw: string) => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strength = getStrength(password);
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "var(--border-light)",
    "var(--error)",
    "var(--warning)",
    "var(--info)",
    "var(--success)",
  ];

  const onSubmit = async (data: ResetPasswordValues) => {
    console.log("Resetting password:", data);
    await new Promise((r) => setTimeout(r, 800));
    onSuccess();
  };

  return (
    <div>
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
        style={{ background: "var(--accent-light-blue)" }}
      >
        <LuKey className="w-7 h-7 text-[var(--primary-blue)]" />
      </div>

      <div className="text-center mb-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          Set new password
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
          Choose a strong password you haven&apos;t used before.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <PasswordInput
            label="New password"
            name="password"
            placeholder="Enter new password"
            required
            register={register("password")}
            error={errors.password}
          />

          {/* Strength meter */}
          {password && (
            <div className="mt-2">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-1.5 flex-1 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor:
                        i <= strength
                          ? strengthColors[strength]
                          : "var(--border-light)",
                    }}
                  />
                ))}
              </div>
              {strength > 0 && (
                <p
                  className="text-xs font-medium mt-1.5"
                  style={{ color: strengthColors[strength] }}
                >
                  Password strength: {strengthLabels[strength]}
                </p>
              )}
            </div>
          )}
        </div>

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          placeholder="Re-enter new password"
          required
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        {/* Requirements checklist */}
        <ul className="space-y-1.5 text-xs">
          {[
            { label: "At least 8 characters", check: password.length >= 8 },
            { label: "One uppercase letter", check: /[A-Z]/.test(password) },
            { label: "One number", check: /[0-9]/.test(password) },
          ].map((req) => (
            <li
              key={req.label}
              className={`flex items-center gap-2 transition-colors ${
                req.check ? "text-[var(--success)]" : "text-[var(--text-muted)]"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  req.check
                    ? "bg-[var(--success)] text-white"
                    : "bg-[var(--border-light)]"
                }`}
              >
                {req.check ? "✓" : ""}
              </span>
              {req.label}
            </li>
          ))}
        </ul>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
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
          {isSubmitting ? "Resetting..." : "Reset password"}
          <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}
