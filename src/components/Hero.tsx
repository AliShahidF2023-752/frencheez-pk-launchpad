import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-sm font-semibold text-primary">Pakistan's #1 Franchise Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in-up">
            Start Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient-shift bg-200">
              Franchise Empire
            </span>{" "}
            Today
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Join the fastest-growing franchising platform designed for Gen Z entrepreneurs in Pakistan. Build, scale, and succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="hero" size="lg" className="group">
              Launch Your Franchise
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary animate-pulse-glow">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Franchises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary animate-pulse-glow">₨50M+</div>
              <div className="text-sm text-muted-foreground mt-1">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent animate-pulse-glow">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};
