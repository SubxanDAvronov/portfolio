import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { key: "home", icon: "solar:home-bold" },
    { key: "about", icon: "solar:user-bold" },
    { key: "resume", icon: "solar:document-bold" },
    { key: "skills", icon: "solar:code-bold" },
    { key: "projects", icon: "solar:widget-bold" },
    { key: "contact", icon: "solar:letter-bold" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.key);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            
            Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              
              return (
                <Button
                  key={item.key}
                  variant="ghost"
                  onClick={() => scrollToSection(item.key)}
                  className={`group relative transition-all duration-300 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <Icon icon={item.icon} width={18} height={18} className="mr-2 transition-transform group-hover:scale-110" />
                  {t(`nav.${item.key}`)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift"></span>
                  )}
                </Button>
              );
            })}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition-transform hover:scale-110"
            >
              <Icon 
                icon={theme === "dark" ? "solar:sun-bold" : "solar:moon-bold"} 
                width={20} 
                height={20} 
              />
            </Button>
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon 
              icon={isMobileMenuOpen ? "solar:close-square-bold" : "solar:hamburger-menu-bold"} 
              width={24} 
              height={24} 
            />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.key;
                
                return (
                  <Button
                    key={item.key}
                    variant="ghost"
                    onClick={() => scrollToSection(item.key)}
                    className={`w-full justify-start transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Icon icon={item.icon} width={18} height={18} className="mr-3" />
                    {t(`nav.${item.key}`)}
                  </Button>
                );
              })}
              
              <div className="pt-4 border-t border-border flex items-center justify-between gap-2">
                <LanguageSwitcher />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="transition-transform hover:scale-110"
                >
                  <Icon 
                    icon={theme === "dark" ? "solar:sun-bold" : "solar:moon-bold"} 
                    width={20} 
                    height={20} 
                  />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
