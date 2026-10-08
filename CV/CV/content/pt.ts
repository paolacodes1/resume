import type { SiteContent } from './types'

// Brazilian Portuguese. Draft translation of content/en.ts, pending Paola's review.
const pt: SiteContent = {
  locale: 'pt',
  htmlLang: 'pt-BR',
  meta: {
    title: 'Paola Gisler | Builder',
    description: 'Eu construo sistemas desde antes de escrever código. Nos sets de filmagem eram cronogramas e logística. Agora são software e agentes de IA.',
    ogLocale: 'pt_BR',
    ogAlt: 'Paola Gisler — Builder.',
  },
  slate: {
    role: 'Função: Builder',
    location: 'Local: Malásia ↔ Brasil',
    nav: { work: 'Trabalho', story: 'História', contact: 'Contato' },
    switchLabel: 'EN',
    switchName: 'English',
  },
  hero: {
    kicker: 'Cena 01 · Take 2026',
    headline: 'Builder',
    lead: 'Eu construo sistemas desde antes de escrever código. Nos sets de filmagem eram cronogramas e logística. Agora são software e agentes de IA.',
    sub: 'A melhor parte continua a mesma: o momento em que tudo finalmente se encaixa e funciona, e o tempo que isso devolve.',
    primaryCta: 'Fale comigo',
    secondaryCta: 'Ver o trabalho',
    photoCaption: 'Dir. / Builder',
  },
  story: {
    kicker: 'O fio condutor',
    title: 'Mesmo trabalho, três sets.',
    frames: [
      {
        frame: 'QUADRO 01',
        period: '2018–2024',
        title: 'Sets de filmagem',
        body: 'Como assistente de direção, eu já construía. Cronogramas, logística, todo um sistema de pessoas e equipamentos que precisava funcionar até a hora da chamada.',
      },
      {
        frame: 'QUADRO 02',
        period: '2024–',
        title: 'Operações',
        body: 'Na HZN comecei a construir processos: automatizando as partes repetitivas e organizando como a empresa funciona.',
      },
      {
        frame: 'QUADRO 03',
        period: 'AGORA',
        title: 'IA',
        body: 'O mesmo instinto, com mais tecnologia. As pessoas se surpreendem com a facilidade com que eu construo com IA. Elas não veem que eu faço isso desde quando copiava e colava código do ChatGPT, antes de o Claude existir.',
        current: true,
      },
    ],
  },
  scenes: {
    kicker: 'O trabalho',
    title: 'Cenas',
    inProductionLabel: 'EM PRODUÇÃO',
    crewLabel: 'EQUIPE',
    items: [
      {
        number: '01',
        slugline: 'INT. WHATSAPP — TODO DIA',
        title: 'Minha frota de agentes',
        body: 'Quatro agentes de IA com quem eu converso pelo WhatsApp, construídos sobre uma mistura de OpenClaw e Hermes, com o Claude por trás. Meu pai e eu usamos todos os dias. O principal cuida das conversas e dos relatórios diários. A Zara cuida do trabalho da HZN e transforma prints em documentos prontos, no padrão visual da empresa. Os outros dois cuidam de saúde e treino, e de análise de mercado.',
        crew: 'OpenClaw · Hermes · Claude · WhatsApp',
        imageAlt: 'Uma conversa com a Zara no WhatsApp',
      },
      {
        number: '02',
        slugline: 'INT. ESCRITÓRIO DA HZN — TODA MANHÃ',
        title: 'Financeiro no piloto automático',
        body: 'Algumas automações que criei para me ajudar no dia a dia da HZN. Elas reduzem o tempo que eu gasto com as tarefas diárias.',
        bullets: [
          'Os comprovantes de pagamento são lidos, vinculados à conta certa, arquivados no Drive e enviados por e-mail ao contador.',
          'Os comprovantes de PIX são renomeados sempre do mesmo jeito e registrados em uma planilha.',
          'Os boletos novos vão para as pastas certas do Drive, e minhas planilhas se atualizam sozinhas.',
        ],
        crew: 'Python · Claude · Google Drive, Sheets e Gmail · Telegram',
        imageAlt: 'Comprovantes arquivados no Drive automaticamente',
        flip: true,
      },
      {
        number: '03',
        slugline: 'INT. BANGSAR — CLÍNICA ÉTERNEL',
        inProduction: true,
        title: 'Trazendo clientes antigos de volta',
        body: 'Anos de fichas de clientes, todas em papel. Estamos passando cada ficha antiga para um único banco de dados que a clínica acessa online, e criando um jeito de incluir as fichas novas de cada dia que se encaixa na rotina da equipe. Com tudo em um só lugar, eles podem entrar em contato com clientes antigos e trazê-los de volta.',
        crew: 'Next.js · Supabase · GPT-4o Vision',
        imageAlt: 'Uma ficha em papel ao lado da versão digital',
      },
      {
        number: '04',
        slugline: 'INT. ESTAÇÃO CLÍNICA — RELÓGIO CORRENDO',
        inProduction: true,
        title: 'Fórmula Revalida',
        body: 'Um programa de mentoria para médicos formados fora do Brasil que estão se preparando para a etapa prática do Revalida: estações clínicas cronometradas em que precisam passar para poder exercer a medicina aqui. Estou construindo a plataforma que faz tudo funcionar, de ponta a ponta.',
        bullets: [
          'O aluno paga e o acesso é liberado sozinho.',
          'Toda semana: estações práticas individuais com mentores e atores, acessadas pela plataforma, seguidas de um relatório escrito sobre o que corrigir.',
          'A equipe recebe uma lista única com todas as sessões que precisam ser remarcadas. Pausar estende o plano automaticamente, e pagamentos, lembretes e e-mails funcionam sem ninguém precisar correr atrás.',
        ],
        crew: 'Next.js · TypeScript · Postgres',
        imageAlt: 'A agenda semanal de um aluno',
        flip: true,
      },
    ],
  },
  alsoBuilt: {
    kicker: 'Também construí',
    credits: [
      {
        name: 'Transcritor',
        description: 'Transcrição gratuita e privada para Mac. O Whisper roda no próprio computador, então nada é enviado para a internet.',
      },
      {
        name: 'Piccolo Italiano',
        description: 'Um app de italiano para o meu sobrinho, que ainda não sabe ler. Ajuda em português, o italiano sempre por último, e o app torce por ele, chamando pelo nome.',
      },
      {
        name: 'App de hóspedes do Hotel Maerkli',
        description: 'Informações para hóspedes em três idiomas, funciona offline.',
        link: 'https://paolacodes1.github.io/hotel_maerkli/',
      },
      {
        name: 'ChalkUp',
        description: 'Meu app de bouldering. Eu construo primeiro para mim.',
        link: 'https://paolacodes1.github.io/climbing/',
      },
      {
        name: 'Clipboard Manager',
        description: 'Uma ferramenta de barra de menus para macOS, em Python.',
        link: 'https://github.com/paolacodes1/clipboard_manager',
      },
    ],
  },
  quote: {
    kicker: 'Para quem tem um negócio',
    before: 'Pare de perder seu tempo.',
    highlight: 'A IA não veio para substituir você.',
    after: 'Ela veio para te deixar mais capaz.',
  },
  contact: {
    kicker: 'Chamada',
    title: 'Tem um processo que só funciona na base da planilha e do WhatsApp?',
    body: 'Me conta. Estou em Kuala Lumpur e trabalho com equipes no Brasil e na Malásia.',
    sheetTitle: 'Folha de contatos',
    sheetDay: 'Diária 1 de 1',
    labels: { email: 'E-MAIL', whatsapp: 'WHATSAPP', linkedin: 'LINKEDIN', github: 'GITHUB' },
  },
  credits: {
    byline: 'Escrito, dirigido e construído por Paola Gisler',
    languages: 'Português · Inglês · um pouco de espanhol',
  },
}

export default pt
