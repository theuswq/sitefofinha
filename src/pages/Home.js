import React, { useState, useEffect } from 'react';

/**
 * Componente da Página Inicial (Home) - YogurVida
 * Apresenta a hero section institucional, os slogans e contadores animados
 * de desempenho e conformidade regulatória.
 */
export default function Home() {
  const [stats, setStats] = useState({
    leite: 0,
    colaboradores: 0,
    auditorias: 0,
    conformidade: 0
  });

  // Efeito para simular a animação progressiva (Count-Up) das estatísticas ao carregar
  useEffect(() => {
    const duration = 2000; // 2 segundos
    const steps = 60;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const targets = {
      leite: 1200000,
      colaboradores: 85,
      auditorias: 24,
      conformidade: 100
    };

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        leite: Math.floor(targets.leite * progress),
        colaboradores: Math.floor(targets.colaboradores * progress),
        auditorias: Math.floor(targets.auditorias * progress),
        conformidade: Math.floor(targets.conformidade * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-accent"></div>
      <div className="container hero-container">
        
        {/* Conteúdo Principal */}
        <div className="hero-content" data-aos="fade-right">
          <span className="hero-badge">
            <i className="fa-solid fa-shield-halved"></i> Segurança Alimentar em Laticínios
          </span>
          <h1 className="hero-title">Legislação na Indústria de Alimentos e o Manual de BPF</h1>
          <p className="hero-lead">
            Estudo de caso e simulação industrial aplicada ao processo de fabricação de iogurtes, 
            da recepção da matéria-prima até a mesa do consumidor final, em estrita conformidade 
            com as exigências da ANVISA e do MAPA.
          </p>
          <div className="hero-actions">
            <a href="#processo-fluxograma" className="btn btn-primary">
              <i className="fa-solid fa-cheese"></i> Conheça Nossa Produção
            </a>
            <a href="#marcos-legais" className="btn btn-secondary">
              <i className="fa-solid fa-scale-balanced"></i> Explorar Legislação
            </a>
          </div>
        </div>

        {/* Visual e Ilustração Láctea */}
        <div className="hero-visual" data-aos="fade-left">
          <div className="glass-card mockup-card">
            <div className="mockup-header">
              <span className="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span className="mockup-title">
                <i className="fa-solid fa-circle-check text-success"></i> YogurVida Planta Industrial
              </span>
            </div>
            <div className="mockup-body">
              <div className="yogurt-container">
                <div className="yogurt-splash"></div>
                <div className="yogurt-details">
                  <div className="detail-pill">
                    <i className="fa-solid fa-snowflake"></i> Cadeia de Frio: 4°C
                  </div>
                  <div className="detail-pill">
                    <i className="fa-solid fa-vial"></i> pH Final: 4.5
                  </div>
                  <div className="detail-pill">
                    <i className="fa-solid fa-hand-holding-droplet"></i> BPF Ativo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Grade de Estatísticas da Indústria (Conformidade Sanitária) */}
      <div className="container statistics-container" data-aos="fade-up">
        <div className="stats-grid">
          
          <div className="stat-card glass-card">
            <div className="stat-icon"><i className="fa-solid fa-droplet"></i></div>
            <div className="stat-number">
              {stats.leite.toLocaleString('pt-BR')}
            </div>
            <div className="stat-label">Litros de Leite Processados/Mês</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon"><i className="fa-solid fa-users"></i></div>
            <div className="stat-number">{stats.colaboradores}</div>
            <div className="stat-label">Colaboradores Especializados</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon"><i className="fa-solid fa-clipboard-check"></i></div>
            <div className="stat-number">{stats.auditorias}</div>
            <div className="stat-label">Auditorias de Qualidade/Ano</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon"><i className="fa-solid fa-percent"></i></div>
            <div className="stat-number">{stats.conformidade}%</div>
            <div className="stat-label">% Conformidade Sanitária (ANVISA)</div>
          </div>

        </div>
      </div>
    </section>
  );
}
