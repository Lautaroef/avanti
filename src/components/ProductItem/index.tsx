import type { Product } from "../../types";
import { FC } from "react";

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.variants.edges[0].node.amount}</p>
      {/* render other fields here */}
    </div>
  );
};
