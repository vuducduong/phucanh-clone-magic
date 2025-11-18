import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-full">
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4 text-foreground">DANH MỤC</h3>
        <nav className="space-y-1">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              {/* ITEM */}
              <div
                className="flex items-center justify-between px-3 py-2.5 rounded-md 
                hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors cursor-pointer"
              >
                <span className="text-sm text-foreground">{product.typeName}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>

              {/* SUBMENU */}
              {product.variants && (
                <div className="absolute left-full top-0 -ml-2 pl-2 w-52 hidden group-hover:block z-50">
                  <div className="bg-card border border-border rounded-md shadow-lg">
                    <ul className="py-2">
                      {product.variants.map((variant, i) => (
                        <li key={i}>
                          <Link
                            to={`/product/${variant.code}`} // dùng to thay vì href cho react-router
                            className="block px-4 py-2.5 hover:bg-accent hover:text-accent-foreground 
                            text-sm text-foreground transition-colors"
                          >
                            {variant.code}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Feature Badges */}
      <div className="border-t border-border p-4 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">✓</span>
          </div>
          <span className="text-foreground">100% chính hãng</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-accent font-bold">⚡</span>
          </div>
          <span className="text-foreground">Miễn phí vận chuyển</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
            <span className="text-secondary font-bold">🛡</span>
          </div>
          <span className="text-foreground">Bảo hành nơi sử dụng</span>
        </div>
      </div>
    </aside>
  );
};
