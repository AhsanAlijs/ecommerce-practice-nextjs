import { categories } from "@/constants/constants";
import { LuSlidersHorizontal } from "react-icons/lu";

export default function ShopSidebar() {
  return (
    <aside className="h-fit rounded-3xl bg-[var(--bg-card)] p-6 shadow-[var(--shadow-md)]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[var(--text-primary)]">
          Filters
        </h2>

        <LuSlidersHorizontal className="h-5 w-5 text-[var(--text-secondary)]" />
      </div>

      <div className="border-b border-[var(--border-light)] pb-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((item: string) => (
            <label
              key={item}
              className="flex cursor-pointer items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[var(--primary-red)]"
                />

                <span className="text-sm text-[var(--text-secondary)]">
                  {item}
                </span>
              </div>

              <span className="text-xs text-[var(--text-muted)]">12</span>
            </label>
          ))}
        </div>
      </div>

      <div className="py-6 border-b border-[var(--border-light)]">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
          Price Range
        </h3>

        <input
          type="range"
          min="0"
          max="500"
          className="w-full accent-[var(--primary-red)]"
        />

        <div className="mt-3 flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-[var(--btn-dark)] px-5 py-3 font-medium text-white transition-all hover:bg-[var(--btn-dark-hover)]">
        Apply Filters
      </button>
    </aside>
  );
}
