import { useState, useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import CustomSystemsMessage from "@/components/CustomSystemsMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Student {
  id: number;
  nome: string;
  email: string;
  curso: string;
  progresso: number;
  ultimoAcesso: string;
  status: 'ativo' | 'inativo';
  nota: number;
}

interface Course {
  id: number;
  nome: string;
  categoria: string;
  alunos: number;
  professor: string;
  conclusao: number;
  avaliacao: number;
  status: 'ativo' | 'inativo';
}

interface Evaluation {
  id: number;
  titulo: string;
  curso: string;
  prazo: string;
  entregas: number;
  total: number;
  professor: string;
  status: 'pendente' | 'corrigida';
  nota_media: number;
}

export default function DemoEducation() {
  const [selectedModule, setSelectedModule] = useState('dashboard');
  const { toast } = useToast();

  // State for data management
  const [students, setStudents] = useState<Student[]>([
    { id: 1, nome: "Ana Silva", email: "ana.silva@email.com", curso: "Engenharia de Software", progresso: 78, ultimoAcesso: "2h atrás", status: "ativo", nota: 8.5 },
    { id: 2, nome: "Carlos Santos", email: "carlos.santos@email.com", curso: "Marketing Digital", progresso: 92, ultimoAcesso: "30min atrás", status: "ativo", nota: 9.2 },
    { id: 3, nome: "Maria Costa", email: "maria.costa@email.com", curso: "Design Gráfico", progresso: 45, ultimoAcesso: "1 dia atrás", status: "inativo", nota: 7.8 },
    { id: 4, nome: "Pedro Lima", email: "pedro.lima@email.com", curso: "Administração", progresso: 67, ultimoAcesso: "5h atrás", status: "ativo", nota: 8.0 }
  ]);

  const [courses, setCourses] = useState<Course[]>([
    { id: 1, nome: "Engenharia de Software", categoria: "Tecnologia", alunos: 487, professor: "Prof. João Silva", conclusao: 89, avaliacao: 4.8, status: "ativo" },
    { id: 2, nome: "Marketing Digital", categoria: "Marketing", alunos: 356, professor: "Prof. Ana Costa", conclusao: 92, avaliacao: 4.7, status: "ativo" },
    { id: 3, nome: "Design Gráfico", categoria: "Design", alunos: 298, professor: "Prof. Maria Santos", conclusao: 85, avaliacao: 4.6, status: "ativo" },
    { id: 4, nome: "Administração", categoria: "Negócios", alunos: 423, professor: "Prof. Carlos Lima", conclusao: 88, avaliacao: 4.5, status: "ativo" }
  ]);

  const [evaluations, setEvaluations] = useState<Evaluation[]>([
    { id: 1, titulo: "Projeto Final - Sistema Web", curso: "Engenharia de Software", prazo: "15/11/2024", entregas: 28, total: 35, professor: "Prof. João Silva", status: "pendente", nota_media: 0 },
    { id: 2, titulo: "Análise de Mercado", curso: "Marketing Digital", prazo: "18/11/2024", entregas: 31, total: 35, professor: "Prof. Ana Costa", status: "pendente", nota_media: 0 },
    { id: 3, titulo: "Portfolio Criativo", curso: "Design Gráfico", prazo: "20/11/2024", entregas: 15, total: 22, professor: "Prof. Maria Santos", status: "corrigida", nota_media: 8.2 },
    { id: 4, titulo: "Plano de Negócios", curso: "Administração", prazo: "25/11/2024", entregas: 23, total: 41, professor: "Prof. Carlos Lima", status: "pendente", nota_media: 0 }
  ]);

  // Form states
  const [newStudent, setNewStudent] = useState<Partial<Student>>({});
  const [newCourse, setNewCourse] = useState<Partial<Course>>({});
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // Calculate dashboard data dynamically
  const educationData = {
    totalAlunos: students.length.toString(),
    alunosAtivos: students.filter(s => s.status === 'ativo').length.toString(),
    cursosDisponiveis: courses.filter(c => c.status === 'ativo').length,
    professorAtivos: Array.from(new Set(courses.map(c => c.professor))).length,
    aulasHoje: 23,
    avaliacoesPendentes: evaluations.filter(e => e.status === 'pendente').length,
    taxaConclusao: `${Math.round(courses.reduce((acc, c) => acc + c.conclusao, 0) / courses.length)}%`
  };

  // Helper functions for CRUD operations
  const addStudent = (student: Partial<Student>) => {
    const newStudent: Student = {
      id: Date.now(),
      nome: student.nome || '',
      email: student.email || '',
      curso: student.curso || '',
      progresso: student.progresso || 0,
      ultimoAcesso: 'Agora',
      status: student.status || 'ativo',
      nota: student.nota || 0
    };
    setStudents(prev => [...prev, newStudent]);
    setNewStudent({});
    toast({
      title: "Aluno adicionado!",
      description: `${newStudent.nome} foi matriculado com sucesso.`,
    });
  };

  const updateStudent = (id: number, updates: Partial<Student>) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updates, ultimoAcesso: 'Agora' } : s));
    setEditingStudent(null);
    toast({
      title: "Aluno atualizado!",
      description: "As informações foram atualizadas com sucesso.",
    });
  };

  const deleteStudent = (id: number) => {
    const student = students.find(s => s.id === id);
    setStudents(prev => prev.filter(s => s.id !== id));
    toast({
      title: "Aluno removido!",
      description: `${student?.nome} foi removido do sistema.`,
    });
  };

  const addCourse = (course: Partial<Course>) => {
    const newCourse: Course = {
      id: Date.now(),
      nome: course.nome || '',
      categoria: course.categoria || '',
      alunos: course.alunos || 0,
      professor: course.professor || '',
      conclusao: course.conclusao || 0,
      avaliacao: course.avaliacao || 0,
      status: course.status || 'ativo'
    };
    setCourses(prev => [...prev, newCourse]);
    setNewCourse({});
    toast({
      title: "Curso criado!",
      description: `${newCourse.nome} foi adicionado ao catálogo.`,
    });
  };

  const updateCourse = (id: number, updates: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    setEditingCourse(null);
    toast({
      title: "Curso atualizado!",
      description: "As informações foram atualizadas com sucesso.",
    });
  };

  const deleteCourse = (id: number) => {
    const course = courses.find(c => c.id === id);
    setCourses(prev => prev.filter(c => c.id !== id));
    toast({
      title: "Curso removido!",
      description: `${course?.nome} foi removido do catálogo.`,
    });
  };

  const gradeEvaluation = (id: number, nota: number) => {
    setEvaluations(prev => prev.map(e => 
      e.id === id ? { ...e, status: 'corrigida' as const, nota_media: nota } : e
    ));
    toast({
      title: "Avaliação corrigida!",
      description: `Nota média atribuída: ${nota.toFixed(1)}`,
    });
  };

  const recentStudents = students.slice(0, 4).map(s => ({
    nome: s.nome,
    curso: s.curso,
    progresso: `${s.progresso}%`,
    ultimoAcesso: s.ultimoAcesso,
    status: s.status === 'ativo' ? 'ativo' : 'ausente'
  }));

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


  const recentActivities = [
    { tipo: "entrega", acao: "Projeto entregue", aluno: "Ana Silva", curso: "Engenharia de Software", tempo: "15 min atrás" },
    { tipo: "aula", acao: "Aula iniciada", professor: "Prof. Ana Costa", curso: "Marketing Digital", tempo: "1h atrás" },
    { tipo: "avaliacao", acao: "Prova concluída", aluno: "Carlos Santos", curso: "Marketing Digital", tempo: "2h atrás" },
    { tipo: "mensagem", acao: "Mensagem enviada", professor: "Prof. João Silva", curso: "Engenharia de Software", tempo: "3h atrás" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Demo Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
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
          <div className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 min-h-screen shadow-lg">
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
                      ? 'bg-indigo-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                  data-testid="nav-dashboard"
                >
                  <i className="fas fa-chart-pie w-4"></i>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setSelectedModule('alunos')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'alunos' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                  data-testid="nav-students"
                >
                  <i className="fas fa-users w-4"></i>
                  <span>Alunos</span>
                </button>
                <button
                  onClick={() => setSelectedModule('cursos')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'cursos' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                  data-testid="nav-courses"
                >
                  <i className="fas fa-book w-4"></i>
                  <span>Cursos</span>
                </button>
                <button
                  onClick={() => setSelectedModule('avaliacoes')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedModule === 'avaliacoes' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700'
                  }`}
                  data-testid="nav-evaluations"
                >
                  <i className="fas fa-clipboard-check w-4"></i>
                  <span>Avaliações</span>
                </button>
              </nav>

              <div className="mt-8 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Período Letivo</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
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
            {/* Custom Systems Message */}
            <div className="mb-6">
              <CustomSystemsMessage variant="compact" />
            </div>
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
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
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
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-book-open text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{educationData.cursosDisponiveis}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Cursos Disponíveis</p>
                    <p className="text-purple-600 dark:text-purple-400 text-xs mt-2">{educationData.professorAtivos} professores</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chalkboard-teacher text-white"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{educationData.aulasHoje}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Aulas Hoje</p>
                    <p className="text-green-600 dark:text-green-400 text-xs mt-2">4 em andamento</p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-slate-700 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
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
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">Gestão de Alunos</h2>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700" data-testid="button-add-student">
                        <i className="fas fa-plus mr-2"></i>
                        Adicionar Aluno
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Novo Aluno</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="nome">Nome</Label>
                          <Input
                            id="nome"
                            value={newStudent.nome || ''}
                            onChange={(e) => setNewStudent(prev => ({ ...prev, nome: e.target.value }))}
                            data-testid="input-student-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={newStudent.email || ''}
                            onChange={(e) => setNewStudent(prev => ({ ...prev, email: e.target.value }))}
                            data-testid="input-student-email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="curso">Curso</Label>
                          <Select value={newStudent.curso} onValueChange={(value) => setNewStudent(prev => ({ ...prev, curso: value }))}>
                            <SelectTrigger data-testid="select-student-course">
                              <SelectValue placeholder="Selecione o curso" />
                            </SelectTrigger>
                            <SelectContent>
                              {courses.filter(c => c.status === 'ativo').map(course => (
                                <SelectItem key={course.id} value={course.nome}>{course.nome}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="progresso">Progresso (%)</Label>
                          <Input
                            id="progresso"
                            type="number"
                            min="0"
                            max="100"
                            value={newStudent.progresso || 0}
                            onChange={(e) => setNewStudent(prev => ({ ...prev, progresso: parseInt(e.target.value) || 0 }))}
                            data-testid="input-student-progress"
                          />
                        </div>
                        <div>
                          <Label htmlFor="nota">Nota</Label>
                          <Input
                            id="nota"
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            value={newStudent.nota || 0}
                            onChange={(e) => setNewStudent(prev => ({ ...prev, nota: parseFloat(e.target.value) || 0 }))}
                            data-testid="input-student-grade"
                          />
                        </div>
                        <Button 
                          onClick={() => addStudent(newStudent)}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          data-testid="button-save-student"
                        >
                          Matricular Aluno
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid gap-4">
                  {students.map((student) => (
                    <Card key={student.id} className="bg-white dark:bg-slate-800" data-testid={`card-student-${student.id}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">
                                {student.nome.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900 dark:text-slate-100" data-testid={`text-student-name-${student.id}`}>
                                {student.nome}
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{student.email}</p>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{student.curso}</p>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Progresso</p>
                                <p className="font-semibold text-slate-900 dark:text-slate-100">{student.progresso}%</p>
                              </div>
                              <div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Nota</p>
                                <p className="font-semibold text-slate-900 dark:text-slate-100">{student.nota.toFixed(1)}</p>
                              </div>
                              <Badge 
                                variant={student.status === 'ativo' ? 'default' : 'secondary'}
                                data-testid={`status-student-${student.id}`}
                              >
                                {student.status === 'ativo' ? 'Ativo' : 'Inativo'}
                              </Badge>
                            </div>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => updateStudent(student.id, { status: student.status === 'ativo' ? 'inativo' : 'ativo' })}
                                data-testid={`button-toggle-student-${student.id}`}
                              >
                                <i className={`fas ${student.status === 'ativo' ? 'fa-pause' : 'fa-play'} mr-1`}></i>
                                {student.status === 'ativo' ? 'Suspender' : 'Ativar'}
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => deleteStudent(student.id)}
                                data-testid={`button-delete-student-${student.id}`}
                              >
                                <i className="fas fa-trash mr-1"></i>
                                Remover
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedModule === 'cursos' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">Gestão de Cursos</h2>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-purple-600 hover:bg-purple-700" data-testid="button-add-course">
                        <i className="fas fa-plus mr-2"></i>
                        Criar Curso
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Novo Curso</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="nome-curso">Nome do Curso</Label>
                          <Input
                            id="nome-curso"
                            value={newCourse.nome || ''}
                            onChange={(e) => setNewCourse(prev => ({ ...prev, nome: e.target.value }))}
                            data-testid="input-course-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="categoria-curso">Categoria</Label>
                          <Input
                            id="categoria-curso"
                            value={newCourse.categoria || ''}
                            onChange={(e) => setNewCourse(prev => ({ ...prev, categoria: e.target.value }))}
                            data-testid="input-course-category"
                          />
                        </div>
                        <div>
                          <Label htmlFor="professor">Professor</Label>
                          <Input
                            id="professor"
                            value={newCourse.professor || ''}
                            onChange={(e) => setNewCourse(prev => ({ ...prev, professor: e.target.value }))}
                            data-testid="input-course-professor"
                          />
                        </div>
                        <div>
                          <Label htmlFor="alunos-curso">Número de Alunos</Label>
                          <Input
                            id="alunos-curso"
                            type="number"
                            min="0"
                            value={newCourse.alunos || 0}
                            onChange={(e) => setNewCourse(prev => ({ ...prev, alunos: parseInt(e.target.value) || 0 }))}
                            data-testid="input-course-students"
                          />
                        </div>
                        <Button 
                          onClick={() => addCourse(newCourse)}
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          data-testid="button-save-course"
                        >
                          Criar Curso
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="bg-white dark:bg-slate-800" data-testid={`card-course-${course.id}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg text-slate-900 dark:text-slate-100" data-testid={`text-course-name-${course.id}`}>
                              {course.nome}
                            </CardTitle>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{course.categoria}</p>
                          </div>
                          <Badge 
                            variant={course.status === 'ativo' ? 'default' : 'secondary'}
                            data-testid={`status-course-${course.id}`}
                          >
                            {course.status === 'ativo' ? 'Ativo' : 'Inativo'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Professor:</span>
                            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{course.professor}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Alunos:</span>
                            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{course.alunos}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Taxa de Conclusão:</span>
                            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{course.conclusao}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Avaliação:</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fas fa-star text-xs ${
                                  i < Math.floor(course.avaliacao) ? 'text-yellow-500' : 'text-slate-300 dark:text-slate-600'
                                }`}></i>
                              ))}
                              <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">{course.avaliacao}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateCourse(course.id, { alunos: course.alunos + 1 })}
                              data-testid={`button-enroll-course-${course.id}`}
                            >
                              <i className="fas fa-user-plus mr-1"></i>
                              Matricular
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateCourse(course.id, { status: course.status === 'ativo' ? 'inativo' : 'ativo' })}
                              data-testid={`button-toggle-course-${course.id}`}
                            >
                              <i className={`fas ${course.status === 'ativo' ? 'fa-pause' : 'fa-play'} mr-1`}></i>
                              {course.status === 'ativo' ? 'Desativar' : 'Ativar'}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => deleteCourse(course.id)}
                              data-testid={`button-delete-course-${course.id}`}
                            >
                              <i className="fas fa-trash mr-1"></i>
                              Excluir
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedModule === 'avaliacoes' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 raleway">Centro de Avaliações</h2>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        // Simulate new submissions
                        const randomEval = evaluations[Math.floor(Math.random() * evaluations.length)];
                        setEvaluations(prev => prev.map(e => 
                          e.id === randomEval.id ? { ...e, entregas: Math.min(e.entregas + Math.floor(Math.random() * 3) + 1, e.total) } : e
                        ));
                        toast({
                          title: "Novas entregas!",
                          description: "Alunos enviaram novas avaliações para correção.",
                        });
                      }}
                      data-testid="button-simulate-submissions"
                    >
                      <i className="fas fa-upload mr-2"></i>
                      Simular Entregas
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        // Auto-grade all pending evaluations
                        setEvaluations(prev => prev.map(e => 
                          e.status === 'pendente' ? { 
                            ...e, 
                            status: 'corrigida' as const, 
                            nota_media: Math.round((Math.random() * 3 + 7) * 10) / 10 
                          } : e
                        ));
                        toast({
                          title: "Avaliações corrigidas!",
                          description: "Todas as avaliações pendentes foram automaticamente corrigidas.",
                        });
                      }}
                      data-testid="button-auto-grade"
                    >
                      <i className="fas fa-magic mr-2"></i>
                      Correção Automática
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {evaluations.map((evaluation) => (
                    <Card key={evaluation.id} className="bg-white dark:bg-slate-800" data-testid={`card-evaluation-${evaluation.id}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg text-slate-900 dark:text-slate-100" data-testid={`text-evaluation-title-${evaluation.id}`}>
                              {evaluation.titulo}
                            </CardTitle>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                              {evaluation.curso} • {evaluation.professor}
                            </p>
                          </div>
                          <Badge 
                            variant={evaluation.status === 'corrigida' ? 'default' : 'secondary'}
                            data-testid={`status-evaluation-${evaluation.id}`}
                          >
                            {evaluation.status === 'corrigida' ? 'Corrigida' : 'Pendente'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Prazo:</span>
                            <span className="text-slate-900 dark:text-slate-100">{evaluation.prazo}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Entregas:</span>
                            <span className="text-slate-900 dark:text-slate-100">{evaluation.entregas}/{evaluation.total}</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${(evaluation.entregas / evaluation.total) * 100}%` }}
                            ></div>
                          </div>

                          {/* Grade Display */}
                          {evaluation.status === 'corrigida' && (
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-600 dark:text-slate-400">Nota Média:</span>
                              <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                                {evaluation.nota_media.toFixed(1)}
                              </span>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex space-x-2 mt-4">
                            {evaluation.status === 'pendente' && evaluation.entregas > 0 && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    className="bg-green-600 hover:bg-green-700"
                                    data-testid={`button-grade-evaluation-${evaluation.id}`}
                                  >
                                    <i className="fas fa-check mr-1"></i>
                                    Corrigir
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Corrigir Avaliação</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                      {evaluation.titulo} - {evaluation.curso}
                                    </p>
                                    <div>
                                      <Label htmlFor="nota-avaliacao">Nota Média (0-10)</Label>
                                      <Input
                                        id="nota-avaliacao"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        placeholder="Digite a nota média"
                                        onKeyDown={(e) => {
                                          if (e.key === 'Enter') {
                                            const nota = parseFloat((e.target as HTMLInputElement).value);
                                            if (nota >= 0 && nota <= 10) {
                                              gradeEvaluation(evaluation.id, nota);
                                              (e.target as HTMLInputElement).value = '';
                                            }
                                          }
                                        }}
                                        data-testid={`input-grade-${evaluation.id}`}
                                      />
                                    </div>
                                    <Button 
                                      onClick={(e) => {
                                        const input = (e.currentTarget.parentElement?.querySelector('input')) as HTMLInputElement;
                                        const nota = parseFloat(input?.value || '0');
                                        if (nota >= 0 && nota <= 10) {
                                          gradeEvaluation(evaluation.id, nota);
                                          input.value = '';
                                        }
                                      }}
                                      className="w-full bg-green-600 hover:bg-green-700"
                                      data-testid={`button-submit-grade-${evaluation.id}`}
                                    >
                                      Atribuir Nota
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                toast({
                                  title: "Relatório gerado!",
                                  description: `Relatório de ${evaluation.titulo} foi exportado.`,
                                });
                              }}
                              data-testid={`button-export-evaluation-${evaluation.id}`}
                            >
                              <i className="fas fa-download mr-1"></i>
                              Exportar
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setEvaluations(prev => prev.map(e => 
                                  e.id === evaluation.id ? { 
                                    ...e, 
                                    entregas: Math.min(e.entregas + 1, e.total) 
                                  } : e
                                ));
                                toast({
                                  title: "Nova entrega!",
                                  description: "Um aluno enviou sua avaliação.",
                                });
                              }}
                              data-testid={`button-add-submission-${evaluation.id}`}
                            >
                              <i className="fas fa-plus mr-1"></i>
                              +1 Entrega
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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