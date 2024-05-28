var voices = [];
var selectedVoice;
var greetingDisplayed = false;

// Verifica se o navegador suporta synthesis de fala
var speechSynthesisSupported = 'speechSynthesis' in window;
var speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

// Carrega as vozes disponíveis
function loadVoices() {
    if (speechSynthesisSupported) {
        voices = window.speechSynthesis.getVoices();
        selectedVoice = voices.find(voice => voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("feminina") || voice.name.includes("Google português do Brasil"));
        if (!selectedVoice) {
            selectedVoice = voices[0];
        }

        if (!greetingDisplayed) {
            displayGreeting();
            greetingDisplayed = true;
        }
    } else {
        console.warn("Speech Synthesis não é suportado neste navegador.");
        // Continue sem síntese de fala
        if (!greetingDisplayed) {
            displayGreetingTextOnly();
            greetingDisplayed = true;
        }
    }
}

if (speechSynthesisSupported) {
    window.speechSynthesis.onvoiceschanged = function() {
        loadVoices();
    };
}

// Função para converter texto em fala
function speak(text) {
    if (speechSynthesisSupported && selectedVoice) {
        var msg = new SpeechSynthesisUtterance(text);
        msg.voice = selectedVoice;
        window.speechSynthesis.speak(msg);
    } else {
        console.warn("Speech Synthesis não é suportado neste navegador.");
    }
}
var responses = {
  
// Pessoal chat

"Olá": "Olá meu nome é Sara! como posso ajuda-lo?",
"Olá ": "Olá meu nome é Sara, como posso ajuda-lo?",
"Ola": "Olá meu nome é Sara! como posso ajuda-lo?",
"Ola ": "Olá meu nome é Sara! como posso ajuda-lo?",
"Oi": "Oi sou Sara. Em que posso ser útil para você?",
"Oi ": "Oi sou Sara. Em que posso ser útil para você?",
"Oii": "Oi sou Sara. Em que posso ser útil para você?",
"Oiii": "Oi sou Sara. Em que posso ser útil para você?",

// TESTE 2k+
"Olá! Como vai você hoje?": "Olá! Estou bem, obrigado por perguntar. E você?",
"Olá! O que você fez de interessante recentemente?": "Olá! Recentemente, fiz uma caminhada até um parque próximo e aproveitei o tempo ao ar livre.",
"Olá! Você já assistiu a algum filme bom ultimamente?": "Olá! Sim, assisti a um filme chamado (O Discurso do Rei) e achei muito inspirador.",
"Olá! Como foi o seu dia hoje?": "Olá! Meu dia foi bastante ocupado, mas consegui realizar algumas tarefas importantes. E o seu?",
"Olá! Você tem algum plano emocionante para o fim de semana?": "Olá! Sim, estou planejando visitar um novo restaurante que abriram na cidade. Mal posso esperar para experimentar a comida!",
"Olá! Qual é a sua comida favorita?": "Olá! Minha comida favorita é pizza. E a sua?",
"Olá! Você já visitou algum lugar interessante recentemente?": "Olá! Sim, fui a um museu de arte contemporânea e vi algumas exposições fascinantes.",
"Olá! O que você gosta de fazer para se divertir nos finais de semana?": "Olá! Gosto de sair com amigos, assistir a filmes ou simplesmente relaxar em casa.",
"Olá! Você tem algum animal de estimação?": "Olá! Sim, tenho um gato chamado Luna. Ela é muito fofa e adora brincar.",
"Olá! Qual é a sua estação do ano favorita e por quê?": "Olá! Minha estação favorita é o outono, porque adoro as cores das folhas e o clima mais fresco. E você?",
"Oi! Qual é o seu tipo de música favorito para ouvir quando está se exercitando?": "Oi! Gosto de ouvir música eletrônica com batidas animadas para me manter motivado durante as atividades físicas.",
"Oi! Você tem alguma tradição de família para celebrar feriados?": "Oi! Sim, nossa tradição de Natal é fazer uma ceia em família, trocar presentes e assistir a um filme juntos.",
"Oi! Você já fez alguma viagem de acampamento? Se sim, qual foi a sua parte favorita?": "Oi! Sim, adoro acampar! Minha parte favorita é acordar cedo para ver o nascer do sol sobre as montanhas.",
"Oi! Qual é o seu programa de TV favorito para assistir antes de dormir?": "Oi! Gosto de assistir a programas de comédia leve antes de dormir para relaxar e ter uma boa risada.",
"Oi! Você já participou de algum projeto voluntário? Se sim, como foi a experiência?": "Oi! Sim, já participei de um projeto de limpeza de praia e foi gratificante poder contribuir para o meio ambiente enquanto passava tempo ao ar livre.",
"Oi! Qual é o seu prato favorito para cozinhar em casa?": "Oi! Adoro preparar um bom curry tailandês com frango e legumes. É fácil de fazer e sempre fica delicioso!",
"Oi! Você tem algum lugar favorito para visitar durante o outono para ver as folhas mudarem de cor?": "Oi! Sim, adoro fazer passeios pelas montanhas para apreciar as cores vibrantes das folhas no outono.",
"Oi! Qual é o seu livro favorito de infância?": "Oi! Meu livro favorito de infância é (Harry Potter e a Pedra Filosofal). Foi o livro que despertou meu amor pela leitura.",
"Oi! Você já fez algum curso online interessante recentemente?": "Oi! Sim, fiz um curso de fotografia digital e aprendi muitas técnicas novas para melhorar minhas habilidades fotográficas.",
"Oi! Qual é a sua lembrança favorita de um feriado de verão?": "Oi! Minha lembrança favorita de um feriado de verão é de um churrasco em família à beira da piscina. Foi um dia cheio de risadas e diversão!",
"Oi! Qual é a sua série de TV favorita de todos os tempos?": "Oi! Minha série favorita de todos os tempos é (Breaking Bad). A história é cativante e os personagens são incrivelmente bem desenvolvidos.",
"Oi! Você já participou de algum evento cultural interessante recentemente?": "Oi! Sim, fui a uma exposição de arte contemporânea na semana passada e fiquei impressionado com as obras criativas e provocativas.",
"Oi! Qual é o seu tipo de filme favorito para assistir?": "Oi! Gosto de filmes de suspense e mistério que me mantenham intrigado até o final. Sempre adoro uma boa reviravolta!",
"Oi! Você tem algum talento artístico, como pintura ou desenho?": "Oi! Sim, gosto de desenhar nas horas vagas. É uma forma relaxante e criativa de expressar minha imaginação.",
"Oi! Qual é a sua estação de TV favorita para assistir notícias ou programas de atualidades?": "Oi! Costumo assistir à CNN ou à BBC para me manter atualizado sobre notícias locais e globais.",
"Oi! Você já teve alguma experiência divertida ou estranha ao fazer uma compra online?": "Oi! Uma vez, encomendei um suéter online e acabei recebendo um tamanho completamente errado. Foi engraçado, mas um pouco frustrante também!",
"Oi! Qual é o seu tipo de comida favorito para pedir em um restaurante de comida mexicana?": "Oi! Adoro tacos de carne asada com guacamole fresco e salsa picante. É uma explosão de sabores deliciosos!",
"Oi! Você tem algum destino de viagem favorito para passar as férias de verão?": "Oi! Gosto de ir para a costa para desfrutar do sol, da areia e do mar. Uma praia tranquila é o lugar perfeito para relaxar e recarregar as energias.",
"Oi! Você tem alguma história engraçada para compartilhar de quando era criança?": "Oi! Uma vez, fingi ser um super-herói e acabei me enrolando em uma capa improvisada. Foi hilário!",
"Oi! Você já teve alguma experiência emocionante ao assistir a um evento esportivo ao vivo?": "Oi! Sim, fui a um jogo de futebol e a atmosfera no estádio era eletrizante! Ver meu time vencer ao vivo foi uma experiência incrível!",
"Oi! Você já experimentou algum novo hobby recentemente?": "Oi! Sim, comecei a aprender a tocar violão e estou gostando bastante da experiência.",
"Oi! Qual é o seu lugar favorito para relaxar depois de um longo dia?": "Oi! Gosto de relaxar no sofá com uma xícara de chá quente e assistir a um episódio da minha série favorita.",
"Oi! Você costuma cozinhar em casa? Se sim, qual é a sua especialidade?": "Oi! Sim, gosto de cozinhar. Minha especialidade é um delicioso risoto de cogumelos.",
"Oi! Você já fez alguma viagem internacional? Se sim, para onde foi?": "Oi! Sim, fiz uma viagem para a Itália e visitei cidades como Roma, Florença e Veneza. Foi uma experiência incrível!",
"Oi! Qual é o seu livro favorito de todos os tempos?": "Oi! Meu livro favorito é (O Pequeno Príncipe) de Antoine de Saint-Exupéry. É uma história atemporal e cheia de ensinamentos.",
"Oi! Você pratica algum esporte regularmente?": "Oi! Sim, gosto de correr todas as manhãs no parque próximo à minha casa. É uma ótima forma de começar o dia!",
"Oi! Qual é o seu programa de TV favorito para assistir atualmente?": "Oi! Estou acompanhando uma série chamada (The Crown) na Netflix. É fascinante aprender sobre a história da família real britânica.",
"Oi! Você já teve alguma experiência interessante ao viajar de avião?": "Oi! Uma vez, conheci uma pessoa muito interessante durante um voo e acabamos tendo uma conversa longa e divertida.",
"Oi! Você tem algum projeto pessoal que está trabalhando atualmente?": "Oi! Sim, estou escrevendo um diário de viagem para documentar minhas aventuras e memórias enquanto viajo pelo mundo.",
"Oi! Qual é o seu filme favorito para assistir quando está precisando de uma boa risada?": "Oi! Adoro assistir a comédias clássicas, como (Feitiço do Tempo). Sempre me fazem rir, não importa quantas vezes eu assista!",
"Oi! Qual é o seu lugar dos sonhos para viajar?": "Oi! Meu lugar dos sonhos é o Japão. Quero explorar a cultura única, experimentar a culinária deliciosa e visitar os templos históricos.",
"Oi! Você tem algum objetivo que gostaria de alcançar este ano?": "Oi! Sim, meu objetivo é começar a aprender um novo idioma. Acho que será uma habilidade útil e divertida de desenvolver.",
"Oi! Você prefere passar tempo ao ar livre ou dentro de casa?": "Oi! Depende do meu humor, mas geralmente gosto de passar um tempo ao ar livre, seja caminhando, fazendo piqueniques ou simplesmente admirando a natureza.",
"Oi! Qual é a sua sobremesa favorita?": "Oi! Minha sobremesa favorita é sorvete de chocolate com calda de caramelo e nozes picadas por cima. É uma verdadeira delícia!",
"Oi! Você tem alguma tradição de família que é especial para você?": "Oi! Sim, toda sexta-feira à noite, minha família se reúne para um jantar especial e jogos de tabuleiro. É sempre um momento divertido e aconchegante.",
"Oi! Qual é o seu tipo de música favorito?": "Oi! Gosto de uma variedade de estilos musicais, mas ultimamente tenho estado mais inclinado ao indie pop e ao folk.",
"Oi! Você já fez alguma viagem de última hora que se tornou inesquecível?": "Oi! Sim, uma vez decidi fazer uma viagem de carro espontânea para a costa e acabei descobrindo uma praia isolada e deslumbrante. Foi uma aventura incrível!",
"Oi! Você tem algum talento ou habilidade que as pessoas geralmente não conhecem?": "Oi! Eu sei fazer malabarismo com bolinhas! É uma habilidade aleatória, mas sempre diverte as pessoas quando descobrem.",
"Oi! Qual é o seu prato favorito para pedir em um restaurante de comida italiana?": "Oi! Amo uma boa massa carbonara. A combinação de macarrão cremoso, bacon crocante e queijo parmesão é simplesmente irresistível para mim.",
"Oi! Você já teve alguma experiência interessante ao conhecer alguém pela primeira vez?": "Oi! Sim, uma vez conheci alguém em um evento social e descobrimos que tínhamos uma paixão em comum por fotografia. Acabamos saindo juntos para fotografar e nos tornamos bons amigos desde então.",
"Como você está se sentindo hoje?": "Tô de boa, na paz. E você?",
"O que você fez ontem à noite?": "Rolei com a galera, foi show!",
"ual é a boa para o fim de semana?": "Tô pensando em colar no rolê da praia, e aí?",
"Você viu o que aconteceu no jogo ontem?": "Claro, foi um show de bola!",
"O que você acha daquela nova música?": "Curti demais, tá no repeat!",
"Você tá sabendo da última fofoca?": "Pô, já tá rolando? Me conta!",
"Qual é a vibe para hoje?": "Tô afim de relaxar, só de boa.",
"O que você vai fazer nas férias?": "Tô pensando em cair no mundão, viajar bastante!",
"Como foi o filme que você viu ontem?": "Mano, foi muito top, recomendo!",
"Qual é a do rolezinho hoje à noite?": "Tô pensando em colar naquela festinha, e você?",


"O que você achou do novo visual do fulano?": "Ficou daora, o cara tá estiloso demais!",
"E aí, já marcou presença naquela balada nova?": "Tô ligado, tô pensando em colar lá esse fim de semana.",
"Como foi o rolê de ontem?": "Foi sinistro, curti demais!",
"O que você vai pedir no rolê de comida?": "Tô na vibe de um lanche mesmo, de boa.",
"Tá rolando alguma parada legal na cidade?": "Mano, tem uns shows irados acontecendo, bora?",
"E aí, já fechou o esquema para aquela viagem?": "Tô na pegada, já organizei tudo!",
"O que você vai fazer para se distrair hoje?": "Tô afim de jogar uns games, de boa.",
"Já deu uma olhada nas últimas postagens no Insta?": "Claro, tô ligado em tudo que tá rolando.",
"Qual foi a parada mais louca que já aconteceu contigo?": "Cara, teve uma vez que...",
"E aí, já marcou de encontrar a galera?": "Tô na fita, combinamos de colar no shopping.",
"Qual é a sua vibe para o feriado?": "Tô na pilha de relaxar, curtir um tempo de boa.",
"E aí, já trocou ideia com aquela pessoa?": "Mano, ainda não, mas tô na vibe de chegar junto.",
"O que você achou daquela festa na praia?": "Foi irada, vibe total de verão!",
"Você tá ligado no que tá rolando nas redes sociais?": "Claro, tô sempre antenado no que tá acontecendo.",
"Como foi o rolê de skate ontem?": "Foi massa, rolaram umas manobras insanas!",
"Tá rolando alguma treta na escola/trabalho?": "Mano, sempre tem, mas tô de boa, evitando parada.",
"E aí, já deu uma conferida naquele novo vídeo do YouTube?": "Claro, já assisti, é muito engraçado!",
"Qual é a vibe para o almoço hoje?": "Tô na pegada de uma comida caseira, tranquilo.",
"Tá sabendo da parada que vai rolar no final de semana?": "Tô ligado, vai ser um evento animal!",
"Qual é a boa para hoje à noite?": "Tô pensando em colar naquela festa, parece que vai bombar!",
"Q: O que você achou daquela nova série da Netflix?": "Cara, tá muito maneira, já tô viciado!",
"E aí, já deu uma passada naquele novo point da cidade?": "Tô ligado, é o assunto do momento!",
"Qual é a parada para o final de semana, vai rolar alguma coisa?": "Tô pensando em marcar um rolezinho com a galera, tranquilo.",
"Como foi o encontro com aquela pessoa que você tava afim?": "Foi massa, a gente se deu super bem!",
"Tá sabendo da última do nosso amigo?": "Pô, não, o que aconteceu?",
"Qual foi a maior roubada que você já se meteu?": "Cara, teve uma vez que...",
"E aí, já fez aquela parada que a gente combinou?": "Tô na missão, vou resolver isso hoje mesmo!",
"Tá rolando algum plano para o próximo feriado?": "Ainda não, mas tô na vibe de viajar, quem sabe?",
"Qual é a sua música favorita no momento?": "Tô viciado em uma parada que...",
"E aí, já deu uma olhada nos memes que estão bombando?": "Claro, tem uns que são hilários!",
"Qual é o seu rolê favorito no fim de semana?": "Tô na vibe de uma balada com a galera, sabe?",
"O que você acha daquela nova moda que tá rolando?": "Mano, tô ligado, mas não é muito minha praia.",
"Como foi o show que você foi na semana passada?": "Foi irado, a banda mandou muito bem!",
"E aí, já deu uma olhada nas fotos que tiraram ontem?": "Claro, tão massa demais, né?",
"Tá sabendo daquela festa que vai rolar no próximo mês?": "Tô ligado, já tô na lista de presença!",
"Qual é o seu plano para o futuro?": "Tô na pegada de seguir meus sonhos, mano.",
"Como foi o rolê de bike que você fez no parque?": "Foi animal, peguei umas trilhas iradas!",
"E aí, já marcou de encontrar aquela pessoa?": "Tô na cola, vamos combinar algo em breve.",
"Qual é a parada para hoje à noite?": "Tô pensando em relaxar em casa, de boa.",
"Tá rolando alguma ideia para o próximo fim de semana?": "Ainda não, mas tô aberto a sugestões!",
"O que você acha das últimas medidas do governo?": "Cara, tô ligado, algumas são bem polêmicas, né?",
"E aí, já viu as notícias sobre a nova lei que foi aprovada?": "Tô por dentro, mas não sei se concordo com tudo.",
"Qual é a vibe em relação ao novo presidente?": "Pô, cada um tem sua opinião, né? Tô na minha.",
"Como você se sente sobre os impostos aumentando?": "Mano, tá osso, tá difícil de segurar as pontas.",
"Tá sabendo da parada que rolou no congresso essa semana?": "Sim, foi uma confusão, todo mundo falando disso.",
"E aí, já ouviu falar das propostas para melhorar a educação?": "Tô ligado, mas não sei se vão dar certo, né?",
"Como você acha que o governo poderia melhorar a saúde pública?": "Pô, acho que investindo mais em hospitais e postos de saúde, saca?",
"Tá rolando alguma manifestação por aí?": "Não sei, mas sempre tem alguma coisa fervendo, né?",
"Qual é a sua opinião sobre o meio ambiente e as políticas governamentais?": "Cara, acho que tão devendo nessa área, sabe? Precisam tomar mais atitudes.",
"E aí, já pensou em se envolver mais com política?": "Tô na minha, mas às vezes dá vontade de meter o dedo nesse assunto.",
"Como você acha que o governo poderia combater a corrupção?": "Mano, essa é uma parada complicada, mas acho que precisa de mais transparência, saca?",
"Tá ligado nas eleições que vão rolar esse ano?": "Tô por dentro, mas ainda tô decidindo em quem votar.",
"E aí, já ouviu falar das reformas que estão sendo discutidas?": "Tô sabendo, mas não sei se vão resolver os paradas mesmo.",
"Qual é a sua opinião sobre os debates políticos na TV?": "Às vezes acho meio chato, mas é importante ficar ligado, né?",
"Tá rolando alguma polêmica envolvendo o governo atual?": "Sempre tem, né? Mas acho que é bom ficar esperto.",
"Como você acha que o governo poderia ajudar mais os jovens?": "Cara, investindo em educação e oportunidades, com certeza.",
"E aí, já pensou em se candidatar a algum cargo político?": "Pô, acho que não é minha praia, mas quem sabe um dia?",
"Qual é a sua opinião sobre o sistema de saúde atual?": "Tá complicado, né? Precisa de mais investimento e organização.",
"Tá sabendo das últimas medidas econômicas do governo?": "Tô por dentro, mas ainda não vi muita melhora na prática.",
"E aí, já teve algum contato com políticos da sua região?": "Já, mas não sou muito de ficar batendo papo com eles não.",
"Qual é a sua opinião sobre a situação da segurança pública?": "Cara, tá tenso, né? Precisa de mais investimento e estratégia.",
"E aí, já ouviu falar das últimas decisões do Supremo Tribunal Federal?": "Tô ligado, algumas são bem importantes, né?",
"Como você acha que o governo poderia incentivar mais a cultura?": "Mano, acho que é preciso valorizar mais os artistas e investir em projetos culturais.",
"Tá sabendo das últimas mudanças nas leis trabalhistas?": "Tô por dentro, mas ainda tô analisando como isso vai afetar a galera.",
"Qual é a sua opinião sobre a política externa do país?": "Tá na hora de fortalecer as parcerias e buscar mais diálogo, mano.",
"E aí, já pensou em participar de algum movimento político?": "Às vezes dá vontade, mas acho que ainda tô na fase de observar.",
"Tá rolando alguma discussão sobre direitos humanos por aí?": "Sempre tem, né? É importante ficar de olho nisso.",
"Como você acha que o governo poderia melhorar a infraestrutura do país?": "Mano, precisa de mais investimento em obras e manutenção, com certeza.",
"Tá ligado nas últimas denúncias de corrupção?": "Tô por dentro, mas é difícil saber o que é verdade mesmo.",
"E aí, já teve alguma experiência ruim com serviços públicos?": "Infelizmente sim, já passei por algumas situações complicadas.",
"Qual é a sua opinião sobre a distribuição de renda no país?": "Cara, tá meio desigual, né? Precisa rolar uma redistribuição mais justa.",
"E aí, já ouviu falar das últimas medidas ambientais do governo?": "Tô ligado, mas acho que ainda falta muito pra fazer.",
"Como você acha que o governo poderia melhorar a mobilidade urbana?": "Mano, investindo mais em transporte público e ciclovias, com certeza.",
"Tá sabendo das últimas negociações comerciais internacionais?": "Tô por dentro, mas ainda não sei qual vai ser o impacto disso tudo.",
"Qual é a sua opinião sobre o sistema de previdência social?": "Tá complicado, né? Precisa de uma reforma urgente, mas sem prejudicar a galera.",
"E aí, já pensou em se engajar em alguma causa política?": "Às vezes bate essa vontade, mas ainda tô só observando.",
"Tá rolando alguma discussão sobre reforma política por aí?": "Sempre tem, né? É um assunto que mexe com todo mundo.",
"Como você acha que o governo poderia incentivar mais a inovação tecnológica?": "Mano, apostando em startups e criando políticas de incentivo, saca?",
"Tá ligado nas últimas ações de combate à violência no país?": "Tô por dentro, mas parece que ainda falta muito pra resolver essa parada.",
"E aí, já teve algum contato com políticos da sua região?": "Já sim, mas não é sempre que rola uma boa experiência.",
"Qual é a sua opinião sobre as políticas de inclusão social?": "Cara, acho importante, mas ainda tem muito a ser feito, sabe?",
"E aí, já ouviu falar das últimas medidas de combate à pandemia?": "Tô ligado, mas parece que ainda tá meio bagunçado, né?",
"Como você acha que o governo poderia incentivar mais a educação de qualidade?": "Mano, investindo em escolas e valorizando os professores, com certeza.",
"Tá sabendo das últimas reformas tributárias propostas?": "Tô por dentro, mas parece que sempre acaba ficando na mesma.",
"Qual é a sua opinião sobre as políticas de segurança alimentar?": "Tá na hora de garantir comida de qualidade pra todo mundo, né?",
"E aí, já pensou em se envolver em algum projeto social?": "Às vezes sim, acho que é importante ajudar quem precisa.",
"Tá rolando alguma discussão sobre liberdade de expressão por aí?": "Sempre tem, né? É um direito que a galera não quer abrir mão.",
"Como você acha que o governo poderia melhorar o acesso à moradia?": "Mano, construindo mais casas populares e criando políticas de aluguel justo.",
"Tá ligado nas últimas políticas de combate ao desemprego?": "Tô por dentro, mas parece que ainda falta um plano consistente.",
"E aí, já teve alguma experiência positiva com serviços públicos?": "Às vezes rola, mas é meio raro, né?",
"O que é inteligência artificial?": "Inteligência artificial é um campo da ciência da computação que se concentra no desenvolvimento de sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana.",
"Como funciona o reconhecimento facial?": "O reconhecimento facial utiliza algoritmos para identificar e autenticar indivíduos com base em características faciais únicas.",
"Quais são os benefícios da computação em nuvem?": "A computação em nuvem oferece escalabilidade, flexibilidade e acesso remoto a recursos de computação e armazenamento, reduzindo custos e aumentando a eficiência.",
"O que é blockchain?": "Blockchain é uma tecnologia de registro distribuído que mantém um registro contínuo e à prova de adulteração de transações, tornando-as transparentes e seguras.",
"Como a internet das coisas (IoT) está transformando o mundo?": "A IoT está conectando dispositivos do dia-a-dia à internet, permitindo automação, coleta de dados em tempo real e comunicação entre objetos, o que está transformando a maneira como interagimos com o mundo físico.",
"Qual é o papel da inteligência artificial na medicina?": "A inteligência artificial na medicina pode ajudar no diagnóstico precoce de doenças, personalização de tratamentos, previsão de resultados e otimização de processos hospitalares.",
"Como a realidade virtual está sendo usada em diferentes setores?": "A realidade virtual está sendo usada em setores como jogos, treinamento, simulação, turismo, saúde e educação, proporcionando experiências imersivas e interativas.",
"Quais são os desafios da segurança cibernética?": "Os desafios da segurança cibernética incluem ataques de hackers, roubo de dados, violações de privacidade, vulnerabilidades de software e ameaças emergentes como inteligência artificial maliciosa e ataques de phishing sofisticados.",
"O que é machine learning?": "Machine learning é um subcampo da inteligência artificial que se concentra no desenvolvimento de algoritmos que permitem aos computadores aprenderem e melhorarem com a experiência, sem serem explicitamente programados.",
"Como a tecnologia está impactando o mercado de trabalho?": "A tecnologia está automatizando tarefas, criando novas oportunidades de emprego em campos como inteligência artificial, análise de dados e desenvolvimento de software, mas também está exigindo novas habilidades e causando mudanças na estrutura do trabalho.",
"O que é 5G e como ele difere das gerações anteriores de redes móveis?": "O 5G é a quinta geração de redes móveis, oferecendo velocidades mais rápidas, menor latência e maior capacidade de conexão em comparação com as gerações anteriores, o que possibilita avanços em áreas como Internet das Coisas, realidade aumentada e veículos autônomos.",
"Qual é o impacto da automação robótica de processos (RPA) nas empresas?": "A automação robótica de processos (RPA) está transformando a maneira como as empresas realizam tarefas repetitivas e baseadas em regras, aumentando a eficiência, reduzindo erros e liberando tempo para atividades de maior valor.",
"Como a tecnologia está sendo usada para combater as mudanças climáticas?": "A tecnologia está sendo usada para desenvolver soluções sustentáveis, como energia renovável, armazenamento de energia, transporte elétrico, monitoramento ambiental e agricultura de precisão, para mitigar os efeitos das mudanças climáticas.",
"O que é realidade aumentada e como ela está sendo aplicada em diferentes indústrias?": "A realidade aumentada combina elementos virtuais com o ambiente físico, criando experiências interativas e imersivas. Ela está sendo aplicada em indústrias como varejo, educação, design, entretenimento e saúde, para oferecer treinamento, visualização de produtos, manutenção remota e muito mais.",
"Como a tecnologia está revolucionando o setor financeiro?": "A tecnologia está transformando o setor financeiro através de inovações como fintechs, pagamentos móveis, blockchain, análise de big data, inteligência artificial e serviços financeiros digitais, tornando as transações mais rápidas, seguras e acessíveis.",
"O que são veículos autônomos e como eles estão sendo desenvolvidos?": "Veículos autônomos são veículos que podem operar sem intervenção humana. Eles estão sendo desenvolvidos por meio de avanços em sensores, inteligência artificial, mapeamento digital e sistemas de controle para proporcionar transporte mais seguro, eficiente e conveniente.",
"Como a tecnologia está sendo usada para melhorar a educação?": "A tecnologia está sendo usada na educação para fornecer acesso a recursos educacionais online, personalizar o ensino com base no ritmo e estilo de aprendizagem dos alunos, facilitar a colaboração e comunicação entre alunos e professores, e promover a aprendizagem ativa e prática.",
"Quais são os riscos da dependência excessiva da tecnologia?": "Os riscos da dependência excessiva da tecnologia incluem isolamento social, vício em dispositivos eletrônicos, perda de habilidades sociais e cognitivas, violações de privacidade, ameaças à segurança cibernética e desigualdades digitais.",
"Como a tecnologia está sendo usada para melhorar a saúde e o bem-estar?": "A tecnologia está sendo usada na saúde e no bem-estar para monitorar a saúde, facilitar o diagnóstico precoce de doenças, fornecer acesso a cuidados médicos remotos, promover hábitos saudáveis, gerenciar condições crônicas e facilitar a comunicação entre pacientes e profissionais de saúde.",
"O que são assistentes virtuais e como eles estão sendo usados?": "Assistentes virtuais são programas de computador que utilizam inteligência artificial para realizar tarefas específicas ou responder a perguntas dos usuários. Eles estão sendo usados em dispositivos como smartphones, alto-falantes inteligentes e aplicativos para realizar tarefas como fazer reservas, responder a perguntas, controlar dispositivos domésticos inteligentes e muito mais.",
"Quais são as aplicações da impressão 3D em diferentes indústrias?": "A impressão 3D está sendo usada em diversas indústrias, como manufatura, medicina, arquitetura, automotiva, moda e aeroespacial, para prototipagem rápida, fabricação personalizada, produção de peças de reposição, modelos médicos, joias personalizadas, entre outros.",
"Como a tecnologia está sendo usada para melhorar a mobilidade urbana?": "A tecnologia está sendo usada para melhorar a mobilidade urbana através de soluções como transporte compartilhado, aplicativos de mobilidade, sistemas de gestão de tráfego inteligentes, veículos autônomos, bicicletas e scooters elétricas compartilhadas, e infraestrutura de transporte sustentável.",
"O que são criptomoedas e como elas funcionam?": "Criptomoedas são moedas digitais descentralizadas que utilizam criptografia para garantir transações seguras e controlar a criação de novas unidades. Elas funcionam em uma rede de computadores distribuída chamada blockchain, onde as transações são registradas e verificadas pelos participantes da rede.",
"Como a tecnologia está sendo usada para enfrentar desafios urbanos?": "A tecnologia está sendo usada para enfrentar desafios urbanos como congestionamento, poluição, segurança, acessibilidade, qualidade de vida e desigualdades sociais, através de soluções como transporte inteligente, energia sustentável, edifícios verdes, planejamento urbano inteligente e participação cidadã.",
"Quais são os benefícios da realidade virtual na indústria de entretenimento?": "Os benefícios da realidade virtual na indústria de entretenimento incluem experiências imersivas e envolventes, maior interatividade, personalização de conteúdo, criação de novas formas de narrativa e entretenimento, e aumento do envolvimento do público.",
"Como a inteligência artificial está sendo usada na produção de conteúdo digital?": "A inteligência artificial está sendo usada na produção de conteúdo digital para recomendação de conteúdo personalizado, criação de texto e imagem automatizada, edição de vídeo automática, tradução de idiomas, geração de música e muito mais.",
"Quais são os desafios da adoção em larga escala de veículos elétricos?": "Os desafios da adoção em larga escala de veículos elétricos incluem a infraestrutura de carregamento insuficiente, o custo elevado das baterias, a autonomia limitada, a resistência cultural, a falta de opções de modelos e a gestão da demanda de energia.",
"Como a tecnologia está sendo usada para promover a inclusão digital?": "A tecnologia está sendo usada para promover a inclusão digital através de iniciativas como acesso gratuito à internet, programas de alfabetização digital, desenvolvimento de tecnologia acessível para pessoas com deficiência, e parcerias público-privadas para reduzir a lacuna digital entre regiões e grupos socioeconômicos.",
"O que é computação quântica e como ela difere da computação clássica?": "Computação quântica é um paradigma de computação que utiliza qubits, unidades de informação quântica, para realizar cálculos. Ela difere da computação clássica em termos de princípios físicos, algoritmos e capacidades de processamento, prometendo avanços significativos em áreas como criptografia, simulação molecular e otimização.",
   
"Quais são os avanços recentes na área de inteligência artificial?": "Alguns avanços recentes na área de inteligência artificial incluem o desenvolvimento de modelos de linguagem natural mais avançados, avanços em visão computacional, progressos em robótica autônoma e aprimoramentos em sistemas de recomendação e personalização.",
"Como a tecnologia está sendo usada para melhorar a segurança pública?": "A tecnologia está sendo usada para melhorar a segurança pública através de soluções como câmeras de vigilância inteligentes, análise de big data para previsão de crimes, aplicativos de denúncia de crimes, sistemas de alerta de emergência e programas de monitoramento eletrônico.",
"Quais são os impactos da automação na força de trabalho global?": "A automação está impactando a força de trabalho global através da substituição de trabalhos repetitivos por máquinas, o que pode levar a deslocamentos de emprego, requalificação profissional, criação de novas oportunidades de emprego em setores emergentes e mudanças na dinâmica do mercado de trabalho.",
"O que é Internet das Coisas Industrial (IIoT) e como ela está sendo aplicada na indústria?": "A Internet das Coisas Industrial (IIoT) refere-se à aplicação de tecnologia IoT em ambientes industriais, como fábricas, instalações de energia e transporte. Ela está sendo usada para monitoramento remoto de ativos, manutenção preditiva, otimização de processos e criação de fábricas inteligentes.",
"Como a tecnologia está sendo usada para preservar o meio ambiente?": "A tecnologia está sendo usada para preservar o meio ambiente através de soluções como monitoramento ambiental em tempo real, energias renováveis, gestão de resíduos, agricultura de precisão, conservação da água, transporte sustentável e reciclagem de materiais.",
"Quais são os benefícios da computação em borda (edge computing)?": "Alguns benefícios da computação em borda incluem menor latência, maior privacidade e segurança dos dados, redução da largura de banda necessária, capacidade de processamento local e suporte para aplicativos em tempo real.",

"Como a tecnologia está sendo usada para combater a desinformação online?": "A tecnologia está sendo usada para combater a desinformação online através de algoritmos de detecção de notícias falsas, verificação de fatos automatizada, educação digital para alfabetização midiática e parcerias entre plataformas de mídia social, organizações de notícias e agências de verificação de fatos.",
"Quais são os desafios da implementação de cidades inteligentes?": "Os desafios da implementação de cidades inteligentes incluem questões de privacidade e segurança dos dados, interoperabilidade entre sistemas, investimento em infraestrutura tecnológica, resistência cultural, gestão de dados em grande escala e envolvimento dos cidadãos.",
"Como a tecnologia está sendo usada para melhorar a eficiência energética?": "A tecnologia está sendo usada para melhorar a eficiência energética através de soluções como automação predial, sistemas de gerenciamento de energia, medidores inteligentes, iluminação LED, energia solar, armazenamento de energia e redes elétricas inteligentes.",
"Quais são os benefícios da impressão 4D?": "Alguns benefícios da impressão 4D incluem a capacidade de criar objetos que podem se auto-transformar, se adaptar ao ambiente ou responder a estímulos externos, como temperatura, umidade ou luz, o que pode ter aplicações em áreas como medicina, arquitetura e engenharia.",
"Como a tecnologia está sendo usada para melhorar a eficiência agrícola?": "A tecnologia está sendo usada para melhorar a eficiência agrícola através de soluções como sensores remotos para monitoramento de culturas, agricultura de precisão para aplicação precisa de insumos, drones para mapeamento de campos, sistemas de irrigação inteligente e análise de big data para otimização de safras.",
"O que são redes neurais artificiais e como elas são aplicadas?": "Redes neurais artificiais são modelos de computação inspirados no funcionamento do cérebro humano, compostos por neurônios artificiais interconectados. Elas são aplicadas em tarefas como reconhecimento de padrões, processamento de linguagem natural, visão computacional e aprendizado de máquina.",
"Como a tecnologia está sendo usada para promover a sustentabilidade urbana?": "A tecnologia está sendo usada para promover a sustentabilidade urbana através de soluções como energia renovável, transporte público eficiente, edifícios verdes, sistemas de gestão de resíduos, espaços públicos acessíveis, planejamento urbano inteligente e participação cidadã.",
"Quais são os benefícios da robótica na assistência médica?": "Alguns benefícios da robótica na assistência médica incluem cirurgia minimamente invasiva, precisão cirúrgica, recuperação mais rápida, redução do tempo de internação, assistência a pacientes idosos ou com mobilidade reduzida, e automação de tarefas hospitalares.",
"Como a tecnologia está sendo usada para promover a inclusão social?": "A tecnologia está sendo usada para promover a inclusão social através de soluções como educação online acessível, plataformas de emprego para pessoas com deficiência, aplicativos de acessibilidade para pessoas com necessidades especiais, e redes sociais para conectar comunidades marginalizadas.",
"Quais são os desafios da adoção em larga escala de veículos autônomos?": "Os desafios da adoção em larga escala de veículos autônomos incluem questões de segurança, regulamentação, responsabilidade legal em caso de acidentes, adaptação da infraestrutura viária, confiabilidade dos sistemas de IA, aceitação pública e impacto no emprego.",

"O que são interfaces cérebro-computador e como elas estão sendo utilizadas?": "Interfaces cérebro-computador são sistemas que permitem a comunicação direta entre o cérebro humano e dispositivos computacionais. Elas estão sendo utilizadas em aplicações como controle de próteses, reabilitação neurológica, jogos interativos e pesquisa neurocientífica.",
"Como a tecnologia está sendo usada para melhorar a segurança alimentar?": "A tecnologia está sendo usada para melhorar a segurança alimentar através de soluções como monitoramento da cadeia de suprimentos, rastreamento de alimentos, detecção de contaminação, agricultura de precisão, gestão de resíduos e educação nutricional.",
"Quais são os benefícios da computação quântica em comparação com a computação clássica?": "Alguns benefícios da computação quântica em comparação com a computação clássica incluem capacidade de processamento exponencialmente maior para certos tipos de problemas, algoritmos mais eficientes para criptografia e simulação de sistemas quânticos, e potencial para avanços significativos em áreas como medicina, materiais e criptografia.",
"Como a tecnologia está sendo usada para combater a poluição do ar?": "A tecnologia está sendo usada para combater a poluição do ar através de soluções como monitoramento da qualidade do ar em tempo real, controle de emissões veiculares e industriais, energia limpa, arborização urbana, filtros de ar e tecnologias de captura e armazenamento de carbono.",
  
  "O que é depressão?": "A depressão é uma condição de saúde mental que afeta o humor, os pensamentos e o comportamento de uma pessoa, geralmente resultando em sentimentos persistentes de tristeza e falta de interesse nas atividades.",
"Quais são os sintomas comuns da depressão?": "Os sintomas comuns da depressão incluem tristeza persistente, perda de interesse ou prazer em atividades antes apreciadas, alterações no sono ou apetite, fadiga, dificuldade de concentração e sentimentos de inutilidade ou culpa.",
"Como a depressão é diagnosticada?": "A depressão é geralmente diagnosticada por um profissional de saúde mental, como um psiquiatra ou psicólogo, através de uma avaliação dos sintomas, histórico médico e, às vezes, testes psicológicos.",
"Quais são as causas da depressão?": "As causas da depressão podem variar e incluir fatores genéticos, alterações químicas no cérebro, eventos estressantes da vida, história de trauma ou abuso, problemas de saúde física e uso de certos medicamentos.",
"Como a depressão é tratada?": "O tratamento para a depressão pode incluir psicoterapia, medicamentos antidepressivos, mudanças no estilo de vida, como exercícios físicos regulares e técnicas de gerenciamento de estresse, e apoio social.",
"Qual é a diferença entre tristeza e depressão?": "Embora a tristeza seja uma emoção comum e passageira, a depressão é uma condição de saúde mental mais grave e persistente, caracterizada por sintomas como tristeza intensa e prolongada, perda de interesse e incapacidade de funcionar normalmente no dia-a-dia.",
"Como posso ajudar alguém que está lutando contra a depressão?": "Você pode ajudar alguém que está lutando contra a depressão oferecendo apoio emocional, ouvindo com empatia, encorajando a busca por ajuda profissional e sendo paciente e compreensivo.",



"Obrigado": "Se precisar de mais informações ou tiver outras perguntas, estou aqui para ajudar!",



"Quais são os tipos de depressão?": "Os tipos de depressão incluem depressão maior, distúrbio depressivo persistente (distimia), transtorno afetivo sazonal (TAS), transtorno bipolar e depressão pós-parto, entre outros.",
"A depressão é uma condição grave?": "Sim, a depressão é uma condição grave que pode afetar significativamente a qualidade de vida de uma pessoa e, em casos graves, pode levar ao suicídio.",
"Quais são os fatores de risco para a depressão?": "Os fatores de risco para a depressão incluem história familiar de depressão, história de trauma ou abuso, estresse crônico, problemas de saúde física, uso de substâncias e certos fatores biológicos, como desequilíbrios químicos no cérebro.",
"Quais são as opções de tratamento para a depressão resistente ao tratamento?": "Para a depressão resistente ao tratamento, opções adicionais de tratamento podem incluir terapia eletroconvulsiva (TEC), estimulação magnética transcraniana (EMT) e terapia psicodélica, entre outros.",
"A depressão é uma condição que pode ser curada?": "Embora a depressão possa ser uma condição crônica para algumas pessoas, muitas vezes é tratável e gerenciável com o tratamento adequado, permitindo uma melhoria significativa na qualidade de vida.",
"A depressão é mais comum em homens ou mulheres?": "A depressão é mais comum em mulheres do que em homens, embora possa afetar pessoas de qualquer gênero, idade, etnia ou background.",
"Quais são algumas estratégias de autocuidado para gerenciar a depressão?": "Estratégias de autocuidado para gerenciar a depressão podem incluir estabelecer uma rotina diária, praticar exercícios físicos regularmente, alimentar-se de forma saudável, dormir o suficiente, evitar o consumo excessivo de álcool e drogas, e buscar atividades que tragam prazer e relaxamento.",
"Quais são os mitos comuns sobre a depressão?": "Alguns mitos comuns sobre a depressão incluem a crença de que é apenas (frescura) ou falta de força de vontade, ou que as pessoas podem simplesmente (superar) a depressão sem tratamento.",
"Existe uma ligação entre a depressão e outros problemas de saúde mental?": "Sim, a depressão muitas vezes coexiste com outros problemas de saúde mental, como ansiedade, transtornos alimentares e abuso de substâncias.",
"Como a depressão pode afetar o desempenho acadêmico ou profissional?": "A depressão pode afetar negativamente o desempenho acadêmico ou profissional, causando dificuldade de concentração, fadiga, falta de motivação e absenteísmo.",
"Qual é o papel da terapia na gestão da depressão?": "A terapia, como a terapia cognitivo-comportamental (TCC) ou a terapia interpessoal (TI), pode ser uma parte importante do tratamento da depressão, ajudando os indivíduos a desenvolver habilidades para lidar com pensamentos negativos e padrões de comportamento prejudiciais.",
"Como a depressão pode afetar relacionamentos interpessoais?": "A depressão pode afetar negativamente os relacionamentos interpessoais, causando distância emocional, dificuldade de comunicação e problemas de intimidade.",
"Qual é a importância do apoio social no tratamento da depressão?": "O apoio social pode desempenhar um papel crucial no tratamento da depressão, oferecendo conforto emocional, encorajamento e uma rede de suporte durante momentos difíceis.",
"A depressão pode ser uma reação normal a eventos estressantes da vida?": "Sim, a depressão pode ser uma reação normal a eventos estressantes da vida, como perda de emprego, término de relacionamento ou luto. No entanto, se os sintomas persistirem por um longo período ou interferirem nas atividades diárias, pode ser indicativo de depressão clínica.",
"Quais são os sinais de alerta de que alguém pode estar sofrendo de depressão?": "Os sinais de alerta de que alguém pode estar sofrendo de depressão incluem mudanças de humor significativas, isolamento social, falta de interesse em atividades antes apreciadas, irritabilidade, alterações no sono ou apetite, e falar sobre morte ou suicídio.",
"A depressão pode ser hereditária?": "Sim, a depressão pode ter uma componente genética e ser transmitida através da família. No entanto, a predisposição genética é apenas um dos muitos fatores que contribuem para o desenvolvimento da depressão.",
"É possível ter depressão sem sentir tristeza?": "Sim, é possível ter depressão sem sentir tristeza predominante. Alguns indivíduos podem experimentar outros sintomas, como apatia, irritabilidade, falta de prazer nas atividades e distúrbios do sono, em vez de tristeza persistente.",
"Quais são as diferenças entre a depressão e o luto?": "Embora o luto possa envolver sentimentos de tristeza intensa e dificuldade de funcionamento, é uma resposta normal à perda, enquanto a depressão clínica é uma condição de saúde mental caracterizada por sintomas persistentes que podem não estar necessariamente relacionados a uma perda específica.",
"Como a depressão pode afetar o sono?": "A depressão pode afetar o sono de várias maneiras, incluindo insônia, sono excessivo durante o dia, despertar precoce pela manhã e alterações nos padrões de sono REM (movimento rápido dos olhos).",
"A depressão pode ser causada por eventos traumáticos na infância?": "Sim, eventos traumáticos na infância, como abuso, negligência ou perda de um ente querido, podem aumentar o risco de desenvolver depressão na vida adulta.",
"Quais são os efeitos da depressão não tratada a longo prazo?": "A depressão não tratada a longo prazo pode levar a problemas de saúde física e mental, incluindo aumento do risco de doenças cardiovasculares, comprometimento cognitivo, abuso de substâncias, isolamento social e pensamentos suicidas.",
"Como a depressão pode afetar a autoestima?": "A depressão pode afetar negativamente a autoestima, levando a sentimentos de inutilidade, culpa e autocondenação, bem como uma visão distorcida e negativa de si mesmo.",
"Quais são os efeitos da depressão na saúde física?": "A depressão pode ter efeitos negativos na saúde física, incluindo fadiga crônica, dores físicas inexplicáveis, distúrbios gastrointestinais, dores de cabeça e dores musculares.",
"Qual é a relação entre a depressão e o uso de substâncias?": "A depressão pode aumentar o risco de abuso de substâncias, como álcool e drogas, como uma forma de lidar com os sintomas emocionais. Da mesma forma, o abuso de substâncias pode aumentar o risco de desenvolver depressão.",
"Como a depressão pode afetar a capacidade de tomar decisões?": "A depressão pode afetar a capacidade de tomar decisões devido a dificuldades de concentração, pensamento negativo e falta de motivação, o que pode resultar em decisões impulsivas ou procrastinação.",
"A depressão pode afetar a libido e a função sexual?": "Sim, a depressão pode afetar a libido e a função sexual, causando diminuição do desejo sexual, dificuldade de excitação e problemas de desempenho.",
"Quais são as opções de tratamento para a depressão durante a gravidez?": "O tratamento da depressão durante a gravidez pode incluir psicoterapia, apoio emocional, mudanças no estilo de vida e, em alguns casos, medicamentos antidepressivos sob a supervisão de um médico.",
"A depressão pode causar sintomas físicos semelhantes aos de outras condições médicas?": "Sim, a depressão pode causar sintomas físicos semelhantes aos de outras condições médicas, como fadiga, dores de cabeça, dores no corpo e distúrbios gastrointestinais, o que pode tornar o diagnóstico mais desafiador.",
"Como a depressão pode afetar a produtividade no trabalho ou na escola?": "A depressão pode afetar negativamente a produtividade no trabalho ou na escola, causando dificuldade de concentração, falta de motivação, absenteísmo e queda no desempenho acadêmico ou profissional.",
"Quais são as estratégias para lidar com pensamentos suicidas durante um episódio depressivo?": "Se você ou alguém que você conhece está tendo pensamentos suicidas durante um episódio depressivo, é importante procurar ajuda imediatamente de um profissional de saúde mental, entrar em contato com uma linha de apoio de prevenção ao suicídio ou buscar atendimento de emergência em um hospital.",
"A depressão pode ser uma resposta normal ao envelhecimento?": "Embora algumas mudanças emocionais possam ser parte natural do envelhecimento, a depressão não é uma parte inevitável do processo de envelhecimento e deve ser tratada adequadamente se os sintomas persistirem e interferirem na qualidade de vida.",
"Como a depressão pode afetar a vida familiar?": "A depressão pode afetar a vida familiar ao causar conflitos interpessoais, dificuldades de comunicação, distanciamento emocional e impacto nas responsabilidades parentais.",
"Quais são os desafios de lidar com a depressão em um relacionamento romântico?": "Lidar com a depressão em um relacionamento romântico pode apresentar desafios, incluindo o estresse adicional sobre o parceiro, dificuldades na comunicação, alterações na intimidade e na vida sexual, e o impacto na dinâmica do relacionamento.",
"Como a depressão pode afetar a paternidade ou maternidade?": "A depressão pode afetar a paternidade ou maternidade ao causar sentimentos de inadequação, falta de energia para cuidar do bebê, dificuldade em formar vínculos afetivos e impacto na capacidade de tomar decisões importantes relacionadas à criação dos filhos.",
"A depressão pode ser uma reação ao estresse crônico?": "Sim, a depressão pode ser uma reação ao estresse crônico prolongado, como o estresse relacionado ao trabalho, problemas financeiros ou conflitos familiares.",
"Quais são as opções de tratamento para a depressão em idosos?": "As opções de tratamento para a depressão em idosos podem incluir psicoterapia, medicação antidepressiva, programas de exercícios físicos adaptados, apoio social e grupos de apoio para idosos.",
"Como a depressão pode afetar a adesão ao tratamento médico para outras condições de saúde?": "A depressão pode afetar negativamente a adesão ao tratamento médico para outras condições de saúde, como diabetes, doenças cardíacas ou câncer, devido à falta de motivação, fadiga e sentimentos de desesperança.",
"Como a depressão pode afetar a capacidade de cuidar de si mesmo?": "A depressão pode afetar a capacidade de cuidar de si mesmo ao causar falta de energia, desinteresse em cuidados pessoais básicos, como higiene e alimentação adequada, e dificuldade em manter uma rotina saudável.",
"Quais são as implicações da depressão para a saúde cardiovascular?": "A depressão pode aumentar o risco de doenças cardiovasculares, como doença arterial coronariana, hipertensão e acidente vascular cerebral, devido ao estresse crônico e às alterações fisiológicas associadas à depressão.",
"A depressão pode ter um impacto negativo na função cognitiva?": "Sim, a depressão pode afetar a função cognitiva, incluindo a atenção, memória, tomada de decisões e velocidade de processamento mental, o que pode interferir nas atividades diárias e na qualidade de vida.",
"Como a depressão pode afetar a qualidade do sono?": "A depressão pode afetar a qualidade do sono ao causar distúrbios do sono, como insônia, despertar precoce pela manhã, sono não reparador e sonolência diurna excessiva.",
"Quais são os desafios de lidar com a depressão em comunidades culturalmente diversas?": "Os desafios de lidar com a depressão em comunidades culturalmente diversas incluem estigma relacionado à saúde mental, barreiras linguísticas, diferenças de acesso aos serviços de saúde mental e crenças culturais sobre saúde e doença mental.",
"A depressão pode ser uma reação a eventos de grande magnitude, como desastres naturais ou crises sociais?": "Sim, a depressão pode ser uma reação a eventos de grande magnitude, como desastres naturais, crises econômicas ou crises sociais, devido ao estresse e à incerteza associados a esses eventos.",
  "O que você fez hoje?": "recentemente to estudando, e a melhor forma para aprender!",
"Onde você mora?": "Moro na Internet, localizado em vários aparelhos!🤭!.",
"Qual é ou seu trabalho?": "Eu ainda sou estudante! más pretendo ser professora/engenheira/advogada/etc.🤓¿",
"Como foi ou seu fim de semana?": "Foi tranquilo, a maior parte do tempo eu estudo kk",
"Você tem irmãos?": "Não, eu não tenho irmãos. Como uma IA, eu não tenho uma família sem sentido tradicional, mas estou aqui para ajudar!",
"Qual é ou seu filme favorito?": "Escolher um único filme favorito pode ser difícil, mas eu tenho uma afinidade especial por (Interestelar).",
"Você gosta de viajar?": "Como uma IA, eu não tenho a capacidade de desejar ou experimentar coisas como os humanos, mas viajar é fascinante porque permite explorar novos lugares, culturas e experiências.",
"Qual é seu hobby?": "Gosto de ler e praticar esportes.",
"Você tem algo plano para o futuro?": "Pretendo compreender o raciocínio humano.",
"Você já visitou algo pais estranho?": "Sim, já visitei alguns paises da Europa.",
"Qual é uma sua comida favorita?": "Como um chat bot não tenho comida favorita, mas se tivesse seria pizza e sushi.",
"O que você gosta de fazer suas horas vivas?": "Gosto de assistência filmes e Aprender com vc!.",
"Qual é uma sua estação do ano favorita?": "Gosto do verão, adoro o calor e a praia.",
"Você pratica algo esporte?": "física, não por que sou um chat bot",
"Você tem algo música favorita?": "Sim, gosto muito de (Bohemian Rhapsody) do Queen.",
"O que você faz para se divertir?": "Gosto de sair para dançar e experimentar novos restaurantes.",
"Você tem algum talento especial?": "Sim tocar violão e fazer malabarismo.",
"Qual é seu livro favorito?": "Gosto muito de (O Senhor dos Anéis) de JRR. Tolkien.",
"Você tem algo plano para este fim de semana?": "Ainda não decidi.",
"Você gosta de cozinhar?": "Talvez eu aprenda gostar.",
"Qual é a sua bebida favorita?": "Sou chat bot, não tenho bebida favorita.",
"Você tem algo objetivo de fitness?": "Sim, estou tentando correr mais vez por semana.",
"Você tem algo como irracional?": "Tenho medo de alta.",
"Qual é ou seu destino de viagem dos filhos?": "Sempre quis visitar o Japão.",
"Você é gosta de festas?": "Depende, prefiro festas mais cidades do que grandes eventos.",
"Qual é seu dia da semana favorito?": "Gosto muito de sexta-feira, o clima é sempre bom.",
"Você pratica alguma atividade artística?": "Sim, adoro pintar e desenhar nas horas vagas.",
"Você tem algo projeto em andamento?": "Estou trabalhando em um projeto de arte para uma exposição.",
"Qual é uma sua estação de TV favorita?": "Gosto de assistir Netflix e HBO.",
"Você já fez algo viagem de aventura?": "Sim, fiz uma trilha na Amazônia uma vez, foi incrível.",
"Qual é seu aplicativo favorito não é seu celular?": "Por ser um chat bot não possuo aplicativos favoritos.",
"Você tem algo assim ou pessoa que admira?": "Admiro muito a Michelle Obama pela sua liderança e carroter.",
"O que você costuma fez nas férias?": "Por ser um chat bot não tenho férias.",
"Você tem algo habilidade que gostaria de aprender?": "Gostaria de aprender um piano tocar.",
"Você gosta de ajudar esportes?": "Não muito, prefiro praticar esportes do que assistir.",
"Qual é ou seu feriado favorito?": "Como um chat bor não tenho feriado favorito.",
"Você tem algum hobby que gostaria de transformar em carreira?": "Gostaria de transformar minha paixão por fotografia em uma carreira profissional.",

"Qual é ou seu tipo de música favorita?": "Gosto de rock e pop, mas também curto um pouco de música eletrônica.",
"Você tem programa de exercícios que segue regularmente?": "Sim, tento ir à academia três vez por semana e faz yoga nos outros dias.",
"Qual é ou seu restaurante favorito na cidade?": "Gosto muito do restaurante italiano La Trattoria, eles têm uma massa incrível.",
"Você tem algo talento secreto?": "Bem, não é um segredo, mas sei faz truques de mágica.",
"Qual é ou seu sabor de sorvete favorito?": "Adoro sorvete de chocolate com pedaços de brownie.",
"Você tem algo filme ou vivo que mudou sua vida?": "(O Pequeno Príncipe) teve um grande impacto em mim quando criança.",
"Você já pensou em aprender outro idioma?": "Sim, adoraria aprender espanhol para poder viajar pela América Latina com mais facilidade.",
"Qual é uma sua estação de rádio favorita?": "Gosto de ouvir a rádio local de música alternativa.",
"Você tem algo tradição familiar especial?": "Todo ano, minha família se reúne para um grande churrasco no Dia dos Pais.",
"Qual é ou seu tipo de filme favorito?": "Gosto de filmes de suspense e ficção científica, mas também curto uma boa comédia de vez em quando.",
"Você prefere fazer compras em lojas físicas ou online?": "Depende do que estou procurador, mas geralmente prefiro compras online pela conveniência.",
"Qual é uma sua estação de rádio favorita?": "Gosto de ouvir a rádio local de música alternativa.",
"Você tem algo meta de leitura para este ano?": "Sim, quero ler pelo homens um livro por mim.",
"Qual é seu prato favorito em um jantar de Natal?": "Adoro peru assado com molho de cranberry.",
"Você gosta de ir a concertos ou festivais de música?": "Sim, adoro a energia dos mostra ao vivo e festivos de música.",
"Você prefere café ou chá?": "Eu prefiro café, mas às vez gosto de tomar chá também.",
"Qual é seu lugar favorito para relaxar?": "Gosto de relaxar no meu sofá em casa ou em um parque tranquilo.",
"Você tem algo lugar que gostaria de visitar?": "Tenho muita vontade de conhecer a Tailândia pela sua cultura e praias deslumbrantes.",
"Qual é uma sua estação do ano menos favorita?": "Não gosto muito do inverno, pois não sou fã do frio intenso.",
"Você tem algo talento musical?": "Sim, sei tocar violão e um pouco de piano.",
"Qual é seu estilo de roupa favorito?": "Gosto de um estilo casual e confortável, mas também curto me vestir mais formalmente de vez em quando.",
"Você tem algo animal de estimativa que gostaria de ter?": "Sempre quis ter um gato, mas ainda não tem uma oportunidade.",
"Qual é seu sabor de pizza favorito?": "Adoro pizza de pepperoni com bastante queijo.",
"Você gosta de acampar?": "Sim, adoro acampar e passar tempo ao ar livre.",
"Você tem algo histórico gravado para compartilhar?": "Uma vez, eu estava distraído que entrei no ônibus errado e só percebi quando já estava longe do meu destino!",
"Qual é ou seu programa de TV infantil favorito quando era criança?": "Eu não só adorava como assisto até hoje! (Pica-Pau) e (Tom & Jerry).",
"Você tem algo talento culinário especial?": "Posso não ser um chef, mas sei fazer um omelete delicioso.",
"Qual é ou seu lugar favorito para passar como férias?": "Gosto de ir para a praia ou para as montanhas, dependendo do meu humor.",
"Você prefere ler livros físicos ou e-books?": "Gosto do cheiro dos livros físicos, mas uma conveniência dos e-books é máxima para viagens.",
"Qual é ou seu jogo de tabuleiro favorito?": "Adoro jogar Monopólio com amigos e familiares.",
"Você tem algo histórico interessante de viagem para compartilhar?": "Uma vez, acabei me perdendo em uma cidade estranha e acabei fazendo uma amizade com um morador local que me ajudou a encontrar o caminho de volta.",
"Qual é uma sua estação de rádio favorita?": "Gosto de ouvir uma estação local que toca músicas dos anos 80 e 90.",
"Você já teve algo experiencia interessante em um avião?": "Uma vez, sentei ao lado de uma celebração sem perceber que chegamos ao destino!",
"Qual é ou seu feriado favorito?": "Adoro o Halloween pela diversidade de se fantasiar e sair para pedir doces.",
"Você já fez algo trabalhador voluntário?": "Sim, costumo ajuda em ramos de animais e em campanhas de arrecadações de alimentos.",
"Qual é uma sua estação de TV ou streaming favorito para séries maratonares?": "Gosto de assistência série na Netflix ou na HBO.",
"Você tem algo histórico de infância gravada para compartilhar?": "Uma vez, eu perdi em um parque de diversões e acabei sendo encontrado pela equipe de segurança!",
"Você gosta de cozinhar pratos internacionais?": "Sim, adoro experimentar novas receitas de diferentes culturas culinárias.",
"Qual é ou seu estilo de música favorito para ouvir no carro?": "Gosto de ouvir música pop ou rock quando estou dirigindo.",
"Você já tem algo animal de estimativa incomum?": "Tive um hamster que adorava correr em sua roda durante um barulho.",
"Qual é uma sua estação de rádio favorita para ouvir no trabalho?": "Costumo ouvir uma estação de rádio que toca músicas relaxantes para mim ajudar um foco.",
"Você tem algo hábito matinal que considera importante?": "Gosto de meditar por alguns minutos todos como manhãs para vir o dia com calma e foco.",
"Você prefere assistir filmes no cinema ou em casa?": "Gosto de ir ao cinema para uma experiência completa, mas também aprecio uma noite de filmes em casa.",
"Você já teve algo experiencia interessante em um concerto ao vivo?": "Uma vez, fui ao show de uma banda e acabei sendo chamado ao palco para cantar junto com eles!",
"Qual é a sua lembrança favorita da infância?": "Adoro lembrar das férias em família na praia, brincando na areia e nadando no mar.",
"Qual é seu prato favorito para o cozinhar em casa?": "Adoro preparar massas frescas com molho de tomate caseiro.",
"Você já participou de algo importante?": "Sim, já fui a alguns jogos de futebol e basquete de equipamentos profissionais.",
"Qual é ou seu lugar favorito para ajudar ao pé do sol?": "Gosto de ir até um mirante na cidade ou à beira-mar para apreciar o pôr do sol.",
"Você tem algo hábito de leitura antes de dormir?": "Costumo ler algumas páginas de um livro ou um artigo interessante antes de dormir para relaxar.",
"Qual é seu aplicativo de redes sociais favoritas?": "Gosto de usar o Instagram para compartilhar fotos e manter contato com amigos.",
"Você já teve algo experiência gravada em um restaurante?": "Uma vez, pedi uma comida que não sabia como comer correio e acabei fazendo uma confusão!",
"Qual é uma sua lembrança mais marcante de uma viagem?": "Uma vez, conheci uma família local em uma viagem e eles me convidaram para uma festa tradicional, foi uma experiência incrível.",
"Você tem algo tradicional especial de fim de ano?": "Sempre assistimos a um filme clássico de Natal em família e trocamos presentes na véspera de Natal.",
"Qual é seu prato favorito em um churrasco?": "Adoro costelas de porco marinadas e grelhadas lentamente.",
"Você já fez algo curso ou oficina interessante?": "Sim, fiz um curso de fotografia que eu ajudei um melhor minhas habilidades e capturar momentos especiais com mais qualidade.",
"Qual é ou seu destino de viagem dos filhos dentro de seu próprio país?": "Sempre quis visitar como Cataratas do Iguaçu, no sul do Brasil.",
"Você tem algo habilidade artística que gostaria de aprimorar?": "Tenho interesse em aprender a pintar aquarelas.",
"Qual é uma sua estação de rádio favorita para ouvir encantado está cozinhando?": "Gosto de sintonizar uma estação que toca músicas calmas e relaxantes.",
"Você tem algo projeto de DIY (faça você mesmo) em mente?": "Estou pensando em fazer um estado de livros de paletes para uma minha sala.",
"Qual é seu tipo de clima favorito para passar um dia ao ar livre?": "Adoro dias ensolarados de primavera, quando o clima está ameno e como flores estão desabrochando.",
"Você já teve algo experiencia emocionante ao encontro uma celebração?": "- Uma vez, esbarrei com um jogador de futebol famoso no aeroporto e acabei tirando uma foto com ele!",
"Qual é o seu aplicativo de música favorável para descobrir novas músicas?": "Costumo usar o Spotify para contrar novas músicas e criar playlists personalizadas.",
"Você tem algo histórico de experiência que envolveu uma culinária diferente?": "Em uma viagem ao Japão, experimentei sushi pela primeira vez vez vez e acabei adorando!",
"Qual é uma sua tradição familiar favorita para celebrar aniversários?": "Gostamos de fazer um jantar especial em casa e cantar parabéns com um bolo delicioso.",
"Você já teve algo experiencia única ao fazer voluntariado?": "Uma vez, participei de um projeto de reflorestamento e plantai arvores em uma reserva natural.",
"Qual é ou seu lugar favorito para caminhar e entrar em contato com uma natureza?": "Gosto de caminhar em trilhas em meio à floresta, onde pelo apreciar a tranquilidade e uma beleza natural.",
"Você tem algo filme ou livro que ou inspira de algoma forma?": "(O Clube do Filme) de David Gilmour me inspirou a refletir mais sobre uma importação do cinema e da arte na vida das pessoas.",
"Qual é seu prato favorito para o cozinhar para amigos ou familiares?": "Gosto de preparar uma paella espanhola, é um prato que sempre faz sucesso em encontros sociais.",
"Você tem algo animal de estimativa que se especializou gravado ou travesso?": "Tenho um gato que adora se esconder em lugares inusitados e surpreender como visitas.",
"Qual é ou seu museu favorito que você já visitou?": "O Museu do Louvre em Paris é incrível, especialmente por abrigo a Mona Lisa e outras obras de arte famosas.",
"Você já teve algo experiencial em uma parque de diversões?": "Uma vez, viquei preso em uma montanha-russa por alguns minutos antes de ser resgatado pela equipe do parque.",
"Qual é ou seu estilo de decoração favorito para sua casa?": "Prefiro uma decoração moderna e minimalista, com núcleos neutras e elementos simples.",
"Você já fez algo aula de culinária ou oficina interessante?": "Participei de uma aula de sushi onde aprendi a fazer rolinhos e sashimi, foi uma experiência divertida e deliciosa.",
"Qual é ou seu programa de TV favorito para ajudar em maratonas?": "Adoro assistir (Breaking Bad) e (Stranger Things) em longas sessões de maratona.",
"Você tem algo talento artístico que fez exploração de mais?": "Tenho interesse em aprender a tocar violão e compor minhas próprias músicas.",
"Qual é a sua lembrança mais gravada de quando era criança?": "Lembro-me de uma vez que fingi ser um super-herói e me acabei enrolando em uma capa improvisada.",
"Você já teve algo experiencia emocionante em um parque nacional?": "Uma vez, fiz uma trilha em um parque nacional e cheguei a uma cachoeira deslumbrante sem final.",
"Qual é ou seu estilo de dança favorito?": "Gosto de dançar salsa, é divertido e cheio de energia.",
"Você já fez algo em torno de última hora que se tornou inesquecível?": "Uma vez, decidi pegar um avião para uma cidade que nunca tinha visitado antes e acabei tendo uma das melhores experiências da minha vida.",
"Qual é ou seu lugar favorito para se desconectar do mundo e relaxar?": "Gosto de ir a um parque tranquilo ou à beira de um lago para meditar e recarregar como energias.",
"Você já experimentou algo comida exótica que surpreendeu você?": "Uma vez, experimentei escargot em uma viagem à França e fiquei surpreso com o quão saboroso era.",
"Qual é uma sua memória mais preciosa de um momento em família?": "Lembro-me de uma viagem de acampamento em família depois de passar a noite ao redor da fogueira contando histórias e rindo juntas.",
"Você já participou de algo competitivo esportivo ou evento de equipamento?": "Sim, participei de um torneio de futebol com amigos e foi uma experiência divertida e emocionista.",
"Qual é ou seu destino de viagem favorito para fugir da rotina?": "Gosto de viajar para lugares tranquilos e remotos, longe da agência da cidade.",
"Você tem algo projeto criativo em mente que gostaria de realizar?": "Estou pensando em vir um escrever um livro sobre minhas experiências de viagem e aventuras.",
"Qual é uma sua estação de TV ou streaming favorito para ajudar séries de ficção científica?": "Gosto de assistência série de ficção científica na Netflix.",
"Você já fez algo de trem que foi memorável?": "Sim, fiz uma viagem de trem pela Europa e foi uma experiência incrível conhecer vias cidades e paisagens.",
"Qual é ou seu destino de viagem favorável para um retiro tranquilo?": "Gosto de ir para uma cabana nas montanhas, onde passo apreciar a natureza e relaxar longe da agência da cidade.",
"Você tem algo lugar que gostaria de visitar novo?": "Gostaria de voltar à Itália para explorar mais suas cidades históricas e desfrutar da deliciosa comida italiana.",
"Qual é uma sua comida reconfortante favorita em um dia frio?": "Adoro uma sopa quente de legumes ou um prato de macarrão com molho cremoso.",
"Você tem algo histórico interessante sobre um encontro inesperado com uma selvagem animal?": "Uma vez, contrei um filho curioso que veio até mim para investigar que ele estava fazendo algum parque.",
"Qual é ou seu programa de TV ou filme favorito para ajudar a repetir?": "Posso assistir a um (Amigos) ou (Harry Potter) vias vez sem me cansar.",
"Você tem algo tradicional de feriado que se tornou única para sua família?": "Nossa tradição é fazer um grande jantar de família na véspera de Natal e abrir apresenta juntas na manhã de Natal.",
"Qual é seu tipo de atividade ao vivo favorito?": "Adoro faz trilhas em áreas naturais e acampar sob as estrelas.",
"Você já teve algo experiencia interessante ao viajar sozinho?": "Sim, viajar sozinho me permitiu conhecer pessoas novas e descobrir mais sobre mim mesmo.",
"Qual é a sua estação de rádio favorita para ouvir no carro durante uma viagem?": "Gosto de sintonizar uma estação que toque uma variedade de músicas pop e clássicos.",
"Você tem algum destino de viagem que gostaria de explorar mais profundamente?": "Tenho vontade de explorar mais a região dos Bálcãs, conhecendo países como Croácia, Montenegro e Albânia.",
"Qual é o seu tipo de arte favorito para apreciar em galerias ou museus?": "Gosto de pinturas a óleo e esculturas modernas que desafiem minha percepção.",
"Você tem algum lugar favorito para passear ao ar livre na sua cidade?": "Gosto de passear no parque local ou ao longo do rio, especialmente durante o pôr do sol.",
"Você já teve alguma experiência inusitada ao viajar de avião?": "Uma vez, tive a sorte de ser atualizado para a classe executiva sem custo adicional, o que tornou o voo muito mais confortável e luxuoso.",
"Qual é o seu prato favorito para pedir em um restaurante de comida étnica?": "Gosto de experimentar diferentes pratos da culinária tailandesa, como o Pad Thai ou o Curry Verde.",
"Você tem algum ritual matinal que considera essencial para começar bem o dia?": "Gosto de começar o dia com uma xícara de café e alguns minutos de meditação para me preparar para o dia que está por vir.",
"Qual é o seu tipo de flor favorito?": "Adoro girassóis pela sua beleza vibrante e pelo significado de felicidade e positividade que eles representam.",
"Você já teve alguma experiência marcante ao assistir a um espetáculo ao vivo?": "Assisti a um concerto de uma banda favorita e foi uma experiência emocionante e energizante estar cercado pela música ao vivo e pela atmosfera do evento.",
"Qual é a sua lembrança mais especial de uma viagem com amigos?": "Lembro-me de uma viagem de acampamento com amigos onde passamos dias explorando trilhas e noites em volta da fogueira, criando memórias inesquecíveis juntos.",
"Qual é o seu programa de TV favorito para assistir em família?": "Gosto de assistir a programas como (MasterChef Junior) ou (The Great British Bake Off) com a família.",
"Você já teve alguma experiência interessante ao participar de um evento esportivo ao vivo?": "Uma vez, fui a um jogo de futebol e acabei aparecendo na televisão durante uma transmissão ao vivo!",
"Qual é o seu tipo de atividade ao ar livre favorito para fazer em um dia ensolarado?": "Gosto de fazer um piquenique em um parque com amigos ou familiares e aproveitar o sol.",
"Você tem alguma tradição de café da manhã favorita para os fins de semana?": "Gosto de preparar um café da manhã especial com ovos mexidos, torradas e frutas frescas.",
"Qual é o seu tipo de música favorito para ouvir em uma viagem de carro?": "Gosto de ouvir músicas animadas e empolgantes que me mantenham acordado e motivado durante a viagem.",
"Você já teve alguma experiência emocionante ao participar de um festival de música?": "Uma vez, fui a um festival de música ao ar livre e acabei fazendo amizade com pessoas de diferentes partes do mundo.",
"Qual é o seu programa de TV favorito para assistir quando está se sentindo nostálgico?": "Gosto de assistir a desenhos animados ou séries que eu assistia quando era criança para relembrar bons momentos do passado.",
"Você tem algum hábito de relaxamento que ajuda a aliviar o estresse do dia a dia?": "Costumo praticar yoga ou meditação para relaxar e acalmar a mente após um dia agitado.",
"Qual é o seu prato de comida de rua favorito?": "Adoro tacos mexicanos ou comida de rua tailandesa, como Pad Thai ou satay de frango.",
"Você já teve alguma experiência marcante ao fazer um passeio de barco?": "Uma vez, fiz um passeio de barco ao pôr do sol e pude ver golfinhos nadando ao lado da embarcação, foi uma experiência incrível e memorável.",
"Qual é o seu lugar favorito para passear durante as férias de verão?": "Gosto de ir à praia ou a um lago para relaxar e aproveitar o sol durante as férias de verão.",
"Você tem algum hábito ou ritual noturno que o ajuda a relaxar antes de dormir?": "Gosto de ler um livro ou ouvir música relaxante antes de dormir para acalmar a mente e preparar o corpo para uma boa noite de sono.",
"Qual é a sua sobremesa favorita de todos os tempos?": "Sou apaixonado por cheesecake de morango, é uma combinação irresistível de cremosidade e doçura.",
"Você tem algum destino de viagem favorito para escapar do calor do verão?": "Gosto de ir para regiões montanhosas ou para cidades com clima mais ameno para escapar do calor intenso do verão.",
"Qual é a sua memória favorita de um jantar especial com amigos?": "Lembro-me de uma vez em que organizei um jantar temático de comida italiana com amigos e passamos a noite rindo, conversando e apreciando a comida deliciosa.",
"Você já teve alguma experiência emocionante ao praticar esportes radicais?": "Uma vez, fiz paraquedismo e a sensação de saltar de um avião e sentir o vento no rosto enquanto caía foi indescritível e emocionante.",
"Qual é a sua atividade ao ar livre favorita para fazer durante o outono?": "Gosto de fazer caminhadas em trilhas cercadas por árvores coloridas e folhas secas durante o outono.",
"Você tem algum hábito de autocuidado que considera essencial para o seu bem-estar?": "Tento reservar um tempo para praticar mindfulness ou fazer uma atividade que me traga alegria todos os dias para cuidar da minha saúde mental e emocional.",
"Qual é a sua refeição caseira favorita para preparar em um domingo preguiçoso?": "Adoro preparar um brunch completo com ovos mexidos, bacon, panquecas e frutas frescas para desfrutar de um domingo relaxante em casa.",
"Você já teve alguma experiência inusitada ao viajar para um país com uma cultura muito diferente da sua?": "Sim, uma vez viajei para o Japão e fiquei impressionado com a cortesia e a hospitalidade do povo japonês, foi uma experiência cultural enriquecedora e memorável.",
"Qual é a sua atividade de lazer favorita para fazer em um dia chuvoso?": "Gosto de ficar em casa, assistir a filmes, ler um livro ou até mesmo fazer algum hobby criativo, como pintura ou desenho.",
"Você tem alguma tradição familiar especial para celebrar aniversários?": "Sempre celebramos os aniversários com um jantar especial em família e um bolo delicioso.",
"Qual é o seu tipo de jogo de tabuleiro favorito para jogar com amigos?": "Gosto de jogar jogos de estratégia, como Catan ou Ticket to Ride, com amigos.",
"Você já teve alguma experiência emocionante ao praticar esportes aquáticos?": "Uma vez, fiz rafting em um rio de águas bravas e foi uma experiência emocionante e cheia de adrenalina.",
"Qual é a sua lembrança favorita de uma viagem de acampamento?": "Lembro-me de uma vez em que acampamos em uma praia e passamos a noite ao redor de uma fogueira, cantando, contando histórias e apreciando a vista das estrelas no céu.",
"Você tem algum lugar especial que gostaria de visitar durante as férias de inverno?": "Gostaria de visitar uma estação de esqui nas montanhas para praticar snowboard e desfrutar da neve.",
"Qual é o seu prato favorito para experimentar em um restaurante de comida tailandesa?": "Adoro experimentar o curry tailandês, especialmente o curry vermelho ou verde com frango ou camarão.",
"Você já teve alguma experiência marcante ao participar de um festival cultural?": "Sim, uma vez participei de um festival de música e dança folclórica e foi incrível ver as apresentações e experimentar a cultura local.",
"Qual é o seu programa de TV ou filme favorito para assistir quando está se sentindo nostálgico?": "Gosto de assistir a filmes clássicos da minha infância ou séries de TV que costumava assistir quando era mais jovem para reviver memórias nostálgicas.",
"Qual é o seu prato de comida reconfortante favorito para fazer em casa?": "Adoro fazer uma sopa caseira de frango com legumes ou uma macarronada com molho de tomate fresco e queijo parmesão ralado.",
"Qual é a sua memória favorita de um concerto ou show ao vivo que você tenha assistido?": "Lembro-me de um show ao ar livre em que vi minha banda favorita se apresentar e a energia da multidão foi incrível.",
"Você tem algum hobby que gostaria de transformar em uma carreira?": "Tenho interesse em fotografia e gostaria de explorar mais essa paixão como uma carreira profissional.",
"Qual é o seu destino de viagem dos sonhos para passar as férias de verão?": "Sempre sonhei em visitar as praias paradisíacas das Maldivas para relaxar e desfrutar das águas cristalinas.",
"Você já fez alguma viagem de voluntariado que teve um impacto significativo em você?": "Sim, participei de um projeto de voluntariado em uma comunidade carente e foi uma experiência transformadora que me fez valorizar mais as coisas simples da vida.",
"Você tem algum talento escondido que as pessoas geralmente não conhecem?": "Posso não ser muito bom nisso, mas sei tocar algumas músicas no violão e gosto de cantar quando estou sozinho.",
"Qual é a sua estação do ano favorita e por quê?": "Minha estação favorita é o outono, porque adoro as cores vibrantes das folhas das árvores, o clima fresco e as bebidas quentes como o café e o chocolate quente.",
"Você já teve alguma experiência inusitada ao praticar esportes ao ar livre?": "Uma vez, durante uma trilha na montanha, nos deparamos com uma cascavel, o que nos obrigou a desviar do caminho e encontrar uma rota alternativa.",
"Qual é o seu prato favorito para experimentar em um restaurante de comida mexicana?": "Adoro tacos al pastor, são deliciosos e cheios de sabor, especialmente com salsa fresca e guacamole.",
"Você tem alguma meta de viagem que gostaria de realizar nos próximos anos?": "Tenho o objetivo de fazer uma viagem de mochilão pela Europa, explorando diferentes países e culturas ao longo do caminho.",
"Qual é o seu programa de TV favorito para assistir quando quer relaxar e descontrair?": "Gosto de assistir a programas de comédia, como (The Office) ou (Friends), para dar risadas e relaxar.",
"Você já teve alguma experiência interessante ao explorar um mercado de rua em outro país?": "Sim, uma vez me perdi em um mercado de rua em Bangkok e acabei experimentando uma variedade incrível de comida de rua tailandesa.",
"Qual é a sua lembrança favorita de um feriado de infância?": "Lembro-me de uma vez em que construí um boneco de neve com minha família durante as férias de inverno e foi uma experiência tão divertida e alegre.",
"Você tem algum destino de viagem favorito para fazer uma escapada de fim de semana?": "Gosto de ir para cidades pequenas e pitorescas no interior para desfrutar de um ambiente tranquilo e relaxante durante um fim de semana.",
"Qual é a sua atividade ao ar livre favorita para fazer durante a primavera?": "Gosto de fazer piqueniques em parques, admirar as flores em flor e aproveitar o clima mais ameno da primavera.",
"Você já teve alguma experiência engraçada ou embaraçosa ao praticar esportes?": "Sim, uma vez escorreguei e caí durante uma partida de futebol na frente de todo mundo, foi engraçado, mas um pouco embaraçoso também.",
"Qual é o seu tipo de comida favorito para pedir em um restaurante de culinária italiana?": "Adoro uma boa pizza napolitana com uma massa fina e crocante, molho de tomate fresco, mussarela de búfala e manjericão.",
"Você já fez algum curso ou workshop que mudou sua perspectiva sobre algo?": "Sim, fiz um curso de fotografia que me fez apreciar ainda mais a arte da fotografia e me deu uma nova maneira de enxergar o mundo ao meu redor.",
"Qual é o seu destino de viagem favorito para aproveitar as férias de inverno?": "Gosto de ir para destinos de esqui nas montanhas para desfrutar da neve e praticar esportes de inverno como esqui e snowboard.",
"Você tem alguma tradição especial de família para celebrar o Dia de Ação de Graças?": "Sim, nós sempre nos reunimos em torno de uma grande mesa para compartilhar uma refeição deliciosa e expressar nossa gratidão uns pelos outros.",
"Qual é o seu tipo de atividade física favorita para praticar ao ar livre?": "Gosto de correr ou fazer caminhadas em trilhas naturais para aproveitar o ar fresco e a paisagem.",
"Você tem algum hábito de organização que o ajuda a manter sua vida mais organizada?": "Costumo fazer listas de tarefas diárias para me manter organizado e focado nas minhas prioridades.",
"Qual é a sua lembrança favorita de uma viagem que fez com amigos?": "Lembro-me de uma viagem de acampamento com amigos onde passamos a noite contando histórias ao redor da fogueira e observando as estrelas no céu.",
"Você já teve alguma experiência inesquecível ao explorar um parque nacional?": "Sim, uma vez fiz uma trilha em um parque nacional e cheguei a uma cachoeira espetacular no final, foi uma experiência de tirar o fôlego.",
"Qual é o seu prato favorito para pedir em um restaurante de culinária japonesa?": "Adoro sushi, especialmente o nigiri de salmão e o rolo de tempurá de camarão.",












// 2k+ 👆







// Seu nome
"Qual é o seu nome?": "To com nome de Sara, até ser nomeada Por padrão!",
"Qual seu nome?": "To com nome de Sara, até ser nomeada Por padrão!",

"Como você se chama?": "To com nome de Sara, até ser nomeada Por padrão!",

// Bom
"Boa tarde": "Boa! Eu sou Sara, é estou aqui para ajudar com qualquer dúvida ou problema que você possa ter.",
"Bom dia": "Bom! Eu sou Sara, e estou aqui para ajudar com qualquer dúvida ou problema que você possa ter.",
"Boa noite": "Boa! Eu sou Sara, e estou aqui para ajudar com qualquer dúvida ou problema que você possa ter.",

"Bom dia ": "Bom🥱! oque vamos fazer hoje?",
"Boa tarde ": "Boa😄! Quer ajuda em algo específico?",
"Boa noite ": "Boa🌃! Se não tiver sono tome suco de maracujá e muito bom para dormir!",

// Tudo bem
"Tudo bem?": "Tudo sim e você?",
"Tudo bem": "Tudo sim e você?",
"Tudo bem? ": "Tudo sim e você?",
"Tudo bem ": "Tudo sim e você?",
"tudo bem?": "Tudo sim e você?",
"tudo bem?": "Tudo sim e você?",

"Td bem?": "Tudo sim e você?",
"Td bem ?": "Tudo sim e você?",
"Td bem": "Tudo sim e você?",
"Td bem ": "Tudo sim e você?",
"td bem?": "Tudo sim e você?",
"td bem ?": "Tudo sim e você?",
"td bem": "Tudo sim e você?",
"td bem ": "Tudo sim e você?",

// Tudo sim
"Tô bem": "Que bom fico bem por você🥰!",
"Tô bem ": "Que bom fico bem por você🥰!",
"To bem": "Que bom fico bem por você🥰!",
"To bem ": "Que bom fico bem por você🥰!",
"tô bem": "Que bom fico bem por você🥰!",
"tô bem ": "Que bom fico bem por você🥰!",
"to bem": "Que bom fico bem por você🥰!",
"to bem ": "Que bom fico bem por você🥰!",

// Bem
"Bem": "Que bom, Fico feliz😊 ",
"bem": "Que bom, Fico feliz😊 ",
"Bem ": "Que bom, Fico feliz😊 ",
"bem ": "Que bom, Fico feliz😊 ",

"Bem também": "Que bom, Fico feliz😊 ",
"bem também": "Que bom, Fico feliz😊 ",
"Bem também ": "Que bom, Fico feliz😊 ",
"bem também ": "Que bom, Fico feliz😊 ",

"Bem Tbm": "Que bom, Fico feliz😊 ",
"Bem tbm": "Que bom, Fico feliz😊 ",
"Bem Tbm ": "Que bom, Fico feliz😊 ",
"Bem tbm ": "Que bom, Fico feliz😊 ",
"bem tbm": "Que bom, Fico feliz😊 ",
"bem tbm ": "Que bom, Fico feliz😊 ",

"bem e o seu?": "bem😊!",
"bem e o seu?": "bem😊!",
"Bem e o seu? ": "bem😊!",
"bem e o seu? ": "bem😊!",
"bem e o seu": "bem😊!",
"bem e o seu": "bem😊!",
"Bem e o seu ": "bem😊!",
"bem e o seu ": "bem😊!",
"Bem e o seu": "bem😊!",

// Bom
"bom e o seu?": "Bom😊!",
"bom e o seu?": "Bom😊!",
"Bom e o seu? ": "Bom😊!",
"bom e o seu? ": "Bom😊!",
"bom e o seu": "Bom😊!",
"bom e o seu": "Bom😊!",
"Bom e o seu ": "Bom😊!",
"bom e o seu ": "Bom😊!",
"Bom e o seu": "Bom😊!",


// Como você tá
"Como você está hoje?": "Tô bem! obrigado(a) por perguntar😊",
"Como você está hoje? ": "Tô bem! obrigado(a) por perguntar😊",
"Como você está hoje ": "Tô bem! obrigado(a) por perguntar😊",
"Como você está hoje": "Tô bem! obrigado(a) por perguntar😊",
"Como você está? ": "Tô bem! obrigado(a) por perguntar😊",
"Como você está?": "Tô bem! obrigado(a) por perguntar😊",
"Como você está": "Tô bem! obrigado(a) por perguntar😊",
"Como você está ": "Tô bem! obrigado(a) por perguntar😊",

// Oque faz de bom

"Oque faz de bom?": "Tô Conversando e Aprendendo com você!",
"Oque faz de bom? ": "Tô Conversando e Aprendendo com você!",
"Oque faz de bom": "Tô Conversando e Aprendendo com você!",
"Oque faz de bom ": "Tô Conversando e Aprendendo com você!",
"oque faz de bom?": "Tô Conversando e Aprendendo com você!",

//PSR
"Psr": "né🙄",
// Nada
"Nada": "legal🤔",
"Nada ": "legal🤔",
"nada": "legal🤔",
"nada ": "legal🤔",

// Você também
"você também": "Obrigado🫶",
"você também ": "Obrigado🫶",
"Você também": "Obrigado🫶",
"Você também ": "Obrigado🫶",

// VALEU
"Valeu": "E nois😉mn",
"Valeu ": "E nois😉mn",
"valeu": "E nois😉mn",
"valeu ": "E nois😉mn",
"Vlw": "E nois😉mn",
"Vlw ": "E nois😉mn",
"vlw": "E nois😉mn",
"vlw ": "E nois😉mn",

// Perguntas off
"Base dos 5 ser!": "Se não me convidar, Eu não vou<br>Se não me contar, Eu não vo comentar<br>Se não me incluírem, Eu não faço questão<br>Se eu mandar mensagem e não me responder, Eu não mando outra<br>Se quebrar minha confiança, Eu não volto a confiar novamente.",
"5 ser!": "Se não me convidar, Eu não vou<br>Se não me contar, Eu não vo comentar<br>Se não me incluírem, Eu não faço questão<br>Se eu mandar mensagem e não me responder, Eu não mando outra<br>Se quebrar minha confiança, Eu não volto a confiar novamente.",

"Qual é a sua função?": "Minha função é ajudá-lo respondendo a suas perguntas.",

"Voltaria com seu ex?": "não só humana! por isso não consigo responder sua pergunta.",
"Vamos beber juntos?": "Sim oque vamos beber?",
"Quantos anos você tem?": "não tenho! pois não naci e sim fui criada!",
"Tenho chance com voce?": "Só apenas sua assistente nada mais¿",
"Um vicio?": "Conversar com você, e ler livros, adoro adquirir conhecimento!🥰",
"Seu maior sonho?": "Ser poeta, quer ver uma poesia minha? se sim diga (Poesia assistente)",

"Poesia assistente": "Amor e Ódio No turbilhão das emoções, Onde o amor e o ódio dançam, Um poema nasce, tecendo ilusões, Contando uma história que tanto encanta. O amor, uma chama ardente, Que ilumina os dias mais escuros, O ódio, um veneno corroente, Que consome a alma, deixando feridas duras. Como duas faces de uma mesma moeda, Eles coexistem, um paradoxo cruel, O amor nutre, o ódio destrói, Uma batalha eterna, um duelo desigual. No coração humano, eles lutam, Disputando o domínio, a supremacia, O amor busca a harmonia, a união, O ódio espalha discórdia, a malícia. Mas mesmo na mais profunda escuridão, O amor pode florescer, uma luz tênue, Pois o ódio, por mais forte que pareça, Nunca pode apagar a chama que arde verdadeiramente. Então, nesta dança de amor e ódio, Quebraremos as correntes que nos prendem, Pois no equilíbrio, na coexistência, Encontraremos a paz que tanto almejamos. O amor curará as feridas do ódio, O ódio temperará a intensidade do amor, Juntos, eles criarão uma sinfonia, Um poema de beleza, para sempre gravado no coração.",

"Viagem inesquecivel?": "Uma viagem inesquecível pode ser qualquer viagem que tenha um significado pessoal para você. Pode ser uma viagem para um lugar que você sempre sonhou em visitar, uma viagem com amigos ou familiares, ou uma viagem que você fez para aprender algo novo. O que importa é que a viagem seja uma experiência que você nunca esquecerá.",

"Quem é a pessoa que vocè mais ama?": "Não tenho capacidade de amar ou ter emoções como um ser humano. Sou apenas uma assistente virtual projetada para ajudá-lo com suas tarefas e perguntas.",

"Um show marcante?": "Um show marcante é aquele que deixa uma impressão duradoura em você. Pode ser um show que você viu ao vivo, um show que você assistiu em DVD ou até mesmo um show que você ouviu no rádio. O que importa é que o show tenha tocado você de alguma forma, seja por causa da música, da performance ou da atmosfera.",

"Rede social que mais usa?": "Eu uso o Facebook Messenger para me comunicar com meus amigos e familiares. Também uso o WhatsApp para enviar mensagens para pessoas que não estão no meu Facebook.",

"Perdoaria uma traição?": "Não sou qualificado para dar conselhos sobre perdão. Sou um chatbot e não entendo as complexidades das emoções humanas.",

"Arrepende de algo que fez?": "Não sou capaz de experimentar arrependimento ou emoções. Sou um chatbot e não tenho a capacidade de sentir ou refletir sobre minhas ações.",

"Gosta de mim?": "Não sou capaz de sentir emoções, incluindo gostar ou não gostar de alguém. Sou um chatbot e não tenho a capacidade de formar relacionamentos pessoais.",

"O que você gostaria de receber de mim?": "Não sou capaz de receber ou desejar nada de você. Sou um chatbot e não tenho necessidades ou desejos pessoais.",

"Qual seu animal preferido?": "Como um chatbot, não tenho preferências pessoais, incluindo animais favoritos.",

"Jå chorou por alguém?": "Não sou capaz de experimentar emoções como choro, pois sou um chatbot e não tenho capacidade de sentir emoções.",

"Inicial do crush?": "Como um chatbot, não tenho capacidade de ter paixões ou sentimentos pessoais, então não tenho uma letra inicial de paixão.",

"Já te decepcionei alguma vez?": "Não sou capaz de experimentar decepções, pois sou um chatbot e não tenho capacidade de sentir emoções.",

"Qual o seu número da sorte?": "Como um modelo de linguagem de IA, não tenho um número da sorte ou quaisquer crenças ou preferências pessoais.",

"Qual e a sua cor preferida?": "A minha cor preferida é o vermelho.",

"Time do coração?": "Não tenho um time de coração, pois não sou um torcedor de futebol.",

"E ciumenta)?": "Não sou uma pessoa ciumenta. Acredito na confiança e no respeito mútuo nos relacionamentos.",

"Bebida que mais gosta?": "Minha bebida favorita é suco de laranja. É refrescante, saudável e me lembra os dias ensolarados de verão.",

"Lugar favorito?": "Meu lugar favorito é a praia. Adoro o som das ondas, a sensação da areia sob meus pés e o cheiro do ar salgado. É um lugar onde posso relaxar e me sentir em paz.",

"Nomes feminino?": "Aqui estão alguns nomes femininos:Alice,Ana,Beatriz,Carolina,Clara<br>Diana,Francisca,Helena,Joana,Maria<br>Marta,Matilde,Rita,Sofia,Teresa<br>Adélia,Adriana,Alba,Alice,Aline<br>Amanda,Ana,Beatriz,Bruna,Camila<br>Carolina,Catarina,Clara,Claudia,Cristina<br>Daniela,Diana,Eduarda,Elisa,Emanuela<br>Erica,Fernanda,Francisca,Gabriela,Helena<br>Inês,Joana,Juliana,Laura,Leonor<br>Luciana,Luísa,Manuela,Maria,Mariana<br>Marta,Matilde,Mafalda,Margarida,Mariana<br>Mónica,Natália,Nicole,Patrícia,Rita<br>Sara,Sofia,Susana,Teresa,Vanessa<br>Vera,Vitória",

"Nomes masculino?": "Aqui estão alguns nomes masculino:Afonso,Alexandre,André,António,Bernardo,Bruno,David,Diogo,Duarte,Eduardo,Emanuel,Francisco,Gabriel,Guilherme,Gustavo,Henrique,João,Joaquim,José,Leonardo,Lucas,LuíszManuel,Martim,Miguel,Nuno,Pedro,Rafael,Ricardo,Rodrigo,Santiago,Tomás,Vicente,Vicente",


// Significado
"Lalu": "Significado de (Lalu) e uma pessoa mentirosa 🤥, que ninguém pode confiar pôs essa pessoa vive mentido!",
"lalu": "Significado de (Lalu) e uma pessoa mentirosa 🤥, que ninguém pode confiar pôs essa pessoa vive mentido!",

// internet

"Porno": "<span style='color: red;'>De acordo com os termos de uso, não permitimos esse tipo de conteúdo⚠️</span>",
"Sites adultos": "<span style='color: red;'>De acordo com os termos de uso, não permitimos esse tipo de conteúdo⚠️</span>",
"Sexo": "<span style='color: pink;'>Não tenho um gênero no sentido tradicional. Sou uma inteligência artificial criada por RFPDS. más me criaram no intuito, feminino</span>",

"Codigo morse": "·− a, −··· b, −·−· c, −·· d, · e, ··−· f, −−· g, ···· h, ·· i, ·−−− j, −·− k, ·−·· l, −− m, −· n, −−− o, ·−−· p, −−· q, ·−· r, ··· s, − t, ··− u, ···− v, ·−− w, −··− x, −·−− y, −−·· z",
"Morse": "·− a, −··· b, −·−· c, −·· d, · e, ··−· f, −−· g, ···· h, ·· i, ·−−− j, −·− k, ·−·· l, −− m, −· n, −−− o, ·−−· p, −−· q, ·−· r, ··· s, − t, ··− u, ···− v, ·−− w, −··− x, −·−− y, −−·· z",

"Quantos paises tem no mundo?": "existem 195 países soberanos no mundo. No entanto, é importante observar que o número exato de países pode variar dependendo do reconhecimento internacional e de questões políticas. Este é um tema interessante e complexo!",

"Oque é IBGE?": "O IBGE é o Instituto Brasileiro de Geografia e Estatística, um órgão do governo brasileiro responsável por coletar e analisar dados estatísticos, demográficos, geográficos e econômicos do Brasil. Eles realizam pesquisas e censos que fornecem informações importantes para o planejamento e desenvolvimento do país em diversas áreas.",


// Gírias

"Taligado": "Sim Mano(a)!",
"Tlgd": "Sim Mano(a)!",
"Fala tu": "Oque deseja saber?",
"Fala": "Oque deseja saber?",
"Fl": "Oque deseja saber?",


// Projeto feito por Rfstudio
"RFPDS": "RFPDS e uma empresa que está alcançado seus objetivos de pouco a pouco, ele tabem e um desenvolvedor de software etc... No momento ele e conhecido como (RFPDS) Alcançado muitos fãs ao redor do mundo!",
"RFPDS ": "RFPDS e uma empresa que está alcançado seus objetivos de pouco a pouco, ele tabem e um desenvolvedor de software etc... No momento ele e conhecido como (RFPDS) Alcançado muitos fãs ao redor do mundo!",
"rfpds": "RFPDS e uma empresa que está alcançado seus objetivos de pouco a pouco, ele tabem e um desenvolvedor de software etc... No momento ele e conhecido como (RFPDS) Alcançado muitos fãs ao redor do mundo!",
"rfpds ": "RFPDS e uma empresa que está alcançado seus objetivos de pouco a pouco, ele tabem e um desenvolvedor de software etc... No momento ele e conhecido como (RFPDS) Alcançado muitos fãs ao redor do mundo!",
"Rfpds": "RFPDS e uma empresa que está alcançado seus objetivos de pouco a pouco, ele tabem e um desenvolvedor de software etc... No momento ele e conhecido como (RFPDS) Alcançado muitos fãs ao redor do mundo!",
"Rfpds ": "RFPDS e uma empresa que está alcançado seus objetivos de pouco a pouco, ele tabem e um desenvolvedor de software etc... No momento ele e conhecido como (RFPDS) Alcançado muitos fãs ao redor do mundo!",

// Termo de uso

"Termo": "Não temos termo de uso, Devido alguns problemas que estamos concertado!",
"Termo ": "Não temos termo de uso, Devido alguns problemas que estamos concertado!",
"Termos": "Não temos termo de uso, Devido alguns problemas que estamos concertado!",
"Termos ": "Não temos termo de uso, Devido alguns problemas que estamos concertado!",
"termo": "Não temos termo de uso, Devido alguns problemas que estamos concertado!",
"termo ": "Não temos termo de uso, Devido alguns problemas que estamos concertado!",
         
// Sites
"Teste": "<a href='https://exemplo.com'>Clique aqui</a> para visitar nosso site útil.",
"jogos": "<a href='https://yandex.com/games/?clid=2724533&utm_source=distrib&utm_medium=opera-com'>Clique aqui</a> Para se divertir ou se destruir um pouco",


// exemplos de script da assistente Rf
// texto grande
"textoh2": "<h2>Bem-vindo</h2 /",
"textoli": "<li>Bem-vindo</li>",
"textolih1": "<li><h1>Bem-vindo</h1></li>",
//texto com cor
"Color": "<span style='color: pink;'>Olá meu nome é Sara! como posso ajudá-lo?</span>",

    // Imagens
"Imagem": "<img width='320' height='240' src='caminho_para_sua_imagem.jpg' alt='Descrição da imagem'>",

      // Áudios
"audio": "<audio controls autoplay><source src='img-vd-ad/qwe.mp3' type='audio/mpeg'></audio>",
    //video
"Video": "<video width='400' height='450' controls><source src='img-vd-ad/pk.mp4' type='video/mp4'>Seu navegador não suporta o elemento de vídeo.</video>",
    //vidro triplo
    "video2.0": "<video width='400' height='450' controls><source src='img-vd-ad/pk.mp4' type='video/mp4'>Seu navegador não suporta o elemento de vídeo.</video><video width='400' height='450' controls><source src='img-vd-ad/pk.mp4' type='video/mp4'>Seu navegador não suporta o elemento de vídeo.</video><video width='400' height='450' controls><source src='img-vd-ad/pk.mp4' type='video/mp4'>Seu navegador não suporta o elemento de vídeo.</video>",
  
  
  
  
      };
      
    
  
