"use client";

import { products } from "@/constants/constants";
import { ProductType } from "@/types";
import Image from "next/image";
import {
    FiHeart,
    FiShoppingCart,
    FiEye,
    FiStar,
} from "react-icons/fi";

export default function ProductsSection() {


    return (
        <section className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Background blur */}
            <div
                className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
                style={{ background: "var(--primary-blue)" }}
            />

            <div
                className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10"
                style={{ background: "var(--primary-red)" }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            style={{
                                background: "var(--accent-light-blue)",
                                color: "var(--primary-blue)",
                            }}
                        >
                            Featured Collection
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
                            Trending Products
                        </h2>

                        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl leading-8">
                            Explore our premium hand-picked collection designed for modern
                            lifestyle and performance.
                        </p>
                    </div>

                    <button
                        className="group w-fit px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-[var(--shadow-lg)]"
                        style={{ background: "var(--gradient-primary)" }}
                    >
                        View All Products
                    </button>
                </div>

                {/* PRODUCTS GRID */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {products.map((product: ProductType) => (
                        <div
                            key={product.id}
                            className="
                group relative overflow-hidden
                rounded-[32px]
                bg-white/80 backdrop-blur-xl
                border border-white/40
                shadow-[var(--shadow-md)]
                hover:shadow-[var(--shadow-lg)]
                transition-all duration-500
                hover:-translate-y-2
              "
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                {/* Badge */}
                                <div
                                    className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                                    style={{ background: "var(--gradient-primary)" }}
                                >
                                    {product.badge}
                                </div>

                                {/* Action buttons */}
                                <div
                                    className="
                    absolute top-4 right-4 z-20
                    flex flex-col gap-2
                    opacity-0 translate-x-4
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-500
                  "
                                >
                                    {[FiHeart, FiEye].map((Icon, idx) => (
                                        <button
                                            key={idx}
                                            className="
                        w-10 h-10 rounded-xl
                        bg-white/90 backdrop-blur-xl
                        flex items-center justify-center
                        text-[var(--text-primary)]
                        hover:text-[var(--primary-red)]
                        shadow-md
                        transition-all duration-300
                      "
                                        >
                                            <Icon className="w-4 h-4" />
                                        </button>
                                    ))}
                                </div>

                                {/* Product image */}
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                                    />
                                </div>

                                {/* Gradient overlay */}
                                <div
                                    className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                  "
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
                                    }}
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                {/* Category */}
                                <span className="text-sm font-medium text-[var(--primary-blue)]">
                                    {product.category}
                                </span>

                                {/* Title */}
                                <h3
                                    className="
                    mt-2 text-xl font-bold
                    text-[var(--text-primary)]
                    group-hover:text-[var(--primary-blue)]
                    transition-colors duration-300
                  "
                                >
                                    {product.title}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <FiStar className="fill-yellow-500" />
                                        <span className="text-sm font-semibold text-[var(--text-primary)]">
                                            {product.rating}
                                        </span>
                                    </div>

                                    <span className="text-sm text-[var(--text-muted)]">
                                        (120 Reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mt-5 flex items-center gap-3">
                                    <span className="text-3xl font-bold text-[var(--primary-red)]">
                                        {product.price}
                                    </span>

                                    <span className="text-lg line-through text-[var(--text-muted)]">
                                        {product.oldPrice}
                                    </span>
                                </div>

                                {/* BUTTON */}
                                <button
                                    className="
                    mt-6 w-full
                    rounded-2xl py-3.5 px-5
                    text-white font-semibold
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    shadow-[var(--shadow-md)]
                  "
                                    style={{ background: "var(--gradient-primary)" }}
                                >
                                    <FiShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                            </div>

                            {/* Glow effect */}
                            <div
                                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(220,38,38,0.06))",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}