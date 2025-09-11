import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function DemoEducation() {
  const [selectedModule, setSelectedModule] = useState('dashboard');

  const educationData = {
    totalAlunos: "2.847",
    alunosAtivos: "2.543",
    cursosDisponiveis: 45,
    professorAtivos: 127,
    aulasHoje: 23,
    avaliacoesPendentes: 156,
    taxaConclusao: "87.3%"
  };

  const recentStudents = [
    { nome: "Ana Silva", curso: "Engenharia de Software", progresso: "78%", ultimoAcesso: "2h atrás", status: "ativo" },
    { nome: "Carlos Santos", curso: "Marketing Digital", progresso: "92%", ultimoAcesso: "30min atrás", status: "ativo" },
    { nome: "Maria Costa", curso: "Design Gráfico", progresso: "45%", ultimoAcesso: "1 dia atrás", status: "ausente" },
    { nome: "Pedro Lima", curso: "Administração", progresso: "67%", ultimoAcesso: "5h atrás", status: "ativo" }
  ];

  const todayClasses = [
    { 
      horario: "09:00", 
      disciplina: "Algoritmos e Estruturas de Dados", 
      professor: "Prof. João Silva", 
      alunos: 28, 
      sala: "Virtual - Sala 01",
      status: "concluida"
    },
    { 
      horario: "14:00", 
      disciplina: "Marketing Estratégico", 
      professor: "Prof. Ana Costa", 
      alunos: 35, 
      sala: "Virtual - Sala 02",
      status: "em_andamento"
    },
    { 
      horario: "16:30", 
      disciplina: "Design Thinking", 
      professor: "Prof. Maria Santos", 
      alunos: 22, 
      sala: "Virtual - Sala 03",
      status: "agendada"
    },
    { 
      horario: "19:00", 
      disciplina: "Gestão de Projetos", 
      professor: "Prof. Carlos Lima", 
      alunos: 41, 
      sala: "Virtual - Sala 04",
      status: "agendada"
    }
  ];

  const topCourses = [
    { nome: "Engenharia de Software", alunos: 487, conclusao: "89%", avaliacao: 4.8, categoria: "Tecnologia" },
    { nome: "Marketing Digital", alunos: 356, conclusao: "92%", avaliacao: 4.7, categoria: "Marketing" },
    { nome: "Design Gráfico", alunos: 298, conclusao: "85%", avaliacao: 4.6, categoria: "Design" },
    { nome: "Administração", alunos: 423, conclusao: "88%", avaliacao: 4.5, categoria: "Negócios" }
  ];

  const assignments = [
    { titulo: "Projeto Final - Sistema Web", curso: "Engenharia de Software", prazo: "15/11/2024", entregas: 28, total: 35, professor: "Prof. João Silva" },
    { titulo: "Análise de Mercado", curso: "Marketing Digital", prazo: "18/11/2024", entregas: 31, total: 35, professor: "Prof. Ana Costa" },
    { titulo: "Portfolio Criativo", curso: "Design Gráfico", prazo: "20/11/2024", entregas: 15, total: 22, professor: "Prof. Maria Santos" },
    { titulo: "Plano de Negócios", curso: "Administração", prazo: "25/11/2024", entregas: 23, total: 41, professor: "Prof. Carlos Lima" }
  ];

  const recentActivities = [
    { tipo: "entrega", acao: "Projeto entregue", aluno: "Ana Silva", curso: "Engenharia de Software", tempo: "15 min atrás" },
    { tipo: "aula", acao: "Aula iniciada", professor: "Prof. Ana Costa", curso: "Marketing Digital", tempo: "1h atrás" },
    { tipo: "avaliacao", acao: "Prova concluída", aluno: "Carlos Santos", curso: "Marketing Digital", tempo: "2h atrás" },
    { tipo: "mensagem", acao: "Mensagem enviada", professor: "Prof. João Silva", curso: "Engenharia de Software", tempo: "3h atrás" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-indigo-200 dark:border-slate-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/sistema/education"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar
                </Link>
                <div className="w-px h-6 bg-indigo-300 dark:bg-slate-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">EduPlatform - TechSolutions</h1>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-circle text-indigo-500 mr-2 text-xs"></i>
                Ambiente Acadêmico
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-indigo-200 dark:border-slate-700 min-h-screen shadow-lg">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">EduPlatform</h2>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">Learning Management</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedModule('dashboard')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'dashboard' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-chart-pie w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('alunos')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'alunos' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-users w-4"></i>
                  <span>Alunos</span>
                </button>
                <button
                  onClick={() => setSelectedModule('cursos')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'cursos' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-book w-4"></i>
                  <span>Cursos</span>
                </button>
                <button
                  onClick={() => setSelectedModule('avaliacoes')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'avaliacoes' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <i className="fas fa-clipboard-check w-4"></i>
                  <span>Avaliações</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Período Letivo</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">2º Semestre 2024</p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400">Novembro</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-indigo-200 dark:border-slate-500">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Progresso Médio</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">87.3%</span>
                    <span className="text-xs text-green-600 dark:text-green-400">+5.2%</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 raleway">Dashboard Acadêmico</h2>
                  <p className="text-slate-600 dark:text-slate-400">Visão geral das atividades educacionais</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-user-graduate text-white"></i>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">+127</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{educationData.totalAlunos}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Total de Alunos</p>
                    <p className="text-blue-600 dark:text-blue-400 text-xs mt-2">{educationData.alunosAtivos} ativos</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-book-open text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{educationData.cursosDisponiveis}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Cursos Disponíveis</p>
                    <p className="text-purple-600 dark:text-purple-400 text-xs mt-2">{educationData.professorAtivos} professores</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chalkboard-teacher text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{educationData.aulasHoje}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Aulas Hoje</p>
                    <p className="text-green-600 dark:text-green-400 text-xs mt-2">4 em andamento</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-clipboard-check text-white"></i>
                      </div>
                      <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">Pendente</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{educationData.avaliacoesPendentes}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Avaliações</p>
                    <p className="text-orange-600 dark:text-orange-400 text-xs mt-2">Para correção</p>
                  </div>
                </div>

                {/* Today's Classes and Student Progress */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Aulas de Hoje</h3>
                    <div className="space-y-4">
                      {todayClasses.map((aula, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{aula.disciplina}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{aula.professor} • {aula.alunos} alunos</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{aula.sala}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{aula.horario}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              aula.status === 'concluida' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' :
                              aula.status === 'em_andamento' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' :
                              'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400'
                            }`}>
                              {aula.status === 'concluida' ? 'Concluída' :
                               aula.status === 'em_andamento' ? 'Em Andamento' :
                               'Agendada'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Atividade dos Alunos</h3>
                    <div className="space-y-4">
                      {recentStudents.map((aluno, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">{aluno.nome.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-slate-100">{aluno.nome}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{aluno.curso}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{aluno.progresso}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{aluno.ultimoAcesso}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              aluno.status === 'ativo' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' :
                              'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                            }`}>
                              {aluno.status === 'ativo' ? 'Ativo' : 'Ausente'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Courses and Assignments */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Cursos Populares</h3>
                    <div className="space-y-4">
                      {topCourses.map((curso, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{curso.nome}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{curso.categoria} • {curso.alunos} alunos</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fas fa-star text-xs ${
                                  i < Math.floor(curso.avaliacao) ? 'text-yellow-500' : 'text-slate-300 dark:text-slate-600'
                                }`}></i>
                              ))}
                              <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">{curso.avaliacao}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{curso.conclusao}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Taxa de conclusão</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 raleway">Atividades Recentes</h3>
                    <div className="space-y-3">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.tipo === 'entrega' ? 'bg-green-100 dark:bg-green-900/20' :
                            activity.tipo === 'aula' ? 'bg-blue-100 dark:bg-blue-900/20' :
                            activity.tipo === 'avaliacao' ? 'bg-purple-100 dark:bg-purple-900/20' :
                            'bg-orange-100 dark:bg-orange-900/20'
                          }`}>
                            <i className={`${
                              activity.tipo === 'entrega' ? 'fas fa-upload text-green-600 dark:text-green-400' :
                              activity.tipo === 'aula' ? 'fas fa-play text-blue-600 dark:text-blue-400' :
                              activity.tipo === 'avaliacao' ? 'fas fa-check text-purple-600 dark:text-purple-400' :
                              'fas fa-envelope text-orange-600 dark:text-orange-400'
                            }`}></i>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 dark:text-slate-100">{activity.acao}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {activity.aluno || activity.professor} • {activity.curso}
                            </p>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{activity.tempo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedModule === 'alunos' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão de Alunos</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-users text-4xl text-indigo-600 dark:text-indigo-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Portal do Aluno</h3>
                  <p className="text-slate-600 dark:text-slate-400">Gerenciamento completo de matrículas, notas e acompanhamento acadêmico.</p>
                </div>
              </div>
            )}

            {selectedModule === 'cursos' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Gestão de Cursos</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-8 text-center">
                  <i className="fas fa-book text-4xl text-purple-600 dark:text-purple-400 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Catálogo de Cursos</h3>
                  <p className="text-slate-600 dark:text-slate-400">Criação e gerenciamento de cursos, disciplinas e conteúdo educacional.</p>
                </div>
              </div>
            )}

            {selectedModule === 'avaliacoes' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 raleway">Centro de Avaliações</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{assignment.titulo}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{assignment.curso} • {assignment.professor}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Prazo:</span>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{assignment.prazo}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Entregas:</span>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{assignment.entregas}/{assignment.total}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" 
                            style={{width: `${(assignment.entregas / assignment.total) * 100}%`}}
                          ></div>
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