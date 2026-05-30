import React from 'react';

/**
 * Componente da Página "Sobre a Empresa" (About) - YogurVida
 * Apresenta a história de fundação da empresa fictícia (2020),
 * o portfólio de produtos lácteos e a árvore organizacional (organograma)
 * demonstrando a independência e foco no setor de garantia da qualidade.
 */
export default function About() {
  return (
    <section id="sobre" className="section-padding section-light">
      <div className="container">
        
        {/* Cabeçalho de Seção */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">YogurVida Indústria de Laticínios LTDA</span>
          <h2 className="section-title">Sobre a Nossa Indústria</h2>
          <div className="header-divider"></div>
        </div>
        
        {/* História e Portfólio de Produtos */}
        <div className="about-grid">
          <div className="about-text" data-aos="fade-right">
            <h3>História e Fundação</h3>
            <p>
              Fundada em <strong>2020</strong> no Brasil, a <strong>YogurVida Indústria de Laticínios LTDA</strong> nasceu 
              com a missão de unir a tecnologia industrial de ponta ao cuidado rigoroso de segurança de alimentos na 
              produção de iogurtes de altíssima qualidade. O nosso lema corporativo é <em>"Qualidade, Segurança e Sabor em Cada Colherada"</em>.
            </p>
            <p>
              Atuamos no segmento de processamento de derivados lácteos premium, com um portfólio completo de iogurtes 
              desenvolvidos sob os mais rígidos padrões regulatórios nacionais:
            </p>
            
            <div className="product-tags">
              <span className="product-tag"><i className="fa-solid fa-circle-check"></i> Iogurte Natural</span>
              <span className="product-tag"><i className="fa-solid fa-circle-check"></i> Iogurte Integral</span>
              <span className="product-tag"><i className="fa-solid fa-circle-check"></i> Iogurte Desnatado</span>
              <span className="product-tag"><i className="fa-solid fa-circle-check"></i> Iogurte Grego</span>
              <span className="product-tag"><i className="fa-solid fa-circle-check"></i> Iogurte com Frutas</span>
              <span className="product-tag"><i className="fa-solid fa-circle-check"></i> Iogurte Probiótico</span>
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="about-mvv" data-aos="fade-left">
            
            <div className="mvv-card glass-card">
              <div className="mvv-icon"><i className="fa-solid fa-bullseye"></i></div>
              <div>
                <h4>Missão</h4>
                <p>Produzir iogurtes de alta qualidade seguindo rigorosamente a legislação sanitária brasileira, garantindo alimentos seguros e altamente nutritivos para toda a população.</p>
              </div>
            </div>

            <div className="mvv-card glass-card">
              <div className="mvv-icon"><i className="fa-solid fa-eye"></i></div>
              <div>
                <h4>Visão</h4>
                <p>Ser a referência nacional número um em segurança de alimentos, sustentabilidade e inovação tecnológica na fabricação industrial de iogurtes.</p>
              </div>
            </div>

            <div className="mvv-card glass-card">
              <div className="mvv-icon"><i className="fa-solid fa-handshake"></i></div>
              <div>
                <h4>Valores</h4>
                <p>Ética profissional, conformidade regulatória intransigente, sustentabilidade operacional, responsabilidade social ativa e melhoria contínua dos processos.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Organograma Corporativo com Foco no QA/QC */}
        <div className="organogram-wrapper" data-aos="fade-up">
          <h3 className="subsection-title text-center">
            <i className="fa-solid fa-sitemap"></i> Organograma Focado na Garantia de Qualidade
          </h3>
          <p className="text-center text-muted mb-4">
            Veja como a segurança de alimentos e o controle de qualidade possuem autonomia total e 
            comunicação direta com a Diretoria Executiva (CEO), sem submissão ao setor produtivo.
          </p>
          
          <div className="organogram-tree">
            {/* Linha 1: CEO */}
            <div className="organogram-node node-ceo">
              <h5>Diretoria Executiva (CEO)</h5>
              <span>Decisões Estratégicas</span>
            </div>
            
            <div className="organogram-branches-1"></div>
            
            {/* Linha 2: QA & Produção */}
            <div className="organogram-row-2">
              <div className="organogram-node node-qa">
                <h5>Garantia da Qualidade (QA)</h5>
                <span>POPs, BPF, HACCP e Auditorias</span>
              </div>
              <div className="organogram-node node-ops">
                <h5>Gerência de Produção</h5>
                <span>Operação Industrial e Linha de Envase</span>
              </div>
            </div>
            
            <div className="organogram-branches-2"></div>
            
            {/* Linha 3: QC, Manutenção, Logística */}
            <div className="organogram-row-3">
              <div className="organogram-node node-qc">
                <h5>Controle de Qualidade (QC)</h5>
                <span>Laboratório de Microbiologia e Físico-Química</span>
              </div>
              <div className="organogram-node node-maint">
                <h5>Manutenção e Utilidades</h5>
                <span>CIP, Caldeira e Frio Industrial</span>
              </div>
              <div className="organogram-node node-log">
                <h5>Logística e Distribuição</h5>
                <span>Controle de Cadeia de Frio</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
