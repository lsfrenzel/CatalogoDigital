import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SistemaCRM() {
  const systemData = {
    id: 'crm',
    title: 'CRM - Gestão de Relacionamento com Clientes',
    subtitle: 'Transforme leads em clientes fiéis',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    icon: 'fas fa-users',
    description: 'O sistema CRM da TechSolutions oferece gestão completa do relacionamento com clientes, desde o primeiro contato até a fidelização. Automatize vendas, organize dados e aumente sua taxa de conversão.',
    mainBenefits: [
      {
        icon: 'fas fa-user-plus',
        title: 'Captação de Leads',
        description: 'Capture e organize todos os prospects em um funil de vendas'
      },
      {
        icon: 'fas fa-chart-trending-up',
        title: 'Aumento de Vendas',
        description: 'Aumente suas vendas em até 60% com automação inteligente'
      },
      {
        icon: 'fas fa-heart',
        title: 'Fidelização',
        description: 'Mantenha clientes engajados com comunicação personalizada'
      },
      {
        icon: 'fas fa-analytics',
        title: 'Análise de Performance',
        description: 'Relatórios detalhados sobre equipe e resultados de vendas'
      }
    ],
    detailedFeatures: {
      leads: {
        title: 'Gestão de Leads',
        features: [
          'Captura automática de leads do site',
          'Qualificação e scoring de prospects',
          'Distribuição automática para vendedores',
          'Acompanhamento do funil de vendas',
          'Integração com redes sociais',
          'Landing pages integradas'
        ]
      },
      vendas: {
        title: 'Automação de Vendas',
        features: [
          'Pipeline visual de oportunidades',
          'Sequências de e-mail automatizadas',
          'Agendamento de follow-ups',
          'Propostas e contratos digitais',
          'Gestão de comissões',
          'Previsão de vendas'
        ]
      },
      clientes: {
        title: 'Relacionamento com Clientes',
        features: [
          'Histórico completo de interações',
          'Segmentação de clientes',
          'Campanhas de e-mail marketing',
          'Pesquisas de satisfação',
          'Programa de fidelidade',
          'Suporte ao cliente integrado'
        ]
      },
      relatorios: {
        title: 'Relatórios e Análises',
        features: [
          'Dashboard de vendas em tempo real',
          'Relatórios de performance individual',
          'Análise de ROI de campanhas',
          'Métricas de satisfação do cliente',
          'Previsões de receita',
          'Comparativos de período'
        ]
      }
    },
    advantages: [
      {
        title: 'Aumento de 60% nas Vendas',
        description: 'Automação e organização levam a mais oportunidades fechadas'
      },
      {
        title: 'Redução de 40% no Ciclo de Vendas',
        description: 'Processos otimizados aceleram o fechamento de negócios'
      },
      {
        title: 'Melhoria de 50% na Satisfação',
        description: 'Atendimento personalizado aumenta satisfação dos clientes'
      },
      {
        title: 'ROI de 300% no Primeiro Ano',
        description: 'Retorno garantido com aumento significativo de vendas'
      }
    ],
    testimonial: {
      quote: 'O CRM nos ajudou a organizar nossa base de clientes e aumentar nossas vendas em 60%. Recomendo para qualquer empresa séria.',
      name: 'Maria Santos',
      position: 'Diretora Comercial, VendaMais',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    }
  };

  return (
    <>
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={systemData.image}
              alt={systemData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <Link 
                href="/" 
                className="text-white/80 hover:text-white flex items-center mr-4"
                data-testid="back-to-catalog"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Voltar ao Catálogo
              </Link>
            </div>
            
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-6">
                  <i className={`${systemData.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h1 className="playfair text-4xl md:text-6xl font-bold text-white mb-2" data-testid="system-title">
                    {systemData.title}
                  </h1>
                  <p className="text-xl text-white/90" data-testid="system-subtitle">
                    {systemData.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed" data-testid="system-description">
                {systemData.description}
              </p>
              
              <Link 
                href="#contato"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl inline-block"
                data-testid="request-demo-button"
              >
                Solicitar Demonstração
              </Link>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="playfair text-4xl font-bold text-center mb-16" data-testid="benefits-title">
              Principais Benefícios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemData.mainBenefits.map((benefit, index) => (
                <div key={index} className="text-center" data-testid={`benefit-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4 playfair">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="playfair text-4xl font-bold text-center mb-16" data-testid="features-title">
              Funcionalidades Detalhadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(systemData.detailedFeatures).map(([key, section]) => (
                <div key={key} className="bg-background rounded-xl p-8" data-testid={`feature-section-${key}`}>
                  <h3 className="text-2xl font-bold mb-6 playfair text-primary">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-primary mr-3 mt-1 flex-shrink-0"></i>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages with Numbers */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="playfair text-4xl font-bold text-center mb-16" data-testid="advantages-title">
              Resultados Comprovados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systemData.advantages.map((advantage, index) => (
                <div key={index} className="bg-card rounded-xl p-8 text-center" data-testid={`advantage-${index}`}>
                  <h3 className="text-2xl font-bold mb-4 text-primary playfair">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="playfair text-4xl font-bold mb-16" data-testid="testimonial-title">
              O que Nossos Clientes Dizem
            </h2>
            
            <div className="bg-background rounded-xl p-12" data-testid="testimonial-content">
              <p className="text-xl italic mb-8 leading-relaxed">
                "{systemData.testimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src={systemData.testimonial.image}
                  alt={systemData.testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{systemData.testimonial.name}</h4>
                  <p className="text-muted-foreground">{systemData.testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="playfair text-4xl font-bold mb-8" data-testid="contact-title">
              Interessado no Sistema CRM?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Solicite uma demonstração gratuita e veja como o CRM pode aumentar suas vendas
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Demonstração Online</h3>
                <p className="text-muted-foreground mb-6">Agende uma apresentação personalizada do sistema</p>
                <Link 
                  href="/#contato"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
                  data-testid="demo-button"
                >
                  Agendar Demonstração
                </Link>
              </div>
              
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
                <p className="text-muted-foreground mb-6">Entre em contato para esclarecer suas dúvidas</p>
                <div className="space-y-3">
                  <a 
                    href="tel:+551199999999" 
                    className="flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                    data-testid="phone-contact"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    (11) 99999-9999
                  </a>
                  <a 
                    href="mailto:contato@techsolutions.com.br" 
                    className="flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                    data-testid="email-contact"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    contato@techsolutions.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}