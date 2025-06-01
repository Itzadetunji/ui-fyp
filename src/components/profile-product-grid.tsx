"use client";

import useGetRecommendedProducts from "@/http/slices/useGetRecommendedProducts";
import { useEffect } from "react";
import ProductCard from "./product-card";
import ProductCardSkeleton from "./product-card-skeleton";

const ProfileProductGrid: React.FC<{
  selectedUser: string;
}> = (props) => {
  const recommendedProductsMutation = useGetRecommendedProducts();

  useEffect(() => {
    recommendedProductsMutation.mutate({
      items_no: 20,
      user_id: props.selectedUser,
      models: {
        content: 0.2,
        als: 0.3,
        sentiment: 0.5,
      },
    });
  }, [props.selectedUser]);

  if (recommendedProductsMutation.isPending) {
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
      {recommendedProductsMutation.data?.data.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProfileProductGrid;
