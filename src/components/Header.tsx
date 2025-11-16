import { Search, Phone, ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Hệ thống showroom</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Khuyến mãi
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Trung tâm dịch vụ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-6">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">DEL</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">DEL</div>
                  <div className="text-xs text-muted-foreground">Hệ thống siêu thị</div>
                </div>
              </div>
            </a>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Nhập từ khóa tìm kiếm..."
                  className="w-full pl-4 pr-12 h-11 rounded-lg border-2 focus:border-primary"
                />
                <Button 
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover h-9"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs">HOTLINE</div>
                  <div className="font-semibold">1900 2164</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <a href="#" className="font-medium hover:opacity-80 transition-opacity">Laptop - Máy tính xách tay</a>
            <a href="#" className="font-medium hover:opacity-80 transition-opacity">Điện thoại, Tablet & Phụ kiện</a>
            <a href="#" className="font-medium hover:opacity-80 transition-opacity">PC Gaming, Đồ họa, Học tập</a>
            <a href="#" className="font-medium hover:opacity-80 transition-opacity">Linh kiện máy tính</a>
            <a href="#" className="font-medium hover:opacity-80 transition-opacity">Màn hình máy tính</a>
            <a href="#" className="font-medium hover:opacity-80 transition-opacity">Thiết bị văn phòng</a>
          </div>
        </div>
      </nav>
    </>
  );
};
