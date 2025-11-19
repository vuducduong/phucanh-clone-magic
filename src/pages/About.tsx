import { Target, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delightings Vietnam - Lighting up every your space
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Tổng Quan</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Delightings Vietnam CO., LTD</strong> là công ty chuyên cung cấp các giải pháp chiếu sáng LED tiên tiến, 
                chất lượng cao cho thị trường Việt Nam và khu vực.
              </p>
              <p className="text-foreground leading-relaxed">
                Với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ tiên tiến, chúng tôi cam kết mang đến những 
                sản phẩm bóng đèn LED tiết kiệm năng lượng, thân thiện với môi trường và đáp ứng mọi nhu cầu 
                chiếu sáng của khách hàng.
              </p>
              <p className="text-foreground leading-relaxed">
                Chúng tôi tự hào là đối tác tin cậy của hàng ngàn doanh nghiệp và gia đình trên toàn quốc, 
                cung cấp các giải pháp chiếu sáng từ dân dụng đến công nghiệp.
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">100% Chính Hãng</h3>
                    <p className="text-sm text-muted-foreground">Cam kết sản phẩm chính hãng, chất lượng cao</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tiết Kiệm Năng Lượng</h3>
                    <p className="text-sm text-muted-foreground">Giảm đến 80% chi phí điện năng so với bóng truyền thống</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Bảo Hành Tận Nơi</h3>
                    <p className="text-sm text-muted-foreground">Dịch vụ bảo hành nhanh chóng, chuyên nghiệp</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tư Vấn Miễn Phí</h3>
                    <p className="text-sm text-muted-foreground">Đội ngũ chuyên gia hỗ trợ 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Mục Tiêu</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Tầm Nhìn</h3>
                <p className="text-foreground leading-relaxed">
                  Trở thành nhà cung cấp giải pháp chiếu sáng LED hàng đầu Việt Nam, góp phần xây dựng 
                  một tương lai xanh, bền vững thông qua công nghệ tiết kiệm năng lượng.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Sứ Mệnh</h3>
                <p className="text-foreground leading-relaxed">
                  Mang ánh sáng chất lượng cao đến mọi không gian, nâng cao chất lượng cuộc sống và 
                  đóng góp vào việc bảo vệ môi trường bằng các sản phẩm LED tiên tiến.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Giá Trị Cốt Lõi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Chất Lượng</h3>
                <p className="text-muted-foreground">
                  Cam kết cung cấp sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Khách Hàng</h3>
                <p className="text-muted-foreground">
                  Đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sáng Tạo</h3>
                <p className="text-muted-foreground">
                  Không ngừng đổi mới và cải tiến công nghệ chiếu sáng
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-gradient-hero rounded-lg p-8 text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg mb-6 opacity-90">
            Lighting up every your space
          </p>
          <div className="space-y-2">
            <p className="font-semibold">Delightings Vietnam CO., LTD</p>
            <p>F406, tầng 4, toà DMC, 535 Kim Mã, phường Giảng Võ, Tp Hà Nội, Việt Nam</p>
            <p>Website: www.delightings.com</p>
            <p>Hotline: +84 (0) 365 270 293 | +84 (0) 972 733 590</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
