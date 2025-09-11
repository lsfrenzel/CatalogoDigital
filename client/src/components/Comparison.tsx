import { CircleCheck, XCircle, TrendingUp, TrendingDown, Clock, Hourglass, Expand, Lock, Smile, Frown } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      criteria: 'Produtividade',
      modern: { 
        icon: TrendingUp, 
        text: 'Até 70% mais eficiente',
        description: 'Automação completa dos processos'
      },
      outdated: { 
        icon: TrendingDown, 
        text: 'Processos manuais lentos',
        description: 'Tarefas repetitivas e demoradas'
      }
    },
    {
      criteria: 'Margem de Lucro',
      modern: { 
        icon: TrendingUp, 
        text: '+35% em média',
        description: 'Controle total de custos e receitas'
      },
      outdated: { 
        icon: XCircle, 
        text: 'Sem visibilidade de custos',
        description: 'Perda de oportunidades de economia'
      }
    },
    {
      criteria: 'Taxa de Erros',
      modern: { 
        icon: CircleCheck, 
        text: 'Redução de 80%',
        description: 'Validação automática e controles rígidos'
      },
      outdated: { 
        icon: XCircle, 
        text: 'Erros frequentes',
        description: 'Falhas humanas e retrabalho'
      }
    },
    {
      criteria: 'Tempo de Resposta',
      modern: { 
        icon: Clock, 
        text: 'Tempo real',
        description: 'Informações atualizadas instantaneamente'
      },
      outdated: { 
        icon: Hourglass, 
        text: 'Dias ou semanas',
        description: 'Demora na consolidação de dados'
      }
    },
    {
      criteria: 'Escalabilidade',
      modern: { 
        icon: Expand, 
        text: 'Crescimento ilimitado',
        description: 'Adapta-se ao tamanho do seu negócio'
      },
      outdated: { 
        icon: Lock, 
        text: 'Limitações constantes',
        description: 'Travamento do crescimento'
      }
    },
    {
      criteria: 'Satisfação do Cliente',
      modern: { 
        icon: Smile, 
        text: '+60% de satisfação',
        description: 'Atendimento ágil e personalizado'
      },
      outdated: { 
        icon: Frown, 
        text: 'Reclamações frequentes',
        description: 'Demora e falta de informações'
      }
    }
  ];

  return (
    <section id="comparativo" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="raleway text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent" data-testid="comparison-title">
            Por que Escolher Sistemas Modernos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="comparison-subtitle">
            Veja a diferença entre empresas que investem em tecnologia e aquelas que ficam para trás
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-lg" data-testid="custom-systems-message">
              🎯 Desenvolvemos sistemas personalizados de acordo com as necessidades específicas da sua empresa
            </p>
          </div>
        </div>

        <div className="comparison-cards fade-in" data-testid="comparison-table">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Header Cards */}
            <div className="lg:col-span-1"></div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-6 text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Sistemas Modernos</h3>
              <p className="opacity-90">Tecnologia que impulsiona o crescimento</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-xl p-6 text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Sistemas Antigos/Sem Sistema</h3>
              <p className="opacity-90">Limitações que impedem o progresso</p>
            </div>

            {/* Comparison Cards */}
            {comparisonData.map((row, index) => (
              <div key={index} className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center" data-testid={`comparison-row-${index}`}>
                <div className="bg-card border rounded-xl p-6 text-center lg:text-left shadow-sm">
                  <h4 className="font-bold text-lg text-foreground" data-testid={`criteria-${index}`}>
                    {row.criteria}
                  </h4>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 shadow-sm" data-testid={`modern-${index}`}>
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <row.modern.icon className="w-6 h-6 text-emerald-600 mr-3" aria-hidden="true" />
                    <span className="font-bold text-emerald-700 dark:text-emerald-300 text-lg">
                      {row.modern.text}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 text-center lg:text-left">
                    {row.modern.description}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm" data-testid={`outdated-${index}`}>
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <row.outdated.icon className="w-6 h-6 text-gray-600 mr-3" aria-hidden="true" />
                    <span className="font-bold text-gray-700 dark:text-gray-300 text-lg">
                      {row.outdated.text}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
                    {row.outdated.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
