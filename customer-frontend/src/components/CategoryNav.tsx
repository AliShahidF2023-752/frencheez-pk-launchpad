import { useState } from "react";
import { Pizza, Coffee, ShoppingBag, Utensils, TrendingUp, Star } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Star },
  { id: "food", label: "Food", icon: Pizza },
  { id: "cafe", label: "Café", icon: Coffee },
  { id: "retail", label: "Retail", icon: ShoppingBag },
  { id: "restaurant", label: "Restaurant", icon: Utensils },
  { id: "trending", label: "Trending", icon: TrendingUp },
];

export const CategoryNav = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                active === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
