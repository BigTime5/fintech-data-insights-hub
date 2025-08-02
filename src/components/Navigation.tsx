import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: "Home", sectionId: "home" },
    { href: "/about", label: "About", sectionId: "about" },
    { href: "/services", label: "Services", sectionId: "services" },
    { href: "/portfolio", label: "Portfolio", sectionId: "portfolio" },
    { href: "/blog", label: "Blog", sectionId: "blog" },
    { href: "/contact", label: "Contact", sectionId: "contact" },
  ];

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navigation height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Only add scroll listener if we're on the main page (with sections)
    if (location.pathname === '/' || navItems.some(item => item.href === location.pathname)) {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation - either route or scroll to section
  const handleNavigation = (item: typeof navItems[0]) => {
    // If we're already on a main page route, scroll to section
    if (location.pathname === '/' || navItems.some(navItem => navItem.href === location.pathname)) {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL without page reload
        window.history.replaceState(null, '', item.href);
        setActiveSection(item.sectionId);
        setIsOpen(false);
        return;
      }
    }
    
    // If section doesn't exist or we're on a different page, navigate normally
    navigate(item.href);
    setIsOpen(false);
  };

  // Determine if item is active (either by route or by scroll position)
  const isActive = (item: typeof navItems[0]) => {
    // If we're on main pages, use scroll-based active section
    if (location.pathname === '/' || navItems.some(navItem => navItem.href === location.pathname)) {
      return activeSection === item.sectionId;
    }
    
    // Otherwise use traditional route-based active state
    if (item.href === "/" && location.pathname === "/") return true;
    if (item.href !== "/" && location.pathname.startsWith(item.href)) return true;
    return false;
  };

  // Handle logo click - always go to home section
  const handleLogoClick = () => {
    if (location.pathname === '/' || navItems.some(item => item.href === location.pathname)) {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        window.history.replaceState(null, '', '/');
        setActiveSection('home');
        return;
      }
    }
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Updated to handle both navigation methods */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="p-2 bg-gradient-primary rounded-lg">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Phinidy George
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive(item)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActive(item) && (
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Updated to handle smooth scroll */}
          <div className="hidden md:flex">
            <Button 
              variant="cta" 
              size="sm" 
              onClick={() => handleNavigation(navItems.find(item => item.sectionId === 'contact')!)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActive(item)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleNavigation(navItems.find(item => item.sectionId === 'contact')!)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;