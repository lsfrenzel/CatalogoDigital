import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SistemaFinancial() {
  const systemData = {
    id: 'financial',
    title: 'Sistema Financeiro Completo',
    subtitle: 'Controle total das finanças da sua empresa',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    icon: 'fas fa-calculator',
    description: 'O sistema financeiro da TechSolutions oferece controle total das finanças com gestão de fluxo de caixa, análises preditivas e relatórios gerenciais. Tome decisões financeiras inteligentes baseadas em dados.',
    mainBenefits: [
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Fluxo de Caixa',
        description: 'Controle completo de entradas e saídas em tempo real'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Análises Preditivas',
        description: 'Previsões financeiras baseadas em inteligência artificial'
      },
      {
        icon: 'fas fa-file-invoice',
        title: 'Gestão Fiscal',
        description: 'Emissão de NFe e controle completo de impostos'
      },
      {
        icon: 'fas fa-shield-check',
        title: 'Segurança Bancária',
        description: 'Conciliação automática e proteção de dados financeiros'
      }
    ],
    detailedFeatures: {
      caixa: {
        title: 'Fluxo de Caixa',
        features: [
          'Controle de contas a pagar e receber',
          'Projeções de fluxo de caixa',
          'Alertas de vencimento',
          'Controle de inadimplência',
          'Múltiplas formas de pagamento',
          'Relatórios de movimentação'
        ]
      },
      fiscal: {
        title: 'Gestão Fiscal',
        features: [
          'Emissão de NFe, NFCe e NFSe',
          'Cálculo automático de impostos',
          'SPED Fiscal e Contábil',
          'Controle de regime tributário',
          'Declarações obrigatórias',
          'Auditoria fiscal integrada'
        ]
      },
      bancario: {
        title: 'Controle Bancário',
        features: [
          'Conciliação bancária automática',
          'Múltiplas contas correntes',
          'Controle de cheques',
          'Transferências entre contas',
          'Extrato bancário integrado',
          'Controle de aplicações'
        ]
      },
      relatorios: {
        title: 'Relatórios Gerenciais',
        features: [
          'DRE (Demonstração de Resultado)',
          'Balanço patrimonial',
          'Análise de custos',
          'Indicadores financeiros',
          'Comparativos de período',
          'Gráficos e dashboards'
        ]
      }
    },
    advantages: [
      {
        title: 'Redução de 80% em Erros Contábeis',
        description: 'Automação elimina erros manuais em cálculos e lançamentos'
      },
      {
        title: 'Economia de 60% no Tempo Contábil',
        description: 'Processos automatizados aceleram rotinas financeiras'
      },
      {
        title: 'Melhoria de 90% na Precisão Fiscal',
        description: 'Cálculos automáticos garantem conformidade tributária'
      },
      {
        title: 'ROI de 180% no Primeiro Ano',
        description: 'Economia em multas e otimização financeira geram retorno'
      }
    ],
    testimonial: {
      quote: 'O sistema financeiro nos deu controle total sobre nossas finanças. Conseguimos reduzir custos e melhorar nossa margem de lucro significativamente.',
      name: 'Roberto Lima',
      position: 'CFO, TechCorp',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
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
              Interessado no Sistema Financeiro?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Solicite uma demonstração gratuita e veja como controlar as finanças da sua empresa
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