import { Zap, Shield, TrendingUp, Users, Rocket, DollarSign } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Launch your franchise in minutes, not months. Our streamlined process gets you selling faster.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Bank-level security and compliance. Your business and customer data is always protected.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Real-time insights and metrics to optimize your franchise performance and scale smartly.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of successful franchise owners. Get mentorship and network opportunities.",
    color: "text-primary",
  },
  {
    icon: Rocket,
    title: "Marketing Tools",
    description: "Built-in marketing automation and social media integration to reach your audience.",
    color: "text-secondary",
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description: "Start small, scale big. Pay as you grow with transparent, affordable pricing plans.",
    color: "text-accent",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern entrepreneurs who move fast and think big.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
