import { Product, ProductBadge } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { LuHeart, LuShoppingCart, LuStar } from "react-icons/lu";

type Props = {
  product: Product;
};

const badgeStyles: Record<ProductBadge, string> = {
  Sale: "bg-[var(--sale-badge)] text-white",
  New: "bg-[var(--new-badge)] text-white",
  Hot: "bg-[var(--hot-badge)] text-white",
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-[var(--bg-card)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]">
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {product.badge && (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--text-primary)] shadow-md transition-all hover:bg-[var(--primary-red)] hover:text-white">
            <LuHeart className="h-4 w-4" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--text-primary)] shadow-md transition-all hover:bg-[var(--primary-blue)] hover:text-white">
            <LuShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--primary-blue)]">
            {product.category}
          </span>

          <div className="flex items-center gap-1">
            <LuStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm text-[var(--text-secondary)]">
              {product.rating}
            </span>
          </div>
        </div>

        <Link href={`/shop/${product.id}`}>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--primary-red)]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--text-primary)]">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-[var(--text-muted)] line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <button className="rounded-xl bg-[var(--btn-primary)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--btn-primary-hover)]">
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
