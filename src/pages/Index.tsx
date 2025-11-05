import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { DealsSection } from "@/components/DealsSection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <FeaturesBar />
      
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <Sidebar />
          
          <main className="flex-1">
            <Hero />
            <DealsSection />
            
            {/* Additional product sections can be added here */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Laptop Bán Chạy</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Product cards would go here */}
              </div>
            </section>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
