import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.graphics.shapes import Drawing, Circle, Rect, String, Line

def draw_cover_background(canvas, doc):
    canvas.saveState()
    # Draw a professional sidebar or border in Orchid/Plum
    canvas.setFillColor(colors.HexColor('#FFF5EE')) # Seashell background
    canvas.rect(0, 0, 595.27, 841.89, fill=1, stroke=0)
    
    # Draw decorative top and bottom curves/bars
    canvas.setFillColor(colors.HexColor('#DA70D6')) # Orchid accent block
    canvas.rect(0, 780, 595.27, 62, fill=1, stroke=0)
    
    canvas.setFillColor(colors.HexColor('#DB7093')) # PaleVioletRed bar
    canvas.rect(0, 770, 595.27, 10, fill=1, stroke=0)
    
    canvas.setFillColor(colors.HexColor('#DDA0DD')) # Plum bottom accent
    canvas.rect(0, 0, 595.27, 30, fill=1, stroke=0)
    
    # Logo text / cow logo graphic representation on canvas
    canvas.setFillColor(colors.HexColor('#ffffff'))
    canvas.setFont('Helvetica-Bold', 22)
    canvas.drawString(40, 795, "YogurVida")
    
    canvas.setFont('Helvetica', 12)
    canvas.drawString(150, 795, "Indústria de Laticínios LTDA.")
    
    # Draw simple cow-shaped silhouette or decorative circle
    canvas.setFillColor(colors.HexColor('#ffffff'))
    canvas.circle(530, 800, 20, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor('#DB7093'))
    canvas.circle(525, 805, 6, fill=1, stroke=0)
    canvas.circle(538, 795, 8, fill=1, stroke=0)
    
    # Bottom details
    canvas.restoreState()

def draw_normal_background(canvas, doc):
    canvas.saveState()
    # Draw thin header line
    canvas.setStrokeColor(colors.HexColor('#DDA0DD')) # Plum
    canvas.setLineWidth(1)
    canvas.line(54, 780, 541.27, 780)
    
    # Header text
    canvas.setFont('Helvetica-Bold', 8)
    canvas.setFillColor(colors.HexColor('#DA70D6')) # Orchid
    canvas.drawString(54, 787, "YogurVida Indústria de Laticínios LTDA.")
    
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.HexColor('#7d6b7d')) # Text muted
    canvas.drawRightString(541.27, 787, "Manual Oficial de Legislação e Conformidade")
    
    # Draw thin footer line
    canvas.line(54, 50, 541.27, 50)
    canvas.drawString(54, 38, "Trabalho de Higiene e Segurança dos Alimentos — Alimentos 1B")
    
    page_num = canvas.getPageNumber()
    canvas.drawRightString(541.27, 38, f"Página {page_num}")
    canvas.restoreState()

