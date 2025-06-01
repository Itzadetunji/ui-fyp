import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import ImageCarousel from "./image-carousel";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden w-full max-w-sm mx-auto pt-0 pb-6">
      <ImageCarousel
        images={product.images}
        alt={product.name}
      />
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium text-lg mb-2">{product.name}</h3>
        <div className="font-bold">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
