"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import ProductCardSkeleton from "./product-card-skeleton";

// Mock product data with multiple images
const products = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 89.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Back+View",
      "/placeholder.svg?height=300&width=300&text=Interior",
    ],
    category: "Accessories",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Case",
    ],
    category: "Electronics",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Back",
      "/placeholder.svg?height=300&width=300&text=Detail",
    ],
    category: "Clothing",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 94.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Sole",
    ],
    category: "Footwear",
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 199.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Display",
      "/placeholder.svg?height=300&width=300&text=Band",
    ],
    category: "Electronics",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 59.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Case",
    ],
    category: "Accessories",
  },
  {
    id: 7,
    name: "Denim Jeans",
    price: 49.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Back+View",
      "/placeholder.svg?height=300&width=300&text=Detail",
    ],
    category: "Clothing",
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 19.99,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Cap+View",
      "/placeholder.svg?height=300&width=300&text=Size+Comparison",
    ],
    category: "Accessories",
  },
];

// Simulate API call with 3-second delay
const fetchProducts = (): Promise<typeof products> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export default function ProductGrid() {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<typeof products>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProductData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
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
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
