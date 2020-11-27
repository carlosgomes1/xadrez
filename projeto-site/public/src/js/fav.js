const handleScroll = () => {
    if (window.scrollY >= 290) {
        document.querySelector('#fischer-img').style.display = `initial`;
        document.querySelector('#fischer-img').style.animation = `appearFromLeft 1.5s`;
    }

    if (window.scrollY >= 730) {
        document.querySelector('#carlsen-img').style.display = `initial`;
        document.querySelector('#carlsen-img').style.animation = `appearFromRight 1.5s`;
    }

    if (window.scrollY >= 1430) {
        document.querySelector('#kasparov-img').style.display = `initial`;
        document.querySelector('#kasparov-img').style.animation = `appearFromLeft 1.5s`;
    }

    if (window.scrollY >= 2050) {
        document.querySelector('#mequinho-img').style.display = `initial`;
        document.querySelector('#mequinho-img').style.animation = `appearFromRight 1.5s`;
    }
}

window.onscroll = handleScroll;
