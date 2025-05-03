
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/90 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/0459376f-66e0-4825-bf52-753007ffbc67.png" 
            alt="ORION Technologies Logo" 
            className="h-10 w-auto"
          />
        </a>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <Button variant="default" size="sm">
            Request Quote
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 flex flex-col bg-white p-6 transition-transform md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-6">
            <a 
              href="#home" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#products" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="default">
              Request Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
