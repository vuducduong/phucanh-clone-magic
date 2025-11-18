import { products } from "@/data/products";
import { useParams } from "react-router-dom";

import { useState } from "react";
import { ShoppingCart, Heart, Star, Phone, MessageCircle, MapPin, Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const product = {
    name: "Laptop Acer Aspire High Performance Lite AL14-71M-52GQ",
    sku: "(i5 12500H/ 16GB/ 512GB SSD/ 14 inch FHD+/ Win11/ Silver/ Vỏ nhôm/ 2Y)",
    originalPrice: 16800000,
    salePrice: 14490000,
    discount: 14,
    rating: 4.8,
    views: 4837,
    inStock: true,
    warranty: "24 Tháng. Tại hãng (Pin 12 tháng). Bảo hành 3S1. Đổi mới 30 ngày",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      "https://images.unsplash.com/photo-1616763355603-9755a640a287?w=800",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
    ],
  };

  const variants = [
    { 
      name: "Acer Aspire High Performance Lite AL14-71M-52GQ", 
      specs: "i5 12500H/ 16GB/ 512GB SSD",
      price: 14490000,
      selected: true 
    },
    { 
      name: "Acer Aspire High Performance A515-58M-95HT", 
      specs: "i9 13900H/ 16GB/ 512GB SSD",
      price: 19990000 
    },
    { 
      name: "Acer Aspire High Performance Go 15 G3-51P-58XT", 
      specs: "i5 1335U/ 16GB/ 512GB SSD",
      price: 14390000 
    },
    { 
      name: "Acer Aspire High Performance A515-58M-79R7", 
      specs: "i7 NX KQ8SV.007 i7 13620H/ 16GB/ 512GB SSD",
      price: 15790000 
    },
  ];

  const specifications = [
    { label: "Bộ VXL", value: "Core i5 12500H 2.5GHz" },
    { label: "Bộ nhớ RAM", value: "16GB (8GB onboard + 1 khe rời) DDR5 4800" },
    { label: "Ổ cứng", value: "512GB SSD NVMe" },
    { label: "Màn hình", value: "14 inch FHD+ (1920 x 1200) IPS, LED Backlit" },
    { label: "Card đồ họa", value: "Intel Iris Xe Graphics" },
    { label: "Hệ điều hành", value: "Windows 11 Home SL" },
    { label: "Khối lượng", value: "1.49 kg" },
    { label: "Pin", value: "56Wh Li-ion, sạc nhanh 65W" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1 hover:underline">
                <MapPin className="h-3 w-3" />
                HỆ THỐNG SHOWROOM
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <ShoppingCart className="h-3 w-3" />
                MUA HÀNG ONLINE
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <Package className="h-3 w-3" />
                KHUYẾN MÃI
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <Phone className="h-3 w-3" />
                TRUNG TÂM DỊCH VỤ
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>HOTLINE 1900 2164</span>
              <Button variant="ghost" size="sm" className="h-7 text-xs text-primary-foreground hover:text-primary-foreground hover:bg-primary/80">
                ĐĂNG KÝ | ĐĂNG NHẬP
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container">
          <div className="flex h-20 items-center justify-between gap-4">
            <a href="/" className="flex items-center">
              <div className="text-2xl font-bold text-accent">
                PHÚC<span className="text-primary">ANH</span>
              </div>
            </a>
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Nhập từ khóa tìm kiếm..."
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                <div className="text-left text-xs">
                  <div className="font-semibold">HOTLINE</div>
                  <div className="text-accent">1900 2164</div>
                </div>
              </Button>
              <Button variant="outline" className="gap-2">
                <Package className="h-4 w-4" />
                BUILD PC
              </Button>
              <Button variant="default" className="gap-2 bg-accent hover:bg-accent/90">
                <ShoppingCart className="h-4 w-4" />
                GIỎ HÀNG <Badge variant="secondary" className="ml-1">0</Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <button className="font-semibold hover:underline">☰ DANH MỤC SẢN PHẨM</button>
              <a href="#" className="hover:underline">✓ 100% chính hãng</a>
              <a href="#" className="hover:underline">💰 Giá ưu đãi</a>
              <a href="#" className="hover:underline">🚚 Miễn phí vận chuyển</a>
              <a href="#" className="hover:underline">🛡️ Bảo hành nơi sử dụng</a>
              <a href="#" className="hover:underline">💳 Thanh toán linh hoạt</a>
            </div>
            <a href="#" className="font-semibold text-warning hover:underline">DEAL GIỜ VÀNG (16)</a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Trang chủ</a>
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="hover:text-primary">Laptop - Máy tính xách tay</a>
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="hover:text-primary">Laptop theo hãng</a>
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="hover:text-primary">Acer</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Aspire</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column - Images & Specs */}
          <div className="lg:col-span-5">
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted relative">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square overflow-hidden rounded-md border-2 transition-all ${
                        selectedImage === idx ? "border-primary" : "border-border"
                      }`}
                    >
                      <img src={img} alt={`${idx + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Middle Column - Product Info */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {/* Specifications */}
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold mb-4">Thông số kỹ thuật</h2>
                  <div className="grid gap-3">
                    {specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-3 gap-4 py-2 ${
                          idx !== specifications.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <span className="font-medium text-sm">{spec.label}</span>
                        <span className="col-span-2 text-sm text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Student Discount */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                <p className="text-sm">
                  <span className="text-primary font-semibold">Học sinh, sinh viên, giáo viên giảm 100.000 ₫</span>
                  <a href="#" className="text-primary underline ml-1">(Xem ngay)</a>
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold">Thanh toán ngay</span> – Ưu đãi lên tới{" "}
                  <span className="text-accent font-semibold">1 triệu</span>
                  <a href="#" className="text-primary underline ml-1">(Xem ngay)</a>
                </p>
              </div>

              {/* Warranty */}
              <div className="flex items-start gap-2 text-sm">
                <span className="font-semibold">Bảo hành:</span>
                <span>{product.warranty}</span>
              </div>
              <p className="text-sm text-accent">
                Giao hàng tận nơi miễn phí{" "}
                <a href="#" className="underline">(Xem chi tiết)</a>
              </p>

              {/* Variants */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Sản phẩm cùng loại:</p>
                <div className="space-y-2">
                  {variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariant(idx)}
                      className={`w-full rounded-lg border-2 p-3 text-left transition-all ${
                        selectedVariant === idx
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className={`text-xs ${selectedVariant === idx ? "text-primary" : "text-muted-foreground"}`}>
                            {selectedVariant === idx ? "⦿" : "○"} {variant.name}
                          </div>
                          <div className="text-xs text-muted-foreground">{variant.specs}</div>
                        </div>
                        <span className="text-sm font-bold text-accent whitespace-nowrap">
                          {variant.price.toLocaleString("vi-VN")} ₫
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-base font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  TƯ VẤN NGAY
                </Button>
              </div>

              {/* Gifts */}
              <Card className="bg-accent/5 border-accent/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-accent">ƯU ĐÃI VÀ QUÀ TẶNG KHUYẾN MÃI:</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">♦</span>
                      <span>Giảm tới <strong>500.000đ</strong> cho Học sinh, Sinh viên, Giáo viên{" "}
                        <a href="#" className="text-primary underline">(Xem ngay)</a>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact & Features */}
          <div className="lg:col-span-2">
            <Card className="sticky top-24">
              <CardContent className="p-4 space-y-4">
                <div className="text-center space-y-2">
                  <p className="font-semibold text-accent">Đang cần hàng tại:</p>
                  <p className="text-sm">(Bấm xem đường)</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Liên hệ 1900 2164
                  </Button>
                </div>
                <Separator />
                <div className="space-y-3 text-sm">
                  <p className="font-semibold text-center">Phúc Anh cam kết</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">100% sản phẩm chính hãng</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">100% giá cạnh tranh so với thị trường</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">Mua hàng trả góp lãi suất 0% với hơi thủ</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">Giao hàng nhanh 2h và miễn phí giao hàng từ 500.000đ</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">Ưu đãi và dành cho khách hàng doanh nghiệp</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">Đổi mới sản phẩm đến 30 ngày</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 flex-shrink-0 fill-warning text-warning" />
                      <span className="text-xs">Dịch vụ bảo hành tận tâm, chuyên nghiệp</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specifications Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full justify-start bg-muted">
              <TabsTrigger value="specs">Thông số kỹ thuật</TabsTrigger>
              <TabsTrigger value="description">Bài viết đánh giá</TabsTrigger>
              <TabsTrigger value="reviews">Đánh giá từ người mua</TabsTrigger>
              <TabsTrigger value="qa">Hỏi và đáp</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-3">
                    {specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-3 gap-4 py-3 ${
                          idx !== specifications.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <span className="font-medium">{spec.label}</span>
                        <span className="col-span-2 text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>    
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4">VỀ PHÚC ANH</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Giới thiệu công ty</a></li>
                <li><a href="#" className="hover:text-primary">Tin tức công nghệ</a></li>
                <li><a href="#" className="hover:text-primary">Tuyển dụng</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">CHÍNH SÁCH</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Chính sách bảo hành</a></li>
                <li><a href="#" className="hover:text-primary">Chính sách đổi trả</a></li>
                <li><a href="#" className="hover:text-primary">Chính sách thanh toán</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">THÔNG TIN</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Hệ thống cửa hàng</a></li>
                <li><a href="#" className="hover:text-primary">Hướng dẫn mua hàng</a></li>
                <li><a href="#" className="hover:text-primary">Tra cứu bảo hành</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">HỖ TRỢ KHÁCH HÀNG</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Hotline: 1900 2164</p>
                <p className="text-muted-foreground">Email: info@phucanh.vn</p>
                <p className="text-muted-foreground">8h00 - 21h00 (Tất cả các ngày)</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Công ty TNHH Phúc Anh. Hệ thống bán lẻ máy tính và thiết bị công nghệ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
