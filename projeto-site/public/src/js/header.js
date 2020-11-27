var menu = document.querySelector('.menu');
var bar1 = document.querySelector('.barra-1');
var bar2 = document.querySelector('.barra-2');
var bar3 = document.querySelector('.barra-3');

var activeHamburger = false;

document.querySelector('#hamburger').addEventListener('click', () => {
    if (activeHamburger) {
        menu.style.display = 'none';
        bar2.style.display = 'initial';
        bar1.classList.remove('rotate1');
        bar3.classList.remove('rotate2');
    } else {
        menu.style.display = 'flex';
        bar2.style.display = 'none';
        bar1.classList.add('rotate1');
        bar3.classList.add('rotate2');
    }

    activeHamburger = !activeHamburger;
})

const setHeader = (authenticated) => {
    if (authenticated) {
        document.querySelector('.menu').innerHTML = `<ul>
                                                        <a href="fav.html">
                                                            <li>JOGADORES FAVORITOS</li>
                                                        </a>
                                                        <a href="about.html">
                                                            <li>SOBRE MIM</li>
                                                        </a>
                                                        <a href="article.html">
                                                            <li>ARTIGOS</li>
                                                        </a>
                                                    </ul>`;
    } else {
        document.querySelector('.menu').innerHTML = `<ul>
                                                        <a href="fav.html">
                                                            <li>JOGADORES FAVORITOS</li>
                                                        </a>
                                                        <a href="about.html">
                                                            <li>SOBRE MIM</li>
                                                        </a>
                                                        <a href="login.html">
                                                            <li>LOGIN</li>
                                                        </a>
                                                    </ul>`;
    }
}

var activeUser = false;
let usuario = sessionStorage.getItem('email_usuario');

const setName = () => {
    let name = sessionStorage.getItem('nome_usuario');

        document.querySelector('#user-name-header').innerHTML = name;
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${usuario}`, {cache:'no-store'}); 
}

if (usuario) {
    setHeader(true);

    document.querySelector('.user').style.display = 'flex';
    document.querySelector('#span_welcome').style.display = 'block';

    setName();

    document.querySelector('#logout').addEventListener('click', () => {
        finalizar_sessao();
        window.sessionStorage.clear();
    
        window.location.href = 'login.html';
    })

    document.querySelector('.user').addEventListener('click', () => {
        if (activeUser) {
            document.querySelector('.user-container').style.display = 'none';
        } else {
            document.querySelector('.user-container').style.display = 'flex';
        }
    
        activeUser = !activeUser;
    })
} else {
    setHeader(false)

    document.querySelector('.user').style.display = 'none';
    document.querySelector('.menu-container').style.justifyContent = 'flex-end'
}
