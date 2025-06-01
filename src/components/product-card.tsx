import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import ImageCarousel from "./image-carousel";
import { Product } from "@/http/slices/useSearchProducts";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden w-full max-w-sm mx-auto pt-0 pb-6">
      <ImageCarousel
        images={product.images.large}
        alt={product.title}
      />
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">
          {product.main_category} - {product.store}
        </div>
        <h3 className="font-medium text-lg mb-2">{product.title}</h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {Array.from({
                length: Math.floor(product.average_rating) ?? 0,
              }).map((_, key) => (
                <Star
                  color="#FFB33E"
                  fill="#FFB33E"
                  key={key}
                />
              ))}
              {Array.from({
                length: 5 - (Math.floor(product.average_rating) ?? 0),
              }).map((_, key) => (
                <Star
                  color="#6D748D"
                  key={key}
                />
              ))}
            </div>
            <p className="text-lg font-semibold">- {product.average_rating}</p>
          </div>

          {product.price && (
            <p className="font-bold">${product.price?.toFixed(2)}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex-1 flex">
        <Button className="w-full self-end">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
