import * as yup from "yup";

export const AuthValidationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must not exceed 50 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must not exceed 30 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must include uppercase, lowercase and number",
    ),
});
