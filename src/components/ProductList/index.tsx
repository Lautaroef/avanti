import { FC, useCallback, useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../services/api";
import { Product } from "../../types";
import { ProductItem } from "../ProductItem";
import { SearchBar } from "../SearchBar";

export const ProductList: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cursor, setCursor] = useState(null);
  const { data: products, isLoading } = useQuery<Product[]>(
    ["products", cursor],
    () => fetchProducts(cursor),
    { keepPreviousData: true }
  );

  const handleSearch = useCallback((searchValue: string) => {
    setSearchTerm(searchValue);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(products);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <button
      // onClick={() => setPage((old) => old - 1)} disabled={page === 1}
      >
        Previous Page
      </button>
      <button
        // onClick={() => setCursor(products && products.endCursor)}
        disabled={filteredProducts?.length === 0}
      >
        Next Page
      </button>
    </div>
  );
};
