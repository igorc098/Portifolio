import React from 'react';

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
          <a href="/igor_goncalves_cv.md" download="igor_goncalves_cv.md" className="border-2 border-orange-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105">
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;