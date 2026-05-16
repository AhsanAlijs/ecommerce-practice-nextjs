import { TextInputProps } from "@/app/types";

export default function TextInput({
  label,
  name,
  type = "text",
  placeholder,
  required,
  register,
  error,
}: TextInputProps) {
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

      {/* INPUT */}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`
          w-full rounded-xl border bg-[var(--bg-card)]
          px-4 py-3 text-sm
          text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
          shadow-[var(--shadow-sm)]
          transition-all duration-200
          outline-none

          ${
            error
              ? `
                border-[var(--error)]
                focus:border-[var(--error)]
                focus:ring-2
                focus:ring-red-200
              `
              : `
                border-[var(--border-light)]
                focus:border-[var(--primary-blue)]
                focus:ring-2
                focus:ring-blue-100
              `
          }
        `}
      />

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-sm text-[var(--error)] font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
}
