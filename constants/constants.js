import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { LuShieldCheck, LuSparkles, LuTruck } from "react-icons/lu";

export const signUpFieldsConfig = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Your Full Name",
    name: "fullName",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Your Email",
    name: "email",
  },
  {
    label: "Phone",
    type: "tel",
    placeholder: "Your Phone Number",
    name: "phone",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter Your Password",
    name: "password",
  },
];

export const signInFieldsConfig = [
  {
    label: "Email",
    type: "email",
    placeholder: "Your Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter Your Password",
    name: "password",
  },
];

export const forgotPasswordFieldsConfig = [
  {
    label: "Email",
    type: "email",
    placeholder: "Enter Register Email",
    name: "email",
  },
];

export const features = [
  {
    icon: <LuSparkles className="w-5 h-5" />,
    title: "Exclusive Deals",
    desc: "Members-only discounts & early access to sales.",
  },
  {
    icon: <LuTruck className="w-5 h-5" />,
    title: "Free Shipping",
    desc: "Complimentary delivery on orders over $50.",
  },
  {
    icon: <LuShieldCheck className="w-5 h-5" />,
    title: "Secure Checkout",
    desc: "Your data is encrypted and protected end-to-end.",
  },
];

export const alertStyles = {
  success: {
    bg: "#eafaf1",
    border: "#16a34a",
    text: "#16a34a",
    icon: <FaCheckCircle />,
  },
  error: {
    bg: "#fee2e2",
    border: "#ef4444",
    text: "#ef4444",
    icon: <FaTimesCircle />,
  },
  warning: {
    bg: "#fef3c7",
    border: "#f59e0b",
    text: "#f59e0b",
    icon: <FaExclamationTriangle />,
  },
  info: {
    bg: "#dbeafe",
    border: "#0ea5e9",
    text: "#0ea5e9",
    icon: <FaInfoCircle />,
  },
};