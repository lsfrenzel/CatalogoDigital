export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const systemLinks = [
    { name: 'ERP Empresarial', section: 'sistemas' },
    { name: 'CRM', section: 'sistemas' },
    { name: 'Sistema de Comandas', section: 'sistemas' },
    { name: 'Controle Financeiro', section: 'sistemas' },
    { name: 'Estoque e Logística', section: 'sistemas' },
    { name: 'Plataforma EAD', section: 'sistemas' }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-primary-foreground text-lg"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground" data-testid="footer-company-name">
                  TechSolutions
                </h3>
                <p className="text-sm text-muted-foreground lato">
                  Soluções digitais que transformam seu negócio
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="footer-description">
              Desenvolvemos sistemas inteligentes que ajudam empresas a crescer, otimizar processos e aumentar sua competitividade no mercado digital.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4" data-testid="footer-systems-title">
              Sistemas
            </h4>
            <ul className="space-y-2">
              {systemLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`footer-system-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4" data-testid="footer-contact-title">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start" data-testid="footer-address">
                <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                <span className="text-muted-foreground">
                  Rua da Tecnologia, 123<br />
                  São Paulo - SP, 01234-567
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <a 
                  href="tel:+551199999999" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <a 
                  href="mailto:contato@techsolutions.com.br" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  contato@techsolutions.com.br
                </a>
              </li>
              <li className="flex items-center" data-testid="footer-hours">
                <i className="fas fa-clock text-primary mr-3"></i>
                <span className="text-muted-foreground">
                  Segunda a Sexta: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0" data-testid="footer-copyright">
            © 2024 TechSolutions. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-terms"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-privacy"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-cookies"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
