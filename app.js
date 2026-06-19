/* ==========================================================================
   YOGURVIDA - MANUAL DE BPF E LEGISLAÇÃO SANITÁRIA
   INTERACTIVE JAVASCRIPT APPLICATION (CHART.JS & ANIMS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. INICIALIZAÇÃO DE ANIMAÇÕES AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // 2. ALTERNADOR DE TEMA (DARK / LIGHT MODE)
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Configurar estado inicial do tema
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (activeTheme === 'light') {
            newTheme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Atualizar cores dos gráficos após a mudança de tema
        updateChartTheme(newTheme);
    });

    // 3. MENU MOBILE DRAWER
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // O clique no hamburguer agora abre o drawer fullscreen (adicionado mais abaixo)
    // Mantemos o toggle do navMenu como fallback desktop
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Em desktop (nav-menu visível), toggle normal
            // Em mobile, o drawer será aberto pelo novo listener adicionado depois
        });
    }

    // Fechar menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Navegação ativa no scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.remove('active');
            }
        });
    });

    // 4. BOTÃO VOLTAR AO TOPO
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. ANIMADOR DE ESTATÍSTICAS NUMÉRICAS (COUNT UP EFFECT)
    const statsSection = document.querySelector('.statistics-container');
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // ~60fps
            
            let current = 0;
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    if (target === 100) {
                        stat.innerText = Math.floor(current) + '%';
                    } else if (target === 1200000) {
                        stat.innerText = Math.floor(current).toLocaleString('pt-BR');
                    } else {
                        stat.innerText = Math.floor(current);
                    }
                    setTimeout(updateCount, 16);
                } else {
                    if (target === 100) {
                        stat.innerText = '100%';
                    } else if (target === 1200000) {
                        stat.innerText = '1.200.000';
                    } else {
                        stat.innerText = target;
                    }
                }
            };
            updateCount();
        });
    };

    // Trigger de animação de números no scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        observer.observe(statsSection);
    }

    // 6. CONTROLADOR DE ABAS DO MANUAL DE BPF
    window.switchBpfTab = (tabId) => {
        // Remover classe ativa de todos os botões e conteúdos
        const buttons = document.querySelectorAll('.bpf-tab-btn');
        const contents = document.querySelectorAll('.bpf-tab-content');
        
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // Adicionar classe ativa no botão clicado
        const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
        if (clickedBtn) clickedBtn.classList.add('active');
        
        // Adicionar classe ativa no conteúdo selecionado
        const selectedContent = document.getElementById(tabId);
        if (selectedContent) selectedContent.classList.add('active');
    };

    // 7. FLUXOGRAMA DE PROCESSO INTERATIVO - BASE DE DADOS
    const flowchartData = {
        1: {
            title: "Recepção do Leite",
            objective: "Receber a matéria-prima dos produtores parceiros em condições ótimas de resfriamento, assegurando que o volume de leite atenda às demandas industriais sem comprometer a qualidade inicial do derivado lácteo.",
            sanitation: "Desinfecção mecânica externa de todas as mangueiras de acoplamento do caminhão-tanque isotérmico. Verificação rigorosa e contínua de temperatura: o leite deve ingressar nos silos industriais estritamente abaixo de 4.0°C.",
            law: "Instruções Normativas nº 76 e nº 77 de 2018 (MAPA) - Estabelecem regras nacionais higiênico-sanitárias e parâmetros físico-químicos de recepção do leite cru refrigerado."
        },
        2: {
            title: "Análises Laboratoriais",
            objective: "Verificar a integridade química, biológica e física do leite recebido no laboratório de recepção rápida antes da autorização de descarregamento no parque industrial, prevenindo fraudes e contaminação em larga escala.",
            sanitation: "Uso de vidrarias estéreis, calibração diária de potenciômetros e crioscópios. Coleta de amostras realizada de forma asséptica direta das escotilhas do caminhão-tanque. Repúdio absoluto de lotes com qualquer traço de antibiótico ou acidez fora do padrão (15°D a 18°D).",
            law: "RDC nº 275/2002 e Portaria SVS/MS nº 326/1997 - Determinam a exigência de registros auditáveis para triagem de matérias-primas e controle microbiológico laboratorial."
        },
        3: {
            title: "Pasteurização",
            objective: "Submeter o leite a um tratamento térmico controlado para eliminar 100% dos microrganismos patogênicos (como Salmonella, Listeria e Mycobacterium bovis) e reduzir a microbiota banal, garantindo a segurança biológica do iogurte.",
            sanitation: "Manutenção de uma pressão diferencial positiva no trocador de placas (o leite pasteurizado deve ter pressão superior ao leite cru) para evitar vazamento cruzado. Monitoramento gráfico automático e contínuo da temperatura (90°C por 5 min ou 85°C por 30 min) com válvula automática de desvio de fluxo em caso de falha.",
            law: "Regulamento Técnico de Identidade e Qualidade (RTIQ) de Leites Fermentados (MAPA) - Exige pasteurização obrigatória da base láctea antes da inoculação bacteriana."
        },
        4: {
            title: "Resfriamento do Leite",
            objective: "Reduzir rapidamente a temperatura do leite pasteurizado quente até a faixa de inoculação biológica (42°C - 43°C), ideal para o crescimento metabólico das bactérias lácticas selecionadas.",
            sanitation: "Controle estrito de água gelada industrial nas placas de resfriamento. Manutenção do isolamento físico das tubulações e verificação de integridade nas juntas sanitárias a fim de evitar infiltrações de bactérias termófilas ambientais.",
            law: "Portaria SVS/MS nº 326/1997 - Exige resfriamento imediato de ingredientes e controle térmico rigoroso em trocadores para evitar multiplicação microbiana."
        },
        5: {
            title: "Inoculação de Culturas",
            objective: "Adicionar à base lática a cultura iniciadora (starter cultural) de bactérias láticas selecionadas de alta pureza biológica nas dosagens recomendadas para guiar a fermentação correta.",
            sanitation: "Abertura de embalagens de cultura liofilizada e dosagem conduzidas em capela de fluxo laminar com assepsia por álcool 70% nos bicos de dosagem. O fermento lácteo importado deve conter exclusivamente as espécies simbióticas tradicionais do iogurte.",
            law: "Instrução Normativa do MAPA (RTIQ) - Define que o iogurte deve ser fermentado exclusivamente por culturas de Lactobacillus delbrueckii subsp. bulgaricus e Streptococcus thermophilus."
        },
        6: {
            title: "Fermentação Controlada",
            objective: "Permitir o crescimento simbiótico controlado das bactérias láticas para que consumam lactose, produzam ácido lático, reduzam o pH até 4.5 e gerem compostos aromáticos voláteis e a precipitação das proteínas lácteas (formação do gel firme).",
            sanitation: "Uso de tanques de fermentação encamisados com isolamento térmico estéril e filtros de ar de 0.22 mícrons nas respiros. Monitoramento constante online do pH e temperatura, interrompendo a fermentação pelo resfriamento rápido assim que o pH estabilizar em 4.5.",
            law: "RDC nº 275/2002 - Obrigatoriedade de documentação de procedimentos operacionais e calibração periódica de sensores industriais e termômetros eletrônicos de precisão."
        },
        7: {
            title: "Adição de Ingredientes",
            objective: "Adicionar geleias de morango, polpas de frutas esterilizadas, aromas e estabilizantes ao gel fermentado liso sob agitação suave, garantindo a uniformidade de textura, cor e sabor exigidos comercialmente.",
            sanitation: "Utilização de sistemas de adição pneumática estéril fechada. Toda polpa de fruta passa por esterilização térmica a vácuo prévia fornecida em bags assépticos. Monitoramento rigoroso dos bicos dosadores por ciclos de sanitização manual pós-lote.",
            law: "RDC nº 275/2002 e RDC nº 259/2002 (ANVISA) - Regulamentam o controle higiênico de aditivos alimentares e as diretrizes obrigatórias de rotulagem nutricional e de ingredientes."
        },
        8: {
            title: "Homogeneização",
            objective: "Quebrar suavemente a coalhada de iogurte para garantir viscosidade uniforme, brilho na textura e consistência cremosa cremosa livre de grumos ou separação de soro (sinérese).",
            sanitation: "Uso de homogeneizadores mecânicos sanitários de pistão operando sob pressão estável, integrados ao sistema CIP central. Vedação hermética de gaxetas para evitar entrada de ar e contaminação por leveduras selvagens aeróbias.",
            law: "Portaria SVS/MS nº 326/1997 - Determina que os processos físicos e mecânicos de refino de textura sigam rigorosas medidas higiênicas em maquinário sanitário hermético."
        },
        9: {
            title: "Envase e Selagem",
            objective: "Fracionar e selar hermeticamente o iogurte em potes plásticos individuais de grau alimentício sob atmosfera modificada, impedindo contaminação por fungos e preservando a vida útil comercial do produto.",
            sanitation: "Envase automatizado conduzido em cabine selada equipada com fluxo laminar estéril e filtros absolutos HEPA (pressão positiva). Desinfecção contínua da lâmina plástica de selo de alumínio por lâmpadas ultravioleta (UV) integradas à esteira.",
            law: "Decreto-Lei nº 986/1969 e RDC nº 275/2002 - Exigem que o envase garanta proteção absoluta contra contaminações externas e respeite a padronização oficial de pesos e medidas do INMETRO."
        },
        10: {
            title: "Rotulagem",
            objective: "Aplicar o rótulo comercial contendo de forma explícita e clara todas as informações técnicas e regulamentadas para orientação nutricional e legal do consumidor final.",
            sanitation: "Verificação da legibilidade do lote de impressão térmica indireta automática (datador). Rótulo deve trazer alertas visíveis sobre alérgenos (contém leite), lactose, tabela de informação nutricional atualizada e dados do SAC.",
            law: "Lei nº 8.078/1990 (Código de Defesa do Consumidor) e RDC nº 727/2022 (ANVISA) - Estabelecem o direito de informação, regras para declaração de alérgenos e rotulagem nutricional frontal."
        },
        11: {
            title: "Armazenamento Refrigerado",
            objective: "Armazenar os paletes de iogurte acabado em câmaras frias sob cadeia fria contínua para desacelerar completamente o metabolismo das bactérias láticas, mantendo o gel estruturado e inalterado.",
            sanitation: "Manutenção higiênica e livre de umidade excessiva nas câmaras frias com pisos e paredes laváveis. Sistema telemétrico automático de registro térmico operando continuamente abaixo de 4.0°C com disparadores automáticos de alarme via e-mail e SMS.",
            law: "Instrução Normativa do MAPA e Portaria SVS/MS nº 326/1997 - Exigem controle de temperatura permanente durante todo o armazenamento de perecíveis de origem láctea."
        },
        12: {
            title: "Distribuição Comercial",
            objective: "Transportar o iogurte acabado de forma segura até os centros de distribuição e gôndolas de supermercados parceiros, preservando a cadeia de frio e a segurança de alimentos intactas.",
            sanitation: "Exigência de caminhões frigoríficos climatizados com revestimento interno impermeável higienizável de fibra. Monitoramento contínuo de temperatura na cabine do motorista por data-loggers e higienização física do baú a cada descarregamento.",
            law: "Lei nº 8.078/1990 (CDC) - O fabricante responde civilmente pela integridade do produto até a entrega final segura nos pontos de venda varejistas de todo o país."
        }
    };

    window.activateFlowStep = (stepId) => {
        // Remover classe ativa de todos os botões do fluxograma
        const nodes = document.querySelectorAll('.flowchart-node-item');
        nodes.forEach(node => node.classList.remove('active'));
        
        // Adicionar classe ativa no nó selecionado
        const clickedNode = Array.from(nodes).find(node => node.getAttribute('onclick').includes(stepId));
        if (clickedNode) clickedNode.classList.add('active');
        
        // Atualizar painel de detalhes com animação suave de fade
        const panel = document.getElementById('flowDetailsPanel');
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(8px)';
        
        setTimeout(() => {
            const data = flowchartData[stepId];
            document.getElementById('flowStepTitle').innerText = data.title;
            document.getElementById('flowStepObjective').innerText = data.objective;
            document.getElementById('flowStepSanitation').innerText = data.sanitation;
            document.getElementById('flowStepLaw').innerText = data.law;
            
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, 150);
    };

    // 8. DASHBOARD - GRÁFICOS INTERATIVOS E SIMULAÇÕES (CHART.JS)
    let phChart, tempChart;

    const initCharts = (theme) => {
        // Cores baseadas no tema
        const isDark = theme === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(218, 112, 214, 0.15)';
        const textLabelColor = isDark ? '#af9daf' : '#7d6b7d';
        
        // Gráfico 1: Curva de pH (Acidificação)
        const ctxPh = document.getElementById('phChart');
        if (ctxPh) {
            phChart = new Chart(ctxPh, {
                type: 'line',
                data: {
                    labels: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h (Estabilização)'],
                    datasets: [{
                        label: 'pH do Iogurte',
                        data: [6.6, 6.2, 5.7, 5.2, 4.8, 4.6, 4.5, 4.5],
                        borderColor: '#DA70D6',
                        backgroundColor: 'rgba(218, 112, 214, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#DB7093',
                        pointBorderColor: '#ffffff',
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        tension: 0.35,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            min: 4.0,
                            max: 7.0,
                            grid: { color: gridColor },
                            ticks: { color: textLabelColor, font: { family: 'Inter' } }
                        },
                        x: {
                            grid: { color: gridColor },
                            ticks: { color: textLabelColor, font: { family: 'Inter' } }
                        }
                    }
                }
            });
        }

        // Gráfico 2: Temperatura de Armazenamento (Cadeia de Frio)
        const ctxTemp = document.getElementById('tempChart');
        if (ctxTemp) {
            tempChart = new Chart(ctxTemp, {
                type: 'line',
                data: {
                    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
                    datasets: [{
                        label: 'Temperatura Câmara Fria (°C)',
                        data: [3.4, 3.6, 3.3, 3.5, 3.4, 3.8, 3.5, 3.4],
                        borderColor: '#e63946',
                        backgroundColor: 'rgba(230, 57, 70, 0.08)',
                        borderWidth: 3,
                        pointBackgroundColor: '#e63946',
                        pointBorderColor: '#ffffff',
                        pointRadius: 5,
                        tension: 0.2,
                        fill: true
                    }, {
                        label: 'Limite Crítico Legal (°C)',
                        data: [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0],
                        borderColor: 'rgba(230, 57, 70, 0.3)',
                        borderDash: [5, 5],
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            min: 0.0,
                            max: 6.0,
                            grid: { color: gridColor },
                            ticks: { color: textLabelColor, font: { family: 'Inter' } }
                        },
                        x: {
                            grid: { color: gridColor },
                            ticks: { color: textLabelColor, font: { family: 'Inter' } }
                        }
                    }
                }
            });
        }
    };

    const updateChartTheme = (theme) => {
        if (!phChart || !tempChart) return;
        
        const isDark = theme === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(218, 112, 214, 0.15)';
        const textLabelColor = isDark ? '#af9daf' : '#7d6b7d';
        
        [phChart, tempChart].forEach(chart => {
            chart.options.scales.y.grid.color = gridColor;
            chart.options.scales.y.ticks.color = textLabelColor;
            chart.options.scales.x.grid.color = gridColor;
            chart.options.scales.x.ticks.color = textLabelColor;
            chart.update();
        });
    };

    // Inicializar os gráficos usando o tema ativo
    initCharts(currentTheme);

    // Simulação ativa de Telemetria de Laticínios em Tempo Real (Loop)
    setInterval(() => {
        // 1. Simular flutuação da temperatura do Pasteurizador (HTST) ~90°C
        const pasteurizerVal = (90.0 + Math.random() * 0.4).toFixed(1);
        const tempPasteurizerEl = document.getElementById('telPasteurizer');
        if (tempPasteurizerEl) tempPasteurizerEl.innerText = pasteurizerVal + " °C";

        // 2. Simular pequenas flutuações na temperatura de armazenamento do gráfico
        if (tempChart) {
            const dataLength = tempChart.data.datasets[0].data.length;
            
            // Remover primeiro elemento e adicionar novo para efeito scrolling
            tempChart.data.datasets[0].data.shift();
            const lastVal = tempChart.data.datasets[0].data[dataLength - 2];
            const newVal = Math.max(2.8, Math.min(3.9, +(lastVal + (Math.random() * 0.4 - 0.2)).toFixed(1)));
            tempChart.data.datasets[0].data.push(newVal);
            
            // Atualizar labels de tempo
            tempChart.data.labels.shift();
            const now = new Date();
            const newLabel = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0');
            tempChart.data.labels.push(newLabel);
            
            tempChart.update('none'); // Update sem re-renderizar animações bruscas
        }
    }, 3000);

    // ==========================================================================
    // 9. LÓGICA DO VISUALIZADOR DE PDF DO MANUAL DE LEGISLAÇÃO
    // ==========================================================================
    let pdfZoomLevel = 1.0;
    let pdfCurrentPage = 1;
    const pdfTotalPages = 9;

    window.openPdfViewer = () => {
        const modal = document.getElementById('pdfViewerModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            pdfCurrentPage = 1;
            pdfZoomLevel = 1.0;
            applyPdfZoom();
            updatePdfPageVisibility();
            
            // Log access message
            console.log("Você está visualizando o Manual Oficial de Legislação e Conformidade da YogurVida.");
        }
    };

    window.closePdfViewer = () => {
        const modal = document.getElementById('pdfViewerModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => {});
            }
        }
    };

    window.prevPdfPage = () => {
        if (pdfCurrentPage > 1) {
            pdfCurrentPage--;
            updatePdfPageVisibility();
        }
    };

    window.nextPdfPage = () => {
        if (pdfCurrentPage < pdfTotalPages) {
            pdfCurrentPage++;
            updatePdfPageVisibility();
        }
    };

    window.zoomInPdf = () => {
        if (pdfZoomLevel < 2.0) {
            pdfZoomLevel = +(pdfZoomLevel + 0.1).toFixed(1);
            applyPdfZoom();
        }
    };

    window.zoomOutPdf = () => {
        if (pdfZoomLevel > 0.5) {
            pdfZoomLevel = +(pdfZoomLevel - 0.1).toFixed(1);
            applyPdfZoom();
        }
    };

    window.togglePdfFullscreen = () => {
        const container = document.querySelector('.pdf-modal-container');
        if (container) {
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(err => {
                    console.error("Erro ao entrar em tela cheia:", err);
                });
            } else {
                document.exitFullscreen();
            }
        }
    };

    window.printPdfDocument = () => {
        window.print();
    };

    window.syncPdfInputs = (input, field) => {
        input.setAttribute('value', input.value);
    };

    function updatePdfPageVisibility() {
        const pages = document.querySelectorAll('.pdf-page');
        pages.forEach((page, index) => {
            if (index === pdfCurrentPage - 1) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
        
        // Atualizar os indicadores de página na toolbar
        const currentInd = document.getElementById('currentPageNum');
        const prevBtn = document.getElementById('prevPageBtn');
        const nextBtn = document.getElementById('nextPageBtn');
        
        if (currentInd) currentInd.innerText = pdfCurrentPage;
        
        if (prevBtn) {
            if (pdfCurrentPage === 1) {
                prevBtn.style.opacity = '0.4';
                prevBtn.style.pointerEvents = 'none';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }
        }
        
        if (nextBtn) {
            if (pdfCurrentPage === pdfTotalPages) {
                nextBtn.style.opacity = '0.4';
                nextBtn.style.pointerEvents = 'none';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        }
    }

    function applyPdfZoom() {
        const container = document.getElementById('pdfPagesContainer');
        const percentText = document.getElementById('zoomPercent');
        
        if (container) {
            container.style.transform = `scale(${pdfZoomLevel})`;
        }
        if (percentText) {
            percentText.innerText = `${Math.round(pdfZoomLevel * 100)}%`;
        }
    }

    // Teclas de atalho para melhor UX no Visualizador
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('pdfViewerModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                window.closePdfViewer();
            } else if (e.key === 'ArrowLeft') {
                window.prevPdfPage();
            } else if (e.key === 'ArrowRight') {
                window.nextPdfPage();
            } else if (e.key === '+' || e.key === '=') {
                window.zoomInPdf();
            } else if (e.key === '-') {
                window.zoomOutPdf();
            }
        }
    });

    // =====================================================================
    // MOBILE DRAWER — Menu hambúrguer fullscreen com blur
    // =====================================================================
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const drawerThemeToggle = document.getElementById('drawerThemeToggle');

    function openDrawer() {
        if (!mobileDrawer) return;
        mobileDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
        // Focar no primeiro link para acessibilidade
        if (drawerCloseBtn) drawerCloseBtn.focus();
    }

    function closeDrawer() {
        if (!mobileDrawer) return;
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Abrir drawer ao clicar no botão hambúrguer
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            openDrawer();
        });
    }

    // Fechar ao clicar no overlay ou no botão X
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

    // Fechar ao clicar em um link do drawer
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    // Fechar com Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // Alternar tema a partir do botão no drawer
    if (drawerThemeToggle) {
        drawerThemeToggle.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = activeTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateChartTheme(newTheme);
        });
    }

    // =====================================================================
    // FAB — Botão Explorar Seções (abre o drawer) — sempre visível no mobile
    // =====================================================================
    const exploreFab = document.getElementById('exploreFab');

    if (exploreFab) {
        // Verificar se é mobile
        const isMobile = () => window.innerWidth <= 992;

        // No mobile, sempre visível; no desktop, após scroll
        const updateFabVisibility = () => {
            if (isMobile()) {
                exploreFab.classList.add('visible');
            } else if (window.pageYOffset > 200) {
                exploreFab.classList.add('visible');
            } else {
                exploreFab.classList.remove('visible');
            }
        };

        updateFabVisibility();
        window.addEventListener('scroll', updateFabVisibility);
        window.addEventListener('resize', updateFabVisibility);

        exploreFab.addEventListener('click', () => {
            openDrawer();
            // Animação de feedback tátil
            exploreFab.style.transform = 'scale(0.88)';
            setTimeout(() => {
                exploreFab.style.transform = '';
            }, 150);
        });
    }

    // =====================================================================
    // MOBILE NAV BAR — Removido (substituído pelo Drawer)
    // =====================================================================

    // Atualizar link ativo no drawer durante scroll
    const allSections = document.querySelectorAll('section[id]');
    const sectionIds = new Set([
        'home', 'sobre', 'legislacao', 'marcos-legais', 'manual-bpf',
        'higiene-pessoal', 'instalacoes', 'processos', 'processo-fluxograma',
        'higienizacao', 'controle-pragas', 'gestao-residuos',
        'qualidade-dashboard', 'sustentabilidade', 'conclusao', 'referencias'
    ]);

    function updateDrawerActiveLink(sectionId) {
        drawerLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }

    const drawerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && sectionIds.has(entry.target.id)) {
                updateDrawerActiveLink(entry.target.id);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-10% 0px -75% 0px'
    });

    allSections.forEach(section => {
        if (sectionIds.has(section.id)) {
            drawerObserver.observe(section);
        }
    });

});

