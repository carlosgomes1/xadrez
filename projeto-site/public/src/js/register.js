var login = true;
var formLogin = document.querySelector('#login');
var formRegister = document.querySelector('#cadastro');

document.querySelector('#create').addEventListener('click', () => {
    handleChange();
})

document.querySelector('#own').addEventListener('click', () => {
    handleChange();
})

const handleChange = () => {
    login = !login;

    if (login === false) {
        formLogin.style.display = 'none';
        formRegister.style.display = 'flex';
    } else {
        formLogin.style.display = 'flex';
        formRegister.style.display = 'none';
    }
}

const toastDesign = {
    success: {
        backgroundColor: '#c9ffd5',
        color: '#2e656a',
        icon: 'fa-check-circle'
    },
    error: {
        backgroundColor: '#fddede',
        color: '#c53030',
        icon: 'fa-exclamation-circle'
    }
}

const deleteToast = () => {
    let toast = document.querySelector('.toast-container')

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000)
}

const showToast = (type, title, desc) => {
    let toast = document.querySelector('.toast-container')
    let toastTitle = document.querySelector('#toast-title')
    let toastIcon = document.querySelector('#toast-icon')
    let toastDesc = document.querySelector('#toast-desc')

    toast.style.color = type == 'success' ? toastDesign.success.color : toastDesign.error.color;
    toast.style.backgroundColor = type == 'success' ? toastDesign.success.backgroundColor : toastDesign.error.backgroundColor;
    toast.style.display = 'flex';
    toastIcon.style.color = type == 'success' ? toastDesign.success.color : toastDesign.error.color;
    toastTitle.innerHTML = title;
    toastDesc.innerHTML = desc;
    toastIcon.classList.add(type == 'success' ? toastDesign.success.icon : toastDesign.error.icon)

    deleteToast();
}


/* REGISTER API */
const handleRegister = () => {
    loading(formRegister);

    var formulario = new URLSearchParams(new FormData(formRegister));
        fetch("/usuarios/cadastrar", {
            method: "POST",
            body: formulario
        }).then(function (response) {
            
            if (response.ok) {
                showToast('success', 'Sucesso!', 'Cadastro realizado com sucesso.')

                setTimeout(() => {
                    window.location.reload();
                }, 4000)
            } else {
                response.text().then(function (resposta) {
                    alert(resposta)
                    showToast('error', 'Erro', 'Ocorreu um erro durante o envio de informações.')
                });

                afterLoading(formRegister);
            }
        });

        return false;
}

const handleLogin = () => {
    loading(formLogin);
        var formularioLogin = new URLSearchParams(new FormData(formLogin));
        fetch("/usuarios/autenticar", {
            method: "POST",
            body: formularioLogin
        }).then(resposta => {

            if (resposta.ok) {

                resposta.json().then(json => {

                    sessionStorage.email_usuario = json.email;
                    sessionStorage.nome_usuario = json.nome;

                    window.location.href = 'about.html';
                });

            } else {

                console.log('Erro de login!');
                showToast('error', 'Erro', 'Ocorreu um erro durante o envio de informações.')

                resposta.text().then(texto => {
                    console.error(texto);
                });

                afterLoading(formLogin);
            }
        });

        return false;
}

const loadingRing = document.querySelector('.lds-dual-ring');

const loading = (form) => {
    form.style.display = 'none';
    loadingRing.style.display = 'inline-block';
}

const afterLoading = (form) => {
    form.style.display = 'flex';
    loadingRing.style.display = 'none';
}
