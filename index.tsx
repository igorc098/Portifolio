// Note: All components are defined in this single file to avoid module loading issues
// with Babel Standalone on static hosting platforms like GitHub Pages.

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// FROM: components/Icons.tsx

const CostIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const QualityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.38 3.82L10.71 13.5a1.79 1.79 0 0 1-2.53 0l-4.24-4.24a1.79 1.79 0 0 1 0-2.53l9.67-9.67a1.79 1.79 0 0 1 2.53 0z"></path><path d="m22 22-5.5-5.5"></path>
  </svg>
);

const RiskIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

// FROM: components/Header.tsx

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#formacao', label: 'Formação' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold font-montserrat tracking-wide text-white">
          Igor de Castro Gonçalves
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="./igor_goncalves_cv.md" download="igor_goncalves_cv.md" className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            Baixar CV
          </a>
        </nav>
        {/* A mobile menu button could be added here for smaller screens */}
      </div>
    </header>
  );
};

// FROM: components/Hero.tsx

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://picsum.photos/seed/roadwork/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider font-montserrat mb-4">
          Gestão, Prática e Engenharia:
          <br />
          <span className="text-orange-500">Construindo Soluções</span> em Pavimentação e Concreto.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Igor de Castro Gonçalves - Da gestão de projetos à execução da obra.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#projetos" className="bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            Ver Projetos
          </a>
          <a href="./igor_goncalves_cv.md" download="igor_goncalves_cv.md" className="border-2 border-orange-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105">
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
};

// FROM: components/About.tsx

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

// FROM: components/Projects.tsx

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

// FROM: components/Education.tsx

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

// FROM: components/Contact.tsx

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    alert('Mensagem enviada! (Funcionalidade de exemplo)');
  };

  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">Pronto para Construir o Próximo Projeto?</h2>
          <p className="text-lg text-gray-400">Vamos conversar sobre como minhas habilidades podem agregar valor à sua equipe.</p>
        </div>
        <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nome</label>
              <input type="text" id="name" name="name" required className="w-full bg-slate-700 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-slate-700 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Mensagem</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-slate-700 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-orange-700 transition-all duration-300 w-full">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Ou me encontre nas redes:</p>
          <div className="flex justify-center items-center space-x-6">
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a href="./igor_goncalves_cv.md" download="igor_goncalves_cv.md" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <DownloadIcon className="w-8 h-8" />
              <span className="font-semibold">Baixar CV Completo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// FROM: components/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-center py-6">
      <div className="container mx-auto px-6">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Igor de Castro Gonçalves. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

// FROM: App.tsx

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Mount the application
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