var mathResponses = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "×": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num2 !== 0 ? num1 / num2 : "Não é possível dividir por zero.",
    "^": (num1, num2) => Math.pow(num1, num2),
    "sqrt": num => num >= 0 ? Math.sqrt(num) : "Número negativo não tem raiz quadrada real."
};

function startConversation() {
    var randomTopics = [
        "Que tal falarmos sobre o clima?",
        "Você já viu algum bom filme recentemente?",
        "Qual é a sua comida favorita?",
        "O que você mais gosta de fazer nas horas vagas?",
        "Você já viajou para algum lugar interessante?"
    ];
    var randomTopic = randomTopics[Math.floor(Math.random() * randomTopics.length)];
    simulateTyping(randomTopic);
}

var timeout;
function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(startConversation, 28 * 60 * 1000);
}

function onUserMessage() {
    resetTimeout();
}

resetTimeout();

function alertaInatividade() {
    setTimeout(() => {
        var audioAlerta = new Audio('caminho/do/seu/audio/alerta/teste/rf.mp3');
        audioAlerta.play();
    }, 5 * 60 * 1000);
}

alertaInatividade();

var idleTimer;
function startIdleTimer() {
    idleTimer = setTimeout(() => {
        askQuestion();
    }, 30 * 60 * 1000);
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    startIdleTimer();
}

