import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  competencies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, competencies }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/20">
    <div className="p-8">
      <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {competencies.map((skill, index) => (
          <span key={index} className="bg-orange-900/50 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projectsData: ProjectCardProps[] = [
    {
      title: 'Gestão de Projeto: Revitalização de Fachada',
      description: 'Gestão completa da revitalização da fachada, atuando como ponto focal entre o cliente (síndico) e a equipe de execução, gerenciando cronograma, logística de materiais (andaimes) e segurança operacional (trabalho em altura).',
      competencies: ['Gestão de Custos', 'Comunicação (Stakeholder)', 'Gestão de Risco/Segurança (SST)'],
    },
    {
      title: 'Gestão de Execução: Obra Residencial em Alvenaria',
      description: 'Liderança e execução de obra residencial sob um cronograma crítico de 100 dias. Responsável pela coordenação de todas as frentes de serviço (fundações, alvenaria, instalações e acabamentos) e gestão de riscos operacionais (chuvas, fornecedores).',
      competencies: ['Gerenciamento de Cronograma', 'Liderança de Equipe', 'Gestão de Riscos'],
    },
    {
      title: 'Gestão de Reforma: Diagnóstico e Impermeabilização (80 m²)',
      description: 'Gestão completa de reforma complexa, iniciada pelo diagnóstico de patologias (infiltrações). O escopo incluiu reforço pontual, aplicação de sistemas de impermeabilização e renovação de acabamentos.',
      competencies: ['Orçamentação e Aquisições', 'Logística (Prevenção de Perdas)', 'Controle de Qualidade (CQ)'],
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">Experiência Prática em Gestão e Execução</h2>
          <p className="text-lg text-gray-400">Liderança de projetos como MEI (Igor de Castro Gonçalves - CNPJ 41.193.693/0001-63) desde 2021.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;