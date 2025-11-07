import React from 'react';
import { CostIcon, QualityIcon, RiskIcon } from './Icons';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex justify-center mb-4">
      <div className="bg-slate-900 p-4 rounded-full text-orange-500">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 text-white font-montserrat">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">O Engenheiro que Pensa como Gestor.</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-300 space-y-6 mb-16">
          <p>
            Minha carreira é construída sobre uma base dupla: a visão estratégica da <strong className="text-orange-400">Administração</strong> (Unip), focada em finanças, logística e ROI, e a precisão técnica da <strong className="text-orange-400">Engenharia Civil</strong> (IESB). Como empreendedor (MEI), não apenas administro, mas executo, traduzindo o planejamento em resultados de campo.
          </p>
          <p>
            Minha trajetória me direciona para a especialização nas duas áreas mais críticas da indústria: <strong className="text-orange-400">Patologia das Construções</strong> — para garantir a qualidade e durabilidade do produto (concreto/asfalto) — e <strong className="text-orange-400">Segurança do Trabalho</strong>, para garantir a integridade dos projetos e das equipes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard icon={<CostIcon className="w-8 h-8" />} title="Gestão de Custos">
            Análise e controle de orçamentos para maximizar o ROI e a eficiência dos recursos.
          </ValueCard>
          <ValueCard icon={<QualityIcon className="w-8 h-8" />} title="Qualidade Técnica (Patologias)">
            Foco em diagnóstico de patologias para assegurar a durabilidade e performance das estruturas.
          </ValueCard>
          <ValueCard icon={<RiskIcon className="w-8 h-8" />} title="Gestão de Risco (SST)">
            Implementação de práticas de segurança para proteger equipes e garantir a conformidade do projeto.
          </ValueCard>
        </div>
      </div>
    </section>
  );
};

export default About;