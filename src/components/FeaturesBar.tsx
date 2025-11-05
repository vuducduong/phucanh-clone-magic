import { CheckCircle2, Tag, Truck, Shield, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    text: "100% chính hãng",
  },
  {
    icon: Tag,
    text: "Giá ưu đãi",
  },
  {
    icon: Truck,
    text: "Miễn phí vận chuyển",
  },
  {
    icon: Shield,
    text: "Bảo hành nơi sử dụng",
  },
  {
    icon: Clock,
    text: "Đổi trả lên đến 30 ngày",
  },
  {
    icon: Headphones,
    text: "Thanh toán linh hoạt",
  },
];

export const FeaturesBar = () => {
  return (
    <div className="bg-muted border-y border-border py-4 mb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
