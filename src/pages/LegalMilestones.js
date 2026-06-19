import React from 'react';

/**
 * Componente da Página "Marcos Legais" (LegalMilestones) - YogurVida
 * Exibe a linha do tempo cronológica das regulamentações sanitárias
 * brasileiras aplicadas diretamente ao setor de laticínios da YogurVida.
 * Ao clicar em qualquer item, abre o PDF de conformidade regulatória.
 */
export default function LegalMilestones({ onOpenPdf }) {
  const milestonesData = [
    {
      id: 1,
      year: "1969",
      title: "Decreto-Lei nº 986",
      summary: "Normas Básicas sobre Alimentos no Brasil.",
      icon: "fa-scale-balanced"
    },
    {
      id: 2,
      year: "1977",
      title: "Lei nº 6.437",
      summary: "Infrações e Penalidades à Legislação Sanitária Federal.",
      icon: "fa-triangle-exclamation"
    },
    {
      id: 3,
      year: "1990",
      title: "Lei nº 8.078 (CDC)",
      summary: "Código de Defesa do Consumidor.",
      icon: "fa-users-gear"
    },
    {
      id: 4,
      year: "1997",
      title: "Portaria SVS/MS nº 326",
      summary: "Regulamento Técnico de Condições Higiênico-Sanitárias e BPF.",
      icon: "fa-clipboard-check"
    },
    {
      id: 5,
      year: "2002",
      title: "RDC nº 275 (ANVISA)",
      summary: "Introdução dos Procedimentos Operacionais Padronizados (POPs).",
      icon: "fa-file-signature"
    },
    {
      id: 6,
      year: "2004",
      title: "RDC nº 216 (ANVISA)",
      summary: "Regulamento Técnico de Boas Práticas para Serviços de Alimentação.",
      icon: "fa-hands-bubbles"
    },
    {
      id: 7,
      year: "Atual",
      title: "Normativas do MAPA",
      summary: "Qualidade de Leite Cru e Regulamentos Técnicos de Identidade e Qualidade (RTIQ).",
      icon: "fa-cow"
    }
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
    <section id="marcos-legais" className="section-padding section-light">
      <div className="container">
        
        {/* Cabeçalho de Seção */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Evolução Regulatória no Brasil</span>
          <h2 className="section-title">Principais Marcos Legais Aplicados</h2>
          <div className="header-divider"></div>
          <p className="text-center text-muted">
            Clique em qualquer marco da linha do tempo abaixo para acessar o manual 
            completo de conformidade regulatória e a aplicação prática na YogurVida Laticínios.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {milestonesData.map((milestone, idx) => (
            <div 
              key={milestone.id} 
              className={`timeline-item ${idx % 2 !== 0 ? 'timeline-inverted' : ''}`}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            >
              
              {/* Botão circular de badge */}
              <div 
                className="timeline-badge" 
                style={{ cursor: 'pointer', border: '4px solid var(--primary)' }}
                onClick={handleAction}
                title="Clique para visualizar o manual de conformidade"
              >
                <i className={`fa-solid ${milestone.icon}`}></i>
              </div>
              
              {/* Painel do Card da Linha do tempo */}
              <div 
                className="timeline-panel glass-card"
                onClick={handleAction}
                style={{ cursor: 'pointer' }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <h4>{milestone.title}</h4>
                <p className="timeline-summary">{milestone.summary}</p>
                
                <div className="timeline-detail" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <i className="fa-solid fa-file-pdf"></i> Clique para abrir o Manual Completo
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
