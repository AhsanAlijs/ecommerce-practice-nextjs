import { LuShieldCheck, LuSparkles, LuTrendingUp } from "react-icons/lu";

export default function LoginPageCard() {
  const stats = [
    {
      icon: <LuShieldCheck className="w-5 h-5" />,
      title: "Secure Login",
      desc: "Bank-grade encryption keeps your account safe.",
    },
    {
      icon: <LuSparkles className="w-5 h-5" />,
      title: "Personalized Picks",
      desc: "Recommendations tailored to your taste.",
    },
    {
      icon: <LuTrendingUp className="w-5 h-5" />,
      title: "Track Orders",
      desc: "Real-time updates on every order.",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col justify-between bg-[var(--primary-black)] p-12 text-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-sale)" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-white) 1px, transparent 1px), linear-gradient(90deg, var(--text-white) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[var(--shadow-md)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          <span className="font-bold text-lg">E</span>
        </div>
        <span className="font-semibold text-lg tracking-wide">Ecommerce</span>
      </div>

      {/* Heading + Features */}
      <div className="relative z-10">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight mb-5">
          Welcome{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            back!
          </span>
        </h1>

        <p className="text-base text-gray-300 leading-7 max-w-md mb-10">
          Sign in to continue your shopping journey. Your cart, wishlist, and
          favorite finds are waiting for you.
        </p>

        {/* Feature list */}
        <ul className="space-y-5">
          {stats.map((s) => (
            <li key={s.title} className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-6">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom quote */}
      <div className="relative z-10 pt-8 border-t border-white/10">
        <p className="text-sm text-gray-300 italic leading-6">
          &ldquo;Best shopping experience I&apos;ve had online. Fast, smooth,
          and reliable.&rdquo;
        </p>
        <div className="flex items-center gap-3 mt-3">
          <div
            className="w-8 h-8 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div>
            <p className="text-sm font-semibold text-white">Sarah Khan</p>
            <p className="text-xs text-gray-400">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
