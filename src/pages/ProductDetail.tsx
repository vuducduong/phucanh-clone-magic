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

          <div className="right-panel">
            <h3>Thông số theo mã</h3>
            <ul>
              <li>
                <strong>Mã sản phẩm:</strong> {variant.code}
              </li>
              <li>
                <strong>Công suất:</strong> {variant.power}
              </li>
              <li>
                <strong>Quang thông:</strong> {variant.luminousFlux}
              </li>
              <li>
                <strong>Hiệu suất:</strong> {variant.luminousEfficiency}
              </li>
              <li>
                <strong>Kích thước:</strong> {variant.dimensions}
              </li>
            </ul>
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
                      className={`grid grid-cols-3 gap-4 py-2 ${
                        idx !== product.specs.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span className="font-medium text-sm">{spec.label}</span>
                      <span className="col-span-2 text-sm text-muted-foreground">
                        {spec.value}
                      </span>
                    </div>
                  ))}
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
