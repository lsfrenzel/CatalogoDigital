import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function DemoCRM() {
  const [selectedModule, setSelectedModule] = useState('dashboard');

  const salesData = {
    totalMes: "R$ 847.320",
    variacao: "+23.5%",
    metaMes: "78%",
    leadsNovos: 127,
    conversao: "18.3%",
    clientesAtivos: 1543,
    ticketMedio: "R$ 2.847"
  };

  const recentOpportunities = [
    { 
      id: "#OPP-2847", 
      cliente: "Inovação Digital Ltda", 
      valor: "R$ 45.000", 
      probabilidade: "85%", 
      etapa: "Proposta",
      vendedor: "Ana Silva",
      prazo: "5 dias"
    },
    { 
      id: "#OPP-2846", 
      cliente: "TechStart Solutions", 
      valor: "R$ 28.900", 
      probabilidade: "60%", 
      etapa: "Negociação",
      vendedor: "Carlos Ferreira",
      prazo: "12 dias"
    },
    { 
      id: "#OPP-2845", 
      cliente: "Empresa Moderna SA", 
      valor: "R$ 67.500", 
      probabilidade: "90%", 
      etapa: "Fechamento",
      vendedor: "Mariana Costa",
      prazo: "2 dias"
    }
  ];

  const topPerformers = [
    { nome: "Ana Silva", vendas: "R$ 234.500", metas: "112%", deals: 18 },
    { nome: "Carlos Ferreira", vendas: "R$ 198.200", metas: "94%", deals: 15 },
    { nome: "Mariana Costa", vendas: "R$ 267.800", metas: "127%", deals: 21 },
    { nome: "Roberto Lima", vendas: "R$ 156.400", metas: "85%", deals: 12 }
  ];

  const recentActivities = [
    { tipo: "call", acao: "Ligação realizada", cliente: "TechStart Solutions", vendedor: "Carlos F.", tempo: "5 min atrás" },
    { tipo: "email", acao: "Proposta enviada", cliente: "Inovação Digital", vendedor: "Ana S.", tempo: "23 min atrás" },
    { tipo: "meeting", acao: "Reunião agendada", cliente: "Empresa Moderna", vendedor: "Mariana C.", tempo: "1h atrás" },
    { tipo: "deal", acao: "Negócio fechado", cliente: "StartupXYZ", vendedor: "Roberto L.", tempo: "2h atrás" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-blue-200 dark:border-slate-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/sistema/crm"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar
                </Link>
                <div className="w-px h-6 bg-blue-300 dark:bg-slate-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">CRM Demo - TechSolutions</h1>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-circle text-blue-500 mr-2 text-xs"></i>
                Ambiente de Vendas
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-blue-200 dark:border-slate-700 min-h-screen shadow-lg">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-users text-white"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">Sistema CRM</h2>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Sales Edition</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedModule('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'dashboard' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chart-pie w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('leads')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'leads' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-user-plus w-4"></i>
                  <span>Leads</span>
                </button>
                <button
                  onClick={() => setSelectedModule('pipeline')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'pipeline' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chart-line w-4"></i>
                  <span>Pipeline</span>
                </button>
                <button
                  onClick={() => setSelectedModule('clientes')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'clientes' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-heart w-4"></i>
                  <span>Clientes</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Vendedor</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">VS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Vendedor Silva</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">Gerente Comercial</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-blue-200 dark:border-slate-500">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Meta Mensal</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">78%</span>
                    <span className="text-xs text-green-600 dark:text-green-400">+23.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {selectedModule === 'dashboard' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 raleway">Dashboard de Vendas</h2>
                  <p className="text-slate-600 dark:text-slate-400">Acompanhe o desempenho da sua equipe comercial</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-dollar-sign text-white"></i>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">{salesData.variacao}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{salesData.totalMes}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Vendas do Mês</p>
                    <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{width: salesData.metaMes}}></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{salesData.metaMes} da meta</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-user-plus text-white"></i>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">+{salesData.leadsNovos}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{salesData.leadsNovos}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Novos Leads</p>
                    <p className="text-blue-600 dark:text-blue-400 text-xs mt-2">
                      <i className="fas fa-percentage mr-1"></i>
                      {salesData.conversao} conversão
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-heart text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{salesData.clientesAtivos}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Clientes Ativos</p>
                    <p className="text-purple-600 dark:text-purple-400 text-xs mt-2">
                      <i className="fas fa-ticket-alt mr-1"></i>
                      {salesData.ticketMedio} médio
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-line text-white"></i>
                      </div>
                      <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">Pipeline</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">34</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Oportunidades</p>
                    <p className="text-orange-600 dark:text-orange-400 text-xs mt-2">R$ 1.2M em potencial</p>
                  </div>
                </div>

                {/* Sales Performance and Opportunities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Top Performers</h3>
                    <div className="space-y-4">
                      {topPerformers.map((performer, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">{performer.nome.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-slate-100">{performer.nome}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{performer.deals} deals fechados</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{performer.vendas}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              parseInt(performer.metas) >= 100 
                                ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                                : 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400'
                            }`}>
                              {performer.metas} meta
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Oportunidades Quentes</h3>
                    <div className="space-y-4">
                      {recentOpportunities.map((opp) => (
                        <div key={opp.id} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-lg border-l-4 border-green-500">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-slate-900 dark:text-slate-100">{opp.cliente}</h4>
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">{opp.valor}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <div>
                              <span className="font-medium">Etapa:</span> {opp.etapa}
                            </div>
                            <div>
                              <span className="font-medium">Prob:</span> {opp.probabilidade}
                            </div>
                            <div>
                              <span className="font-medium">Prazo:</span> {opp.prazo}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            <i className="fas fa-user mr-1"></i>
                            {opp.vendedor}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Atividades Recentes</h3>
                  <div className="space-y-3">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.tipo === 'call' ? 'bg-blue-100 dark:bg-blue-900/20' :
                          activity.tipo === 'email' ? 'bg-purple-100 dark:bg-purple-900/20' :
                          activity.tipo === 'meeting' ? 'bg-orange-100 dark:bg-orange-900/20' :
                          'bg-green-100 dark:bg-green-900/20'
                        }`}>
                          <i className={`${
                            activity.tipo === 'call' ? 'fas fa-phone text-blue-600 dark:text-blue-400' :
                            activity.tipo === 'email' ? 'fas fa-envelope text-purple-600 dark:text-purple-400' :
                            activity.tipo === 'meeting' ? 'fas fa-calendar text-orange-600 dark:text-orange-400' :
                            'fas fa-handshake text-green-600 dark:text-green-400'
                          }`}></i>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-slate-100">{activity.acao}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {activity.cliente} • {activity.vendedor}
                          </p>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{activity.tempo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedModule === 'leads' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão de Leads</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-user-plus text-4xl text-blue-600 dark:text-blue-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Captação de Leads</h3>
                  <p className="text-slate-600 dark:text-slate-400">Sistema completo de captura, qualificação e distribuição de leads.</p>
                </div>
              </div>
            )}

            {selectedModule === 'pipeline' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Pipeline de Vendas</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-chart-line text-4xl text-purple-600 dark:text-purple-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Funil de Vendas</h3>
                  <p className="text-slate-600 dark:text-slate-400">Acompanhe o progresso de cada oportunidade através do funil de vendas.</p>
                </div>
              </div>
            )}

            {selectedModule === 'clientes' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão de Clientes</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-heart text-4xl text-pink-600 dark:text-pink-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Relacionamento com Clientes</h3>
                  <p className="text-slate-600 dark:text-slate-400">Mantenha histórico completo e fortaleça o relacionamento com seus clientes.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}