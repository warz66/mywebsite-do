import countriesRealisation from 'assets/images/countries-react-vue-realisation.jpg'
import rcaApiUx from 'assets/images/rca/rca-api-ux.jpg'
import rcaApiUxTh from 'assets/images/rca/rca-api-ux-th.jpg'

const rca = [
    {   
        title: "Rest countries Api",
        image: {
            thumbnail: countriesRealisation,
            large: countriesRealisation,
        },
        techs: "REACT & Vue",
        sum: "Challenge Front-end Mentor décliné en deux versions (React & Vue), représentant les informations des pays distribués par une Api Rest.",
        presentation: [
            "<a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>Challenge Front-end Mentor</a> décliné en deux versions (React & Vue), représentant les informations des pays distribués par une Api Rest, tout en respectant le plus fidèlement la conception graphique.",
            /*"<span style='text-decoration: underline; font-style: italic;'>Qu'est-ce-que Front-End Mentor</span> :",
            "<a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>Front-end Mentor</a> est un site d'entrainement au front-end qui donne la possibilité de reproduire des designs de pages et de sites créés par des designers et de soumettre le résultat à la communauté. C'est ce que l'on peut trouver de plus proche comme entrainement en conditions réels pour de l'intégration web avec la mise à disposition de designs pour chaque taille d'écran.",*/
            "<span style='text-decoration: underline; font-style: italic;'>Ce qui est demandé</span> :",
            "- Voir tous les pays de l'API sur la page d'accueil.<br>- Rechercher un pays à l'aide d'un 'input'.<br>- Filtrer les pays par région.<br>- Cliquez sur un pays pour voir des informations plus détaillées sur une page séparée.<br>- Cliquez sur les pays frontaliers sur la page de détail.<br>- Basculer le jeu de couleurs entre le mode clair et le mode sombre.",
            "<a href='https://github.com/warz66/FMentor-RestCountriesApi-react' target='_blank' rel='noreferrer'>Dépôt github de la version React</a> - <a href='https://test-react-rest-countries-api-warz66.vercel.app/' target='_blank' rel='noreferrer'>Voir le site</a>",
            "<a href='https://github.com/warz66/FMentor-RestCountriesApi' target='_blank' rel='noreferrer'>Dépôt github de la version Vue</a> - <a href='https://warz66-fmentor-rest-countries-api.vercel.app' target='_blank' rel='noreferrer'>Voir le site</a>"
        ],
        linkOther: {
            title: "Résultat du défi sur Front-end Mentor",
            link: "https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-vuejs-3-cli-onmjXouQw"
        },
        specs: [
            {
                title: "Communication avec l'Api et Ux",
                image: {
                    thumbnail: rcaApiUxTh,
                    large: rcaApiUx,
                },
                sections: [
                    {
                        paragraphe: [
                            "Le but de ce site web est avant tout de fournir des informations sur des Pays grâce à un service web que l'on va consommer via une <a href='https://www.uptrends.fr/qu-est-ce-que/rest-api' target='_blank' rel='noreferrer'>Api Rest</a>. Une façon moderne de le faire est d'utiliser l'une des particularités les plus importante de JavaScript: <a href='https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Introducing' target='_blank' rel='noreferrer'>l'asynchrone</a>. Historiquement pour faire de l'asynchrone en JavaScript ont imbriqué les 'callbacks', mais le code devenait vite illisible, créait des erreurs de conceptions et ne garantissait pas l'ordre des évènements. Depuis 2015 et la version d'ECMAScript ES5, un nouvel <a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises' target='_blank' rel='noreferrer'>objet 'Promise'</a> permet de simplifier les échanges asynchrones. Je ne vais pas vous lister tous les avantages qu'apportent les promesses, mais elles sont devenues indispensables en ce qui concerne l'exécution de code asynchrone. Bien souvent sur une page web, on se retrouve avec des éléments qui visuellement dépendent d'une réponse distante, il est alors primordial pour une question d'Ux d'optimiser la réponse visuelle pour que le rendu asynchrone s'intègre progressivement sur la page de façon agréable pour l'oeil. Que ce soit dans Vue ou React, on va faire en sorte qu'un composant qui dépend d'une réponse asynchrone change d'état selon celle-ci, ainsi, on va pouvoir simplement grâce à ces technologies donner une réponse visuelle la mieux adapté à notre besoin. Depuis peu en <a href='https://fr.reactjs.org/docs/concurrent-mode-suspense.html' target='_blank' rel='noreferrer'>React</a> et <a href='https://vuejs.org/guide/built-ins/suspense.html' target='_blank' rel='noreferrer'>Vue</a>, il existe un composant <Suspense> du même nom pour ces deux technologies, qui permet d'orchester les dépendances asynchrones dans une arborescence de composants. Il peut rendre un état de chargement en attendant que plusieurs dépendances asynchrones imbriquées dans l'arborescence des composants soient résolues."
                        ],
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/FMentor-RestCountriesApi-react/blob/main/src/views/home/Home.jsx",
                        text: "Home.jsx"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-RestCountriesApi/blob/main/src/views/Home.vue",
                        text: "Home.vue"
                    },
                    {
                        href: "https://github.com/warz66/test-suspense-vuejs/blob/main/src/views/Home.vue",
                        text: "Home.vue (suspense)"
                    },
                ]
            },
            {
                title: "Le changement de theme",
                image: {
                    thumbnail: countriesRealisation,
                    large: countriesRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "Parler des variable globale en css etc... (peut etre Context et le store)"
                        ]
                    },
                ],
            },
            {
                title: "Petite comparaison de vue et react selon mon experience",
                image: {
                    thumbnail: countriesRealisation,
                    large: countriesRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "..."
                        ]
                    },
                ],
            }
        ]
    },
]

export default rca;