import React from 'react';

/**
 * Componente da Página "Legislação" (Legislation) - YogurVida
 * Exibe a seção de Legislação e Conformidade Regulatória com cabeçalho,
 * botão principal de destaque para visualizar o manual PDF e os 7 cards interativos.
 */
export default function Legislation({ onOpenPdf }) {
  const legislations = [
    {
      id: 'dl-986',
      year: '1969',
      title: 'Decreto-Lei nº 986',
      description: 'Define as Normas Básicas sobre Alimentos no Brasil, incluindo regras para registro de fórmulas e padrões de rotulagem clara.',
      icon: 'fa-scale-balanced',
    },
    {
      id: 'lei-6437',
      year: '1977',
      title: 'Lei nº 6.437',
      description: 'Tipifica as infrações sanitárias federais e estabelece penalidades severas, como multas e interdições da fábrica.',
      icon: 'fa-triangle-exclamation',
    },
    {
      id: 'lei-8078',
      year: '1990',
      title: 'Lei nº 8.078 (CDC)',
      description: 'Código de Defesa do Consumidor. Estabelece responsabilidade civil objetiva por defeitos na qualidade ou pureza do produto.',
      icon: 'fa-users-gear',
    },
    {
      id: 'portaria-326',
      year: '1997',
      title: 'Portaria SVS/MS nº 326',
      description: 'Regulamento técnico de condições higiênico-sanitárias e Boas Práticas de Fabricação (BPF) de toda a planta.',
      icon: 'fa-clipboard-check',
    },
    {
      id: 'rdc-275',
      year: '2002',
      title: 'RDC nº 275 (ANVISA)',
      description: 'Introduz a obrigatoriedade dos Procedimentos Operacionais Padronizados (POPs) e listas de verificação de BPF.',
      icon: 'fa-file-signature',
    },
    {
      id: 'rdc-216',
      year: '2004',
      title: 'RDC nº 216 (ANVISA)',
      description: 'Regulamento de Boas Práticas para manipulação higiênica e conservação de ingredientes no estoque.',
      icon: 'fa-hands-bubbles',
    },
    {
      id: 'mapa',
      year: 'Atual',
      title: 'Normativas do MAPA',
      description: 'Instruções Normativas 76/77 regulando a qualidade microbiológica do leite cru e fiscalização pelo SIF.',
      icon: 'fa-cow',
    },
  ];

  const handleAction = (e) => {
    if (e) e.preventDefault();
    if (onOpenPdf) {
      onOpenPdf();
    } else {
      window.open('/Manual_Legislacao_YogurVida.pdf', '_blank');
    }
  };

  return (
    <section id="legislacao" className="section-padding">
      <div className="container">
        
        {/* Cabeçalho de Seção */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Normatividade e Proteção</span>
          <h2 className="section-title">Legislação e Conformidade Regulatória</h2>
          <div className="header-divider"></div>
          <p className="text-center text-muted">
            A YogurVida segue rigorosamente todas as normas sanitárias e regulatórias aplicáveis 
            à indústria de alimentos e laticínios, garantindo produtos seguros e de qualidade 
            superior para toda a sua família.
          </p>
        </div>

        {/* Botão Principal em Destaque */}
        <div className="pdf-action-container" data-aos="fade-up" data-aos-delay="100">
          <button className="btn btn-pdf-primary" onClick={handleAction}>
            <i className="fa-solid fa-file-pdf"></i>
            <span>Visualizar Marcos e Leis da Empresa</span>
          </button>
        </div>
        
        {/* Grid de Cards de Legislação */}
        <div className="legislacao-cards-grid">
          {legislations.map((leg, index) => (
            <div 
              key={leg.id}
              className="leg-card-item glass-card" 
              data-aos="fade-up" 
              data-aos-delay={150 + index * 50} 
              onClick={handleAction}
            >
              <div className="leg-card-icon-box">
                <i className={`fa-solid ${leg.icon}`}></i>
              </div>
              <div className="leg-card-info">
                <span className="leg-card-year">{leg.year}</span>
                <h3>{leg.title}</h3>
                <p>{leg.description}</p>
                <span className="leg-card-action-link">
                  <i className="fa-solid fa-file-pdf"></i> Acessar Manual
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
