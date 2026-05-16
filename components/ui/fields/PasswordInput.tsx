"use client";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { PasswordInputProps } from "@/types";

export default function PasswordInput({
  label,
  name,
  placeholder,
  required,
  register,
  error,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* LABEL */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-[var(--text-primary)]"
      >
        {label}
        {required && <span className="text-[var(--error)] ml-1">*</span>}
      </label>

      {/* INPUT WRAPPER */}
      <div className="relative">
        <input
          id={name}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className={`
            w-full rounded-xl border
            bg-[var(--bg-card)]
            px-4 py-3 pr-12 text-sm
            text-[var(--text-primary)]
            placeholder:text-[var(--text-muted)]
            shadow-[var(--shadow-sm)]
            outline-none transition-all duration-200

            ${
              error
                ? "border-[var(--error)] focus:ring-2 focus:ring-red-200 focus:border-[var(--error)]"
                : "border-[var(--border-light)] focus:ring-2 focus:ring-blue-100 focus:border-[var(--primary-blue)]"
            }
          `}
        />

        {/* TOGGLE BUTTON */}
        <button
          type="button"
          onClick={() => setVisible((p) => !p)}
          className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <LuEye size={18} /> : <LuEyeOff size={18} />}
        </button>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-sm text-[var(--error)] font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
}
