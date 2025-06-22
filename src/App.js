import React, { useState, useEffect } from 'react';
import './App.css';
import profilePic from './assets/foto.jpeg';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main>
        <section id="inicio" className="section">
          <img src={profilePic} alt="Leonardo Borghelot" className="profile-pic" />
          <h1>Olá, eu sou Leonardo Borghelot, desenvolvedor Backend</h1>
          <p>Seja bem-vindo ao meu portfólio</p>
        </section>

        <section id="sobre" className="section">
          <h2>Sobre Mim</h2>
          <div className="about-details">
            <p><strong>Nome:</strong> Leonardo Borghelot</p>
            <p><strong>Idade:</strong> 21 Anos</p>
            <p><strong>Localização:</strong> Erechim, RS</p>
          </div>
          <p className="about-description">Sou estudante de Ciência da Computação, apaixonado por tecnologia e programação. 
                           Tenho experiência com Delphi, Node.js e SQL, e estou sempre buscando evoluir, aprendendo novas habilidades 
                           técnicas e interpessoais. Gosto de desafios e estou em constante aperfeiçoamento para crescer na 
                           área de desenvolviment.</p>
          <div className="social-links">
            <a href="https://github.com/LeonardoABorghelot" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/leonardo-borghelot-78a668216/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2>Minhas Habilidades</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Delphi</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">GIT</span>
                <span className="skill-tag">JIRA</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Suporte</h3>
              <div className="skills-list">
                <span className="skill-tag">Helpdesk</span>
                <span className="skill-tag">Resolução de Problemas</span>
                <span className="skill-tag">Analise de bugs</span>
                <span className="skill-tag">Atendimento ao usuário</span>
                <span className="skill-tag">Realização de testes de software</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <h2>Experiência Profissional</h2>
          <div className="experience-container">
            <div className="experience-item">
              <h3>Desenvolvedor</h3>
              <h4>Farmácias Erechim</h4>
              <p className="experience-date">Fevereiro 2024 - Presente</p>
              <ul>
                <li>Criação de triggers, procedures, functions e consultas complexas no SQL Server.</li>
                <li>Manutenção e criação de telas no Delphi.</li>
                <li>Criação e manutenção de APIs em Node.js.</li>
                <li>Controle do versionamento de código com GIT.</li>
                <li>Utilização do JIRA.</li>
                <li>Criação de manual de documentação para o usuário.</li>
                <li>Realização de testes de qualidade em softwares.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Helpdesk</h3>
              <h4>Farmácias Erechim</h4>
              <p className="experience-date">Fevereiro 2023 - Fevereiro 2024</p>
              <ul>
                <li>Atendimento ao usuário.</li>
                <li>Registro de chamados.</li>
                <li>Consultas no SQL Server.</li>
                <li>Análise de bugs.</li>
                <li>Criação de manual para o usuário.</li>
                <li>Realização de testes de software.</li>
                <li>Desenvolvimento de pequenas aplicações em Python.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <h2>Contato</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Leonardo Borghelot. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
