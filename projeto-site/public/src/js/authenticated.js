const redirect = (authenticated) => {
    authenticated ? '' : window.location.href = 'login.html';
}

const verifyAuth = () => {
    let usuario = sessionStorage.getItem('email_usuario');

    redirect(!!usuario);
}

verifyAuth();
setName();