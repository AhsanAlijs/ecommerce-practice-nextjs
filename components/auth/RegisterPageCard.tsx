import { features } from "@/constants/constants";
import { FeatureCardType } from "@/types";

const RegisterPageCard = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-[var(--primary-black)] p-12 text-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
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
          Join the{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Ecommerce
          </span>{" "}
          experience.
        </h1>

        <p className="text-base text-gray-300 leading-7 max-w-md mb-10">
          Create your account and unlock premium products, exclusive deals, and
          a shopping experience built around you.
        </p>

        {/* Feature list */}
        <ul className="space-y-5">
          {features.map((f: FeatureCardType) => (
            <li key={f.title} className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-6">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom social proof */}
      <div className="relative z-10 flex items-center gap-3 pt-8 border-t border-white/10">
        <div className="flex -space-x-2">
          {[
            "var(--primary-red)",
            "var(--primary-blue)",
            "var(--hot-badge)",
          ].map((c, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-[var(--primary-black)]"
              style={{ background: c }}
            />
          ))}
        </div>
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-white">10,000+</span> happy
          customers shopping daily
        </p>
      </div>
    </div>
  );
};

export default RegisterPageCard;
