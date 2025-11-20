import { products } from "@/data/products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8 uppercase text-muted-foreground">
          {product.typeName}
        </h1>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Left Column - Images */}
          <Card>
            <CardContent className="p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted relative mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.typeName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition-all ${
                      selectedImage === idx ? "border-primary" : "border-border"
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

          {/* Right Column - Thông số chung */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Thông số chung</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {product.specs.map((spec, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium w-1/2">
                        {spec.label}
                      </TableCell>
                      <TableCell>{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Dòng sản phẩm */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">Dòng sản phẩm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Mã sản phẩm</TableHead>
                    <TableHead className="font-bold">Công suất</TableHead>
                    <TableHead className="font-bold">lm</TableHead>
                    <TableHead className="font-bold">lm/W</TableHead>
                    <TableHead className="font-bold">Kích thước (L*W*H)</TableHead>
                    <TableHead className="font-bold">Khối lượng</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.variants.map((v, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{v.code}</TableCell>
                      <TableCell>{v.power}</TableCell>
                      <TableCell>{v.luminousFlux}</TableCell>
                      <TableCell>{v.luminousEfficiency}</TableCell>
                      <TableCell>{v.dimensions}</TableCell>
                      <TableCell>{(v as any).weight || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Kích thước sản phẩm & Đồ thị quang thông */}
        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Kích thước sản phẩm</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  Hình ảnh kích thước sản phẩm
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Đồ thị quang thông</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  Biểu đồ phân bố ánh sáng
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Điều kiện vận hành và Thông tin an toàn */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Điều kiện vận hành và bảo quản
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Nhiệt độ vận hành:</span> -20 đến
                +45°C, độ ẩm 20-90%
              </p>
              <p className="text-sm">
                <span className="font-medium">Nhiệt độ bảo quản:</span> -20 đến
                +60°C, độ ẩm 5-95%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Các thông tin an toàn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  • Không sử dụng dưới mái hiên, nơi ẩm ướt, nơi có hơi nước
                  trực tiếp hoặc nơi có nguy cơ nước bắn vào gây điện giật.
                </li>
                <li>
                  • Chỉ sử dụng dải nhiệt độ -20°C đến +45°C.
                </li>
                <li>
                  • Không dùng ở nơi có rung chấn mạnh hoặc gió mạnh để tránh
                  thiết bị rơi.
                </li>
                <li>
                  • Không nhìn trực tiếp vào nguồn sáng (LED) để tránh hại mắt.
                </li>
                <li>
                  • Tránh va chạm thiết bị trong quá trình lắp đặt và sử dụng
                  để tránh hỏng hóc.
                </li>
                <li>
                  • Giữ thiết bị cách tường ít nhất 1 m và cách thiết bị khác
                  ít nhất 0.5 m.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
