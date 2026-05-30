import React, { useState, useEffect } from 'react';

/**
 * Componente Principal de Processos (Process) - YogurVida
 * Consolida os módulos de:
 * 6. Processo de Fabricação do Iogurte (Fluxograma Interativo)
 * 7. Limpeza e Sanitização (CIP e POPs)
 * 8. Controle de Pragas (MIP)
 * 9. Gestão de Resíduos
 * 10. Controle de Qualidade (Dashboard Fictício com Gráficos SVG interativos)
 * 11. Sustentabilidade
 * 12. Conclusão Acadêmica e Referências Bibliográficas (ABNT)
 */
export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const [telemetryTemp, setTelemetryTemp] = useState(3.4);
  const [telemetryPasteur, setTelemetryPasteur] = useState(90.2);

  // Efeito de telemetria em tempo real para simular oscilações de sensores industriais
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryTemp(prev => {
        const delta = Math.random() * 0.4 - 0.2;
        return Math.max(2.8, Math.min(3.9, +(prev + delta).toFixed(1)));
      });
      setTelemetryPasteur(() => +(90.0 + Math.random() * 0.4).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Dados do Fluxograma Interativo
  const flowchartSteps = [
    {
      id: 1,
      title: "Recepção do Leite",
      objective: "Receber a matéria-prima dos produtores parceiros em condições ótimas de resfriamento, assegurando que o volume de leite atenda às demandas industriais sem comprometer a integridade inicial.",
      sanitation: "Desinfecção mecânica externa de todas as mangueiras de acoplamento do caminhão-tanque isotérmico. Verificação rigorosa e contínua de temperatura: o leite deve estar estritamente abaixo de 4.0°C.",
      law: "Instruções Normativas nº 76 e nº 77 de 2018 (MAPA) - Parâmetros oficiais de leite cru."
    },
    {
      id: 2,
      title: "Análises Laboratoriais",
      objective: "Verificar a integridade físico-química e microbiológica do leite recebido antes da autorização de descarregamento no parque industrial, prevenindo fraudes e contaminações biológicas ou químicas.",
      sanitation: "Uso de vidrarias estéreis e coleta de amostras direta das escotilhas de forma asséptica. Análise de acidez dornic (15°D a 18°D), crioscopia e kits Rápidos de Antibióticos. Repúdio total a lotes com inconformidades.",
      law: "RDC nº 275/2002 e Portaria SVS/MS nº 326/1997 - Registros auditáveis de matérias-primas."
    },
    {
      id: 3,
      title: "Pasteurização",
      objective: "Submeter o leite a um tratamento térmico controlado para eliminar 100% dos microrganismos patogênicos (Salmonella, Listeria) e inibir a microbiota banal, viabilizando o envase seguro.",
      sanitation: "Manutenção de uma pressão diferencial positiva nas placas de troca térmica (lado estéril pressurizado contra o lado cru). Monitoramento térmico eletrônico contínuo (90°C por 5 min ou 85°C por 30 min) com válvula automática de desvio de fluxo.",
      law: "Regulamento Técnico de Identidade e Qualidade (RTIQ) de Leites Fermentados (MAPA)."
    },
    {
      id: 4,
      title: "Resfriamento do Leite",
      objective: "Reduzir rapidamente a temperatura do leite pasteurizado quente até a faixa de inoculação biológica (42°C - 43°C), ideal para o crescimento metabólico das bactérias lácticas selecionadas.",
      sanitation: "Controle estrito de água gelada nas placas e verificação de integridade nas juntas sanitárias a fim de evitar infiltrações de microrganismos termófilos ambientais.",
      law: "Portaria SVS/MS nº 326/1997 - Controle térmico imediato de processos lácteos."
    },
    {
      id: 5,
      title: "Inoculação de Culturas",
      objective: "Adicionar à base lática a cultura iniciadora de bactérias láticas selecionadas de alta pureza biológica nas dosagens recomendadas para guiar a fermentação correta.",
      sanitation: "Abertura de embalagens de cultura liofilizada e dosagem conduzidas em capela de fluxo laminar com assepsia por álcool 70% nos bicos de dosagem.",
      law: "Instrução Normativa do MAPA (RTIQ) - Define as culturas tradicionais Lactobacillus bulgaricus e Streptococcus thermophilus."
    },
    {
      id: 6,
      title: "Fermentação Controlada",
      objective: "Permitir o crescimento simbiótico controlado das bactérias láticas para que consumam lactose, produzam ácido lático, reduzam o pH até 4.5 e gerem os compostos aromáticos e a consistência típica do iogurte.",
      sanitation: "Uso de tanques encamisados estéreis com filtros de ar absolutos de 0.22 mícrons nos suspiros. Monitoramento automatizado de pH online, interrompendo a fermentação pelo resfriamento rápido ao atingir o pH de 4.5.",
      law: "RDC nº 275/2002 - Calibração diária de potenciômetros e termômetros eletrônicos de processo."
    },
    {
      id: 7,
      title: "Adição de Ingredientes",
      objective: "Adicionar geleias de morango, polpas de frutas esterilizadas, aromas e estabilizantes ao gel fermentado liso sob agitação suave, garantindo a uniformidade física e sensorial de cor e sabor.",
      sanitation: "Utilização de sistemas de adição pneumática fechada. Polpas de frutas pré-esterilizadas térmicas a vácuo em bags assépticos de fornecedores homologados. Sanitização CIP de bicos pós-lote.",
      law: "RDC nº 275/2002 e RDC nº 727/2022 (ANVISA) - Rotulagem de alérgenos e aditivos alimentares."
    },
    {
      id: 8,
      title: "Homogeneização",
      objective: "Quebrar suavemente a coalhada de iogurte para garantir viscosidade uniforme, brilho na textura e consistência cremosa cremosa livre de grumos ou separação de soro (sinérese).",
      sanitation: "Uso de homogeneizadores mecânicos sanitários de pistão operando sob pressão estável, integrados ao sistema CIP central. Vedação hermética de gaxetas para evitar entrada de ar e contaminação.",
      law: "Portaria SVS/MS nº 326/1997 - Processos físicos e refino mecânico seguro de textura."
    },
    {
      id: 9,
      title: "Envase e Selagem",
      objective: "Fracionar e selar hermeticamente o iogurte em potes plásticos individuais de grau alimentício sob atmosfera modificada, impedindo contaminação por fungos e preservando a vida útil.",
      sanitation: "Envase automatizado conduzido em cabine selada equipada com fluxo laminar estéril e filtros absolutos HEPA (pressão positiva). Desinfecção contínua da lâmina plástica de selo por lâmpadas ultravioleta (UV).",
      law: "Decreto-Lei nº 986/1969 e RDC nº 275/2002 - Vedação hermética e padrões de pesos e medidas do INMETRO."
    },
    {
      id: 10,
      title: "Rotulagem",
      objective: "Aplicar o rótulo comercial contendo de forma explícita e clara todas as informações técnicas e regulamentadas para orientação nutricional e legal do consumidor final.",
      sanitation: "Verificação da legibilidade do lote de impressão térmica automática (datador). Rótulo deve trazer alertas visíveis sobre alérgenos (contém leite), lactose, tabela nutricional e dados do SAC.",
      law: "Lei nº 8.078/1990 (Código de Defesa do Consumidor) e RDC nº 727/2022 (ANVISA) - Proteção ao direito de informação."
    },
    {
      id: 11,
      title: "Armazenamento Refrigerado",
      objective: "Armazenar os paletes de iogurte acabado em câmaras frias sob cadeia fria contínua para desacelerar o metabolismo das bactérias láticas, mantendo o gel estruturado e inalterado.",
      sanitation: "Manutenção higiênica e livre de umidade excessiva nas câmaras frias. Sistema telemétrico automático de registro térmico operando continuamente abaixo de 4.0°C com alarmes visuais e sonoros.",
      law: "Instrução Normativa do MAPA e Portaria SVS/MS nº 326/1997 - Exigência de cadeia fria permanente para perecíveis lácteos."
    },
    {
      id: 12,
      title: "Distribuição Comercial",
      objective: "Transportar o iogurte acabado de forma segura até os centros de distribuição e gôndolas de supermercados parceiros, preservando a cadeia de frio e a segurança de alimentos intactas.",
      sanitation: "Exigência de caminhões frigoríficos climatizados com revestimento interno impermeável higienizável. Monitoramento contínuo de temperatura na cabine e higienização física do baú a cada descarregamento.",
      law: "Lei nº 8.078/1990 (CDC) - Responsabilidade objetiva do fabricante pelo ciclo completo de vida comercial."
    }
  ];

  return (
    <div className="process-page-wrapper">
      
      {/* 6. PROCESSO DE FABRICAÇÃO DO IOGURTE (FLUXOGRAMA INTERATIVO) */}
      <section id="processo-fluxograma" className="section-padding section-light">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Engenharia de Alimentos</span>
            <h2 className="section-title">Processo de Fabricação do Iogurte (Fluxograma)</h2>
            <div className="header-divider"></div>
            <p className="text-center text-muted">
              Clique em qualquer etapa do fluxograma industrial abaixo para visualizar em tempo real os 
              <strong> Objetivos</strong>, <strong>Cuidados Sanitários</strong> e a <strong>Legislação Aplicada</strong> correspondente.
            </p>
          </div>
          
          <div className="flowchart-interactive-grid">
            
            {/* Lista dos Nós de Processamento */}
            <div className="flowchart-nodes" data-aos="fade-right">
              {flowchartSteps.map(step => (
                <div 
                  key={step.id} 
                  className={`flowchart-node-item ${activeStep === step.id ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="flow-num">{step.id}</div>
                  <div className="flow-title">{step.title}</div>
                </div>
              ))}
            </div>
            
            {/* Painel de Detalhes da Etapa */}
            <div className="flowchart-details-panel glass-card" data-aos="fade-left" id="flowDetailsPanel">
              <div className="panel-header-badge"><i className="fa-solid fa-industry"></i> Detalhe da Etapa Industrial</div>
              <h3 className="text-gradient">{flowchartSteps[activeStep - 1].title}</h3>
              <hr />
              
              <div className="detail-block">
                <h4 className="text-primary"><i className="fa-solid fa-bullseye"></i> Objetivo</h4>
                <p>{flowchartSteps[activeStep - 1].objective}</p>
              </div>
              
              <div className="detail-block">
                <h4 className="text-primary"><i className="fa-solid fa-hand-holding-medical"></i> Cuidados Sanitários Críticos</h4>
                <p>{flowchartSteps[activeStep - 1].sanitation}</p>
              </div>
              
              <div className="detail-block">
                <h4 className="text-primary"><i className="fa-solid fa-scale-balanced"></i> Legislação Aplicada</h4>
                <div className="law-pill">{flowchartSteps[activeStep - 1].law}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. LIMPEZA E SANITIZAÇÃO (SISTEMAS POPs) */}
      <section id="higienizacao" className="section-padding">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Higiene Industrial Avançada</span>
            <h2 className="section-title">Limpeza e Sanitização (Sistemas POPs)</h2>
            <div className="header-divider"></div>
            <p className="text-center text-muted">A YogurVida adota o sistema CIP (Clean-In-Place) automatizado, garantindo a desinfecção química completa sem necessidade de desmontagem de tubulações.</p>
          </div>
          
          <div className="two-col-grid">
            <div data-aos="fade-right">
              <h3>Higienização de Processos (CIP)</h3>
              <p>O Procedimento Operacional Padronizado (POP) de higienização de tubulações segue ciclos controlados automaticamente por sensores físico-químicos integrados à central de controle:</p>
              
              <div className="cip-cycle">
                <div className="cip-step">
                  <i className="fa-solid fa-water"></i>
                  <div>
                    <h5>1. Pré-Enxágue</h5>
                    <p>Recuperação inicial e enxágue com água limpa para remover resíduos grosseiros de leite e iogurte aderidos.</p>
                  </div>
                </div>
                <div className="cip-step">
                  <i className="fa-solid fa-flask"></i>
                  <div>
                    <h5>2. Limpeza Alcalina</h5>
                    <p>Circulação de solução de Soda Cáustica (NaOH) a 1.5% - 2.0% a 75°C-80°C por 20 minutos para saponificação e dissolução de gorduras e proteínas lácteas.</p>
                  </div>
                </div>
                <div className="cip-step">
                  <i className="fa-solid fa-vial"></i>
                  <div>
                    <h5>3. Limpeza Ácida</h5>
                    <p>Circulação de solução de Ácido Nítrico (HNO3) a 0.8% - 1.0% a 55°C-60°C por 15 minutos para desincrustação mineral (pedra de leite).</p>
                  </div>
                </div>
                <div className="cip-step">
                  <i className="fa-solid fa-biohazard"></i>
                  <div>
                    <h5>4. Sanitização Final</h5>
                    <p>Circulação de Ácido Peracético a 0.2% em temperatura ambiente por 10 minutos para eliminação microbiológica completa de esporos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h3>Cronograma de Frequência POPs</h3>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Frequência</th>
                    <th>Área/Item</th>
                    <th>Agente Sanitizante</th>
                    <th>Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Diária / Por Turno</strong></td>
                    <td>Pisos, ralos, tanques de fermentação, envasadoras, plataformas de recepção.</td>
                    <td>Cloro ativo (250 ppm) e soda cáustica 1.5% para CIP.</td>
                    <td>Operador de Produção / QA</td>
                  </tr>
                  <tr>
                    <td><strong>Semanal</strong></td>
                    <td>Paredes, tetos externos, painéis elétricos estanques, depósitos de frutas.</td>
                    <td>Álcool 70% por aspersão e sabão neutro.</td>
                    <td>Líder da Higienização</td>
                  </tr>
                  <tr>
                    <td><strong>Mensal</strong></td>
                    <td>Silos externos de armazenamento de leite, caldeiras e rede hidráulica.</td>
                    <td>Desincrustação ácida (Ácido Nítrico) e quaternário de amônia.</td>
                    <td>Equipe Terceirizada</td>
                  </tr>
                </tbody>
              </table>

              <div className="verification-box mt-4">
                <h5><i className="fa-solid fa-clipboard-check text-primary"></i> Métodos de Verificação de Eficácia</h5>
                <p className="mb-0">A eficácia dos POPs é checada por dois métodos obrigatórios: análise swab de superfície para contagem microbiológica e leitura imediata de ATP por bioluminometria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTROLE DE PRAGAS */}
      <section id="controle-pragas" className="section-padding section-light">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Manejo Integrado</span>
            <h2 className="section-title">Controle Integrado de Pragas (MIP)</h2>
            <div className="header-divider"></div>
            <p className="text-center text-muted">Protocolo de controle preventivo para garantir ambiente livre de vetores e pragas biológicas, evitando contaminações físicas e biológicas.</p>
          </div>
          
          <div className="pest-grid">
            <div data-aos="fade-right">
              <h3>Mapeamento de Riscos e Vetores</h3>
              <p>Na indústria de laticínios, a umidade e os resíduos orgânicos ricos em proteínas e açúcares agem como potentes atrativos para pragas. Nossos principais riscos monitorados são:</p>
              
              <div className="pest-cards">
                <div className="pest-card glass-card">
                  <i className="fa-solid fa-bug text-danger"></i>
                  <div>
                    <h5>Moscas e Mosquitos</h5>
                    <p>Vetores diretos de bactérias entéricas. Controlados com cortinas de ar nas saídas e armadilhas luminosas com placas colantes (proibido armadilhas elétricas de eletrocussão na área de processo).</p>
                  </div>
                </div>
                <div className="pest-card glass-card">
                  <i className="fa-solid fa-shield-virus text-danger"></i>
                  <div>
                    <h5>Baratas e Formigas</h5>
                    <p>Vetores mecânicos em depósitos de almoxarifado de embalagens. Controlados com iscas de gel não tóxico e dedetização controlada por barreira química no perímetro externo.</p>
                  </div>
                </div>
                <div className="pest-card glass-card">
                  <i className="fa-solid fa-paw text-danger"></i>
                  <div>
                    <h5>Roedores</h5>
                    <p>Transmissores de leptospirose. Monitoramento permanente com caixas porta-iscas numeradas e mapeadas no perímetro externo da fábrica.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h3>Fluxograma do Ciclo MIP</h3>
              <div className="mip-flowchart">
                <div className="mip-node">
                  <div className="mip-node-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                  <h5>1. Inspeção</h5>
                  <span>Verificação de frestas, telas de proteção e barreiras físicas.</span>
                </div>
                <div className="flow-arrow-down"><i className="fa-solid fa-arrow-down-long"></i></div>
                
                <div className="mip-node">
                  <div className="mip-node-icon"><i className="fa-solid fa-fingerprint"></i></div>
                  <h5>2. Identificação</h5>
                  <span>Identificação do tipo de praga e classificação do nível de risco.</span>
                </div>
                <div className="flow-arrow-down"><i className="fa-solid fa-arrow-down-long"></i></div>
                
                <div className="mip-node">
                  <div className="mip-node-icon"><i className="fa-solid fa-syringe"></i></div>
                  <h5>3. Tratamento</h5>
                  <span>Medidas mecânicas (barreiras) ou aplicação química por empresa especializada e licenciada.</span>
                </div>
                <div className="flow-arrow-down"><i className="fa-solid fa-arrow-down-long"></i></div>
                
                <div className="mip-node">
                  <div className="mip-node-icon"><i className="fa-solid fa-eye"></i></div>
                  <h5>4. Monitoramento & Registro</h5>
                  <span>Emissão de relatórios técnicos de monitoramento e manutenção de barreiras.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GESTÃO DE RESÍDUOS */}
      <section id="gestao-residuos" className="section-padding">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Sustentabilidade Ecológica</span>
            <h2 className="section-title">Gestão e Destinação de Resíduos Industriais</h2>
            <div className="header-divider"></div>
            <p className="text-center text-muted">Como processamos os efluentes líquidos orgânicos e sólidos recicláveis oriundos de nosso processo produtivo em conformidade com as leis ambientais.</p>
          </div>
          
          <div className="residuos-grid">
            <div className="residuos-text" data-aos="fade-right">
              <h3>Categorias de Resíduos na Planta</h3>
              
              <div className="residuo-box glass-card bg-organic" style={{ borderLeft: '4px solid var(--primary-dark)' }}>
                <h4><i className="fa-solid fa-seedling"></i> Resíduos Orgânicos Lácteos</h4>
                <p>Sobras de soro de leite resultantes da padronização, sobras de iogurtes fora do padrão comercial ou perdas residuais de processo. São direcionados para a nossa <strong>Estação de Tratamento de Efluentes (ETE)</strong> com digestores anaeróbios, ou encaminhados para nutrição animal e compostagem.</p>
              </div>
              
              <div className="residuo-box glass-card bg-recycle" style={{ borderLeft: '4px solid var(--primary)' }}>
                <h4><i className="fa-solid fa-recycle"></i> Resíduos Recicláveis Sólidos</h4>
                <p>Papelão de fardos, bombonas plásticas de detergentes químicos sanitários, filmes plásticos de paletes e sobras de potes de iogurtes não utilizados. São triados através da nossa central de coleta seletiva identificada por cores padronizadas (CONAMA).</p>
              </div>
            </div>
            
            <div className="residuos-infographic" data-aos="fade-left">
              <h4 className="text-center mb-4"><i className="fa-solid fa-shuffle"></i> Fluxograma de Processamento de Resíduos</h4>
              
              <div className="trash-steps">
                <div className="trash-step">
                  <div className="trash-step-badge"><i className="fa-solid fa-industry"></i></div>
                  <div>
                    <h5>Geração & Triagem na Origem</h5>
                    <p>Separação imediata de resíduos no próprio posto de trabalho por operadores da YogurVida.</p>
                  </div>
                </div>
                <div className="trash-step">
                  <div className="trash-step-badge"><i className="fa-solid fa-warehouse"></i></div>
                  <div>
                    <h5>Armazenamento Segregado</h5>
                    <p>Depósitos cobertos isolados da produção, devidamente identificados para recicláveis e orgânicos.</p>
                  </div>
                </div>
                <div className="trash-step">
                  <div className="trash-step-badge"><i className="fa-solid fa-truck"></i></div>
                  <div>
                    <h5>Coleta & Transporte Licenciado</h5>
                    <p>Retirada por empresas homologadas com CADRI emitido por órgãos ambientais.</p>
                  </div>
                </div>
                <div className="trash-step">
                  <div className="trash-step-badge"><i className="fa-solid fa-earth-americas"></i></div>
                  <div>
                    <h5>Destinação Ecológica Final</h5>
                    <p>Encaminhamento para reciclagem especializada, compostagem biológica ou aterros sanitários industriais certificados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTROLE DE QUALIDADE (DASHBOARD COM SVGS SEGUROS ZERO-DEPENDENCIAS) */}
      <section id="qualidade-dashboard" className="section-padding section-light">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Simulador de Telemetria de Laticínios</span>
            <h2 className="section-title">Painel de Controle de Qualidade (Dashboard)</h2>
            <div className="header-divider"></div>
            <p className="text-center text-muted">Acompanhe a simulação em tempo real dos nossos sensores industriais. Este dashboard ilustra a rastreabilidade digital e o controle térmico e microbiológico exigido pelos regulamentos de BPF.</p>
          </div>
          
          {/* Telemetria Real-Time Bar */}
          <div className="telemetry-bar glass-card" data-aos="zoom-in">
            <div className="tel-item">
              <span className="tel-label"><i className="fa-solid fa-barcode"></i> Lote Ativo</span>
              <span className="tel-value text-primary">L-IO2026-94</span>
            </div>
            <div className="tel-item">
              <span className="tel-label"><i className="fa-solid fa-microscope"></i> Análise Microbiológica</span>
              <span className="tel-value text-success"><i className="fa-solid fa-shield-check"></i> CONFORME</span>
            </div>
            <div className="tel-item">
              <span className="tel-label"><i className="fa-solid fa-temperature-three-quarters"></i> Pasteurizador T°C</span>
              <span className="tel-value text-danger">{telemetryPasteur} °C</span>
            </div>
            <div className="tel-item">
              <span className="tel-label"><i className="fa-solid fa-chart-simple"></i> Status do CIP</span>
              <span className="tel-value text-success"><i className="fa-solid fa-circle-check"></i> PRONTO</span>
            </div>
          </div>
          
          {/* Gráficos em Vetor SVG de Alta Resolução e Responsivos (100% autossuficientes!) */}
          <div className="charts-grid mt-4">
            
            <div className="chart-card glass-card" data-aos="fade-right">
              <div className="chart-header">
                <h5><i className="fa-solid fa-chart-line text-primary"></i> Curva de Acidificação (Fermentação)</h5>
                <span>pH ótimo ideal estabilizado em 4.5</span>
              </div>
              <div className="chart-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* SVG da Curva de pH */}
                <svg viewBox="0 0 400 200" width="100%" height="100%" style={{ overflow: 'visible' }}>
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="380" y2="20" stroke="rgba(218,112,214,0.15)" strokeWidth="1" />
                  <line x1="40" y1="70" x2="380" y2="70" stroke="rgba(218,112,214,0.15)" strokeWidth="1" />
                  <line x1="40" y1="120" x2="380" y2="120" stroke="rgba(218,112,214,0.15)" strokeWidth="1" />
                  <line x1="40" y1="170" x2="380" y2="170" stroke="rgba(218,112,214,0.15)" strokeWidth="2" />
                  
                  {/* Y Axis Labels */}
                  <text x="15" y="24" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">pH 6.5</text>
                  <text x="15" y="74" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">pH 5.5</text>
                  <text x="15" y="124" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">pH 4.8</text>
                  <text x="15" y="174" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">pH 4.5</text>
                  
                  {/* X Axis Labels */}
                  <text x="40" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">0h</text>
                  <text x="96" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">2h</text>
                  <text x="152" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">4h</text>
                  <text x="208" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">5h</text>
                  <text x="264" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">6h</text>
                  <text x="320" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">7h</text>
                  <text x="370" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">8h</text>

                  {/* Curva de pH preenchida */}
                  <path 
                    d="M 40 20 L 96 50 L 152 110 L 208 140 L 264 160 L 320 170 L 380 170 L 380 170 L 380 170 L 380 170 L 380 170 Z" 
                    fill="rgba(218,112,214,0.05)" 
                  />
                  <path 
                    d="M 40 20 Q 110 50 160 110 T 260 160 T 320 170 H 380" 
                    fill="none" 
                    stroke="var(--primary)" 
                    strokeWidth="3.5" 
                  />

                  {/* Pontos de Amostragem */}
                  <circle cx="40" cy="20" r="5" fill="var(--primary-dark)" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="160" cy="110" r="5" fill="var(--primary-dark)" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="260" cy="160" r="5" fill="var(--primary-dark)" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="320" cy="170" r="5" fill="var(--primary-dark)" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="380" cy="170" r="5" fill="var(--primary-dark)" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <div className="chart-card glass-card" data-aos="fade-left">
              <div className="chart-header">
                <h5><i className="fa-solid fa-temperature-arrow-down text-danger"></i> Controle da Cadeia de Frio final (Câmara Fria)</h5>
                <span>Temperatura atual: <strong className="text-danger">{telemetryTemp.toFixed(1)} °C</strong> (Limite legal &le; 4°C)</span>
              </div>
              <div className="chart-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* SVG da Curva de Temperatura */}
                <svg viewBox="0 0 400 200" width="100%" height="100%" style={{ overflow: 'visible' }}>
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="380" y2="20" stroke="rgba(218,112,214,0.15)" strokeWidth="1" />
                  <line x1="40" y1="70" x2="380" y2="70" stroke="rgba(218,112,214,0.15)" strokeWidth="1" />
                  <line x1="40" y1="120" x2="380" y2="120" stroke="rgba(218,112,214,0.15)" strokeWidth="1" />
                  <line x1="40" y1="170" x2="380" y2="170" stroke="rgba(218,112,214,0.15)" strokeWidth="2" />
                  
                  {/* Red Critical Limit Line (4.0°C) */}
                  <line x1="40" y1="70" x2="380" y2="70" stroke="rgba(230, 57, 70, 0.4)" strokeWidth="2" strokeDasharray="4,4" />
                  <text x="300" y="62" fill="var(--danger)" fontSize="8" fontWeight="bold" fontFamily="Inter">LIMITE CRÍTICO: 4.0°C</text>

                  {/* Y Axis Labels */}
                  <text x="15" y="24" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">5.0°C</text>
                  <text x="15" y="74" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">4.0°C</text>
                  <text x="15" y="124" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">3.0°C</text>
                  <text x="15" y="174" fill="var(--text-muted)" fontSize="10" fontFamily="Inter">2.0°C</text>
                  
                  {/* X Axis Labels */}
                  <text x="40" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">12h</text>
                  <text x="96" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">13h</text>
                  <text x="152" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">14h</text>
                  <text x="208" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">15h</text>
                  <text x="264" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">16h</text>
                  <text x="320" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">17h</text>
                  <text x="380" y="190" fill="var(--text-muted)" fontSize="9" fontFamily="Inter">18h</text>

                  {/* Curva de Temperatura preenchida */}
                  <path 
                    d={`M 40 100 L 96 90 L 152 110 L 208 105 L 264 95 L 320 108 L 380 ${170 - (telemetryTemp * 50 - 50)} L 380 170 L 40 170 Z`} 
                    fill="rgba(230,57,70,0.04)" 
                  />
                  <path 
                    d={`M 40 100 Q 96 90 152 110 T 264 95 T 320 108 T 380 ${170 - (telemetryTemp * 50 - 50)}`} 
                    fill="none" 
                    stroke="var(--danger)" 
                    strokeWidth="3" 
                  />

                  {/* Pontos de Amostragem */}
                  <circle cx="40" cy="100" r="4" fill="var(--danger)" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="152" cy="110" r="4" fill="var(--danger)" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="264" cy="95" r="4" fill="var(--danger)" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="320" cy="108" r="4" fill="var(--danger)" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="380" cy={170 - (telemetryTemp * 50 - 50)} r="5" fill="var(--danger)" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
            </div>

          </div>

          {/* Microbiologia Patógenos Grid */}
          <div className="microbiology-box glass-card mt-4" data-aos="fade-up">
            <h4 className="text-center mb-4"><i className="fa-solid fa-microscope"></i> Monitoramento Laboratorial de Patógenos por Lote</h4>
            
            <div className="microbiology-grid">
              <div className="microbiology-card conform">
                <div className="micro-status"><i className="fa-solid fa-circle-check"></i></div>
                <h5>Salmonella spp.</h5>
                <span>Limite legal ANVISA: Ausente em 25g</span>
                <div className="micro-result">Resultado: AUSENTE</div>
              </div>
              <div className="microbiology-card conform">
                <div className="micro-status"><i className="fa-solid fa-circle-check"></i></div>
                <h5>Listeria monocytogenes</h5>
                <span>Limite legal ANVISA: Ausente em 25g</span>
                <div className="micro-result">Resultado: AUSENTE</div>
              </div>
              <div className="microbiology-card conform">
                <div className="micro-status"><i className="fa-solid fa-circle-check"></i></div>
                <h5>Coliformes a 45°C</h5>
                <span>Limite legal ANVISA: &le; 10 NMP/g</span>
                <div className="micro-result">Resultado: &lt; 0.3 NMP/g</div>
              </div>
              <div className="microbiology-card conform">
                <div className="micro-status"><i className="fa-solid fa-circle-check"></i></div>
                <h5>Bolores e Leveduras</h5>
                <span>Limite legal ANVISA: &le; 100 UFC/g</span>
                <div className="micro-result">Resultado: &lt; 10 UFC/g</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SUSTENTABILIDADE */}
      <section id="sustentabilidade" className="section-padding">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Compromisso Ecológico</span>
            <h2 className="section-title">Sustentabilidade e Gestão Ambiental</h2>
            <div className="header-divider"></div>
            <p className="text-center text-muted">A YogurVida busca constantemente balancear a eficiência industrial e sanitária com práticas ambientais regenerativas.</p>
          </div>
          
          <div className="sustainability-grid">
            <div className="sustainability-card glass-card" data-aos="fade-up" data-aos-delay="100">
              <i className="fa-solid fa-hand-holding-droplet" style={{ color: 'var(--success)' }}></i>
              <h4>Economia e Reuso de Água</h4>
              <p>Utilização de condensado de caldeiras recuperado para processos indiretos e otimização dos ciclos de pré-enxágue do sistema CIP. Redução de 25% no consumo hídrico comparado à média do setor.</p>
            </div>
            <div className="sustainability-card glass-card" data-aos="fade-up" data-aos-delay="200">
              <i className="fa-solid fa-lightbulb" style={{ color: 'var(--success)' }}></i>
              <h4>Eficiência Energética</h4>
              <p>Trocadores de calor a placas inteligentes de fluxo contra-corrente que utilizam a temperatura do leite quente recém-pasteurizado para pré-aquecer o leite cru que entra na planta.</p>
            </div>
            <div className="sustainability-card glass-card" data-aos="fade-up" data-aos-delay="300">
              <i className="fa-solid fa-box-open" style={{ color: 'var(--success)' }}></i>
              <h4>Embalagens Circulares</h4>
              <p>Potes de iogurte feitos com material 100% reciclável e parceria de compensação de resíduos plásticos via selo <strong>eureciclo</strong>, neutralizando as embalagens enviadas ao mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CONCLUSÃO */}
      <section id="conclusao" className="section-padding section-light section-conclusion">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Considerações Finais</span>
            <h2 className="section-title">Conclusão Acadêmica</h2>
            <div className="header-divider"></div>
          </div>
          
          <div className="conclusion-box glass-card" data-aos="zoom-in">
            <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
            <p>
              A produção industrial de iogurtes pela <strong>YogurVida Indústria de Laticínios LTDA</strong> demonstra de forma prática 
              que o sucesso de uma marca alimentícia depende da fusão harmoniosa de processos industriais otimizados com o cumprimento ético 
              e estrito da <strong>Legislação Sanitária Brasileira</strong>.
            </p>
            <p>
              O <strong>Manual de Boas Práticas de Fabricação (BPF)</strong> não é apenas uma exigência jurídica e cartorial da ANVISA e do MAPA, 
              mas a espinha dorsal de um ecossistema produtivo comprometido em assegurar a saúde pública do consumidor e preservar a excelência, 
              durabilidade e sabor dos produtos lácteos no mercado nacional.
            </p>
            <p>
              Seguir regras de higiene pessoal, instalar equipamentos sanitários em aço inoxidável e controlar as variáveis críticas de 
              processamento (como a Pasteurização e Cadeia de Frio) são compromissos éticos fundamentais assumidos com seriedade por cada 
              colaborador da YogurVida Laticínios.
            </p>
            <div className="author-signature">
              <div className="line"></div>
              <h5>YogurVida Indústria de Laticínios LTDA</h5>
              <span>Qualidade, Segurança e Sabor em Cada Colherada</span>
            </div>
          </div>
        </div>
      </section>

      {/* REFERÊNCIAS BIBLIOGRÁFICAS (ABNT) */}
      <section id="referencias" className="section-padding bg-dark text-light" style={{ backgroundColor: '#0f0912', color: '#af9daf' }}>
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-subtitle text-primary" style={{ color: 'var(--primary)' }}>Bibliografia Universitária</span>
            <h2 className="section-title text-light" style={{ color: '#ffffff' }}>Referências Regulatórias</h2>
            <div className="header-divider bg-primary" style={{ backgroundColor: 'var(--primary)' }}></div>
          </div>
          
          <div className="references-list" data-aos="fade-up">
            <div className="ref-item" style={{ display: 'flex', gap: '20px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '16px' }}>
              <i className="fa-solid fa-book" style={{ color: 'var(--primary-light)', fontSize: '1.4rem' }}></i>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>BRASIL. MINISTÉRIO DA SAÚDE. AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (ANVISA).</strong> 
                <span style={{ fontSize: '0.88rem', color: '#af9daf' }}>Resolução RDC nº 275, de 21 de outubro de 2002. Dispõe sobre o Regulamento Técnico de Procedimentos Operacionais Padronizados aplicados aos Estabelecimentos Produtores/Industrializadores de Alimentos e a Lista de Verificação das Boas Práticas de Fabricação. Diário Oficial da União, Brasília, DF, 2002.</span>
              </div>
            </div>
            <div className="ref-item" style={{ display: 'flex', gap: '20px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '16px' }}>
              <i className="fa-solid fa-book" style={{ color: 'var(--primary-light)', fontSize: '1.4rem' }}></i>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>BRASIL. MINISTÉRIO DA SAÚDE. SECRETARIA DE VIGILÂNCIA SANITÁRIA.</strong> 
                <span style={{ fontSize: '0.88rem', color: '#af9daf' }}>Portaria nº 326, de 30 de julho de 1997. Aprova o Regulamento Técnico; Condições Higiênico-Sanitárias e de Boas Práticas de Fabricação para Estabelecimentos Produtores/Industrializadores de Alimentos. Diário Oficial da União, Brasília, DF, 1997.</span>
              </div>
            </div>
            <div className="ref-item" style={{ display: 'flex', gap: '20px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '16px' }}>
              <i className="fa-solid fa-book" style={{ color: 'var(--primary-light)', fontSize: '1.4rem' }}></i>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>BRASIL. MINISTÉRIO DA AGRICULTURA, PECUÁRIA E ABASTECIMENTO (MAPA).</strong> 
                <span style={{ fontSize: '0.88rem', color: '#af9daf' }}>Instrução Normativa nº 76 e nº 77, de 26 de novembro de 2018. Fixa os Regulamentos Técnicos de Produção, Identidade e Qualidade do Leite Cru. Diário Oficial da União, Brasília, DF, 2018.</span>
              </div>
            </div>
            <div className="ref-item" style={{ display: 'flex', gap: '20px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '16px' }}>
              <i className="fa-solid fa-book" style={{ color: 'var(--primary-light)', fontSize: '1.4rem' }}></i>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>BRASIL. PRESIDÊNCIA DA REPÚBLICA.</strong> 
                <span style={{ fontSize: '0.88rem', color: '#af9daf' }}>Decreto-Lei nº 986, de 21 de outubro de 1969. Institui normas básicas sobre alimentos. Diário Oficial da União, Brasília, DF, 1969.</span>
              </div>
            </div>
            <div className="ref-item" style={{ display: 'flex', gap: '20px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '16px' }}>
              <i className="fa-solid fa-book" style={{ color: 'var(--primary-light)', fontSize: '1.4rem' }}></i>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>BRASIL. PRESIDÊNCIA DA REPÚBLICA.</strong> 
                <span style={{ fontSize: '0.88rem', color: '#af9daf' }}>Lei nº 6.437, de 20 de agosto de 1977. Configura infrações à legislação sanitária federal, estabelece as sanções respectivas, e dá outras providências. Diário Oficial da União, Brasília, DF, 1977.</span>
              </div>
            </div>
            <div className="ref-item" style={{ display: 'flex', gap: '20px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
              <i className="fa-solid fa-book" style={{ color: 'var(--primary-light)', fontSize: '1.4rem' }}></i>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>BRASIL. PRESIDÊNCIA DA REPÚBLICA.</strong> 
                <span style={{ fontSize: '0.88rem', color: '#af9daf' }}>Lei nº 8.078, de 11 de setembro de 1990. Dispõe sobre a proteção do consumidor e dá outras providências (Código de Defesa do Consumidor). Diário Oficial da União, Brasília, DF, 1990.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
