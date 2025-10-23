import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center font-bold text-primary-foreground text-xl animate-float">
              FC
            </div>
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              FrenCheez
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a
              href="#features"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button variant="hero" size="default" className="w-full">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
