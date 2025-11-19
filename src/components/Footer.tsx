import { MapPin, Phone, Mail, Clock } from "lucide-react";

const stores = [
  {
    id: 3,
    name: "SHOWROOM Delightings",
    address: "134 Thái Hà, phường Đống Đa, Hà Nội",
    phone: "(024) 3968 9966 (ext 3)",
    email: "phucanh.thaiha@phucanh.com.vn",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {stores.map((store) => (
            <div key={store.id} className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-bold text-primary mb-4">{store.name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{store.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground">{store.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground">{store.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground">Giờ mở cửa từ 08h00 đến 21h00</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Về DEL</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Giới thiệu</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hệ thống cửa hàng</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Chính sách</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính sách bảo hành</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính sách đổi trả</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính sách vận chuyển</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Hỗ trợ khách hàng</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hướng dẫn mua hàng</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hướng dẫn thanh toán</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Kết nối với chúng tôi</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="font-bold">Z</span>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="font-bold">in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Delightings Vietnam CO.,LTD</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
