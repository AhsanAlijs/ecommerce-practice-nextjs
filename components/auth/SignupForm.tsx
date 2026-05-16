"use client";
import { FeatureCardType, SignInFormValues } from "@/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LuArrowRight } from "react-icons/lu";
import TextInput from "../ui/fields/TextInput";
import { features, signUpFieldsConfig } from "@/constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthValidationSchema } from "../../validations/signupformSchema";
import RegisterPageCard from "./RegisterPageCard";
import PasswordInput from "../ui/fields/PasswordInput";
export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "all",
    resolver: yupResolver(AuthValidationSchema),
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
    reset();
  };

  return (
    <section className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center px-4 py-10 font-[family-name:var(--font-body)]">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-[var(--bg-card)] shadow-[var(--shadow-lg)] grid grid-cols-1 lg:grid-cols-2 border border-[var(--border-light)]">
        {/* ============ LEFT SIDE ============ */}
        <RegisterPageCard />
        {/* ============ RIGHT SIDE ============ */}
        <div className="w-full p-6 sm:p-10 md:p-14 flex flex-col justify-center">
          {/* Mobile-only mini logo */}
          <div className="lg:hidden mb-6 flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="font-bold">E</span>
            </div>
            <span className="font-semibold text-[var(--text-primary)]">
              Ecommerce
            </span>
          </div>

          {/* HEADER */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-[var(--accent-light-blue)] text-[var(--primary-blue)]">
              Get started — it's free
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight">
              Create your account
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] leading-7">
              Fill in your details below to get started in less than a minute.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {signUpFieldsConfig.map((field) =>
              field.type === "password" ? (
                <PasswordInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  register={register(field.name as keyof SignInFormValues, {
                    required: `${field.label} is required`,
                  })}
                  error={errors[field.name as keyof SignInFormValues]}
                />
              ) : (
                <TextInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  register={register(field.name as keyof SignInFormValues, {
                    required: `${field.label} is required`,
                  })}
                  error={errors[field.name as keyof SignInFormValues]}
                />
              ),
            )}

            {/* Terms */}
            <p className="text-xs text-[var(--text-muted)] leading-5">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="text-[var(--primary-blue)] hover:underline font-medium"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-[var(--primary-blue)] hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="
                group w-full rounded-xl
                py-3.5 px-6
                text-white font-semibold
                flex items-center justify-center gap-2
                transition-all duration-300
                hover:scale-[1.01]
                active:scale-[0.98]
                shadow-[var(--shadow-md)]
                hover:shadow-[var(--shadow-lg)]
                disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
              "
              style={{ background: "var(--gradient-primary)" }}
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
              <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* DIVIDER */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border-light)]" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-[var(--bg-card)] text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-colors text-sm font-medium text-[var(--text-primary)]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-colors text-sm font-medium text-[var(--text-primary)]"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Apple
              </button>
            </div>
          </form>

          {/* LOGIN LINK */}
          <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-blue-hover)] hover:underline transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
