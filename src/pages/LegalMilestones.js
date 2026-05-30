import React, { useState } from 'react';

/**
 * Componente da Página "Marcos Legais" (LegalMilestones) - YogurVida
 * Exibe a linha do tempo cronológica das 7 regulamentações sanitárias
 * fundamentais brasileiras com um detalhamento interativo acionado via State.
 */
export default function LegalMilestones() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestonesData = [
    {
      id: 1,
      year: "1969",
      title: "Decreto-Lei nº 986",
      summary: "Normas Básicas sobre Alimentos no Brasil.",
      icon: "fa-gavel",
      objective: "Definir padrões de identidade, registro de estabelecimentos, rotulagem de produtos alimentícios e controle sanitário federal.",
      application: "Exige que a formulação, adição de frutas e estabilização de cada iogurte produzido pela YogurVida possua registro formalizado de integridade nutricional e rotulagem fiel à verdade."
    },
    {
      id: 2,
      year: "1977",
      title: "Lei nº 6.437",
      summary: "Infrações e Penalidades à Legislação Sanitária Federal.",
      icon: "fa-triangle-exclamation",
      objective: "Tipificar as infrações de higiene (leves, graves e gravíssimas) e cominar sanções administrativas como multas, apreensão de produtos ou interdição da fábrica.",
      application: "Garante o cumprimento absoluto da cadeia fria e do tratamento HTST. Falhas críticas de temperatura na pasteurização implicam em autuações civis graves e interdição automática do lote."
    },
    {
      id: 3,
      year: "1990",
      title: "Lei nº 8.078 (CDC)",
      summary: "Código de Defesa do Consumidor.",
      icon: "fa-users-gear",
      objective: "Estabelecer a responsabilidade civil objetiva e solidária do fabricante por defeitos do produto, garantindo indenizações e exigindo recolhimento imediato de lotes inseguros (recall).",
      application: "Se qualquer corpo estranho físico ou bio-patógeno contaminar um copo de iogurte YogurVida, a empresa assume responsabilidade legal e indenização objetiva dos afetados."
    },
    {
      id: 4,
      year: "1997",
      title: "Portaria SVS/MS nº 326",
      summary: "Regulamento Técnico de Condições Higiênico-Sanitárias e BPF.",
      icon: "fa-clipboard-check",
      objective: "Padronizar as Boas Práticas de Fabricação (BPF) no que tange a hábitos dos operadores, assepsia das instalações, lavagem de mãos e desenho sanitário de equipamentos.",
      application: "A base técnica regulatória para a confecção das nossas rotinas cotidianas de banho de assepsia dos tanques e proibição absoluta de adornos na linha de envase."
    },
    {
      id: 5,
      year: "2002",
      title: "RDC nº 275 (ANVISA)",
      summary: "Introdução dos Procedimentos Operacionais Padronizados (POPs).",
      icon: "fa-file-signature",
      objective: "Exigir 8 POPs documentados e assinados de controle (potabilidade de água, higiene dos manipuladores, controle integrado de pragas, sanitização de tanques, etc.) acompanhados por checklists periódicos.",
      application: "Exige que a YogurVida mantenha planilhas diárias arquivadas comprovando a eficácia microbiológica do Clean-in-Place (CIP) em todas as bombas sanitárias e pasteurizadores."
    },
    {
      id: 6,
      year: "2004",
      title: "RDC nº 216 (ANVISA)",
      summary: "Regulamento Técnico de Boas Práticas para Serviços de Alimentação.",
      icon: "fa-kitchen-set",
      objective: "Garantiar as condições ideais de manipulação higiênica e conservação de alimentos em estabelecimentos que preparam e vendem alimentos prontos.",
      application: "Serve como guiaz técnico complementar para as práticas de transporte sob refrigeração de iogurtes e conservação ideal de ingredientes alimentares no estoque seco."
    },
    {
      id: 7,
      year: "Atual",
      title: "Instruções Normativas do MAPA (IN 76 e 77)",
      summary: "Qualidade de Leite Cru e Regulamentos Técnicos de Identidade e Qualidade (RTIQ).",
      icon: "fa-cow",
      objective: "Definir limites microbiológicos de Contagem Bacteriana Total (CBT), Contagem de Células Somáticas (CCS), densidade do leite cru e tolerância zero a resíduos de antibióticos veterinários.",
      application: "Determina que cada lote de leite cru transportado de fazendas passe por triagem analítica em tempo real de acidez dornic, densidade e antibiótico antes do descarregamento."
    }
  ];

  return (
    <section id="marcos-legais" className="section-padding section-light">
      <div className="container">
        
        {/* Cabeçalho de Seção */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Evolução Regulatória no Brasil</span>
          <h2 className="section-title">Principais Marcos Legais Aplicados</h2>
          <div className="header-divider"></div>
          <p className="text-center text-muted">
            Clique em qualquer marco da linha do tempo abaixo para detalhar a aplicação prática 
            no ecossistema fabril da YogurVida Laticínios.
          </p>
        </div>
        
        {/* Box Dinâmico de Detalhamento via State */}
        {selectedMilestone !== null && (
          <div className="glass-card mb-5 p-4 animate-fade-in" style={{ borderLeft: '4px solid var(--primary-dark)' }}>
            <div className="d-flex justify-content-between align-items-center mb-3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge" style={{ backgroundColor: 'var(--lavender-blush)', color: 'var(--primary-dark)', padding: '6px 14px', borderRadius: '20px', fontWeight: 'bold' }}>
                <i className="fa-solid fa-circle-info"></i> Detalhamento Regulatório
              </span>
              <button 
                onClick={() => setSelectedMilestone(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--primary-dark)' }}
              >
                <i className="fa-solid fa-xmark"></i> Fechar
              </button>
            </div>
            <h3 className="text-gradient mb-2">{milestonesData[selectedMilestone].title}</h3>
            <p><strong>Ano de Emissão/Vigência:</strong> {milestonesData[selectedMilestone].year}</p>
            <p><strong>Objetivo Principal:</strong> {milestonesData[selectedMilestone].objective}</p>
            <p style={{ backgroundColor: 'var(--lavender-blush)', padding: '16px', borderRadius: '8px', borderLeft: '3px solid var(--primary)', marginTop: '12px' }}>
              <strong><i className="fa-solid fa-cow"></i> Aplicação na Indústria de Iogurtes:</strong> {milestonesData[selectedMilestone].application}
            </p>
          </div>
        )}

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
                style={{ cursor: 'pointer', border: selectedMilestone === idx ? '4px solid var(--primary-dark)' : '4px solid var(--primary)' }}
                onClick={() => setSelectedMilestone(idx)}
                title="Clique para ver os detalhes sanitários"
              >
                <i className={`fa-solid ${milestone.icon}`}></i>
              </div>
              
              {/* Painel do Card da Linha do tempo */}
              <div 
                className="timeline-panel glass-card"
                onClick={() => setSelectedMilestone(idx)}
                style={{ cursor: 'pointer', border: selectedMilestone === idx ? '1px solid var(--primary)' : '' }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <h4>{milestone.title}</h4>
                <p className="timeline-summary">{milestone.summary}</p>
                
                <div className="timeline-detail" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <i className="fa-solid fa-angles-down"></i> Clique para revelar a aplicação no processamento de iogurte
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
