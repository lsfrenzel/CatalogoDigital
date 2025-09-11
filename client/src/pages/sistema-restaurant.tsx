import { Link } from "wouter";
import { useLayoutEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SistemaRestaurant() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const systemData = {
    id: 'restaurant',
    title: 'Sistema de Comandas para Restaurantes',
    subtitle: 'Otimize o atendimento e aumente a eficiência',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    icon: 'fas fa-utensils',
    description: 'O sistema de comandas da TechSolutions revoluciona a gestão de restaurantes com controle completo de pedidos, mesas e entregas. Aumente a eficiência operacional e melhore a experiência do cliente.',
    mainBenefits: [
      {
        icon: 'fas fa-mobile-alt',
        title: 'Pedidos Digitais',
        description: 'Cardápio digital e pedidos direto do smartphone do cliente'
      },
      {
        icon: 'fas fa-table',
        title: 'Gestão de Mesas',
        description: 'Controle visual de todas as mesas em tempo real'
      },
      {
        icon: 'fas fa-clock',
        title: 'Rapidez no Atendimento',
        description: 'Reduza o tempo de espera em até 50% com automação'
      },
      {
        icon: 'fas fa-chart-pie',
        title: 'Análise de Vendas',
        description: 'Relatórios detalhados de pratos mais vendidos e faturamento'
      }
    ],
    detailedFeatures: {
      pedidos: {
        title: 'Gestão de Pedidos',
        features: [
          'Cardápio digital interativo',
          'Pedidos via QR Code na mesa',
          'Customização de pratos e observações',
          'Controle de tempo de preparo',
          'Notificações para cozinha',
          'Histórico completo de pedidos'
        ]
      },
      mesas: {
        title: 'Controle de Mesas',
        features: [
          'Layout visual do restaurante',
          'Status em tempo real das mesas',
          'Reservas e agendamentos',
          'Controle de ocupação',
          'Transferência entre mesas',
          'Relatório de rotatividade'
        ]
      },
      cozinha: {
        title: 'Gestão da Cozinha',
        features: [
          'Painel de pedidos para cozinha',
          'Controle de tempo de preparo',
          'Priorização automática',
          'Alertas de atraso',
          'Controle de ingredientes',
          'Integração com estoque'
        ]
      },
      pagamentos: {
        title: 'Sistema de Pagamentos',
        features: [
          'Múltiplas formas de pagamento',
          'Divisão de conta automática',
          'Pagamento via PIX e cartão',
          'Cupom fiscal eletrônico',
          'Relatórios financeiros',
          'Controle de comissões'
        ]
      }
    },
    advantages: [
      {
        title: 'Aumento de 300% na Capacidade',
        description: 'Atenda mais clientes com a mesma equipe através da automação'
      },
      {
        title: 'Redução de 50% no Tempo de Espera',
        description: 'Processos otimizados aceleram todo o atendimento'
      },
      {
        title: 'Aumento de 25% no Ticket Médio',
        description: 'Sugestões inteligentes aumentam o valor dos pedidos'
      },
      {
        title: 'ROI de 200% em 6 Meses',
        description: 'Retorno rápido com aumento significativo de eficiência'
      }
    ],
    testimonial: {
      quote: 'O sistema de comandas revolucionou nosso restaurante. Conseguimos atender 300% mais clientes com a mesma equipe.',
      name: 'João Oliveira',
      position: 'Proprietário, Sabor & Arte',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
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
                  <h1 className="raleway text-4xl md:text-6xl font-bold text-white mb-2" data-testid="system-title">
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
              
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="raleway text-4xl font-bold text-center mb-16" data-testid="benefits-title">
              Principais Benefícios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemData.mainBenefits.map((benefit, index) => (
                <div key={index} className="text-center" data-testid={`benefit-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4 raleway">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="raleway text-4xl font-bold text-center mb-16" data-testid="features-title">
              Funcionalidades Detalhadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(systemData.detailedFeatures).map(([key, section]) => (
                <div key={key} className="bg-background rounded-xl p-8" data-testid={`feature-section-${key}`}>
                  <h3 className="text-2xl font-bold mb-6 raleway text-primary">{section.title}</h3>
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
            <h2 className="raleway text-4xl font-bold text-center mb-16" data-testid="advantages-title">
              Resultados Comprovados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systemData.advantages.map((advantage, index) => (
                <div key={index} className="bg-card rounded-xl p-8 text-center" data-testid={`advantage-${index}`}>
                  <h3 className="text-2xl font-bold mb-4 text-primary raleway">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}