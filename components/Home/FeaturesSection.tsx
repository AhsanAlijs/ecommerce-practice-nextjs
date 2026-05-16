import {
    FiTruck,
    FiShield,
    FiShoppingBag,
} from "react-icons/fi";

export default function FeaturesSection() {
    const features = [
        {
            icon: <FiTruck />,
            title: "Fast Delivery",
            desc: "Quick and secure shipping worldwide.",
        },
        {
            icon: <FiShield />,
            title: "Secure Payments",
            desc: "100% protected and encrypted checkout.",
        },
        {
            icon: <FiShoppingBag />,
            title: "Premium Products",
            desc: "High quality curated collections.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-[var(--border-light)] p-8 hover:-translate-y-1 transition-all duration-300 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)]"
                        >
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-5"
                                style={{ background: "var(--gradient-primary)" }}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold">{item.title}</h3>

                            <p className="mt-3 text-[var(--text-secondary)] leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}