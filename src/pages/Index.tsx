import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { DealsSection } from "@/components/DealsSection";
import { FeaturesBar } from "@/components/FeaturesBar";

const Index = () => {
  return (
    <>
      <FeaturesBar />
      
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <Sidebar />
          
          <main className="flex-1 bg-white rounded-lg p-6">
            <Hero />
            <DealsSection />
            
            {/* Additional product sections can be added here */}
            <section className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Product cards would go here */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
