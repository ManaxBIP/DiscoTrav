function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for(let i = 0; i <cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

window.addEventListener('DOMContentLoaded', (event) => {
    const logo = document.getElementsByClassName('logo');
    logo[0].addEventListener('click', () => {
        window.location.href = '/home';
    });

    const title = document.getElementsByClassName('title');
    title[0].addEventListener('click', () => {
        window.location.href = '/home';
    });

    const coverName = getCookie('cover');

    const cover = document.getElementsByClassName('coverimg');
    cover[0].src = `${coverName}.jpg`;
    cover[1].src = `${coverName}.jpg`;
});