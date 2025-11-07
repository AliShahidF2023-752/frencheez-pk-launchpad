import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  return (
    <div className="w-full bg-card border-b border-border sticky top-16 z-40 backdrop-blur-lg bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search franchises..."
              className="w-full h-12 pl-12 pr-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <Button variant="outline" size="icon" className="h-12 w-12 flex-shrink-0">
            <SlidersHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