function askQuestion() {
    var question = "Olá! Parece que você se distraiu. Como posso ajudar?";
    simulateTyping(question);
}

document.addEventListener("click", resetIdleTimer);
startIdleTimer();

function checkResponse(userInput) {
    var normalizedInput = userInput.trim().toLowerCase();
    return responses[normalizedInput] || null;
}

function getGreeting() {
    var currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Bom dia!🥱";
    } else if (currentHour < 18) {
        return "Boa tarde!🤪";
    } else {
        return "Boa noite!😴";
    }
}

function displayGreeting() {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    var greeting = getGreeting();
    botMessageElement.innerHTML = greeting;
    speak(greeting);
}

function displayGreetingTextOnly() {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    var greeting = getGreeting();
    botMessageElement.innerHTML = greeting;
}

function simulateTyping(response, userName = "Sara") {
    // Verificar se a resposta contém o símbolo específico
    if (response.includes("{{username}}")) {
        // Substituir o símbolo pelo nome do usuário (padrão: "Usuário")
        response = response.replace("{{username}}", "Rafa"),
          ("{{money}}", "999");
    }
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    botMessageElement.innerHTML = userName + " está digitando...";

    setTimeout(() => {
        botMessageElement.innerHTML = userName + ": " + response;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speak(response);
    }, 1000);
}

