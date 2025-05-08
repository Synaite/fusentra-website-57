
import { GradientButton } from "./ui/gradient-button";
import { AuroraBackground } from "./ui/aurora-background";
import CalendlyDialog from "./CalendlyDialog";

const HeroSection = () => {
  return (
    <AuroraBackground className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F6FBFF] to-[#EEF5FF] lg:py-0">
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 max-w-7xl mx-auto pt-16 md:pt-20"> {/* Added pt-16/pt-20 for padding top */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-30 -z-10"></div>
            <h2 className="text-4xl md:text-5xl font-medium text-primary mb-4 drop-shadow-[0_0_6px_rgba(59,130,246,0.3)]">
              Welcome to Synaite
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-5xl leading-tight mb-8">
              Bespoke AI Solutions That Automate Operations & Maximize Profit
            </h1>
            <CalendlyDialog>
              <GradientButton size="lg" className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
                Book A Call
              </GradientButton>
            </CalendlyDialog>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-70 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200"
                alt="AI technology visualization" 
                className="w-full h-auto rounded-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
