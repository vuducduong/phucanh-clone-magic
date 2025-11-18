import { products } from "@/data/products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Package,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {
  const { code } = useParams<{ code: string }>();

  // Tìm product chứa variant có code
  const product = products.find((p) => p.variants.some((v) => v.code === code));
  if (!product) return <div>Sản phẩm không tồn tại</div>;

  // Xác định variant đang chọn
  const variantIndex = product.variants.findIndex((v) => v.code === code);
  const [selectedVariant, setSelectedVariant] = useState(
    variantIndex !== -1 ? variantIndex : 0
  );
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Trang chủ</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.typeName}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column - Images */}
          <div className="lg:col-span-5">
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted relative">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.typeName}
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
          <div className="lg:col-span-5 space-y-4">
            {/* Specifications */}
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4">Thông số kỹ thuật</h2>
                <div className="grid gap-3">
                  {product.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-3 gap-4 py-2 ${idx !== product.specs.length - 1 ? "border-b" : ""}`}
                    >
                      <span className="font-medium text-sm">{spec.label}</span>
                      <span className="col-span-2 text-sm text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Variants */}
            <div className="space-y-2">
              <p className="font-semibold text-sm">Sản phẩm cùng loại:</p>
              <div className="space-y-2">
                {product.variants.map((variant, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVariant(idx)}
                    className={`w-full rounded-lg border-2 p-3 text-left transition-all ${
                      selectedVariant === idx ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className={`text-xs ${selectedVariant === idx ? "text-primary" : "text-muted-foreground"}`}>
                          {selectedVariant === idx ? "⦿" : "○"} {variant.code}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {variant.power} / {variant.luminousFlux} / {variant.luminousEfficiency || variant.efficacy}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Placeholder / Features */}
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
