export const cardTranslations = {
  en: {
    // DISCOVER
    'd1': {
      title: 'DESK RESEARCH',
      aiRole: 'Gather secondary sources, summarize industry reports, extract key statistics and trends.',
      pdRole: 'Define research scope, validate source credibility, synthesize insights with domain knowledge.',
      expectedResults: 'Market overview, industry benchmarks, trend analysis, foundational knowledge base.',
      aiTools: 'Perplexity; ChatGPT; Claude; Gemini',
      promptSuggestion: '"Research the current state of [industry/domain]. Focus on market size, key players, emerging trends, and regulatory considerations. Provide sources for all claims."'
    },
    'd2': {
      title: 'BENCHMARK',
      aiRole: 'Analyze best-in-class examples, identify UX patterns, document interaction conventions.',
      pdRole: 'Select relevant comparables, evaluate quality criteria, extract applicable principles.',
      expectedResults: 'Annotated screenshots, pattern library, strategic recommendations.',
      aiTools: 'ChatGPT; Perplexity; Miro AI',
      promptSuggestion: '"Analyze the [feature/flow] implementation across these 5 leading products. Compare interaction patterns, information hierarchy, and user feedback mechanisms."'
    },
    'd3': {
      title: 'COMPETITIVE ANALYSIS',
      aiRole: 'Gather competitor data, analyze feature sets, identify market gaps and positioning opportunities.',
      pdRole: 'Define competitive criteria, interpret strategic implications, validate market positioning.',
      expectedResults: 'Feature comparison matrix, differentiation opportunities, competitive positioning map.',
      aiTools: 'Perplexity; ChatGPT; Miro AI',
      promptSuggestion: '"Compare the top 5 competitors in [category] focusing on onboarding flows, pricing models, and core feature sets. Highlight gaps and opportunities."'
    },
    'd4': {
      title: 'INTERVIEW ANALYSIS',
      aiRole: 'Transcribe recordings, tag key quotes, identify recurring themes across multiple sessions.',
      pdRole: 'Conduct interviews, probe deeper context, validate AI interpretations with human judgment.',
      expectedResults: 'Tagged transcripts, quote repository, preliminary theme clusters.',
      aiTools: 'Dovetail AI; Otter.ai; ChatGPT; Claude',
      promptSuggestion: '"Analyze these interview transcripts and identify: 1) recurring pain points, 2) unmet needs, 3) workarounds users have created, 4) emotional responses. Tag quotes by theme."'
    },
    'd5': {
      title: 'QUALITATIVE SYNTHESIS',
      aiRole: 'Analyze qualitative data, identify patterns across interviews, generate insight categories and archetypes.',
      pdRole: 'Frame research questions, validate AI interpretations, contextualize findings within product strategy.',
      expectedResults: 'Thematic clusters, sentiment mapping, preliminary user archetypes, insight prioritization.',
      aiTools: 'GPT-4; Claude; Gemini; Dovetail AI',
      promptSuggestion: '"Analyze these 25 user interviews and identify recurring pain points, motivations, and behavioral patterns. Group findings into themes and suggest opportunity areas."'
    },
    // DEFINE
    'df1': {
      title: 'INSIGHT PRIORITISATION',
      aiRole: 'Score insights against criteria, identify dependencies, suggest prioritization frameworks.',
      pdRole: 'Define evaluation criteria, apply business context, make strategic trade-offs.',
      expectedResults: 'Ranked insight list, prioritization rationale, strategic focus areas.',
      aiTools: 'ChatGPT; Claude; Notion AI',
      promptSuggestion: '"Evaluate these 15 research insights using: impact on user goals, business alignment, implementation effort, and strategic differentiation. Recommend top 5 priorities."'
    },
    'df2': {
      title: 'PROBLEM FRAMING (HMW)',
      aiRole: 'Generate multiple How Might We statements, challenge assumptions, propose alternative perspectives.',
      pdRole: 'Select strategic direction, align with business goals, validate with stakeholders and users.',
      expectedResults: 'Clear problem statements, HMW questions, success metrics, constraint documentation.',
      aiTools: 'Claude; ChatGPT; Miro AI',
      promptSuggestion: '"Based on this user insight: [insight], generate 10 How Might We questions. Vary the scope from tactical to strategic. Challenge underlying assumptions."'
    },
    'df3': {
      title: 'PERSONAS & USER JOBS',
      aiRole: 'Draft persona attributes, generate jobs-to-be-done frameworks, suggest behavioral segments.',
      pdRole: 'Validate personas with research data, refine jobs hierarchy, ensure actionability for design.',
      expectedResults: 'Persona profiles, jobs-to-be-done map, segment definitions, decision-making criteria.',
      aiTools: 'ChatGPT; Miro AI; Dovetail AI',
      promptSuggestion: '"Create a persona based on these research findings. Include: demographics, goals, pain points, behaviors, jobs-to-be-done, and decision criteria. Make it actionable for design."'
    },
    'df4': {
      title: 'STAKEHOLDER ALIGNMENT',
      aiRole: 'Draft alignment documents, generate discussion frameworks, create decision matrices.',
      pdRole: 'Facilitate alignment sessions, navigate organizational dynamics, secure commitment.',
      expectedResults: 'Alignment deck, decision log, success criteria agreement, roadmap dependencies.',
      aiTools: 'ChatGPT; Notion AI; Gamma AI',
      promptSuggestion: '"Create a stakeholder alignment document for [project]. Include: problem statement, success metrics, scope boundaries, key decisions needed, and risks. Make it concise and decision-oriented."'
    },
    // DEVELOP
    'dv1': {
      title: 'IDEATION & BRAINSTORMING',
      aiRole: 'Generate diverse concept variations, combine unusual patterns, explore edge cases and alternatives.',
      pdRole: 'Curate promising directions, apply design principles, ensure technical and business feasibility.',
      expectedResults: '20-30 concept sketches, 3-5 refined directions, feasibility assessment, concept testing plan.',
      aiTools: 'ChatGPT; Claude; Midjourney; DALL-E',
      promptSuggestion: '"Generate 15 unconventional approaches to [feature/problem]. Think beyond standard UI patterns. Consider voice, gesture, ambient, and traditional interfaces. Prioritize novelty over feasibility."'
    },
    'dv2': {
      title: 'INFORMATION ARCHITECTURE & FLOWS',
      aiRole: 'Draft sitemap structures, suggest navigation patterns, generate user flow variations.',
      pdRole: 'Validate mental models, refine hierarchy, ensure scalability and findability.',
      expectedResults: 'Sitemap, navigation structure, user flows, content taxonomy, redirect strategy.',
      aiTools: 'ChatGPT; Miro AI; Whimsical',
      promptSuggestion: '"Design an information architecture for [product/feature] with these content types: [list]. Optimize for: user mental models, scalability, and SEO. Include primary and secondary navigation."'
    },
    'dv3': {
      title: 'WIREFRAMES & LAYOUTS',
      aiRole: 'Generate layout variations, suggest responsive patterns, create content hierarchy options.',
      pdRole: 'Refine spatial relationships, ensure visual hierarchy, validate with usability principles.',
      expectedResults: 'Wireframe library, responsive breakpoints, layout specifications, annotation system.',
      aiTools: 'Figma AI; v0; Galileo AI',
      promptSuggestion: '"Create 5 layout variations for a [page type] that includes: [components]. Consider desktop and mobile. Prioritize [key content]. Show different information hierarchy approaches."'
    },
    'dv4': {
      title: 'UX WRITING & MICROCOPY',
      aiRole: 'Draft interface copy, generate microcopy variations, suggest tone adjustments.',
      pdRole: 'Refine voice and tone, ensure brand consistency, validate clarity with users.',
      expectedResults: 'Copy library, voice & tone guidelines, error message framework, CTAs, empty states.',
      aiTools: 'ChatGPT; Claude; Jasper AI',
      promptSuggestion: '"Write microcopy for [feature/flow] that is: clear, concise, and encouraging. Include: button labels, helper text, error messages, success states, and empty states. Match this brand voice: [description]."'
    },
    'dv5': {
      title: 'VISUAL PROTOTYPING',
      aiRole: 'Generate code prototypes, suggest micro-interactions, create content and state variations.',
      pdRole: 'Design interaction logic, refine timing and transitions, ensure accessibility and performance.',
      expectedResults: 'Functional prototypes, interaction specifications, animation curves, usability test plans.',
      aiTools: 'v0; Figma AI; Framer AI; Claude',
      promptSuggestion: '"Create a React component for [interaction]. Include: hover, focus, loading, error, and success states. Add smooth transitions. Prioritize accessibility (ARIA labels, keyboard navigation)."'
    },
    // DELIVER
    'dl1': {
      title: 'USABILITY TESTING',
      aiRole: 'Generate test scenarios, analyze session recordings, identify usability patterns across participants.',
      pdRole: 'Design test protocol, moderate sessions, interpret findings within product context.',
      expectedResults: 'Test plan, session recordings, findings report, prioritized improvements.',
      aiTools: 'ChatGPT; Dovetail AI; Maze AI',
      promptSuggestion: '"Create a usability test plan for [feature]. Include: 5 task scenarios, success criteria, follow-up questions, and metrics to track. Design for both moderated and unmoderated testing."'
    },
    'dl2': {
      title: 'ACCESSIBILITY TESTING',
      aiRole: 'Audit WCAG compliance, suggest remediation strategies, generate accessible code patterns.',
      pdRole: 'Validate with assistive technologies, prioritize fixes, ensure inclusive design.',
      expectedResults: 'Accessibility audit, WCAG compliance report, remediation roadmap, testing checklist.',
      aiTools: 'ChatGPT; Claude; axe DevTools',
      promptSuggestion: '"Audit this interface for WCAG 2.1 AA compliance. Check: semantic HTML, ARIA labels, keyboard navigation, color contrast, focus management. Provide specific fixes for each issue."'
    },
    'dl3': {
      title: 'METRICS ANALYSIS',
      aiRole: 'Analyze usage data, identify patterns and anomalies, generate hypothesis for behavior changes.',
      pdRole: 'Define metrics framework, interpret business impact, recommend design iterations.',
      expectedResults: 'Metrics dashboard, trend analysis, behavioral insights, design recommendations.',
      aiTools: 'ChatGPT; Claude; Mixpanel AI',
      promptSuggestion: '"Analyze this product usage data: [metrics]. Identify: drop-off points, feature adoption patterns, user segments, and anomalies. Suggest 3 design hypotheses to test."'
    },
    'dl4': {
      title: 'DOCUMENTATION & HANDOFF',
      aiRole: 'Generate component documentation, create usage examples, draft implementation guidelines.',
      pdRole: 'Define design tokens, establish governance, ensure design-dev consistency.',
      expectedResults: 'Component library, usage guidelines, implementation specs, design system documentation.',
      aiTools: 'ChatGPT; GitHub Copilot; Notion AI',
      promptSuggestion: '"Document this [component] for our design system. Include: usage guidelines, accessibility requirements, props API, responsive behavior, and 5 common use cases with code examples."'
    },
    'dl5': {
      title: 'PRESENTATION & COMMUNICATION',
      aiRole: 'Structure narrative flow, generate speaker notes, create data visualizations, draft executive summaries.',
      pdRole: 'Craft strategic story, deliver presentation, handle stakeholder questions, build consensus.',
      expectedResults: 'Presentation deck, executive summary, supporting artifacts, decision documentation.',
      aiTools: 'Gamma AI; Beautiful.ai; ChatGPT; Claude',
      promptSuggestion: '"Create a presentation outline for [project] targeting [stakeholders]. Focus on: business impact, user value, design decisions, implementation roadmap, and success metrics. Make it visual and concise."'
    }
  },
  'pt-BR': {
    // DISCOVER
    'd1': {
      title: 'DESK RESEARCH',
      aiRole: 'Coletar fontes secundárias, resumir relatórios do setor e extrair estatísticas e tendências relevantes.',
      pdRole: 'Definir o escopo da pesquisa, validar a credibilidade das fontes e sintetizar os insights com base no conhecimento do domínio.',
      expectedResults: 'Panorama de mercado, benchmarks do setor, análise de tendências e base de conhecimento consolidada.',
      aiTools: 'Perplexity; ChatGPT; Claude; Gemini',
      promptSuggestion: '"Pesquise o estado atual de [setor/tema]. Foque em tamanho de mercado, principais players, tendências emergentes e considerações regulatórias. Forneça fontes para todas as informações."'
    },
    'd2': {
      title: 'BENCHMARK',
      aiRole: 'Analisar exemplos de referência, identificar padrões de UX e documentar convenções de interação.',
      pdRole: 'Selecionar comparáveis relevantes, avaliar critérios de qualidade e extrair princípios aplicáveis.',
      expectedResults: 'Screenshots anotados, biblioteca de padrões, recomendações estratégicas.',
      aiTools: 'ChatGPT; Perplexity; Miro AI',
      promptSuggestion: '"Analise a implementação de [feature/fluxo] em 5 produtos líderes. Compare padrões de interação, hierarquia de informação e mecanismos de feedback."'
    },
    'd3': {
      title: 'ANÁLISE COMPETITIVA',
      aiRole: 'Coletar dados da concorrência, analisar conjuntos de funcionalidades e identificar lacunas de mercado e oportunidades de posicionamento.',
      pdRole: 'Definir critérios competitivos, interpretar implicações estratégicas e validar posicionamento de mercado.',
      expectedResults: 'Matriz de comparação de features, oportunidades de diferenciação, mapa de posicionamento competitivo.',
      aiTools: 'Perplexity; ChatGPT; Miro AI',
      promptSuggestion: '"Compare os 5 principais concorrentes em [categoria] focando em fluxos de onboarding, modelos de precificação e funcionalidades principais. Destaque lacunas e oportunidades."'
    },
    'd4': {
      title: 'ANÁLISE DE ENTREVISTAS',
      aiRole: 'Transcrever gravações, marcar citações-chave e identificar temas recorrentes em múltiplas sessões.',
      pdRole: 'Conduzir entrevistas, investigar contexto mais profundo e validar interpretações da IA com julgamento humano.',
      expectedResults: 'Transcrições marcadas, repositório de citações, clusters temáticos preliminares.',
      aiTools: 'Dovetail AI; Otter.ai; ChatGPT; Claude',
      promptSuggestion: '"Analise estas transcrições de entrevistas e identifique: 1) pontos de dor recorrentes, 2) necessidades não atendidas, 3) soluções alternativas criadas pelos usuários, 4) respostas emocionais. Marque citações por tema."'
    },
    'd5': {
      title: 'SÍNTESE QUALITATIVA',
      aiRole: 'Analisar dados qualitativos, identificar padrões entre entrevistas e gerar categorias de insights e arquétipos.',
      pdRole: 'Enquadrar questões de pesquisa, validar interpretações da IA e contextualizar descobertas dentro da estratégia de produto.',
      expectedResults: 'Clusters temáticos, mapeamento de sentimentos, arquétipos preliminares de usuários, priorização de insights.',
      aiTools: 'GPT-4; Claude; Gemini; Dovetail AI',
      promptSuggestion: '"Analise estas 25 entrevistas com usuários e identifique pontos de dor recorrentes, motivações e padrões comportamentais. Agrupe as descobertas em temas e sugira áreas de oportunidade."'
    },
    // DEFINE
    'df1': {
      title: 'PRIORIZAÇÃO DE INSIGHTS',
      aiRole: 'Pontuar insights contra critérios, identificar dependências e sugerir frameworks de priorização.',
      pdRole: 'Definir critérios de avaliação, aplicar contexto de negócio e fazer trade-offs estratégicos.',
      expectedResults: 'Lista de insights ranqueados, justificativa de priorização, áreas de foco estratégico.',
      aiTools: 'ChatGPT; Claude; Notion AI',
      promptSuggestion: '"Avalie estes 15 insights de pesquisa usando: impacto nas metas dos usuários, alinhamento com negócio, esforço de implementação e diferenciação estratégica. Recomende as 5 prioridades principais."'
    },
    'df2': {
      title: 'ENQUADRAMENTO DO PROBLEMA (HMW)',
      aiRole: 'Gerar múltiplas declarações Como Poderíamos, desafiar suposições e propor perspectivas alternativas.',
      pdRole: 'Selecionar direção estratégica, alinhar com objetivos de negócio e validar com stakeholders e usuários.',
      expectedResults: 'Declarações claras de problema, perguntas HMW, métricas de sucesso, documentação de restrições.',
      aiTools: 'Claude; ChatGPT; Miro AI',
      promptSuggestion: '"Com base neste insight do usuário: [insight], gere 10 perguntas Como Poderíamos. Varie o escopo do tático ao estratégico. Desafie suposições subjacentes."'
    },
    'df3': {
      title: 'PERSONAS E JOBS',
      aiRole: 'Rascunhar atributos de personas, gerar frameworks de jobs-to-be-done e sugerir segmentos comportamentais.',
      pdRole: 'Validar personas com dados de pesquisa, refinar hierarquia de jobs e garantir acionabilidade para design.',
      expectedResults: 'Perfis de personas, mapa de jobs-to-be-done, definições de segmentos, critérios de tomada de decisão.',
      aiTools: 'ChatGPT; Miro AI; Dovetail AI',
      promptSuggestion: '"Crie uma persona com base nestas descobertas de pesquisa. Inclua: demografia, objetivos, pontos de dor, comportamentos, jobs-to-be-done e critérios de decisão. Faça de forma acionável para design."'
    },
    'df4': {
      title: 'ALINHAMENTO COM STAKEHOLDERS',
      aiRole: 'Rascunhar documentos de alinhamento, gerar frameworks de discussão e criar matrizes de decisão.',
      pdRole: 'Facilitar sessões de alinhamento, navegar dinâmicas organizacionais e garantir comprometimento.',
      expectedResults: 'Deck de alinhamento, registro de decisões, acordo de critérios de sucesso, dependências de roadmap.',
      aiTools: 'ChatGPT; Notion AI; Gamma AI',
      promptSuggestion: '"Crie um documento de alinhamento de stakeholders para [projeto]. Inclua: declaração do problema, métricas de sucesso, limites de escopo, decisões-chave necessárias e riscos. Seja conciso e orientado à decisão."'
    },
    // DEVELOP
    'dv1': {
      title: 'IDEAÇÃO E BRAINSTORMING',
      aiRole: 'Gerar variações diversas de conceitos, combinar padrões inusitados e explorar casos extremos e alternativas.',
      pdRole: 'Curar direções promissoras, aplicar princípios de design e garantir viabilidade técnica e de negócio.',
      expectedResults: '20-30 sketches de conceitos, 3-5 direções refinadas, avaliação de viabilidade, plano de teste de conceito.',
      aiTools: 'ChatGPT; Claude; Midjourney; DALL-E',
      promptSuggestion: '"Gere 15 abordagens não convencionais para [feature/problema]. Pense além de padrões de UI padrão. Considere interfaces de voz, gesto, ambiente e tradicionais. Priorize novidade sobre viabilidade."'
    },
    'dv2': {
      title: 'ARQUITETURA DE INFORMAÇÃO E FLUXOS',
      aiRole: 'Rascunhar estruturas de sitemap, sugerir padrões de navegação e gerar variações de fluxo de usuário.',
      pdRole: 'Validar modelos mentais, refinar hierarquia e garantir escalabilidade e encontrabilidade.',
      expectedResults: 'Sitemap, estrutura de navegação, fluxos de usuário, taxonomia de conteúdo, estratégia de redirecionamento.',
      aiTools: 'ChatGPT; Miro AI; Whimsical',
      promptSuggestion: '"Projete uma arquitetura de informação para [produto/feature] com estes tipos de conteúdo: [lista]. Otimize para: modelos mentais do usuário, escalabilidade e SEO. Inclua navegação primária e secundária."'
    },
    'dv3': {
      title: 'WIREFRAMES E LAYOUTS',
      aiRole: 'Gerar variações de layout, sugerir padrões responsivos e criar opções de hierarquia de conteúdo.',
      pdRole: 'Refinar relações espaciais, garantir hierarquia visual e validar com princípios de usabilidade.',
      expectedResults: 'Biblioteca de wireframes, breakpoints responsivos, especificações de layout, sistema de anotação.',
      aiTools: 'Figma AI; v0; Galileo AI',
      promptSuggestion: '"Crie 5 variações de layout para um [tipo de página] que inclui: [componentes]. Considere desktop e mobile. Priorize [conteúdo-chave]. Mostre diferentes abordagens de hierarquia de informação."'
    },
    'dv4': {
      title: 'UX WRITING E MICROCOPY',
      aiRole: 'Rascunhar copy de interface, gerar variações de microcopy e sugerir ajustes de tom.',
      pdRole: 'Refinar voz e tom, garantir consistência de marca e validar clareza com usuários.',
      expectedResults: 'Biblioteca de copy, guia de voz e tom, framework de mensagens de erro, CTAs, estados vazios.',
      aiTools: 'ChatGPT; Claude; Jasper AI',
      promptSuggestion: '"Escreva microcopy para [feature/fluxo] que seja: claro, conciso e encorajador. Inclua: labels de botões, texto de ajuda, mensagens de erro, estados de sucesso e estados vazios. Combine com esta voz de marca: [descrição]."'
    },
    'dv5': {
      title: 'PROTOTIPAÇÃO VISUAL',
      aiRole: 'Gerar protótipos em código, sugerir micro-interações e criar variações de conteúdo e estado.',
      pdRole: 'Projetar lógica de interação, refinar timing e transições e garantir acessibilidade e performance.',
      expectedResults: 'Protótipos funcionais, especificações de interação, curvas de animação, planos de teste de usabilidade.',
      aiTools: 'v0; Figma AI; Framer AI; Claude',
      promptSuggestion: '"Crie um componente React para [interação]. Inclua: estados hover, focus, loading, erro e sucesso. Adicione transições suaves. Priorize acessibilidade (labels ARIA, navegação por teclado)."'
    },
    // DELIVER
    'dl1': {
      title: 'TESTES DE USABILIDADE',
      aiRole: 'Gerar cenários de teste, analisar gravações de sessões e identificar padrões de usabilidade entre participantes.',
      pdRole: 'Projetar protocolo de teste, moderar sessões e interpretar descobertas dentro do contexto do produto.',
      expectedResults: 'Plano de teste, gravações de sessões, relatório de descobertas, melhorias priorizadas.',
      aiTools: 'ChatGPT; Dovetail AI; Maze AI',
      promptSuggestion: '"Crie um plano de teste de usabilidade para [feature]. Inclua: 5 cenários de tarefa, critérios de sucesso, perguntas de acompanhamento e métricas para rastrear. Projete para testes moderados e não moderados."'
    },
    'dl2': {
      title: 'TESTES DE ACESSIBILIDADE',
      aiRole: 'Auditar conformidade WCAG, sugerir estratégias de remediação e gerar padrões de código acessível.',
      pdRole: 'Validar com tecnologias assistivas, priorizar correções e garantir design inclusivo.',
      expectedResults: 'Auditoria de acessibilidade, relatório de conformidade WCAG, roadmap de remediação, checklist de testes.',
      aiTools: 'ChatGPT; Claude; axe DevTools',
      promptSuggestion: '"Audite esta interface para conformidade WCAG 2.1 AA. Verifique: HTML semântico, labels ARIA, navegação por teclado, contraste de cor, gerenciamento de foco. Forneça correções específicas para cada problema."'
    },
    'dl3': {
      title: 'ANÁLISE DE MÉTRICAS',
      aiRole: 'Analisar dados de uso, identificar padrões e anomalias e gerar hipóteses para mudanças de comportamento.',
      pdRole: 'Definir framework de métricas, interpretar impacto no negócio e recomendar iterações de design.',
      expectedResults: 'Dashboard de métricas, análise de tendências, insights comportamentais, recomendações de design.',
      aiTools: 'ChatGPT; Claude; Mixpanel AI',
      promptSuggestion: '"Analise estes dados de uso do produto: [métricas]. Identifique: pontos de abandono, padrões de adoção de features, segmentos de usuários e anomalias. Sugira 3 hipóteses de design para testar."'
    },
    'dl4': {
      title: 'DOCUMENTAÇÃO E ENTREGA',
      aiRole: 'Gerar documentação de componentes, criar exemplos de uso e rascunhar diretrizes de implementação.',
      pdRole: 'Definir tokens de design, estabelecer governança e garantir consistência design-dev.',
      expectedResults: 'Biblioteca de componentes, diretrizes de uso, especificações de implementação, documentação do design system.',
      aiTools: 'ChatGPT; GitHub Copilot; Notion AI',
      promptSuggestion: '"Documente este [componente] para nosso design system. Inclua: diretrizes de uso, requisitos de acessibilidade, API de props, comportamento responsivo e 5 casos de uso comuns com exemplos de código."'
    },
    'dl5': {
      title: 'APRESENTAÇÃO E COMUNICAÇÃO',
      aiRole: 'Estruturar fluxo narrativo, gerar notas para o apresentador, criar visualizações de dados e rascunhar resumos executivos.',
      pdRole: 'Elaborar história estratégica, entregar apresentação, lidar com perguntas de stakeholders e construir consenso.',
      expectedResults: 'Deck de apresentação, resumo executivo, artefatos de apoio, documentação de decisões.',
      aiTools: 'Gamma AI; Beautiful.ai; ChatGPT; Claude',
      promptSuggestion: '"Crie um outline de apresentação para [projeto] direcionado a [stakeholders]. Foque em: impacto no negócio, valor para o usuário, decisões de design, roadmap de implementação e métricas de sucesso. Seja visual e conciso."'
    }
  }
};
