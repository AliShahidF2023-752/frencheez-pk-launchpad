import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-hero relative overflow-hidden animate-fade-in">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary-foreground text-primary-foreground animate-pulse-glow" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
              <span className="ml-2 text-primary-foreground font-semibold">4.9/5 from 2,000+ franchisees</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6">
              Ready to Build Your Empire?
            </h2>

            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join thousands of successful entrepreneurs who've transformed their lives with FrenCheez. Your franchise journey starts now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="group bg-background text-foreground hover:bg-background/90">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                Schedule Demo Call
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
