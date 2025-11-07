import React from 'react';
import { LinkedInIcon, DownloadIcon } from './Icons';

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

export default Contact;