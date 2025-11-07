import React from 'react';

interface EducationCardProps {
    degree: string;
    institution: string;
    focus: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, focus }) => (
    <div className="bg-slate-950 p-8 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-2xl font-bold text-white font-montserrat">{degree}</h3>
        <p className="text-gray-400 mb-3">{institution}</p>
        <p className="text-orange-400 font-semibold">{focus}</p>
    </div>
);

const Education: React.FC = () => {
  return (
    <section id="formacao" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">Formação Híbrida</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <EducationCard 
            degree="Graduado em Administração"
            institution="Universidade Paulista (Unip)"
            focus="Expertise em Finanças e Gestão de Operações."
          />
          <EducationCard 
            degree="Cursando Engenharia Civil"
            institution="Centro Universitário IESB"
            focus="Foco em Materiais de Construção (Concreto/Asfalto) e Infraestrutura."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;