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
