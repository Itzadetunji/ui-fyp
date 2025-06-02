"use client";

import useSearchProducts from "@/http/slices/useSearchProducts";
import { useEffect } from "react";
import ProductCard from "./product-card";
import ProductCardSkeleton from "./product-card-skeleton";

const HomeProductGrid: React.FC<{ searchTerm: string }> = (props) => {
  const searchProductsMutation = useSearchProducts();

  useEffect(() => {
    searchProductsMutation.mutate({
      items_no: 20,
      query: props.searchTerm,
      models: {
        content: 0.2,
        sentiment: 0.8,
      },
    });
  }, [props.searchTerm]);

  if (searchProductsMutation.isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {searchProductsMutation.data?.data.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
        />
      ))}
    </div>
  );
};

export default HomeProductGrid;