def build_pdf():
    pdf_filename = "Manual_Legislacao_YogurVida.pdf"
    
    # Page dimensions A4: 595.27 x 841.89 points. Margins: 0.75 in (54 pt)
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=80,
        bottomMargin=80
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles corresponding to site visual identity
    color_main = colors.HexColor('#3d2f3d') # Dark charcoal/plum
    color_orchid = colors.HexColor('#DA70D6')
    color_plum = colors.HexColor('#DDA0DD')
    color_pale = colors.HexColor('#DB7093')
    
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=26,
        leading=32,
        textColor=color_main,
        alignment=TA_CENTER,
        spaceAfter=15
    )
    
    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=color_pale,
        alignment=TA_CENTER,
        spaceAfter=40
    )
    
    h1_style = ParagraphStyle(
        'Header1',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=color_pale,
        spaceBefore=15,
        spaceAfter=10,
        keepWithNext=True
    )
    
    h2_style = ParagraphStyle(
        'Header2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=color_main,
        spaceBefore=10,
        spaceAfter=6,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'ReportBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14.5,
        textColor=color_main,
        alignment=TA_JUSTIFY,
        spaceAfter=8
    )
    
    bullet_style = ParagraphStyle(
        'ReportBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14.5,
        textColor=color_main,
        leftIndent=20,
        firstLineIndent=-10,
        spaceAfter=5
    )
    
    label_style = ParagraphStyle(
        'CoverLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        textColor=color_main,
        alignment=TA_LEFT,
        spaceAfter=4
    )
    
    # Story flowables list
    story = []
    
    # ------------------ COVER PAGE ------------------
    story.append(Spacer(1, 100))
    
    # Draw simple badge on cover
    story.append(Paragraph("DOCUMENTO INSTITUCIONAL DE CONFORMIDADE", ParagraphStyle(
        'CoverBadge',
        fontName='Helvetica-Bold',
        fontSize=9,
        textColor=colors.HexColor('#ffffff'),
        backColor=color_pale,
        borderPadding=6,
        alignment=TA_CENTER,
        spaceAfter=30
    )))
    
    story.append(Paragraph("MANUAL OFICIAL DE LEGISLAÇÃO E CONFORMIDADE REGULATÓRIA", title_style))
    story.append(Paragraph("YogurVida Indústria de Laticínios LTDA.", subtitle_style))
    
    story.append(Spacer(1, 40))
    
    # Academic Info & Editable Fields (represented visually and interactivelly)
    story.append(Paragraph("DADOS ACADÊMICOS", ParagraphStyle(
        'SectionLabel', fontName='Helvetica-Bold', fontSize=10, textColor=color_pale, spaceAfter=15, alignment=TA_CENTER
    )))
    
    # We will build a Table to contain our interactive fields nicely
    editable_desc = Paragraph(
        "<i>Nota: Este PDF poderá ser atualizado a qualquer momento, visando manter a conformidade com a legislação vigente e a excelência nos processos da empresa.</i>",
        ParagraphStyle('NoteStyle', fontName='Helvetica-Oblique', fontSize=8, textColor=colors.HexColor('#7d6b7d'), alignment=TA_CENTER, spaceAfter=20)
    )
    story.append(editable_desc)
    
    # Setup interactive fields using PDF AcroForm inside draw_cover
    # We define layout spaces where the draw_canvas callback will inject the actual form fields
    # Here in the story, we just draw empty box spaces with labels
    form_data = [
        [Paragraph("<b>Curso:</b>", label_style), ""],
        [Paragraph("<b>Integrantes do Trabalho:</b>", label_style), ""],
        [Paragraph("<b>Data de Emissão:</b>", label_style), Paragraph("19 de Junho de 2026", body_style)]
    ]
    
    t_form = Table(form_data, colWidths=[150, 330], rowHeights=[35, 35, 35])
    t_form.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('LINEBELOW', (1,0), (1,0), 1, color_plum),
        ('LINEBELOW', (1,1), (1,1), 1, color_plum),
    ]))
    
    story.append(t_form)
    
    story.append(Spacer(1, 100))
    
    # College details
    story.append(Paragraph("Trabalho Didático Científico - Higiene e Segurança dos Alimentos<br/>Curso Técnico de Alimentos 1B", ParagraphStyle(
        'CoverFooter', fontName='Helvetica', fontSize=9, leading=12, textColor=colors.HexColor('#7d6b7d'), alignment=TA_CENTER
    )))
    
    # Force page break to start contents
    story.append(PageBreak())
    
    # ------------------ INTRODUÇÃO ------------------
    story.append(Paragraph("INTRODUÇÃO", h1_style))
    story.append(Paragraph(
        "A legislação na indústria de alimentos desempenha um papel fundamental e estratégico na proteção da saúde pública "
        "e na garantia de que as matérias-primas e os processos produtivos atinjam padrões de qualidade aceitáveis. Em um setor "
        "sensível como o processamento de derivados lácteos (leite e iogurtes), a conformidade legal atua como barreira contra "
        "Doenças Transmitidas por Alimentos (DTAs) e fraudes de adulteração física, química ou biológica.",
        body_style
    ))
    story.append(Paragraph(
        "A segurança de alimentos refere-se à garantia de que os produtos alimentícios não causarão danos ou infecções ao "
        "consumidor quando preparados e consumidos de acordo com seu uso previsto. A qualidade, por outro lado, abrange a "
        "viscosidade, textura, sabor e estabilidade físico-química dos produtos lácteos. Ao seguir regulamentações de "
        "órgãos fiscalizadores como o Ministério da Agricultura e Pecuária (MAPA) e a Agência Nacional de Vigilância Sanitária (ANVISA), "
        "a YogurVida Laticínios implementa uma operação robusta e confiável, blindando sua marca juridicamente e protegendo seus clientes.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 1: DECRETO-LEI 986/1969 ------------------
    story.append(Paragraph("CAPÍTULO 1 — Decreto-Lei nº 986/1969", h1_style))
    story.append(Paragraph("<b>Objetivo Principal:</b>", h2_style))
    story.append(Paragraph(
        "Instituir as Normas Básicas sobre Alimentos no território brasileiro, regulamentando a defesa sanitária e o direito do consumidor "
        "à informação correta em rótulos e embalagens.",
        body_style
    ))
    story.append(Paragraph("<b>Aplicação Geral:</b>", h2_style))
    story.append(Paragraph(
        "Define o registro obrigatório de todo alimento industrializado comercializado, estabelecendo limites de aditivos alimentares "
        "e coibindo termos ou imagens enganosas que induzam o consumidor ao erro sobre as propriedades reais do alimento.",
        body_style
    ))
    story.append(Paragraph("<b>Importância para a Fabricação de Iogurtes:</b>", h2_style))
    story.append(Paragraph(
        "O Decreto-Lei nº 986/1969 exige que cada variação de iogurte da YogurVida (Natural, Morango, Grego, Probiótico) possua "
        "registro formal nos órgãos competentes e tenha rótulos com indicação precisa de seus ingredientes e aromatizantes. "
        "Não é permitido, por exemplo, ilustrar frutas frescas no rótulo se o produto utilizar apenas aromas artificiais, "
        "protegendo o consumidor final de enganos visuais ou informacionais.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 2: LEI 6.437/1977 ------------------
    story.append(Paragraph("CAPÍTULO 2 — Lei nº 6.437/1977", h1_style))
    story.append(Paragraph("<b>Infrações Sanitárias e Penalidades:</b>", h2_style))
    story.append(Paragraph(
        "Configura e define as infrações à legislação sanitária federal e estabelece as penalidades administrativas aplicáveis. "
        "As infrações são classificadas em leves, graves e gravíssimas.",
        body_style
    ))
    story.append(Paragraph("<b>Penalidades Previstas:</b>", h2_style))
    story.append(Paragraph(
        "As penalidades variam desde simples advertências escritas e multas pecuniárias diárias até a apreensão do lote do produto, "
        "inutilização de mercadorias, suspensão de venda e interdição parcial ou total do estabelecimento industrial.",
        body_style
    ))
    story.append(Paragraph("<b>Aplicação na Indústria Alimentícia:</b>", h2_style))
    story.append(Paragraph(
        "Para a indústria de laticínios, qualquer desvio higiênico crítico detectado por fiscais da vigilância sanitária (como falha na "
        "pasteurização, presença de roedores ou temperatura de estocagem inadequada) pode resultar em interdição imediata da planta de "
        "produção e multas altíssimas. Isso obriga a YogurVida a manter vigilância constante e registros auditáveis de todos os seus PCCs.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 3: LEI 8.078/1990 (CDC) ------------------
    story.append(Paragraph("CAPÍTULO 3 — Lei nº 8.078/1990", h1_style))
    story.append(Paragraph("<b>Direitos do Consumidor:</b>", h2_style))
    story.append(Paragraph(
        "O Código de Defesa do Consumidor estabelece a proteção da vida, saúde e segurança do consumidor contra riscos provocados por "
        "práticas no fornecimento de produtos considerados nocivos ou perigosos.",
        body_style
    ))
    story.append(Paragraph("<b>Rotulagem e Informações Obrigatórias:</b>", h2_style))
    story.append(Paragraph(
        "Exige que a oferta e apresentação de produtos assegurem informações corretas, claras, precisas e legíveis sobre suas características, "
        "qualidades, quantidade, composição, preço, garantia, prazos de validade e origem, bem como sobre os riscos que apresentem.",
        body_style
    ))
    story.append(Paragraph("<b>Responsabilidade da Indústria:</b>", h2_style))
    story.append(Paragraph(
        "O fabricante responde de forma objetiva (independente da existência de culpa) pelos danos causados aos consumidores por defeitos decorrentes "
        "de projeto, fabricação, construção, fórmulas ou manipulação de suas mercadorias. Se a YogurVida comercializar um lote de iogurte contaminado "
        "com esferas físicas ou biológicas nocivas, ela será legalmente responsabilizada a indenizar os afetados e realizar o recall do produto.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 4: PORTARIA SVS/MS 326/1997 ------------------
    story.append(Paragraph("CAPÍTULO 4 — Portaria SVS/MS nº 326/1997", h1_style))
    story.append(Paragraph("<b>Boas Práticas de Fabricação (BPF):</b>", h2_style))
    story.append(Paragraph(
        "Aprova o Regulamento Técnico de Condições Higiênico-Sanitárias e de Boas Práticas de Fabricação para Estabelecimentos "
        "Produtores/Industrializadores de Alimentos, definindo a espinha dorsal de higiene do setor.",
        body_style
    ))
    story.append(Paragraph("<b>Procedimentos Exigidos:</b>", h2_style))
    story.append(Paragraph(
        "Os procedimentos abrangem desde a qualidade física do local da fábrica, pisos e tetos sanitários, até requisitos estritos sobre a "
        "higiene dos colaboradores (banhos, assepsia, uniformes limpos, luvas, proibição de adornos) e limpeza/desinfecção profunda de maquinário.",
        body_style
    ))
    story.append(Paragraph(
        "Na YogurVida, a portaria dita as diretrizes do nosso manual de BPF interno, moldando o design sanitário da fábrica de fluxo linear "
        "(para evitar contaminação cruzada) e o treinamento diário e assepsia de mãos dos operadores.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 5: RDC 275/2002 ------------------
    story.append(Paragraph("CAPÍTULO 5 — Resolução RDC nº 275/2002", h1_style))
    story.append(Paragraph("<b>Introdução dos POPs:</b>", h2_style))
    story.append(Paragraph(
        "Dispõe sobre o Regulamento Técnico de Procedimentos Operacionais Padronizados (POPs) aplicados aos estabelecimentos produtores "
        "e a Lista de Verificação das Boas Práticas de Fabricação.",
        body_style
    ))
    story.append(Paragraph("<b>Checklists e Controle Sanitário:</b>", h2_style))
    story.append(Paragraph(
        "Introduz planilhas diárias de registro obrigatório que comprovam a execução das rotinas de higiene. Exige a documentação de pelo "
        "menos 8 POPs essenciais, incluindo: higiene de reservatórios de água, higienização de instalações e equipamentos, higiene dos "
        "manipuladores, manejo de resíduos e controle integrado de pragas.",
        body_style
    ))
    story.append(Paragraph(
        "A YogurVida utiliza planilhas digitais baseadas no checklist da RDC 275 para auditar diariamente a limpeza do sistema CIP das envasadoras "
        "e das tubulações de aço inox, arquivando esses dados por no mínimo 5 anos para fins de auditoria sanitária.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 6: RDC 216/2004 ------------------
    story.append(Paragraph("CAPÍTULO 6 — Resolução RDC nº 216/2004", h1_style))
    story.append(Paragraph("<b>Manipulação e Higiene de Alimentos:</b>", h2_style))
    story.append(Paragraph(
        "Aprova o Regulamento Técnico de Boas Práticas para Serviços de Alimentação, focando no controle preventivo de perigos biológicos, "
        "físicos e químicos em todas as etapas da cadeia alimentar.",
        body_style
    ))
    story.append(Paragraph("<b>Segurança Alimentar:</b>", h2_style))
    story.append(Paragraph(
        "Embora muito focada em serviços de alimentação prontos, suas diretrizes servem de base técnica para a manipulação correta de ingredientes "
        "sensíveis em nossa indústria, como polpas de frutas esterilizadas, fermento liofilizado e aromas. As regras de higiene respiratória, "
        "lavagem de mãos, saúde dos colaboradores e conservação de frios da RDC 216 complementam os POPs de processo da fábrica.",
        body_style
    ))
    
    # ------------------ CAPÍTULO 7: NORMATIVAS DO MAPA ------------------
    story.append(Paragraph("CAPÍTULO 7 — Instruções Normativas do MAPA (IN 76 e 77)", h1_style))
    story.append(Paragraph("<b>Produção e Controle de Qualidade do Leite:</b>", h2_style))
    story.append(Paragraph(
        "As Instruções Normativas nº 76 e nº 77 de 2018 do Ministério da Agricultura e Pecuária (MAPA) fixam os regulamentos técnicos de "
        "produção, identidade, qualidade e transporte do leite cru refrigerado.",
        body_style
    ))
    story.append(Paragraph("<b>Parâmetros Físico-Químicos e Microbiológicos:</b>", h2_style))
    story.append(Paragraph(
        "Estabelecem limites rigorosos para a Contagem Bacteriana Total (CBT - limite de 300.000 UFC/ml) e Contagem de Células Somáticas "
        "(CCS - limite de 500.000 CS/ml) no leite cru que chega à indústria. Também exigem ausência total de resíduos de antibióticos e "
        "temperatura máxima de transporte de leite cru em caminhões de até 7.0°C (e recepção na indústria abaixo de 4.0°C).",
        body_style
    ))
    story.append(Paragraph("<b>Fiscalização:</b>", h2_style))
    story.append(Paragraph(
        "O Serviço de Inspeção Federal (SIF) realiza fiscalizações periódicas na YogurVida para certificar que o leite descarregado "
        "respeita integralmente esses limites, auditando análises laboratoriais semanais conduzidas em laboratório da Rede Brasileira de "
        "Laboratórios de Controle de Qualidade do Leite (RBQL).",
        body_style
    ))
    
    # ------------------ CAPÍTULO 8: APLICAÇÃO DAS LEIS NA YOGURVIDA ------------------
    story.append(Paragraph("CAPÍTULO 8 — Aplicação das Leis na YogurVida", h1_style))
    story.append(Paragraph(
        "Na YogurVida Indústria de Laticínios LTDA., o setor de Garantia da Qualidade (QA) atua com total autonomia para intervir em qualquer "
        "etapa do fluxo produtivo que demonstre desvios térmicos ou biológicos. A aplicação prática dos marcos legais é estruturada da seguinte forma:",
        body_style
    ))
    story.append(Paragraph("• <b>Recepção e Triagem (MAPA IN 76/77):</b> Cada caminhão-tanque isotérmico que chega à fábrica é amostrado antes de "
                           "descarregar. Análises físico-químicas rápidas (crioscopia, densidade, acidez Dornic e teste de antibiótico Snap) "
                           "garantem que leite fora dos padrões legais ou fraudado seja sumariamente devolvido ao produtor.", bullet_style))
    story.append(Paragraph("• <b>Tratamento Térmico (MAPA RTIQ e Portaria 326):</b> O leite passa por pasteurização em trocador de placas a 90°C por 5 minutos "
                           "para eliminar patógenos. Esse processo é monitorado eletronicamente e registrado em gráficos de tempo/temperatura. "
                           "Em caso de desvio térmico, uma válvula de retorno desvia automaticamente o leite de volta para o tanque inicial.", bullet_style))
    story.append(Paragraph("• <b>Fermentação e Inoculação (RDC 275/216):</b> O processo de fermentação por Lactobacillus bulgaricus e Streptococcus thermophilus "
                           "é conduzido em tanques herméticos de aço inox 316L, onde o pH é monitorado online. O encerramento da fermentação se dá a pH 4.5, "
                           "impedindo a multiplicação de germes banais pelo rápido resfriamento a 4.0°C.", bullet_style))
    story.append(Paragraph("• <b>Envase e Rotulagem (DL 986 e CDC):</b> O iogurte é envasado em potes plásticos selados termicamente sob fluxo laminar. "
                           "A rotulagem nutricional atualizada (tabela de sódio, açúcares e gorduras frontais) e o destaque para alérgenos ('Contém Leite') "
                           "são aplicados por datadores industriais automáticos de alta velocidade.", bullet_style))
    
    # ------------------ CONCLUSÃO ------------------
    story.append(Paragraph("CONCLUSÃO", h1_style))
    story.append(Paragraph(
        "A conformidade legal não deve ser vista pela indústria de laticínios apenas como uma barreira burocrática ou custo operacional, "
        "mas como a ferramenta mais valiosa de gestão de qualidade e integridade do negócio. O cumprimento ético das legislações "
        "do MAPA e ANVISA garante processos previsíveis, seguros e reprodutíveis.",
        body_style
    ))
    story.append(Paragraph(
        "Para a YogurVida Laticínios, a estruturação e aplicação deste manual e de suas Boas Práticas de Fabricação (BPF) asseguram "
        "a comercialização de iogurtes livres de contaminação microbiana ou física, gerando confiabilidade junto aos canais de distribuição, "
        "protegendo a saúde do consumidor e solidificando o lema de excelência acadêmica e profissional da empresa.",
        body_style
    ))
    
    # ------------------ REFERÊNCIAS BIBLIOGRÁFICAS ------------------
    story.append(Paragraph("REFERÊNCIAS BIBLIOGRÁFICAS", h1_style))
    story.append(Paragraph("1. BRASIL. Ministério da Agricultura, Pecuária e Abastecimento (MAPA). Instrução Normativa nº 76, de 26 de novembro de 2018. Fixa os Regulamentos Técnicos de Produção, Identidade e Qualidade do Leite Cru. Diário Oficial da União, Brasília, DF, 2018.", bullet_style))
    story.append(Paragraph("2. BRASIL. Ministério da Agricultura, Pecuária e Abastecimento (MAPA). Instrução Normativa nº 77, de 26 de novembro de 2018. Dispõe sobre os critérios para captação e transporte de leite. Diário Oficial da União, Brasília, DF, 2018.", bullet_style))
    story.append(Paragraph("3. BRASIL. Ministério da Saúde. Agência Nacional de Vigilância Sanitária (ANVISA). Resolução RDC nº 275, de 21 de outubro de 2002. Procedimentos Operacionais Padronizados (POPs) aplicados a estabelecimentos alimentícios. Diário Oficial da União, Brasília, DF, 2002.", bullet_style))
    story.append(Paragraph("4. BRASIL. Ministério da Saúde. Secretaria de Vigilância Sanitária. Portaria nº 326, de 30 de julho de 1997. Regulamento Técnico sobre Condições Higiênico-Sanitárias e BPF. Diário Oficial da União, Brasília, DF, 1997.", bullet_style))
    story.append(Paragraph("5. BRASIL. Ministério da Saúde. Agência Nacional de Vigilância Sanitária (ANVISA). Resolução RDC nº 216, de 15 de setembro de 2004. Regulamento Técnico de Boas Práticas para Serviços de Alimentação. Diário Oficial da União, Brasília, DF, 2004.", bullet_style))
    story.append(Paragraph("6. BRASIL. Presidência da República. Decreto-Lei nº 986, de 21 de outubro de 1969. Institui normas básicas sobre alimentos. Diário Oficial da União, Brasília, DF, 1969.", bullet_style))
    story.append(Paragraph("7. BRASIL. Presidência da República. Lei nº 8.078, de 11 de setembro de 1990. Dispõe sobre a proteção do consumidor e dá outras providências (Código de Defesa do Consumidor). Diário Oficial da União, Brasília, DF, 1990.", bullet_style))
    story.append(Paragraph("8. BRASIL. Presidência da República. Lei nº 6.437, de 20 de agosto de 1977. Configura infrações à legislação sanitária federal e estabelece as sanções respectivas. Diário Oficial da União, Brasília, DF, 1977.", bullet_style))

    # Canvas custom callbacks for cover page and normal pages
    def on_first_page(canvas, doc):
        draw_cover_background(canvas, doc)
        
        # Inject the interactive AcroForm fields
        form = canvas.acroForm
        # Add interactive text fields on cover page
        # X coord aligns with the empty space under labels in Table (t_form)
        # Table colWidths is [150, 330] starts at margin 54. 54 + 150 = 204.
        # Let's place it at x=210.
        
        # Field for Curso
        form.textfield(
            name='curso',
            tooltip='1B Alimentos',
            x=205, y=360, width=320, height=20,
            value='1B Alimentos',
            textColor=colors.HexColor('#3d2f3d'),
            fillColor=colors.HexColor('#ffffff'),
            borderColor=colors.HexColor('#DDA0DD'),
            borderWidth=1,
            borderStyle='solid',
            fontSize=10
        )
        
        # Field for Integrantes
        form.textfield(
            name='integrantes',
            tooltip='Nomes dos integrantes do grupo',
            x=205, y=325, width=320, height=20,
            value='João Matheus, Matheus Tavarez, João Felipe, Luis Felipe',
            textColor=colors.HexColor('#3d2f3d'),
            fillColor=colors.HexColor('#ffffff'),
            borderColor=colors.HexColor('#DDA0DD'),
            borderWidth=1,
            borderStyle='solid',
            fontSize=10
        )

    # Build the document
    doc.build(story, onFirstPage=on_first_page, onLaterPages=draw_normal_background)
    print("PDF Manual_Legislacao_YogurVida.pdf gerado com sucesso!")

if __name__ == '__main__':
    build_pdf()
