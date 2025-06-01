"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import ProductCardSkeleton from "./product-card-skeleton";

// Mock recommended products with multiple images
const recommendedProducts = [
  {
    id: 9,
    name: "Premium Leather Wallet",
    price: 79.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Interior",
      "/placeholder.svg?height=300&width=300&text=Cards",
    ],
    category: "Accessories",
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 149.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Controls",
    ],
    category: "Electronics",
  },
  {
    id: 11,
    name: "Casual Hoodie",
    price: 54.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Back+View",
      "/placeholder.svg?height=300&width=300&text=Hood+Detail",
    ],
    category: "Clothing",
  },
  {
    id: 12,
    name: "Fitness Tracker",
    price: 89.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Display",
      "/placeholder.svg?height=300&width=300&text=Band+Options",
    ],
    category: "Electronics",
  },
  {
    id: 13,
    name: "Travel Mug",
    price: 29.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Lid+View",
      "/placeholder.svg?height=300&width=300&text=Size+Guide",
    ],
    category: "Accessories",
  },
  {
    id: 14,
    name: "Wireless Charger",
    price: 39.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=LED+Indicator",
      "/placeholder.svg?height=300&width=300&text=Cable+View",
    ],
    category: "Electronics",
  },
];

// Simulate API call with 3-second delay
const fetchRecommendedProducts = (): Promise<typeof recommendedProducts> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recommendedProducts);
    }, 3000);
  });
};

export default function RecommendedProducts() {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<typeof recommendedProducts>(
    []
  );

  useEffect(() => {
    fetchRecommendedProducts().then((data) => {
      setProductData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
