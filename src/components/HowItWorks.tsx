import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up & Choose",
    description: "Create your account in 60 seconds and browse our curated franchise opportunities tailored for Pakistan.",
  },
  {
    number: "02",
    title: "Customize Your Store",
    description: "Use our drag-and-drop builder to create your perfect storefront. No coding needed, just creativity.",
  },
  {
    number: "03",
    title: "Launch & Sell",
    description: "Go live instantly with built-in payments, inventory management, and marketing tools. Start earning today.",
  },
  {
    number: "04",
    title: "Scale & Grow",
    description: "Expand your empire with data-driven insights, automation, and support from our expert community.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Your Journey to{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to empire in four simple steps. We've made it ridiculously easy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-2xl font-black text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
