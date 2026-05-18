import { Product } from "@/types";
import ProductCard from "./ProductCard";

type Props = {
  productList: Product[];
};

export default function ProductGrid({ productList }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {productList.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
