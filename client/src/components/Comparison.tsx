export default function Comparison() {
  const comparisonData = [
    {
      criteria: 'Produtividade',
      modern: { icon: 'fas fa-arrow-up', text: 'Até 70% mais eficiente' },
      outdated: { icon: 'fas fa-arrow-down', text: 'Processos manuais lentos' }
    },
    {
      criteria: 'Margem de Lucro',
      modern: { icon: 'fas fa-chart-line', text: '+35% em média' },
      outdated: { icon: 'fas fa-minus', text: 'Sem visibilidade de custos' }
    },
    {
      criteria: 'Taxa de Erros',
      modern: { icon: 'fas fa-check', text: 'Redução de 80%' },
      outdated: { icon: 'fas fa-exclamation-triangle', text: 'Erros frequentes' }
    },
    {
      criteria: 'Tempo de Resposta',
      modern: { icon: 'fas fa-clock', text: 'Tempo real' },
      outdated: { icon: 'fas fa-hourglass', text: 'Dias ou semanas' }
    },
    {
      criteria: 'Escalabilidade',
      modern: { icon: 'fas fa-expand', text: 'Crescimento ilimitado' },
      outdated: { icon: 'fas fa-lock', text: 'Limitações constantes' }
    },
    {
      criteria: 'Satisfação do Cliente',
      modern: { icon: 'fas fa-smile', text: '+60% de satisfação' },
      outdated: { icon: 'fas fa-frown', text: 'Reclamações frequentes' }
    }
  ];

  return (
    <section id="comparativo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="raleway text-4xl md:text-5xl font-bold mb-6" data-testid="comparison-title">
            Por que Escolher Sistemas Modernos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="comparison-subtitle">
            Veja a diferença entre empresas que investem em tecnologia e aquelas que ficam para trás
          </p>
        </div>

        <div className="comparison-table fade-in" data-testid="comparison-table">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Critério</th>
                  <th className="text-center modern-col">Sistemas Modernos</th>
                  <th className="text-center outdated-col">Sistemas Antigos/Sem Sistema</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} data-testid={`comparison-row-${index}`}>
                    <td className="font-semibold" data-testid={`criteria-${index}`}>
                      {row.criteria}
                    </td>
                    <td className="text-center modern-col" data-testid={`modern-${index}`}>
                      <i className={`${row.modern.icon} mr-2`}></i>
                      {row.modern.text}
                    </td>
                    <td className="text-center outdated-col" data-testid={`outdated-${index}`}>
                      <i className={`${row.outdated.icon} mr-2`}></i>
                      {row.outdated.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