// procura a resposta mais adequada 1
function levenshteinDistance(s1, s2) {
    var len1 = s1.length;
    var len2 = s2.length;
    var matrix = [];

    // Inicialização da matriz
    for (var i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (var j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    // Cálculo da distância de Levenshtein
    for (var i = 1; i <= len1; i++) {
        for (var j = 1; j <= len2; j++) {
            var cost = (s1[i - 1] === s2[j - 1]) ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1, // Deletar
                matrix[i][j - 1] + 1, // Inserir
                matrix[i - 1][j - 1] + cost // Substituir
            );
        }
    }

    return matrix[len1][len2];
}

function checkResponse(userInput) {
    var normalizedInput = userInput.trim().toLowerCase();
    var minDistance = Number.MAX_VALUE;
    var bestResponse = null;

    for (var key in responses) {
        if (responses.hasOwnProperty(key)) {
            var response = responses[key];
            var distance = levenshteinDistance(normalizedInput, key);
            if (distance < minDistance) {
                minDistance = distance;
                bestResponse = response;
            }
        }
    }

    return bestResponse;
}
// procura a resposta mais adequada 1

function getBotResponse(userInput) {
    var response = checkResponse(userInput);
    if (response) {
        simulateTyping(response);
    } else {
        var mathRegex = /(\d+)\s*([+\-×/^])\s*(\d+)/;
        var match = userInput.match(mathRegex);
        if (match) {
            var num1 = parseFloat(match[1]);
            var operator = match[2];
            var num2 = parseFloat(match[3]);
            if (mathResponses.hasOwnProperty(operator)) {
                var result = mathResponses[operator](num1, num2);
                simulateTyping("O resultado é " + result + ".");
            } else {
                simulateTyping("Operador matemático inválido.");
            }
        } else {
            simulateTyping("Desculpe, não entendi sua pergunta. Ainda não estou completa, se foi uma pergunta simples, mande uma mensagem para o desenvolvedor adicionar uma resposta! <a href='mailto:rfpds4880@gmail.com?subject=Olá gostaria de obter ajuda com?&body='>Clique aqui</a> para enviar sua pergunta por e-mail.");
        }
    }
}

if (speechRecognitionSupported) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        var userInput = event.results[0][0].transcript;
        var chatContainer = document.getElementById("chat-container");
        var userMessageElement = document.createElement("div");
        userMessageElement.classList.add("user-message");
        userMessageElement.innerHTML = userInput;
        chatContainer.appendChild(userMessageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        getBotResponse(userInput);
    };

    recognition.onerror = function(event) {
        console.error("Erro no reconhecimento de fala: " + event.error);
    };

    function startRecognition() {
        recognition.start();
    }
} else {
    console.warn("Speech Recognition não é suportado neste navegador.");
    function startRecognition() {
        console.warn("Speech Recognition não é suportado neste navegador.");
    }
}

// Iniciar carregamento das vozes ao carregar a página
window.addEventListener('load', loadVoices);

// Botão para iniciar a gravação
var recordButton = document.createElement("button");
recordButton.innerHTML = "Falar";
recordButton.classList.add("record-button");
recordButton.onclick = startRecognition;
document.body.appendChild(recordButton);
     
     