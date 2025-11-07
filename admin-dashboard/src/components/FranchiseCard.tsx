import { Heart, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FranchiseCardProps {
  image: string;
  title: string;
  category: string;
  investment: string;
  roi: string;
  location: string;
  rating: number;
  trending?: boolean;
}

export const FranchiseCard = ({
  image,
  title,
  category,
  investment,
  roi,
  location,
  rating,
  trending = false,
}: FranchiseCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {trending && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}
        <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
          <Heart className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
            {category}
          </div>
          <h3 className="text-lg font-bold text-foreground line-clamp-1">{title}</h3>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">★</span>
            <span className="text-foreground font-semibold">{rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <div className="text-xs text-muted-foreground">Investment</div>
            <div className="text-lg font-bold text-foreground">{investment}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">ROI</div>
            <div className="text-lg font-bold text-primary">{roi}</div>
          </div>
        </div>

        <Button variant="default" className="w-full h-10 font-semibold">
          View Details
        </Button>
      </div>
    </div>
  );
};
