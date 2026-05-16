import { FiArrowRight, FiStar } from "react-icons/fi";

export default function HeroSection() {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />

            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-red-500" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-blue-500" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* LEFT */}
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
                            style={{
                                background: "var(--accent-light-red)",
                                color: "var(--primary-red)",
                            }}
                        >
                            <FiStar />
                            Best Ecommerce Experience
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                            Elevate Your
                            <span
                                className="block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "var(--gradient-primary)",
                                }}
                            >
                                Shopping
                            </span>
                            Experience
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)] max-w-xl">
                            Discover premium products with modern design, lightning-fast
                            delivery, and unbeatable prices crafted for your lifestyle.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                className="group px-7 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 shadow-[var(--shadow-lg)] hover:scale-105 transition-all duration-300"
                                style={{ background: "var(--gradient-primary)" }}
                            >
                                Start Shopping

                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-7 py-4 rounded-2xl border border-[var(--border-default)] bg-white hover:bg-[var(--bg-secondary)] font-semibold transition-all duration-300">
                                Explore Categories
                            </button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div
                            className="absolute inset-0 rounded-[40px] blur-3xl opacity-30"
                            style={{ background: "var(--gradient-primary)" }}
                        />

                        <div className="relative bg-white rounded-[40px] p-5 shadow-[var(--shadow-lg)] border border-[var(--border-light)]">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
                                alt="Hero"
                                className="w-full h-[500px] object-cover rounded-[30px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}