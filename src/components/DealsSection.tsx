import { Clock } from "lucide-react";
import { ProductCard } from "./ProductCard";

const deals = [
  {
    id: 1,
    name: "Laptop Dell Inspiron 15 3520",
    price: "12,990,000",
    originalPrice: "15,990,000",
    discount: 19,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Laptop HP Pavilion 15",
    price: "14,990,000",
    originalPrice: "18,990,000",
    discount: 21,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Laptop Asus Vivobook 15",
    price: "13,490,000",
    originalPrice: "16,990,000",
    discount: 20,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Laptop Lenovo IdeaPad 3",
    price: "11,990,000",
    originalPrice: "14,990,000",
    discount: 20,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Laptop Acer Aspire 5",
    price: "12,490,000",
    originalPrice: "15,490,000",
    discount: 19,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
  },
];

export const DealsSection = () => {
  return (
    <section className="mb-8">
      <div className="bg-primary text-primary-foreground rounded-t-lg p-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          🔥 DEAL HOT HÔM NAY
        </h2>
        <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-lg">
          <Clock className="h-5 w-5" />
          <span className="font-mono font-bold text-lg">08 : 24 : 39</span>
        </div>
      </div>
      
      <div className="bg-card border border-t-0 border-border rounded-b-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
