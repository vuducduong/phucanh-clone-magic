import { ChevronRight, Laptop, Smartphone, Monitor, Server, Gamepad2, HardDrive, Tv, Camera, Printer, Headphones, Wifi, Package } from "lucide-react";

const categories = [
  { icon: Laptop, name: "Laptop - Máy tính xách tay", badge: "2%" },
  { icon: Smartphone, name: "Điện thoại, Tablet & Phụ kiện" },
  { icon: Package, name: "Sản phẩm Apple" },
  { icon: Gamepad2, name: "PC Gaming, Đồ họa, Học tập" },
  { icon: HardDrive, name: "Linh kiện máy tính" },
  { icon: Monitor, name: "Màn hình máy tính, giá treo" },
  { icon: Gamepad2, name: "Gaming Gear, Bàn phím, Chuột" },
  { icon: Laptop, name: "Máy tính đồng bộ" },
  { icon: Server, name: "Server & Workstation" },
  { icon: Laptop, name: "Phụ kiện Laptop, PC & nghề nhĩa" },
  { icon: Printer, name: "Thiết bị văn phòng, Phần mềm" },
  { icon: Tv, name: "Thiết bị trình chiếu, Phụ kiện" },
  { icon: Camera, name: "Thiết bị lưu trữ & Ký thuật số" },
  { icon: Wifi, name: "Thiết bị mạng" },
  { icon: Camera, name: "Camera & SmartHome" },
  { icon: Headphones, name: "Thiết bị siêu thị, mã vạch" },
  { icon: Package, name: "Hàng trưng bày giảm giá" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-full">
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4 text-foreground">DANH MUC</h3>
        <nav className="space-y-1">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-sidebar-accent-foreground" />
                  <span className="text-sm text-foreground">{category.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {category.badge && (
                    <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded">
                      {category.badge}
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </a>
            );
          })}
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
