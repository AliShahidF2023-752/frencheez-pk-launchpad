import { FranchiseCard } from "./FranchiseCard";

const franchises = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    title: "Pizza Perfect",
    category: "Food & Beverage",
    investment: "₨15L",
    roi: "18-24M",
    location: "Karachi",
    rating: 4.8,
    trending: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
    title: "Chai House",
    category: "Café",
    investment: "₨8L",
    roi: "12-18M",
    location: "Lahore",
    rating: 4.6,
    trending: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    title: "Burger Hub",
    category: "Fast Food",
    investment: "₨12L",
    roi: "15-20M",
    location: "Islamabad",
    rating: 4.7,
    trending: false,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=600&fit=crop",
    title: "Desi Kitchen",
    category: "Restaurant",
    investment: "₨20L",
    roi: "24-30M",
    location: "Multan",
    rating: 4.9,
    trending: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    title: "Fashion Avenue",
    category: "Retail",
    investment: "₨25L",
    roi: "20-26M",
    location: "Karachi",
    rating: 4.5,
    trending: false,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop",
    title: "Smoothie Station",
    category: "Food & Beverage",
    investment: "₨6L",
    roi: "10-15M",
    location: "Lahore",
    rating: 4.4,
    trending: false,
  },
];

export const MarketplaceGrid = () => {
  return (
    <section className="py-6 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Available Franchises
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {franchises.length} opportunities found
            </p>
          </div>
          <select className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Most Popular</option>
            <option>Lowest Investment</option>
            <option>Highest ROI</option>
            <option>Newest</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {franchises.map((franchise, index) => (
            <div
              key={franchise.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FranchiseCard {...franchise} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
