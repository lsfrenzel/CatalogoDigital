import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function DemoInventory() {
  const [selectedModule, setSelectedModule] = useState('dashboard');

  const inventoryData = {
    totalItens: "12.847",
    valorEstoque: "R$ 2.456.780",
    produtosAtivos: "2.543",
    alertasEstoque: 23,
    entradas: "456",
    saidas: "389",
    rotatividade: "4.2x"
  };

  const lowStockItems = [
    { codigo: "TEC001", produto: "Notebook Dell XPS 13", categoria: "Eletrônicos", estoque: 5, minimo: 15, fornecedor: "Dell Inc", status: "crítico" },
    { codigo: "OFF032", produto: "Cadeira Ergonômica Pro", categoria: "Mobiliário", estoque: 8, minimo: 20, fornecedor: "Móveis SA", status: "baixo" },
    { codigo: "TEC045", produto: "Monitor LG 27\" 4K", categoria: "Eletrônicos", estoque: 3, minimo: 12, fornecedor: "LG Electronics", status: "crítico" },
    { codigo: "SUP012", produto: "Papel A4 Sulfite", categoria: "Suprimentos", estoque: 12, minimo: 50, fornecedor: "Papelaria Central", status: "baixo" }
  ];

  const recentMovements = [
    { tipo: "entrada", produto: "Notebook Lenovo ThinkPad", quantidade: 25, valor: "R$ 125.000", data: "13/11", responsavel: "João Silva" },
    { tipo: "saida", produto: "Mouse Logitech MX Master", quantidade: 15, valor: "R$ 3.750", data: "13/11", responsavel: "Sistema" },
    { tipo: "entrada", produto: "Teclado Mecânico", quantidade: 30, valor: "R$ 9.000", data: "12/11", responsavel: "Maria Santos" },
    { tipo: "saida", produto: "Fone de Ouvido Sony", quantidade: 8, valor: "R$ 2.400", data: "12/11", responsavel: "Pedro Costa" }
  ];

  const topCategories = [
    { categoria: "Eletrônicos", itens: 847, valor: "R$ 1.234.500", rotatividade: "5.2x" },
    { categoria: "Mobiliário", itens: 234, valor: "R$ 456.780", rotatividade: "2.1x" },
    { categoria: "Suprimentos", itens: 567, valor: "R$ 123.450", rotatividade: "8.7x" },
    { categoria: "Equipamentos", itens: 189, valor: "R$ 345.670", rotatividade: "3.4x" }
  ];

  const suppliers = [
    { nome: "Dell Inc", produtos: 45, valorTotal: "R$ 567.890", prazoMedio: "15 dias", rating: 4.8 },
    { nome: "HP Enterprise", produtos: 32, valorTotal: "R$ 234.560", prazoMedio: "12 dias", rating: 4.5 },
    { nome: "Lenovo Group", produtos: 28, valorTotal: "R$ 345.670", prazoMedio: "18 dias", rating: 4.7 },
    { nome: "Samsung Corp", produtos: 52, valorTotal: "R$ 456.780", prazoMedio: "14 dias", rating: 4.6 }
  ];

  const warehouses = [
    { nome: "Galpão Principal", localizacao: "São Paulo - SP", capacidade: "85%", itens: 8947, valor: "R$ 1.890.000" },
    { nome: "Centro de Distribuição", localizacao: "Rio de Janeiro - RJ", capacidade: "62%", itens: 3245, valor: "R$ 567.000" },
    { nome: "Depósito Zona Norte", localizacao: "Belo Horizonte - MG", capacidade: "78%", itens: 655, valor: "R$ 234.000" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 dark:from-slate-900 dark:to-slate-800">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/sistema/inventory"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar
                </Link>
                <div className="w-px h-6 bg-slate-400 dark:bg-slate-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">StockControl Pro - TechSolutions</h1>
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-circle text-slate-600 mr-2 text-xs"></i>
                Sistema Industrial
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 min-h-screen shadow-lg">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-zinc-700 rounded-lg flex items-center justify-center">
                  <i className="fas fa-boxes text-white"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">StockControl</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Pro Industrial</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedModule('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'dashboard' 
                      ? 'bg-gradient-to-r from-slate-600 to-zinc-700 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-tachometer-alt w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('estoque')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'estoque' 
                      ? 'bg-gradient-to-r from-slate-600 to-zinc-700 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-warehouse w-4"></i>
                  <span>Estoque</span>
                </button>
                <button
                  onClick={() => setSelectedModule('movimentacoes')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'movimentacoes' 
                      ? 'bg-gradient-to-r from-slate-600 to-zinc-700 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-exchange-alt w-4"></i>
                  <span>Movimentações</span>
                </button>
                <button
                  onClick={() => setSelectedModule('fornecedores')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'fornecedores' 
                      ? 'bg-gradient-to-r from-slate-600 to-zinc-700 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-truck w-4"></i>
                  <span>Fornecedores</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-gradient-to-br from-slate-100 to-zinc-100 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Status Operacional</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-zinc-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">S</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Sistema Ativo</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">24/7 Monitoramento</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-300 dark:border-slate-500">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Última Sincronização</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Agora</span>
                    <span className="text-xs text-green-600 dark:text-green-400">Online</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 raleway">Dashboard de Estoque</h2>
                  <p className="text-slate-600 dark:text-slate-400">Controle geral do inventário e movimentações</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-cubes text-white"></i>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">+{inventoryData.entradas}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{inventoryData.totalItens}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Total de Itens</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-dollar-sign text-white"></i>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">+12.5%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{inventoryData.valorEstoque}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Valor do Estoque</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                      <span className="text-red-600 dark:text-red-400 text-sm font-medium">Urgente</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{inventoryData.alertasEstoque}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Alertas de Estoque</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-sync-alt text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{inventoryData.rotatividade}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Rotatividade Média</p>
                    <p className="text-purple-600 dark:text-purple-400 text-xs mt-2">Por ano</p>
                  </div>
                </div>

                {/* Low Stock and Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Estoque Baixo</h3>
                    <div className="space-y-4">
                      {lowStockItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{item.produto}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.codigo} • {item.categoria}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{item.fornecedor}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{item.estoque} unidades</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.status === 'crítico' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                              'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400'
                            }`}>
                              {item.status === 'crítico' ? 'Crítico' : 'Baixo'}
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Mín: {item.minimo}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Categorias Principais</h3>
                    <div className="space-y-4">
                      {topCategories.map((cat, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{cat.categoria}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{cat.itens} itens</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{cat.valor}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Giro: {cat.rotatividade}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Movements and Warehouses */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Movimentações Recentes</h3>
                    <div className="space-y-3">
                      {recentMovements.map((mov, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            mov.tipo === 'entrada' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                          }`}>
                            <i className={`${
                              mov.tipo === 'entrada' ? 'fas fa-arrow-down text-green-600 dark:text-green-400' : 'fas fa-arrow-up text-red-600 dark:text-red-400'
                            }`}></i>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 dark:text-slate-100">{mov.produto}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {mov.quantidade} unidades • {mov.responsavel} • {mov.data}
                            </p>
                          </div>
                          <span className={`font-semibold ${
                            mov.tipo === 'entrada' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}>
                            {mov.valor}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Centros de Distribuição</h3>
                    <div className="space-y-4">
                      {warehouses.map((warehouse, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-slate-50 to-zinc-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-slate-900 dark:text-slate-100">{warehouse.nome}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              parseInt(warehouse.capacidade) > 80 ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                              parseInt(warehouse.capacidade) > 60 ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400' :
                              'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                            }`}>
                              {warehouse.capacidade} ocupação
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{warehouse.localizacao}</p>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">{warehouse.itens.toLocaleString()} itens</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">{warehouse.valor}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedModule === 'estoque' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Controle de Estoque</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-warehouse text-4xl text-slate-600 dark:text-slate-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Gestão de Inventário</h3>
                  <p className="text-slate-600 dark:text-slate-400">Controle completo de produtos, localização e movimentações.</p>
                </div>
              </div>
            )}

            {selectedModule === 'movimentacoes' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Movimentações</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-exchange-alt text-4xl text-zinc-600 dark:text-zinc-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Entrada e Saída</h3>
                  <p className="text-slate-600 dark:text-slate-400">Registro completo de todas as movimentações de estoque.</p>
                </div>
              </div>
            )}

            {selectedModule === 'fornecedores' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão de Fornecedores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {suppliers.map((supplier, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{supplier.nome}</h3>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star text-sm ${
                              i < Math.floor(supplier.rating) ? 'text-yellow-500' : 'text-slate-300 dark:text-slate-600'
                            }`}></i>
                          ))}
                          <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">{supplier.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Produtos:</span>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{supplier.produtos}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Valor Total:</span>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{supplier.valorTotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Prazo Médio:</span>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{supplier.prazoMedio}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}