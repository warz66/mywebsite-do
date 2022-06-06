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
                title: "Communication avec l'Api et expérience utilisateur",
                image: {
                    thumbnail: rcaApiUxTh,
                    large: rcaApiUx,
                },
                sections: [
                    {
                        paragraphe: [
                            "Le but de ce site web est avant tout de fournir des informations sur des Pays via une <a href='https://www.uptrends.fr/qu-est-ce-que/rest-api' target='_blank' rel='noreferrer'>Api Rest</a>. Une façon moderne de le faire est d'utiliser l'une des particularités les plus importante de JavaScript: <a href='https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Introducing' target='_blank' rel='noreferrer'>l'asynchrone</a>. Historiquement pour faire de l'asynchrone en JavaScript ont imbriqué les 'callbacks', mais le code devenait vite illisible, créait des erreurs de conceptions et ne garantissait pas l'ordre des évènements. Depuis 2015 et la version d'ECMAScript ES5, un nouvel <a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises' target='_blank' rel='noreferrer'>objet 'Promise'</a> permet de simplifier les échanges asynchrones. Je ne vais pas vous lister tous les avantages qu'apportent les promesses, mais elles sont devenues indispensables en ce qui concerne l'exécution de code asynchrone. Bien souvent sur une page web, on se retrouve avec des éléments qui visuellement dépendent d'une réponse distante, il est alors primordial pour une question d'Ux d'optimiser la réponse visuelle pour que le rendu asynchrone s'intègre progressivement sur la page de façon agréable pour l'oeil. Que ce soit dans Vue ou React, on va faire en sorte qu'un composant qui dépend d'une réponse asynchrone change d'état selon celle-ci, ainsi, on va pouvoir simplement grâce à ces technologies, donner une réponse visuelle la mieux adapté à notre besoin. Depuis peu en <a href='https://fr.reactjs.org/docs/concurrent-mode-suspense.html' target='_blank' rel='noreferrer'>React</a> et <a href='https://vuejs.org/guide/built-ins/suspense.html' target='_blank' rel='noreferrer'>Vue</a>, il existe un composant 'Suspense' du même nom pour ces deux technologies, qui permet d'orchester les dépendances asynchrones dans une arborescence de composants. Il peut rendre un état de chargement en attendant que plusieurs dépendances asynchrones imbriquées dans l'arborescence des composants soient résolues."
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
                title: "Le changement de thème",
                image: {
                    thumbnail: countriesRealisation,
                    large: countriesRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "Une des spécificités du projet est de pouvoir changer de thème entre un mode 'dark' et un mode 'light'. Il y a deux façons de le faire : Via des variables CSS ou en utilisant l'Api Context de React. J'ai opté de le faire via les variables CSS qui pour moi à un avantage indéniable, celui de manipuler qu'un seul composant (le composant App dans notre cas), tandis, qu'en utilisant le 'Context' de React il aurait fallu faire du CSS in JS dans tous les sous-composants qui vont changer d'apparence, ce qui est plus fastidieux d'un point de vue expérience de développement. Je n'ai pas vu davantage clair à utiliser le 'Context' pour changer de thème dans ce projet. Cet article donne plusieurs autres raisons d'utiliser les variables CSS : - <a href='https://epicreact.dev/css-variables/' target='_blank' rel='noreferrer'>Use CSS Variables instead of React Context.</a>"
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/FMentor-RestCountriesApi-react/blob/main/src/App.css",
                        text: "app.css"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-RestCountriesApi-react/blob/main/src/App.jsx",
                        text: "app.js"
                    },
                ]
            },
            {
                title: "Mon petit bilan comparatif entre Vue et React",
                sections: [
                    {
                        paragraphe: [
                            "La première distinction notable que l'on peut faire entre ces deux technologies dites 'similaires' (MVVM, Dom virtuel, composants réutilisables, etc...) est qu'elles ont été créé par des aspirations différentes. React a été créer pour répondre aux besoins des produits Facebook, pour de grands projets et dans un souci de performances, tandis que Vue s'inspire du 'meilleure <a href='https://fr.wikipedia.org/wiki/Angular' target='_blank' rel='noreferrer'>d'Angular'</a> d'après son créateur Evan You et est conçu avant toutes choses pour être léger, malléable et facile à prendre en main. Vue à une courbe d'apprentissage moins abrupte que React.",
                            "Pour écrire l'UI (interface utilisateur), React utilise <a href='https://fr.reactjs.org/docs/introducing-jsx.html' target='_blank' rel='noreferrer'>JSX</a> et Vue les <a href='https://fr.vuejs.org/v2/guide/syntax.html' target='_blank' rel='noreferrer'>Templates</a>. JSX est un mélange 'syntaxique de balisage et de JavaScript' en nous donnant toute la puissance de JavaScript, tandis qu'avec les Template, tous HTML valide est également un template Vue valide ce qui est beaucoup plus naturel à écrire, il nous suffit d'implémenter des directives sous forme d'argument dans les balises pour faire du rendu conditionnel, de liste, etc.. De plus avec Vue on peut tout à fait utiliser JSX. Dans Vue, on peut distinctement faire du composant monoficher en ayant une séparation bien plus claire avec le Template, le JavaScript (l'instance de vue), et le style (CSS scoped) ce qui est bien plus naturel à écrire car plus en lien avec le processus de création normal de CSS, alors qu'avec React il faut aimer faire du CSS-in-JS.",
                            "J'ai commencé à apprendre React à la version 16.8, avec l'apparition des Hooks, cela a introduit une alternative à l'écriture des composants basés sur des 'Classes' ainsi que sur la gestion des états et aux méthodes de cycles de vie, dorénavant il faut créer des composants fonctionnels. J'ai tout de même appris les deux façons de faire car il était encore dur de se documenter sur les Hooks car trop récents, ce qui a grandement jouer sur la courbe d'apprentissage. Je trouve que changer aussi fortement de paradigme dénote d'un manque d'analyse de la part des concepteurs de React.", 
                            "Le store <a href='https://vuex.vuejs.org/' target='_blank' rel='noreferrer'>Vuex</a> est encore une fois plus simple et intuitif à utiliser que <a href='https://redux.js.org/introduction/why-rtk-is-redux-today' target='_blank' rel='noreferrer'>Redux</a> (il faut bien comprendre la méthode <a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce' target='_blank' rel='noreferrer'>Reduce()</a> de javascript). Venant tout d'abord de Vue, avec React une chose m'a troublé au début de mon apprentissage, c'est qu'avec React lorsque l'état d'un composant change, cela enclenche de nouveau le rendu de tous ses sous-composants, tandis qu'avec Vue, les dépendances d’un composant sont automatiquement tracées durant le rendu, ainsi le système sait précisément quels composants ont besoin d'être rafraichis, React a besoin d'un peu plus d'analyse et d'optimisation de la part du développeur sur ce point-là.", 
                        ]
                    },
                ],
            },
            {
                title: "(Suite) Mon petit bilan comparatif entre Vue et React",
                sections: [
                    {
                        paragraphe: [
                            "J'ai trouvé l'écosystème de React plus riche, il existe bien plus d'outils, de bibliothèques compatibles, maintenues et récentes, ainsi qu'une communauté plus aguerrie et professionnelle, ce qui en fait un avantage extrêmement important pour React.",
                            "Pour ce qui est de pouvoir faire du <a href='https://medium.com/@prashantramnyc/server-side-rendering-ssr-vs-client-side-rendering-csr-vs-pre-rendering-using-static-site-89f2d05182ef' target='_blank' rel='noreferrer'>rendu côté serveur</a> (SSR-server side rendering), notamment pour répondre à des problématiques d'optimisation de référencement pour les moteurs de recherche, les deux technologies ont leurs propres solutions, <a href='https://v3.nuxtjs.org/guide/concepts/introduction/' target='_blank' rel='noreferrer'>Nuxt</a> pour Vue et <a href='https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs' target='_blank' rel='noreferrer'>Next</a> pour React. J'ai pratiqué un peu sur ces deux Frameworks, mais je n'ai pas encore le recul pour les différencier.",
                            "Vous l'auriez compris, d'après mon analyse, Vue est bien plus simple, intuitif et naturel à adopter que React d'après mon expérience sur les petits projets que j'ai pu réaliser. Cependant pour des besoins complexe, je pense que React donne plus de possibilités car plus proche de Javascript, et il a un atout indéniable, c'est son écosystème plus riche et aguerri. Personnellement j'utiliserai Vue pour des petits projets par soucis de rapidité, et React pour de plus gros projets afin de répondre a des besoins plus complexes. Cette conclusion reste encore subjective, et les deux technologies ont leur place selon l'ampleur du projet.",
                        ]
                    },
                ],
            }

        ]
    },
]

export default rca;