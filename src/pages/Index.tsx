import { AppHeader } from "@/components/AppHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryNav } from "@/components/CategoryNav";
import { MarketplaceGrid } from "@/components/MarketplaceGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <div className="pt-16">
        <SearchBar />
        <CategoryNav />
        <MarketplaceGrid />
      </div>
    </div>
  );
};

export default Index;
