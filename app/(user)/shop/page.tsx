import ShopHero from "@/components/shop/ShopHero";
import ShopSidebar from "@/components/shop/ShopSidebar";
import ShopHeader from "@/components/shop/ShopHeader";
import ProductGrid from "@/components/shop/ProductGrid";
import { productsList } from "@/constants/constants";
import { Product } from "@/types";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-secondary)]">
      <ShopHero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <ShopSidebar />

          <div>
            <ShopHeader totalProducts={productsList.length} />

            <ProductGrid productList={productsList as Product[]} />
          </div>
        </div>
      </section>
    </main>
  );
}
