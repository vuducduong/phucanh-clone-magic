import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-hero p-8 md:p-12 text-primary-foreground mb-6">
      <div className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            TỐI ƯU CHI PHÍ
            <br />
            <span className="text-5xl md:text-6xl">BỨT TỐC MỤC TIÊU</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="text-primary font-bold text-sm mb-2">Laptop Chính Hãng</div>
              <div className="text-foreground">
                <span className="text-3xl font-bold">35%</span>
                <span className="text-lg ml-2">Giảm giá</span>
              </div>
            </div>
            
            <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="text-secondary font-bold text-sm mb-2">Thiết Bị Văn Phòng</div>
              <div className="text-foreground">
                <span className="text-3xl font-bold">50%</span>
                <span className="text-lg ml-2">Giảm giá</span>
              </div>
            </div>
            
            <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="text-primary font-bold text-sm mb-2">Ưu Đãi Thanh Toán</div>
              <div className="text-foreground">
                <span className="text-3xl font-bold">1,000K</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8">
              Xem ngay
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
    </div>
  );
};
