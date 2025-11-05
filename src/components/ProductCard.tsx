import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    discount: number;
    image: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
          -{product.discount}%
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        <div className="mb-3">
          <div className="text-primary font-bold text-lg">
            {product.price}₫
          </div>
          <div className="text-muted-foreground text-xs line-through">
            {product.originalPrice}₫
          </div>
        </div>

        <Button 
          size="sm" 
          className="w-full bg-primary hover:bg-primary-hover"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
};
