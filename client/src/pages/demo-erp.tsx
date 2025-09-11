import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function DemoERP() {
  const [selectedModule, setSelectedModule] = useState('dashboard');

  const dashboardData = {
    vendas: {
      total: "R$ 2.847.650",
      variacao: "+15.3%",
      meta: "85%"
    },
    pedidos: {
      total: "1.247",
      variacao: "+8.7%",
      pendentes: "23"
    },
    estoque: {
      valor: "R$ 456.780",
      produtos: "2.543",
      alertas: "12"
    },
    financeiro: {
      saldo: "R$ 387.920",
      receber: "R$ 145.600",
      pagar: "R$ 89.340"
    }
  };

  const recentSales = [
    { id: "#12847", cliente: "TechCorp Ltda", valor: "R$ 15.450", status: "Pago", data: "Hoje" },
    { id: "#12846", cliente: "Innovation Hub", valor: "R$ 8.920", status: "Pendente", data: "Ontem" },
    { id: "#12845", cliente: "Digital Solutions", valor: "R$ 22.100", status: "Pago", data: "02/11" },
    { id: "#12844", cliente: "StartupXYZ", valor: "R$ 5.670", status: "Atrasado", data: "01/11" }
  ];

  const stockAlerts = [
    { produto: "Notebook Dell XPS", categoria: "Hardware", estoque: 5, minimo: 10, status: "baixo" },
    { produto: "Mouse Logitech MX", categoria: "Periféricos", estoque: 2, minimo: 15, status: "crítico" },
    { produto: "Monitor LG 24\"", categoria: "Monitores", estoque: 8, minimo: 12, status: "baixo" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/sistema/erp"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar
                </Link>
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">ERP Demo - Sistema Empresarial</h1>
              </div>
              <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-circle text-green-500 mr-2 text-xs"></i>
                Ambiente de Demonstração
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">Sistema ERP</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Versão 2.1.0</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedModule('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'dashboard' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-tachometer-alt w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('vendas')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'vendas' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chart-line w-4"></i>
                  <span>Vendas</span>
                </button>
                <button
                  onClick={() => setSelectedModule('estoque')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'estoque' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-boxes w-4"></i>
                  <span>Estoque</span>
                </button>
                <button
                  onClick={() => setSelectedModule('financeiro')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'financeiro' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-calculator w-4"></i>
                  <span>Financeiro</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Usuário Logado</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">AD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Admin Demo</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Gerente Geral</p>
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 raleway">Dashboard Executivo</h2>
                  <p className="text-slate-600 dark:text-slate-400">Visão geral do desempenho da empresa</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-line text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">{dashboardData.vendas.variacao}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{dashboardData.vendas.total}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Vendas do Mês</p>
                    <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: dashboardData.vendas.meta}}></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{dashboardData.vendas.meta} da meta</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-shopping-cart text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{dashboardData.pedidos.variacao}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{dashboardData.pedidos.total}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Pedidos Processados</p>
                    <p className="text-orange-600 dark:text-orange-400 text-xs mt-2">
                      <i className="fas fa-clock mr-1"></i>
                      {dashboardData.pedidos.pendentes} pendentes
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-boxes text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <span className="text-red-600 dark:text-red-400 text-sm font-medium">{dashboardData.estoque.alertas} alertas</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{dashboardData.estoque.valor}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Valor em Estoque</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">{dashboardData.estoque.produtos} produtos</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-wallet text-emerald-600 dark:text-emerald-400"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{dashboardData.financeiro.saldo}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Saldo em Caixa</p>
                    <div className="flex justify-between text-xs mt-2">
                      <span className="text-green-600 dark:text-green-400">+{dashboardData.financeiro.receber}</span>
                      <span className="text-red-600 dark:text-red-400">-{dashboardData.financeiro.pagar}</span>
                    </div>
                  </div>
                </div>

                {/* Recent Sales and Stock Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Vendas Recentes</h3>
                    <div className="space-y-4">
                      {recentSales.map((sale) => (
                        <div key={sale.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{sale.cliente}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{sale.id} • {sale.data}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{sale.valor}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              sale.status === 'Pago' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' :
                              sale.status === 'Pendente' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400' :
                              'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                            }`}>
                              {sale.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Alertas de Estoque</h3>
                    <div className="space-y-4">
                      {stockAlerts.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{item.produto}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.categoria}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{item.estoque} unidades</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.status === 'crítico' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                              'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                            }`}>
                              {item.status === 'crítico' ? 'Crítico' : 'Baixo'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedModule === 'vendas' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Módulo de Vendas</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 text-center">
                  <i className="fas fa-chart-line text-4xl text-blue-600 dark:text-blue-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Módulo de Vendas</h3>
                  <p className="text-slate-600 dark:text-slate-400">Funcionalidades completas de gestão de vendas em desenvolvimento para esta demo.</p>
                </div>
              </div>
            )}

            {selectedModule === 'estoque' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Controle de Estoque</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 text-center">
                  <i className="fas fa-boxes text-4xl text-purple-600 dark:text-purple-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Gestão de Estoque</h3>
                  <p className="text-slate-600 dark:text-slate-400">Controle completo de inventário, movimentações e relatórios em desenvolvimento.</p>
                </div>
              </div>
            )}

            {selectedModule === 'financeiro' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Módulo Financeiro</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 text-center">
                  <i className="fas fa-calculator text-4xl text-emerald-600 dark:text-emerald-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Gestão Financeira</h3>
                  <p className="text-slate-600 dark:text-slate-400">Fluxo de caixa, contas a pagar/receber e relatórios financeiros completos.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}