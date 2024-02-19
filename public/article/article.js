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

    const username = getCookie('username');

    let navUserContent = document.getElementsByClassName('user-info');
    navUserContent[0].innerHTML = `Hey, ${username}`;

    const logoutButton = document.getElementById('logout');

    logoutButton.addEventListener('click', () => {
        window.location.href = '/';
    });

    const coverName = getCookie('cover');
    const coverFont = document.getElementsByClassName('cover-font');

    const cover = document.getElementsByClassName('coverimg');
    cover[0].src = `${coverName}.jpg`;
    cover[1].src = `${coverName}.jpg`;

    const salutcestLOIC = document.getElementsByClassName('custom-list');

    const desc = document.getElementsByClassName('album__desc');
    switch (coverName) {
        case 'utopia':
            desc[0].innerHTML = `"Utopia" est bien plus qu'un simple album pour Travis Scott ; c'est un voyage à travers les rêves et les aspirations d'un artiste à la recherche de l'ultime expression de son art. Chaque piste est un paysage sonore distinct, fusionnant des rythmes captivants avec des paroles évocatrices pour transporter l'auditeur dans un univers fantastique. Avec des collaborations de premier plan et une production innovante, cet album repousse les frontières du genre et établit Travis Scott comme un pionnier de la musique contemporaine. "Utopia" invite chacun à explorer son propre monde intérieur et à trouver la beauté dans l'imagination sans limites. C'est une œuvre d'art audacieuse qui célèbre la créativité sous toutes ses formes.`;
            coverFont[0].src = 'utopia-font.png';
            salutcestLOIC[0].innerHTML = `
                <li>HYAENA</li>
                <li>THANK GOD</li>
                <li>MODERN JAM</li>
                <li>MY EYES</li>
                <li>GOD'S COUNTRY</li>
                <li>SIRENS</li>
                <li>MELTDOWN</li>
                <li>FE!N</li>
                <li>DELRESTO (echoes)</li>
                <li>I KNOW?</li>
                <li>TOPIA TWINS</li>
                <li>CIRCUS MAXIMUS</li>
                <li>PARASAIL</li>
                <li>SKITZO</li>
                <li>LOST FOREVER</li>
                <li>LOOOVE</li>
                <li>K-POP</li>
                <li>TELEKINESIS</li>
                <li>TIL FURTHER NOTICE</li>
            `
            break;

        case 'astroworld':
            desc[0].innerHTML = `L'album "Astroworld" de Travis Scott est bien plus qu'une simple collection de chansons; c'est une odyssée artistique qui transporte l'auditeur dans un univers fantasmagorique. À travers des rythmes captivants et des paroles évocatrices, Scott peint un paysage sonore unique, mêlant le hip-hop, le trap et des éléments expérimentaux. Avec une conception visuelle époustouflante, l'album fusionne l'art, la musique et la narration pour créer une expérience immersive. Chaque piste est soigneusement orchestrée pour capturer l'esprit de l'imaginaire, invitant les auditeurs à plonger dans les méandres de l'univers d'Astroworld avec lui.`;
            coverFont[0].src = 'astroworld-font.png';
            salutcestLOIC[0].innerHTML = `
                <li>STARGAZING</li>
                <li>CAROUSEL</li>
                <li>SICKO MODE</li>
                <li>R.I.P. SCREW</li>
                <li>STOP TRYING TO BE GOD</li>
                <li>NO BYSTANDERS</li>
                <li>SKELETONS</li>
                <li>WAKE UP</li>
                <li>5% TINT</li>
                <li>NC-17</li>
                <li>ASTROTHUNDER</li>
                <li>YOSEMITE</li>
                <li>CAN'T SAY</li>
                <li>WHO?WHAT?</li>
                <li>BUTTERFLY EFFECT</li>
                <li>HOUSTONFORNICATION</li>
                <li></li>
                <li>COFFEE BEAN</li>
            `
            break;

        case 'jackboys':
            desc[0].innerHTML = `L'album "Jackboys" de Travis Scott ne se contente pas d'être une simple compilation de chansons ; il représente une immersion totale dans son univers sonore et visuel singulier. Sa conception résulte d'une collaboration intense, rassemblant divers talents pour créer une expérience immersive. Des rythmes hypnotiques aux visuels saisissants, chaque détail est soigneusement pensé pour transporter l'auditeur dans un voyage captivant. En fusionnant diverses influences, Travis Scott repousse les frontières du rap et de la culture urbaine, offrant ainsi un album qui laisse une marque indélébile et redéfinit les normes de l'industrie musicale.`
            coverFont[0].src = 'jackboys-font.png';
            salutcestLOIC[0].innerHTML = `
                <li>HIGHEST IN THE ROOM</li>
                <li>JACKBOYS</li>
                <li>GANG GANG</li>
                <li>HAD ENOUGH</li>
                <li>OUT WEST</li>
                <li>WHAT TO DO?</li>
                <li>GATTI</li>
            `
            break;
            
        case 'birds':
            desc[0].innerHTML = `L'album "Birds in the Trap Sing McKnight" de Travis Scott transcende les simples compilations de chansons pour offrir une immersion totale dans son univers musical distinctif. Fruit d'une collaboration intense, il réunit des talents divers pour créer une expérience auditive et visuelle captivante. Des mélodies envoûtantes aux paroles poignantes, chaque aspect est minutieusement conçu pour transporter l'auditeur dans un voyage émotionnel saisissant. En fusionnant des influences variées, Travis Scott repousse les limites du genre rap et crée un album qui redéfinit les normes de l'industrie musicale tout en laissant une empreinte durable dans l'esprit de ses auditeurs.`;
            coverFont[0].src = 'birds-font.png';
            salutcestLOIC[0].innerHTML = `
                <li>the ends</li>
                <li>way back</li>
                <li>coordinate</li>
                <li>through the late night</li>
                <li>beibs in the trap</li>
                <li>sdp interlude</li>
                <li>sweet sweet</li>
                <li>outside</li>
                <li>goosebumps</li>
                <li>first take</li>
                <li>pick up the phone</li>
                <li>lose</li>
                <li>guidance</li>
                <li>wonderful</li>
            `
            break;

        case 'rodeo':
            desc[0].innerHTML = `L'album "Rodeo" de Travis Scott va bien au-delà d'une simple compilation de chansons ; il offre une immersion totale dans son univers sonore distinctif. Conçu à travers une collaboration intense, il réunit des talents divers pour créer une expérience sensorielle captivante. Des beats puissants aux paroles évocatrices, chaque élément est soigneusement élaboré pour transporter l'auditeur dans un voyage émotionnel et visuel envoûtant. En fusionnant des influences diverses, Travis Scott repousse les frontières du rap et de la culture urbaine, offrant ainsi un album qui marque son époque et redéfinit les normes de l'industrie musicale.`;
            coverFont[0].src = 'rodeo-font.png';
            salutcestLOIC[0].innerHTML = `
                <li>Pornography</li>
                <li>Oh My Dis Side</li>
                <li>3500</li>
                <li>WASTED</li>
                <li>90210</li>
                <li>Pray 4 Love</li>
                <li>Nightcrawler</li>
                <li>Piss On Your Grave</li>
                <li>Antidote</li>
                <li>Impossible</li>
                <li>Maria I'm Drunk</li>
                <li>Flying High</li>
                <li>I Can Tell</li>
                <li>Apple Pie</li>
                <li>Ok Alright</li>
                <li>Never Catch Me</li>
            `
            break;


        default:
            break;
    }

    async function getComments(coverName) {
        try {
            console.log(coverName);
            const response = await fetch(`/comments?coverName=${coverName}`);
            const comments = await response.json();
    
            // Bouclez sur chaque commentaire et affichez-le dans la div de commentaires
            const commentsDiv = document.querySelector('.Comments');
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                const formatedDate = formatTimeDifference(comment.created_at);
                commentElement.classList.add('commentUser');
                const pdp = document.createElement('div');
                pdp.classList.add('pdp');
                profilepics = document.createElement('img');
                profilepics.src = 'profile.jpg';
                pdp.appendChild(profilepics);
                const content = document.createElement('div');
                content.classList.add('content');
                const name = document.createElement('div');
                name.classList.add('name');
                const message = document.createElement('div');
                message.classList.add('message');
                name.textContent = `${comment.Username}`;
                const date = document.createElement('div');
                date.classList.add('date');
                const nameDate = document.createElement('div');
                nameDate.classList.add('nameDate');
                nameDate.appendChild(name);
                nameDate.appendChild(date);
                content.appendChild(nameDate);
                date.textContent = formatedDate;
                message.textContent = comment.Content;
                content.appendChild(message);
                commentElement.appendChild(pdp);
                commentElement.appendChild(content);
                commentsDiv.appendChild(commentElement);
                commentsDiv.appendChild(commentElement);
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des commentaires:', error);
        }
    }
    

    // Appelez la fonction pour récupérer les commentaires au chargement de la page
    getComments(coverName);

    // Gérez l'ajout de nouveaux commentaires
    const submitButton = document.getElementById('send');
    submitButton.addEventListener('click', async () => {
        let articleId = 0;
        switch (coverName) {
            case 'utopia':
                articleId = 1;
                break;
            case 'jackboys':
                articleId = 2;
                break;
            case 'astroworld':
                articleId = 3;
                break;
            case 'birds':
                articleId = 4;
                break;
            case 'rodeo':
                articleId = 5;
                break;
            default:
                break;
        }

        const content = document.getElementById('input_comment').value;
        if (content) {
            try {
                await fetch('/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ IdArticle: articleId, Username: username, Content: content })
                });

                location.reload();
            } catch (error) {
                console.error('Erreur lors de l\'ajout du commentaire:', error);
            }
        }
    });
});

function formatTimeDifference(commentDate) {
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - new Date(commentDate)) / 1000);

    if (diffInSeconds < 60) {
        return 'now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return minutes === 1 ? '1 min ago' : `${minutes} mins ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return days === 1 ? '1 day ago' : `${days} days ago`;
    }
}