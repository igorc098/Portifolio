import React from 'react';

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

export default Footer;