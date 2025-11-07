import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

export default App;