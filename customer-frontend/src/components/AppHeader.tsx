import { Bell, Menu, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AppHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center font-bold text-primary-foreground text-xl">
              FC
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              FrenCheez
            </span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
            <Button variant="default" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in border-t border-border pt-4">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Heart className="w-5 h-5" />
              Saved
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Bell className="w-5 h-5" />
              Notifications
            </Button>
            <Button variant="default" className="w-full justify-start gap-3">
              <User className="w-5 h-5" />
              Profile
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
