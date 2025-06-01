import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden w-full max-w-sm mx-auto pt-0 pb-6">
      <div className="aspect-square relative overflow-hidden rounded-t-lg bg-gray-200 animate-pulse">
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-20"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-32"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
      </CardFooter>
    </Card>
  );
}
