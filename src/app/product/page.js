import { ProductPageBase } from "@/components/sections/product/ProductPageBase";
import { productPageConfig } from "@/config/productPage";

export const metadata = {
  title: "Vexor v1.0 | Indexora",
  description:
    "Vexor v1.0 brings retrieval intelligence, semantic search refinement, and scalable vector optimization into a product-ready experience.",
};

export default function ProductPage() {
  return <ProductPageBase {...productPageConfig} />;
}
