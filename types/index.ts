import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export type SignInFormValues = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

export type FeatureCardType = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export type PasswordInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ForgotPasswordValues = {
  email: string;
};

export type OtpVerifyValues = {
  otp: string;
};

export type ResetPasswordValues = {
  password: string;
  confirmPassword: string;
};

export type SignupPayload = {
  fullName: string;
  email: string;
  phone?: string;
  password: string;
};

type ToastType = "success" | "error";
export interface ShowToastProps {
  type?: ToastType;
  message: string;
}