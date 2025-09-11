import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function DemoFinancial() {
  const [selectedModule, setSelectedModule] = useState('dashboard');

  const financialData = {
    saldoTotal: "R$ 2.847.650",
    receitasMes: "R$ 456.780",
    despesasMes: "R$ 234.560",
    lucroLiquido: "R$ 222.220",
    contasReceber: "R$ 145.600",
    contasPagar: "R$ 89.340",
    fluxoCaixa: "+15.3%"
  };

  const contasReceber = [
    { cliente: "TechCorp Ltda", valor: "R$ 45.000", vencimento: "15/11/2024", status: "vencendo", dias: 2 },
    { cliente: "Innovation Hub", valor: "R$ 28.900", vencimento: "20/11/2024", status: "normal", dias: 7 },
    { cliente: "Digital Solutions", valor: "R$ 67.500", vencimento: "25/11/2024", status: "normal", dias: 12 },
    { cliente: "StartupXYZ", valor: "R$ 15.670", vencimento: "10/11/2024", status: "vencido", dias: -3 }
  ];

  const contasPagar = [
    { fornecedor: "Energia Elétrica", valor: "R$ 3.450", vencimento: "18/11/2024", status: "vencendo", categoria: "Utilities" },
    { fornecedor: "Telefonia/Internet", valor: "R$ 1.890", vencimento: "22/11/2024", status: "normal", categoria: "Telecomunicações" },
    { fornecedor: "Aluguel Escritório", valor: "R$ 12.000", vencimento: "30/11/2024", status: "normal", categoria: "Imóveis" },
    { fornecedor: "Fornecedor ABC", valor: "R$ 8.750", vencimento: "12/11/2024", status: "vencido", categoria: "Suprimentos" }
  ];

  const movimentacoes = [
    { tipo: "entrada", descricao: "Pagamento - TechCorp Ltda", valor: "R$ 45.000", data: "13/11", categoria: "Vendas" },
    { tipo: "saida", descricao: "Pagamento Salários", valor: "R$ 28.500", data: "10/11", categoria: "Folha de Pagamento" },
    { tipo: "entrada", descricao: "Transferência Bancária", valor: "R$ 12.300", data: "08/11", categoria: "Transferências" },
    { tipo: "saida", descricao: "Fornecedor Material", valor: "R$ 5.670", data: "07/11", categoria: "Compras" }
  ];

  const indicators = [
    { nome: "ROI", valor: "23.5%", variacao: "+2.1%", status: "up" },
    { nome: "Margem Líquida", valor: "18.7%", variacao: "+1.3%", status: "up" },
    { nome: "Liquidez Corrente", valor: "2.4", variacao: "-0.2", status: "down" },
    { nome: "Giro do Ativo", valor: "1.8", variacao: "+0.1", status: "up" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-emerald-200 dark:border-slate-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/sistema/financial"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar
                </Link>
                <div className="w-px h-6 bg-emerald-300 dark:bg-slate-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">FinanceMax - TechSolutions</h1>
              </div>
              <div className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-circle text-emerald-500 mr-2 text-xs"></i>
                Sistema Contábil
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-emerald-200 dark:border-slate-700 min-h-screen shadow-lg">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-bar text-white"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">FinanceMax</h2>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">Contabilidade Pro</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedModule('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'dashboard' 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chart-pie w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('fluxo')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'fluxo' 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-exchange-alt w-4"></i>
                  <span>Fluxo de Caixa</span>
                </button>
                <button
                  onClick={() => setSelectedModule('contas')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'contas' 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-file-invoice-dollar w-4"></i>
                  <span>Contas</span>
                </button>
                <button
                  onClick={() => setSelectedModule('relatorios')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'relatorios' 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chart-line w-4"></i>
                  <span>Relatórios</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Período Fiscal</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">N</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Novembro 2024</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">Regime de Competência</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-emerald-200 dark:border-slate-500">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Resultado</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">+15.3%</span>
                    <span className="text-xs text-green-600 dark:text-green-400">Positivo</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 raleway">Dashboard Financeiro</h2>
                  <p className="text-slate-600 dark:text-slate-400">Visão geral da situação financeira da empresa</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-wallet text-white"></i>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">{financialData.fluxoCaixa}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{financialData.saldoTotal}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Saldo Total</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-arrow-up text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{financialData.receitasMes}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Receitas do Mês</p>
                    <p className="text-blue-600 dark:text-blue-400 text-xs mt-2">
                      <i className="fas fa-plus mr-1"></i>
                      Entradas confirmadas
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-arrow-down text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{financialData.despesasMes}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Despesas do Mês</p>
                    <p className="text-red-600 dark:text-red-400 text-xs mt-2">
                      <i className="fas fa-minus mr-1"></i>
                      Saídas confirmadas
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-line text-white"></i>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">+23.5%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{financialData.lucroLiquido}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Lucro Líquido</p>
                  </div>
                </div>

                {/* Accounts Receivable and Payable */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Contas a Receber</h3>
                    <div className="space-y-4">
                      {contasReceber.map((conta, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{conta.cliente}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Venc: {conta.vencimento}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{conta.valor}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              conta.status === 'vencido' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                              conta.status === 'vencendo' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400' :
                              'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                            }`}>
                              {conta.status === 'vencido' ? `${Math.abs(conta.dias)}d atraso` :
                               conta.status === 'vencendo' ? `${conta.dias}d restantes` :
                               `${conta.dias}d restantes`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-slate-600">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-900 dark:text-slate-100">Total a Receber:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{financialData.contasReceber}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Contas a Pagar</h3>
                    <div className="space-y-4">
                      {contasPagar.map((conta, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{conta.fornecedor}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {conta.categoria} • Venc: {conta.vencimento}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{conta.valor}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              conta.status === 'vencido' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                              conta.status === 'vencendo' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400' :
                              'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                            }`}>
                              {conta.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-red-200 dark:border-slate-600">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-900 dark:text-slate-100">Total a Pagar:</span>
                        <span className="font-bold text-red-600 dark:text-red-400">{financialData.contasPagar}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Indicators and Recent Movements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Indicadores Financeiros</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {indicators.map((indicator, index) => (
                        <div key={index} className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 rounded-lg text-center">
                          <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{indicator.nome}</h4>
                          <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{indicator.valor}</p>
                          <div className={`flex items-center justify-center mt-1 ${
                            indicator.status === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}>
                            <i className={`fas fa-arrow-${indicator.status === 'up' ? 'up' : 'down'} text-xs mr-1`}></i>
                            <span className="text-xs">{indicator.variacao}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Movimentações Recentes</h3>
                    <div className="space-y-3">
                      {movimentacoes.map((mov, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 hover:bg-emerald-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            mov.tipo === 'entrada' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                          }`}>
                            <i className={`${
                              mov.tipo === 'entrada' ? 'fas fa-arrow-up text-green-600 dark:text-green-400' : 'fas fa-arrow-down text-red-600 dark:text-red-400'
                            }`}></i>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 dark:text-slate-100">{mov.descricao}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{mov.categoria} • {mov.data}</p>
                          </div>
                          <span className={`font-semibold ${
                            mov.tipo === 'entrada' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}>
                            {mov.tipo === 'entrada' ? '+' : '-'}{mov.valor}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedModule === 'fluxo' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Fluxo de Caixa</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-exchange-alt text-4xl text-emerald-600 dark:text-emerald-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Controle de Fluxo de Caixa</h3>
                  <p className="text-slate-600 dark:text-slate-400">Projeções, planejamento e análise de movimentações financeiras.</p>
                </div>
              </div>
            )}

            {selectedModule === 'contas' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão de Contas</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-file-invoice-dollar text-4xl text-teal-600 dark:text-teal-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Contas a Pagar e Receber</h3>
                  <p className="text-slate-600 dark:text-slate-400">Controle completo de faturas, pagamentos e recebimentos.</p>
                </div>
              </div>
            )}

            {selectedModule === 'relatorios' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Relatórios Financeiros</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-chart-line text-4xl text-cyan-600 dark:text-cyan-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Relatórios e Análises</h3>
                  <p className="text-slate-600 dark:text-slate-400">DRE, Balanço Patrimonial, análises de performance e muito mais.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}