export default function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20">
      <div className="absolute inset-0 opacity-20 bg-[image:var(--gradient-primary)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[var(--primary-blue)]">
            Premium Collection
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[var(--text-white)] md:text-6xl">
            Discover Modern
            <span className="block text-[var(--primary-red)]">
              Shopping Experience
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
            Explore premium products with modern design and best quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-[var(--btn-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--btn-primary-hover)]">
              Shop Now
            </button>

            <button className="rounded-xl border border-[var(--border-dark)] bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition-all hover:bg-white/20">
              Explore Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
