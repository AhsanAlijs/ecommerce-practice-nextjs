import { LuChevronDown } from "react-icons/lu";

type Props = {
  totalProducts: number;
};

export default function ShopHeader({ totalProducts }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-[var(--bg-card)] p-5 shadow-[var(--shadow-sm)] md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Shop Products
        </h2>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Showing {totalProducts} premium products
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-[var(--border-light)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--primary-blue)]">
        Sort By
        <LuChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
