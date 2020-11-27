const features = [
    {
        id: 0,
        icon: 'target.svg',
        title: 'Foco',
        text: 'Desenvolve-se o foco se concentrando em jogadas, tirando distrações para obter o melhor resultado nas partidas.',
    },
    {
        id: 1,
        icon: 'book.svg',
        title: 'Disciplina',
        text: 'A disciplina de se aprender com o erro e melhorar a cada situação nova.',
    },
    {
        id: 2,
        icon: 'positive-thinking.svg',
        title: 'Atitude',
        text: 'A atitude de atacar mesmo sendo atacado, deixando seu oponente confuso para conseguir o melhor resultado.',
    },
    {
        id: 3,
        icon: 'future.svg',
        title: 'Prevenção',
        text: 'Prever jogadas, pensar no futuro para se preparar a possíveis contratempos ou boas jogadas.',
    },
    {
        id: 4,
        icon: 'puzzle.svg',
        title: 'Lógica',
        text: 'A lógica de pensar como funcionam as peças, combinações, sacrifícios para conseguir utilizar o máximo de recursos.',
    },
];

const pecas = [
    {
        id: 0,
        name: 'Peão',
        img: 'pawn.svg',
        text: 'Linha de frente. Consegue segurar ataques mesmo parecendo inofensivo e confia nos seus companheiros para executarem as melhores atitudes.'
    },
    {
        id: 1,
        name: 'Torre',
        img: 'rook.svg',
        text: 'Firme'
    },
    {
        id: 0,
        name: 'Cavalo',
        img: 'horse.svg',
        text: 'Linha de frente. Parece inofensivo mas com uma importância gigante, consegue segurar ataques mesmo sem tantas funcionalidades e confia nos seus companheiros para executarem as melhores atitudes.'
    },
    {
        id: 0,
        name: 'Bispo',
        img: 'bishop.svg',
        text: 'Linha de frente. Parece inofensivo mas com uma importância gigante, consegue segurar ataques mesmo sem tantas funcionalidades e confia nos seus companheiros para executarem as melhores atitudes.'
    },
    {
        id: 0,
        name: 'Dama',
        img: 'queen.svg',
        text: 'Linha de frente. Parece inofensivo mas com uma importância gigante, consegue segurar ataques mesmo sem tantas funcionalidades e confia nos seus companheiros para executarem as melhores atitudes.'
    },
    {
        id: 0,
        name: 'Rei',
        img: 'king.svg',
        text: 'Linha de frente. Parece inofensivo mas com uma importância gigante, consegue segurar ataques mesmo sem tantas funcionalidades e confia nos seus companheiros para executarem as melhores atitudes.'
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
