export default function CTASection() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <div
                    className="rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden"
                    style={{ background: "var(--gradient-dark)" }}
                >
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{ background: "var(--gradient-primary)" }}
                    />

                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Ready to Upgrade Your Shopping?
                        </h2>

                        <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-8">
                            Join thousands of happy customers and discover premium products
                            tailored for your needs.
                        </p>

                        <button
                            className="mt-8 px-8 py-4 rounded-2xl text-white font-semibold shadow-[var(--shadow-lg)] hover:scale-105 transition-all duration-300"
                            style={{ background: "var(--gradient-primary)" }}
                        >
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}