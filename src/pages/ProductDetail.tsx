import { products } from "@/data/products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Heart, Star, ChevronRight } from "lucide-react";
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
  const variant = product.variants.find((v) => v.code === code);

  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">
              Trang chủ
            </a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.typeName}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{code}</span>
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
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square overflow-hidden rounded-md border-2 transition-all ${
                        selectedImage === idx
                          ? "border-primary"
                          : "border-border"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Variant Info */}
          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">{product.typeName}</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <span className="text-sm text-muted-foreground">Mã sản phẩm</span>
                      <p className="text-lg font-semibold mt-1">{variant?.code}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Công suất</span>
                      <p className="text-lg font-semibold mt-1">{variant?.power}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <span className="text-sm text-muted-foreground">Quang thông</span>
                      <p className="text-lg font-semibold mt-1">{variant?.luminousFlux}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Hiệu suất</span>
                      <p className="text-lg font-semibold mt-1">{variant?.luminousEfficiency}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Kích thước</span>
                    <p className="text-lg font-semibold mt-1">{variant?.dimensions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specifications Section - Full Width Below */}
        <div className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">Thông số kỹ thuật</h2>
              <div className="grid gap-3">
                {product.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-3 gap-4 py-3 ${
                      idx !== product.specs.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-medium">{spec.label}</span>
                    <span className="col-span-2 text-muted-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
