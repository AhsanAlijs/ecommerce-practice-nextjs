import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-footer)] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div
                                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                style={{ background: "var(--gradient-primary)" }}
                            >
                                <span className="font-bold">E</span>
                            </div>

                            <h3 className="text-xl font-bold">Ecommerce</h3>
                        </div>

                        <p className="text-gray-400 leading-7">
                            Modern ecommerce experience with premium products and secure
                            shopping.
                        </p>
                    </div>

                    {["Company", "Support", "Legal"].map((section) => (
                        <div key={section}>
                            <h4 className="font-bold text-lg mb-5">{section}</h4>

                            <div className="space-y-3">
                                {["About", "Careers", "Privacy", "Contact"].map((item) => (
                                    <Link
                                        key={item}
                                        href="/"
                                        className="block text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Ecommerce. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-gray-400 text-sm">
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms</Link>
                        <Link href="/">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}