import React, { useState } from 'react';

/**
 * Componente do "Manual de BPF" (ManualBPF) - YogurVida
 * Organiza em abas interativas todas as especificações técnicas da indústria:
 * 5.1 Higiene Pessoal (com protocolo de lavagem)
 * 5.2 Instalações e Equipamentos (arquitetura sanitária)
 * 5.3 Controle de Processos (tabela de pontos críticos de controle)
 */
export default function ManualBPF() {
  const [activeTab, setActiveTab] = useState('higiene-pessoal');

  return (
    <section id="manual-bpf" class="section-padding">
      <div class="container">
        
        {/* Cabeçalho de Seção */}
        <div class="section-header" data-aos="fade-up">
          <span class="section-subtitle">Procedimentos Técnicos</span>
          <h2 class="section-title">Manual de Boas Práticas de Fabricação (BPF)</h2>
          <div class="header-divider"></div>
          <p class="text-center text-muted">
            Detalhamento operacional das diretrizes e especificações higiênico-sanitárias adotadas na 
            YogurVida Laticínios.
          </p>
        </div>

        {/* Menu de Abas */}
        <div class="bpf-container">
          <div class="bpf-nav" data-aos="fade-right">
            <button 
              className={`bpf-tab-btn ${activeTab === 'higiene-pessoal' ? 'active' : ''}`}
              onClick={() => setActiveTab('higiene-pessoal')}
            >
              <i class="fa-solid fa-shower"></i> 5.1 Higiene Pessoal
            </button>
            <button 
              className={`bpf-tab-btn ${activeTab === 'instalacoes' ? 'active' : ''}`}
              onClick={() => setActiveTab('instalacoes')}
            >
              <i class="fa-solid fa-tents"></i> 5.2 Instalações/Equipamentos
            </button>
            <button 
              className={`bpf-tab-btn ${activeTab === 'processos' ? 'active' : ''}`}
              onClick={() => setActiveTab('processos')}
            >
              <i class="fa-solid fa-gears"></i> 5.3 Controle de Processos
            </button>
          </div>
          
          {/* Conteúdo das Abas */}
          <div class="bpf-content glass-card" data-aos="fade-left">
            
            {/* 5.1 HIGIENE PESSOAL */}
            {activeTab === 'higiene-pessoal' && (
              <div class="bpf-tab-content active">
                <h3>5.1 Controle e Higiene Pessoal do Colaborador</h3>
                <p class="lead-text">O manipulador é o principal vetor de contaminações na indústria alimentícia. Na YogurVida, o protocolo é fiscalizado rigidamente.</p>
                
                <div class="two-col-grid">
                  <div>
                    <h4 class="text-primary"><i class="fa-solid fa-shirt"></i> Protocolo de Uniformização</h4>
                    <ul class="styled-list">
                      <li><strong>Uniforme de Cor Clara:</strong> Calça e dólmã brancos, lavados sob responsabilidade de nossa lavanderia industrial interna e trocados a cada turno.</li>
                      <li><strong>Barreiras Físicas:</strong> Uso obrigatório de toucas descartáveis que cobrem integralmente o cabelo, máscara protetora facial e botas de PVC brancas antiderrapantes.</li>
                      <li><strong>Uso de Luvas:</strong> Luvas de nitrila são de uso obrigatório na manipulação direta de matérias-primas e na dosagem final pós-pasteurização.</li>
                      <li><strong>Proibição de Adornos:</strong> Anéis, alianças, brincos, piercings, relógios, maquiagens e unhas pintadas ou compridas são terminantemente proibidos na área interna.</li>
                    </ul>
                    
                    <h4 class="text-primary mt-4"><i class="fa-solid fa-briefcase-medical"></i> Exames Médicos Periódicos</h4>
                    <p>Todos os operadores realizam exames semestrais de coprocultura, coproparasitológico e exames clínicos gerais (PCMSO). Sinais de gastroenterites, infecções de pele ou ferimentos causam afastamento instantâneo da linha produtiva.</p>
                  </div>
                  
                  {/* Protocolo Visual de Lavagem */}
                  <div class="washing-steps-box">
                    <h4 class="text-center"><i class="fa-solid fa-hands-bubbles"></i> Protocolo de Higienização de Mãos</h4>
                    <div class="washing-steps">
                      <div class="washing-step">
                        <span class="step-num">1</span>
                        <p>Molhar as mãos e antebraços com água corrente morna da pia sanitária automática.</p>
                      </div>
                      <div class="washing-step">
                        <span class="step-num">2</span>
                        <p>Aplicar sabão antisséptico líquido inodoro neutro regulamentado.</p>
                      </div>
                      <div class="washing-step">
                        <span class="step-num">3</span>
                        <p>Friccionar palmas, dorsos, entre os dedos e sob as unhas por no mínimo 20 segundos.</p>
                      </div>
                      <div class="washing-step">
                        <span class="step-num">4</span>
                        <p>Enxaguar abundantemente e secar com papel toalha descartável virgem.</p>
                      </div>
                      <div class="washing-step">
                        <span class="step-num">5</span>
                        <p>Aplicar álcool em gel 70% inodoro por toda a superfície cutânea exposta.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 5.2 INSTALAÇÕES E EQUIPAMENTOS */}
            {activeTab === 'instalacoes' && (
              <div class="bpf-tab-content active">
                <h3>5.2 Layout de Instalações e Equipamentos Sanitários</h3>
                <p class="lead-text">O layout da planta industrial é projetado respeitando o princípio do fluxo unidirecional, impedindo o cruzamento higiênico e contaminação do iogurte pronto por leite cru.</p>
                
                <div class="two-col-grid">
                  <div>
                    <h4 class="text-primary"><i class="fa-solid fa-warehouse"></i> Engenharia Física da Planta</h4>
                    <ul class="styled-list">
                      <li><strong>Pisos Impermeáveis:</strong> Revestidos com resina de poliuretano (PU) monolítica antiderrapante, com caimento de 1.5% em direção a ralos sifonados com grelhas rotativas protetoras.</li>
                      <li><strong>Paredes e Tetos:</strong> Paredes pintadas com epóxi lavável anticorrosivo de tonalidade clara e acabamento arredondado nas junções (meia-cana). Tetos sem ranhuras e com tinta antimofo.</li>
                      <li><strong>Iluminação Segura:</strong> Lâmpadas LED blindadas integradas ao forro técnico com anteparas plásticas contra estilhaços acidentais na linha.</li>
                      <li><strong>Sistemas HVAC:</strong> Ventilação com controle absoluto de pressão positiva nas salas de envase, filtrando esporos de fungos ambientais por filtros absolutos HEPA.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-primary"><i class="fa-solid fa-screwdriver-wrench"></i> Maquinários de Aço Inoxidável</h4>
                    <p>Todos os tanques, conexões de transferência e bombas centrífugas alimentícias são fabricados em <strong>Aço Inoxidável AISI 316L</strong>, polido de grau espelhado sanitário para evitar biofilmes e corrosão ácida por sanitizantes.</p>
                    
                    <div class="equipment-cards mt-3">
                      <div class="eq-card">
                        <i class="fa-solid fa-temperature-arrow-up"></i>
                        <h5>Pasteurizador Placas</h5>
                        <span>Troca térmica e controle eletrônico de pasteurização</span>
                      </div>
                      <div class="eq-card">
                        <i class="fa-solid fa-flask-vial"></i>
                        <h5>Fermentadores</h5>
                        <span>Câmaras fechadas pressurizadas estéreis</span>
                      </div>
                      <div class="eq-card">
                        <i class="fa-solid fa-box-tissue"></i>
                        <h5>Envasadoras</h5>
                        <span>Sistemas pneumáticos em ambiente asséptico filtrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 5.3 CONTROLE DE PROCESSOS */}
            {activeTab === 'processos' && (
              <div class="bpf-tab-content active">
                <h3>5.3 Controle e Monitoração de Variáveis Críticas de Processo</h3>
                <p class="lead-text">Tabela de controle dos pontos críticos de controle (PCC) sanitários estabelecidos no Manual de BPF da YogurVida:</p>
                
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Etapa Operacional</th>
                      <th>Variável Monitorada</th>
                      <th>Procedimento de Controle Sanitário</th>
                      <th>Legislação Associada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Recepção do Leite</strong></td>
                      <td>Temperatura &le; 4.0 °C e ausência de resíduos de fármacos</td>
                      <td>Medição térmica digital por lote, análise Dornic (15-18°D), teste de alizarol 72% e kits de detecção rápida de antibióticos beta-lactâmicos.</td>
                      <td>MAPA Instrução Normativa 76/2018</td>
                    </tr>
                    <tr>
                      <td><strong>Pasteurização</strong></td>
                      <td>Temperatura: 85°C/30min ou 90°C/5min</td>
                      <td>Termógrafos eletrônicos automáticos e sensores com atuador automático de retorno de fluxo em caso de queda térmica.</td>
                      <td>RTIQ de Leites Fermentados do MAPA</td>
                    </tr>
                    <tr>
                      <td><strong>Fermentação</strong></td>
                      <td>pH final estabilizado &le; 4.5 a 42°C-43°C</td>
                      <td>Dosagem asséptica sob capela de fluxo de culturas iniciadoras selecionadas livres de contaminantes biológicos.</td>
                      <td>Portaria SVS/MS nº 326/1997</td>
                    </tr>
                    <tr>
                      <td><strong>Formulações</strong></td>
                      <td>Esterilidade física de polpas de frutas adicionadas</td>
                      <td>Dosagem pneumática fechada direta de sacos assépticos estéreis pré-aquecidos de fornecedores homologados.</td>
                      <td>RDC nº 275/2002 (ANVISA)</td>
                    </tr>
                    <tr>
                      <td><strong>Envase e Fechamento</strong></td>
                      <td>Esterilidade e estanqueidade dos potes</td>
                      <td>Envasadoras sob pressão positiva ISO 5. Selagem hermética por indução sob tratamento de luz ultravioleta nos selos metálicos.</td>
                      <td>Decreto-Lei nº 986/1969</td>
                    </tr>
                    <tr>
                      <td><strong>Armazenamento</strong></td>
                      <td>Temperatura da Câmara Fria &le; 4.0 °C</td>
                      <td>Sensores de temperatura redundantes interligados à telemetria de controle central com sirenes e relatórios de plantão.</td>
                      <td>Lei nº 8.078/1990 (CDC)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </section>
  );
}
