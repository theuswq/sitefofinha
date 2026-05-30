import React from 'react';

/**
 * Componente da Página "Importância da Legislação" (Legislation) - YogurVida
 * Detalha a importância da regulamentação alimentar para a saúde pública,
 * padronização de processos, proteção jurídica da indústria e defesa
 * do consumidor final.
 */
export default function Legislation() {
  return (
    <section id="legislacao-sobre" className="section-padding">
      <div className="container">
        
        {/* Cabeçalho de Seção */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Normatividade e Proteção</span>
          <h2 className="section-title">Importância da Legislação de Alimentos</h2>
          <div className="header-divider"></div>
        </div>
        
        {/* Grid com Argumentos Acadêmicos Principais */}
        <div className="legislation-intro-grid">
          
          <div className="leg-intro-card" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-circle"><i className="fa-solid fa-heart-pulse"></i></div>
            <h3>Proteção da Saúde Pública</h3>
            <p>
              O objetivo primordial da legislação de alimentos é salvaguardar a integridade biológica do consumidor. 
              Leis e fiscalizações rigorosas previnem ativamente a ocorrência de Doenças Transmitidas por Alimentos (DTAs), 
              como a salmonelose, listeriose e intoxicações estafilocócicas graves causadas por falhas na higienização.
            </p>
          </div>

          <div className="leg-intro-card" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-circle"><i className="fa-solid fa-arrows-spin"></i></div>
            <h3>Padronização de Processos</h3>
            <p>
              Normativas técnicas asseguram que todas as indústrias de laticínios do país sigam as mesmas diretrizes 
              operacionais de assepsia, tratamentos térmicos e de análises de liberação. Isso garante uniformidade de mercado, 
              qualidade reprodutível do iogurte e equidade competitiva entre marcas.
            </p>
          </div>

          <div className="leg-intro-card" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-circle"><i className="fa-solid fa-scale-balanced"></i></div>
            <h3>Defesa do Consumidor e Rastreabilidade</h3>
            <p>
              Estabelece regramentos estritos para rotulagem (declaração de alérgenos, teores de açúcar, tabela de informação 
              nutricional atualizada), garantindo o direito constitucional à informação segura, e define mecanismos jurídicos 
              claros para o rastreio total de lotes e eventuais recalls de produtos.
            </p>
          </div>

        </div>

        {/* Infográfico do Ciclo Virtuoso de Impacto Legal */}
        <div className="infographic-box glass-card" data-aos="zoom-in">
          <h3 className="subsection-title text-center">
            <i className="fa-solid fa-shield-check"></i> Ciclo Virtuoso dos Impactos da Legislação na Indústria
          </h3>
          
          <div className="infographic-grid">
            
            <div className="info-step">
              <span className="info-num">01</span>
              <h5>Rigor Legal</h5>
              <p>Normativas estritas da ANVISA/MAPA implementadas nas rotinas operacionais e auditadas internamente.</p>
            </div>
            
            <div className="info-arrow"><i className="fa-solid fa-angles-right"></i></div>
            
            <div className="info-step">
              <span className="info-num">02</span>
              <h5>Redução de Falhas</h5>
              <p>Minimização de contaminações cruzadas, desvios térmicos e descartes de lotes por deterioração.</p>
            </div>
            
            <div className="info-arrow"><i className="fa-solid fa-angles-right"></i></div>
            
            <div className="info-step">
              <span className="info-num">03</span>
              <h5>Credibilidade</h5>
              <p>O mercado varejista e os clientes finais confiam na marca, aumentando as vendas e fidelidade.</p>
            </div>
            
            <div className="info-arrow"><i className="fa-solid fa-angles-right"></i></div>
            
            <div className="info-step">
              <span className="info-num">04</span>
              <h5>Segurança Total</h5>
              <p>Consumidores saudáveis e bem alimentados, reduzindo custos de saúde pública e protegendo a empresa juridicamente.</p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
