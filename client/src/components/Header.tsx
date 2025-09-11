import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-background/90'
    } border-b border-border`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-primary-foreground text-lg"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground" data-testid="company-name">TechSolutions</h1>
              <p className="text-sm text-muted-foreground lato">Soluções digitais que transformam seu negócio</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sistemas')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-systems"
            >
              Sistemas
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-benefits"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('comparativo')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-comparison"
            >
              Comparativo
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-testimonials"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contato
            </button>
          </nav>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sistemas')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-systems"
              >
                Sistemas
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-benefits"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('comparativo')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-comparison"
              >
                Comparativo
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-testimonials"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
