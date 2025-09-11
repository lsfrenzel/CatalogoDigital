import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SistemaEducation() {
  const systemData = {
    id: 'education',
    title: 'Plataforma EAD Completa',
    subtitle: 'Educação online de alta qualidade',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    icon: 'fas fa-graduation-cap',
    description: 'A plataforma EAD da TechSolutions oferece uma solução completa para ensino a distância com gestão de cursos, alunos, certificações e ferramentas interativas de aprendizagem.',
    mainBenefits: [
      {
        icon: 'fas fa-play-circle',
        title: 'Aulas Interativas',
        description: 'Vídeos, quizzes e atividades para engajar estudantes'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certificação Digital',
        description: 'Emissão automática de certificados com validade legal'
      },
      {
        icon: 'fas fa-users-class',
        title: 'Gestão de Turmas',
        description: 'Controle completo de alunos, professores e turmas'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Analytics Educacional',
        description: 'Relatórios detalhados de performance e engajamento'
      }
    ],
    detailedFeatures: {
      cursos: {
        title: 'Gestão de Cursos',
        features: [
          'Criação de cursos modulares',
          'Upload de vídeos e materiais',
          'Quizzes e avaliações',
          'Trilhas de aprendizagem',
          'Pré-requisitos entre módulos',
          'Controle de acesso por período'
        ]
      },
      alunos: {
        title: 'Portal do Aluno',
        features: [
          'Dashboard personalizado',
          'Progresso de estudos',
          'Histórico de notas',
          'Certificados digitais',
          'Fórum de discussões',
          'Mensagens com instrutores'
        ]
      },
      professores: {
        title: 'Ferramentas do Professor',
        features: [
          'Criação de conteúdo',
          'Correção automatizada',
          'Relatórios de turma',
          'Comunicação com alunos',
          'Agendamento de aulas ao vivo',
          'Banco de questões'
        ]
      },
      gestao: {
        title: 'Gestão Administrativa',
        features: [
          'Matrículas e renovações',
          'Controle financeiro',
          'Relatórios gerenciais',
          'Certificações em lote',
          'Integração com sistemas',
          'Backup automático'
        ]
      }
    },
    advantages: [
      {
        title: 'Aumento de 200% na Capacidade',
        description: 'Atenda muito mais alunos sem limitações físicas'
      },
      {
        title: 'Redução de 60% nos Custos',
        description: 'Elimine custos de infraestrutura física e materiais'
      },
      {
        title: 'Melhoria de 80% no Engajamento',
        description: 'Ferramentas interativas mantêm alunos mais engajados'
      },
      {
        title: 'ROI de 300% no Primeiro Ano',
        description: 'Expansão digital gera retorno exponencial'
      }
    ],
    testimonial: {
      quote: 'A plataforma EAD nos permitiu expandir nossos cursos nacionalmente. Triplicamos nossa receita no primeiro ano.',
      name: 'Ana Costa',
      position: 'Diretora, EduTech Academy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
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
              Interessado na Plataforma EAD?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Solicite uma demonstração gratuita e veja como expandir sua educação online
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