import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimesCircle,
} from "react-icons/fa";
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

export const toastStyles = {
  success: {
    icon: <FaCheckCircle color="#16a34a" />,
    border: "#16a34a",
    background: "#eafaf1",
    color: "#16a34a",
  },

  error: {
    icon: <FaTimesCircle color="#ef4444" />,
    border: "#ef4444",
    background: "#fee2e2",
    color: "#ef4444",
  },

  warning: {
    icon: <FaExclamationTriangle color="#f59e0b" />,
    border: "#f59e0b",
    background: "#fef3c7",
    color: "#f59e0b",
  },

  info: {
    icon: <FaInfoCircle color="#0ea5e9" />,
    border: "#0ea5e9",
    background: "#dbeafe",
    color: "#0ea5e9",
  },
};

export const products = [
  {
    id: 1,
    title: "Premium Headphones",
    category: "Audio",
    price: "$129",
    oldPrice: "$179",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    badge: "Hot",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Wearables",
    price: "$249",
    oldPrice: "$299",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    title: "Gaming Keyboard",
    category: "Gaming",
    price: "$99",
    oldPrice: "$139",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    badge: "Sale",
  },
  {
    id: 4,
    title: "Modern Sneakers",
    category: "Fashion",
    price: "$159",
    oldPrice: "$199",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: 5,
    title: "Modern Sneakers",
    category: "Fashion",
    price: "$159",
    oldPrice: "$199",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: 6,
    title: "Modern Sneakers",
    category: "Fashion",
    price: "$159",
    oldPrice: "$199",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "Trending",
  },
];

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "Deals", href: "/deals" },
  { name: "Contact", href: "/contact" },
];

export const productsList = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    category: "Fashion",
    price: 120,
    oldPrice: 180,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Minimal Smart Watch",
    category: "Electronics",
    price: 90,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Modern Sneakers",
    category: "Shoes",
    price: 70,
    oldPrice: 100,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "Hot",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Audio",
    price: 150,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
];

export const categories = [
  "Fashion",
  "Electronics",
  "Gaming",
  "Shoes",
  "Accessories",
];
