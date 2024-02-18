// Fonction pour récupérer la valeur d'un cookie par son nom
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
    
    // Récupérer l'ID de l'utilisateur à partir du cookie
    const username = getCookie('username');

    let navUserContent = document.getElementsByClassName('user-info');
    navUserContent[0].innerHTML = `Hey, ${username}`;

    const logoutButton = document.getElementById('logout');

    logoutButton.addEventListener('click', () => {
        window.location.href = '/';
    });

    const favoris = document.querySelectorAll('.container i[data]');
    favoris.forEach(favori => {
        favori.addEventListener('click', function(event) {
            // Récupérer l'élément <i> cliqué
            const favoriClique = event.target;
    
            // Récupérer la valeur de l'attribut data
            const dataValue = favoriClique.getAttribute('data');

            if (favoriClique.className === "fa-regular fa-star fa-xl") {
                favoriClique.className = "fa-solid fa-star fa-xl";
            } else {
                favoriClique.className = "fa-regular fa-star fa-xl";
            }
        });
    });

    // Sélectionnez tous les éléments <article>
    const articles = document.querySelectorAll('.container article');

    // Ajoutez un gestionnaire d'événements à chaque élément <article>
    articles.forEach(article => {
        article.addEventListener('click', function(event) {
            // Récupérer l'ID de l'article
            const articleId = article.id;

            // Construire l'URL de redirection
            const redirectUrl = `/article-${articleId}`;

            // Rediriger l'utilisateur vers l'URL de l'article
            window.location.href = redirectUrl;
        });
    });

});

