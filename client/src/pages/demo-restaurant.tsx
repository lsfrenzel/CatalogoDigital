import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function DemoRestaurant() {
  const [selectedModule, setSelectedModule] = useState('dashboard');

  const restaurantData = {
    vendas: "R$ 23.847",
    pedidos: 87,
    mesa: 24,
    garcons: 8,
    pratos: 45,
    tempo: "18min"
  };

  const mesas = [
    { numero: 1, status: "ocupada", garcom: "Maria", pedido: "R$ 145", tempo: "25min", pessoas: 4 },
    { numero: 2, status: "livre", garcom: "-", pedido: "-", tempo: "-", pessoas: 0 },
    { numero: 3, status: "reservada", garcom: "João", pedido: "-", tempo: "19:30", pessoas: 2 },
    { numero: 4, status: "ocupada", garcom: "Ana", pedido: "R$ 89", tempo: "10min", pessoas: 3 },
    { numero: 5, status: "ocupada", garcom: "Carlos", pedido: "R$ 234", tempo: "35min", pessoas: 6 },
    { numero: 6, status: "livre", garcom: "-", pedido: "-", tempo: "-", pessoas: 0 },
    { numero: 7, status: "conta", garcom: "Maria", pedido: "R$ 167", tempo: "Finalizada", pessoas: 2 },
    { numero: 8, status: "ocupada", garcom: "Pedro", pedido: "R$ 98", tempo: "15min", pessoas: 4 }
  ];

  const pratosPopulares = [
    { nome: "Salmão Grelhado", categoria: "Prato Principal", vendas: 23, valor: "R$ 48,90" },
    { nome: "Risotto de Funghi", categoria: "Prato Principal", vendas: 18, valor: "R$ 42,50" },
    { nome: "Tiramisu da Casa", categoria: "Sobremesa", vendas: 31, valor: "R$ 16,90" },
    { nome: "Bruschetta Especial", categoria: "Entrada", vendas: 42, valor: "R$ 18,50" }
  ];

  const pedidosCozinha = [
    { mesa: 1, item: "Salmão Grelhado", quantidade: 2, tempo: "8min", status: "preparando", prioridade: "normal" },
    { mesa: 4, item: "Risotto de Funghi", quantidade: 1, tempo: "12min", status: "preparando", prioridade: "normal" },
    { mesa: 5, item: "Bruschetta Especial", quantidade: 3, tempo: "5min", status: "pronto", prioridade: "alta" },
    { mesa: 8, item: "Tiramisu da Casa", quantidade: 2, tempo: "3min", status: "pronto", prioridade: "normal" },
    { mesa: 1, item: "Vinho Tinto", quantidade: 1, tempo: "Imediato", status: "pendente", prioridade: "baixa" }
  ];

  const funcionarios = [
    { nome: "Maria Silva", cargo: "Garçom", mesas: [1, 7], vendas: "R$ 456", status: "ativa" },
    { nome: "João Santos", cargo: "Garçom", mesas: [3], vendas: "R$ 123", status: "pausa" },
    { nome: "Ana Costa", cargo: "Garçom", mesas: [4], vendas: "R$ 289", status: "ativa" },
    { nome: "Carlos Lima", cargo: "Garçom", mesas: [5], vendas: "R$ 567", status: "ativa" },
    { nome: "Pedro Oliveira", cargo: "Garçom", mesas: [8], vendas: "R$ 198", status: "ativa" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-orange-200 dark:border-slate-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/sistema/restaurant"
                  className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar
                </Link>
                <div className="w-px h-6 bg-orange-300 dark:bg-slate-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">RestaurantOS - Bella Vista</h1>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-circle text-orange-500 mr-2 text-xs"></i>
                Sistema em Funcionamento
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-orange-200 dark:border-slate-700 min-h-screen shadow-lg">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-utensils text-white"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">RestaurantOS</h2>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Bella Vista</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedModule('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'dashboard' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-tachometer-alt w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('mesas')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'mesas' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chair w-4"></i>
                  <span>Mesas</span>
                </button>
                <button
                  onClick={() => setSelectedModule('cozinha')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'cozinha' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-fire w-4"></i>
                  <span>Cozinha</span>
                </button>
                <button
                  onClick={() => setSelectedModule('cardapio')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'cardapio' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-book-open w-4"></i>
                  <span>Cardápio</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-gradient-to-br from-orange-100 to-red-100 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Turno Atual</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">J</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Jantar</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400">19:30 - 23:00</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-orange-200 dark:border-slate-500">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Ocupação</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">68%</span>
                    <span className="text-xs text-green-600 dark:text-green-400">24 mesas</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 raleway">Dashboard do Restaurante</h2>
                  <p className="text-slate-600 dark:text-slate-400">Visão geral das operações do turno atual</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-dollar-sign text-white"></i>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">+18.5%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{restaurantData.vendas}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Vendas do Turno</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-receipt text-white"></i>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">+{restaurantData.pedidos}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{restaurantData.pedidos}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Pedidos Atendidos</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chair text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{restaurantData.mesa}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Mesas Disponíveis</p>
                    <p className="text-orange-600 dark:text-orange-400 text-xs mt-2">68% ocupação</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <i className="fas fa-clock text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{restaurantData.tempo}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Tempo Médio</p>
                    <p className="text-purple-600 dark:text-purple-400 text-xs mt-2">Por pedido</p>
                  </div>
                </div>

                {/* Popular Items and Staff */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Pratos Populares Hoje</h3>
                    <div className="space-y-4">
                      {pratosPopulares.map((prato, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{prato.nome}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{prato.categoria}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{prato.vendas} vendas</p>
                            <p className="text-sm text-orange-600 dark:text-orange-400">{prato.valor}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Equipe em Serviço</h3>
                    <div className="space-y-4">
                      {funcionarios.map((funcionario, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">{funcionario.nome.split(' ')[0][0]}</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-slate-100">{funcionario.nome}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                Mesas: {funcionario.mesas.length > 0 ? funcionario.mesas.join(', ') : 'Nenhuma'}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{funcionario.vendas}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              funcionario.status === 'ativa' 
                                ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                                : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                            }`}>
                              {funcionario.status === 'ativa' ? 'Ativo' : 'Pausa'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Kitchen Orders */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Pedidos na Cozinha</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pedidosCozinha.map((pedido, index) => (
                      <div key={index} className={`p-4 rounded-lg border-l-4 ${
                        pedido.status === 'pronto' ? 'bg-green-50 dark:bg-green-900/10 border-green-500' :
                        pedido.status === 'preparando' ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-500' :
                        'bg-blue-50 dark:bg-blue-900/10 border-blue-500'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-900 dark:text-slate-100">Mesa {pedido.mesa}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            pedido.status === 'pronto' ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200' :
                            pedido.status === 'preparando' ? 'bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200' :
                            'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200'
                          }`}>
                            {pedido.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-900 dark:text-slate-100 font-medium">{pedido.item}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Qtd: {pedido.quantidade}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          <i className="fas fa-clock mr-1"></i>
                          {pedido.tempo}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedModule === 'mesas' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Controle de Mesas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mesas.map((mesa) => (
                    <div key={mesa.numero} className={`p-4 rounded-xl border-2 ${
                      mesa.status === 'ocupada' ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800' :
                      mesa.status === 'livre' ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800' :
                      mesa.status === 'reservada' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800' :
                      'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Mesa {mesa.numero}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          mesa.status === 'ocupada' ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200' :
                          mesa.status === 'livre' ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200' :
                          mesa.status === 'reservada' ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' :
                          'bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200'
                        }`}>
                          {mesa.status}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                        <p><strong>Garçom:</strong> {mesa.garcom}</p>
                        <p><strong>Pedido:</strong> {mesa.pedido}</p>
                        <p><strong>Tempo:</strong> {mesa.tempo}</p>
                        <p><strong>Pessoas:</strong> {mesa.pessoas || '-'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedModule === 'cozinha' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Dashboard da Cozinha</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-fire text-4xl text-orange-600 dark:text-orange-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Central da Cozinha</h3>
                  <p className="text-slate-600 dark:text-slate-400">Gestão completa dos pedidos, timing e preparos.</p>
                </div>
              </div>
            )}

            {selectedModule === 'cardapio' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão do Cardápio</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-book-open text-4xl text-red-600 dark:text-red-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Menu Digital</h3>
                  <p className="text-slate-600 dark:text-slate-400">Controle de pratos, ingredientes, preços e disponibilidade.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}