const features = [
    {
        id: 0,
        icon: 'target.svg',
        title: 'Foco',
        text: 'Através da concentração nos jogos para encontrar as melhores jogadas e entender o que realmente está acontecendo no jogo.',
    },
    {
        id: 1,
        icon: 'book.svg',
        title: 'Disciplina',
        text: 'Aprender com o erro e melhorar a cada situação nova. Manter a postura tanto em vitórias quanto em derrotas.',
    },
    {
        id: 2,
        icon: 'positive-thinking.svg',
        title: 'Atitude',
        text: 'Atacar, contra-atacar, deixando seu oponente confuso para conseguir o melhor resultado.',
    },
    {
        id: 3,
        icon: 'future.svg',
        title: 'Prevenção',
        text: 'Prever jogadas, pensar no futuro para se preparar a possíveis contratempos ou boas jogadas para sí próprio.',
    },
    {
        id: 4,
        icon: 'puzzle.svg',
        title: 'Lógica',
        text: 'Pensar como funcionam as peças, combinações, sacrifícios para conseguir utilizar o máximo de recursos.',
    },
    {
        id: 5,
        icon: 'analise.svg',
        title: 'Análise',
        text: 'Analisar o tabuleiro, seu oponente, entender quais jogadas são boas ou não.'
    },
    {
        id: 6,
        icon: 'calculating.svg',
        title: 'Cálculo',
        text: 'Calcular infinitos movimentos possíveis em uma posição. Enxergar longe para surpreender seu adversário.'
    },
    {
        id: 7,
        icon: 'tactics.svg',
        title: 'Estratégia',
        text: 'Encontrar a melhor tática para surpreender o adversário. Estratégias diversas para cada tipo de partida.'
    }
];

const pecas = [
    {
        id: 0,
        name: 'Peão',
        img: 'pawn.svg',
        text: 'Concreto e vanguarda. Não tem medo de ficar na linha de frente. Parece pequeno e frágil mas tem uma importância e força enorme. Confia em seus companheiros tanto para ajudá-los quanto para dar suporte a eles.'
    },
    {
        id: 1,
        name: 'Torre',
        img: 'rook.svg',
        text: 'Firme e paciente. Firme nas suas convicções. Caminha sempre reto em direção aos seus objetivos.'
    },
    {
        id: 2,
        name: 'Cavalo',
        img: 'horse.svg',
        text: 'Agilidoso e ardiloso. Elegante nos seus movimentos. Consegue pular obstáculos quando necessário para se chegar no seu objetivo.'
    },
    {
        id: 3,
        name: 'Bispo',
        img: 'bishop.svg',
        text: 'Fidedigno e sutil. Conhece caminhos alternativos para seu objetivo, é uma personalidade confiável para com seus companheiros.'
    },
    {
        id: 4,
        name: 'Dama',
        img: 'queen.svg',
        text: 'Perspicaz e absoluto. Busca ser indispensável para sua equipe e conseguir os melhores resultados.'
    },
    {
        id: 5,
        name: 'Rei',
        img: 'king.svg',
        text: 'Estratégico e inspirador. Sabe a hora de agir, não se equívoca para não acarretar em erros futuros. Busca ser uma referência para seus companheiros.'
    },
];

const hability = document.querySelector('#hability');
const pecasContainer = document.querySelector('#pecas-container');

const setHabilities = () => {
    for(c = 0; c <= features.length; c++) {
        hability.innerHTML += `
            <div class="hability-item">
                <img class="icon-item" src="./src/assets/about/${features[c].icon}">
                <h1>${features[c].title}</h1>
                <p>${features[c].text}</p>
            </div>
        `;
    }
};

const setPecas = () => {
    for(contadorPecas = 0; contadorPecas <= pecas.length; contadorPecas++) {
        pecasContainer.innerHTML += `
            <div class="pecas-item">
                <img src="./src/assets/index/${pecas[contadorPecas].img}">
                <div class="pecas-content">
                    <h1>${pecas[contadorPecas].name}</h1>
                    <p>${pecas[contadorPecas].text}</p>
                </div>
            </div>
        `;
    }
};

window.onload = setPecas;
setHabilities();
