"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuArrowRight, LuMail } from "react-icons/lu";
import TextInput from "@/components/ui/fields/TextInput";
import { ForgotPasswordSchema } from "@/validations/forgotPasswordSchema";
import { ForgotPasswordValues } from "@/types";

type Props = {
  onSuccess: (email: string) => void;
};

export default function EmailStep({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ForgotPasswordValues>({
    mode: "all",
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    // TODO: call your API → send OTP to email
    console.log("Sending OTP to:", data.email);
    await new Promise((r) => setTimeout(r, 800)); // simulate
    onSuccess(data.email);
  };

  return (
    <div>
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
        style={{ background: "var(--accent-light-blue)" }}
      >
        <LuMail className="w-7 h-7 text-[var(--primary-blue)]" />
      </div>

      <div className="text-center mb-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          Forgot password?
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
          No worries! Enter your email and we&apos;ll send you a 6-digit code to
          reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <TextInput
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          register={register("email")}
          error={errors.email}
        />

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
          {isSubmitting ? "Sending code..." : "Send reset code"}
          <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}
