import svenrybinRealisation from 'assets/images/svenrybin/svenrybin-realisation.jpg'
import svenrybinHomepage from 'assets/images/svenrybin/svenrybin-homepage.jpg'
import svenrybinGalerie from 'assets/images/svenrybin/svenrybin-galerie.jpg'
import svenrybinApi from 'assets/images/svenrybin/svenrybin-api.jpg'
import svenrybinFormContact from 'assets/images/svenrybin/svenrybin-form-contact.jpg'

const arch = [
    {   
        title: "Svenrybin.fr",
        image: {
            thumbnail: svenrybinRealisation,
            large: svenrybinRealisation,
        },
        techs: "NEXT REACT / SYMFONY API-PLATFORM",
        sum: "In this challenge, you'll be building a 4-page site that will look great in any portfolio.",
        presentation: [
            "Le but du projet était de mettre en avant par le biais d'un site web l'artiste peintre Sven Rybin (décédé en 2012), en exposant son oeuvre (plus de 2000 toiles).",
            "Avant toutes choses c'est un travail effectué pour un proche, j'avais donc la liberté de mes choix comme pour un projet personnel ce qui m'a donné l'occasion de découvrir <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>Next.js</a>, <a href='https://api-platform.com/' target='_blank' rel='noreferrer'>Api-Platforme</a> (sous <a href='https://symfony.com/' target='_blank' rel='noreferrer'>Symfony</a>) et consolider mes connaissances en React, Js, Html, Css",
            "A la base ce projet est une refonte d'un site qui date de 2019 et dont je n'était pas satisfait du visuel. J'en ai recupéré que le contenu tel que les images et les textes.",
            "Pour le design je suis parti d'une maquette réalisée par <a href='https://aurore-graphique.fr/' target='_blank' rel='noreferrer'>une amie graphiste</a>. J'ai fait un découpage classique du footer, header, sections ainsi que des élements qui se répètent pour en faire des composants dans React. J'ai intégré une fonctionalité de light-mode, dark-mode, je trouvais que certain tableau pouvait mieux ressortir sur l'un ou l'autre des modes.",
            "On peut dire que c'est un projet 2 en 1, car il y a une partie Api et une partie Front-end indépendantes l'une de l'autre mais qui communique ensemble. A la suite de cette page vous verrez les spécifications importantes qui m'ont poussé à choisir cette structure pour ce site web."
        ],
        linkGithub: "https://github.com/warz66/next-sven-rybin",
        linkWebsite: "https://www.svenrybin.fr",
        specs: [
            {
                title: "Le choix de Next.js",
                image: {
                    thumbnail: svenrybinHomepage,
                    large: svenrybinHomepage,
                },
                sections: [
                    {
                        paragraphe: [
                            "La page principale du site étant static, il m'était pertinent de faire du Static Site Generation afin d'avoir une meilleure lisibilité par les moteurs de recherche, ainsi qu'un gain de performances comparer à une Single Page Application.",
                            "L'un des principals avantage de Next.js est sa simplicité de déploiement avec une plateforme t-elle que <a href='https://vercel.com/' target='_blank' rel='noreferrer'>Vercel</a>, sur laquelle je me suis familiarisé à son utilisation lors de challenges <a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>front-end-mentor</a>, de plus l'hébergement étant gratuit.",
                            "Le contenu du site portant sur un artiste peintre, les images sont fondamentales, le composant <a href='https://nextjs.org/docs/api-reference/next/image' target='_blank' rel='noreferrer'>Image</a> de next permet une optimisation et des performances améliorées.",
                            "L'une des autres utilisations pertinentes à Next et sa facilité de faire un prétraitement côté serveur avec une fonctionnalité t-elle que <a href='https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering' target='_blank' rel='noreferrer'>getServerSideProps</a> par exemple, qui dans un des cas d'utilisation permet de s'authentifier à l'api de distribution des images sans exposer les identifiants de connexion au front-end."
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/pages/index.js",
                        title: "Homepage structure"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/home/galeries/galerie/Galerie.jsx",
                        title: "Exemple utilisation composant Image de next"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/pages/galerie/index.jsx",
                        title: "Exemple getServerSideProps"
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://www.svenrybin.fr",
                        text: "Voir la Homepage"
                    }
                ]
            },
            {
                title: "Une galerie d'images dynamique",
                image: {
                    thumbnail: svenrybinGalerie,
                    large: svenrybinGalerie,
                },
                sections: [
                    {
                        paragraphe: [
                            "L'affichage du contenu de la page galerie se fait en 3 temps :",
                            "- Tout d'abord, côté serveur on fait une demande d'accès à l'Api, qui nous renvoie un token d'authentification que l'on communiquera au front-end lors du prérendu de la page.<br>- Ensuite on actualise les informations du formulaire qui permet de filtrer certaines données de la galerie.<br>- Enfin on accède à la première page d'images de la galerie sollicitée.",
                        ]
                    },
                    {   
                        title: "Un défilement infini + mansonry + simple-react-lightbox",
                        paragraphe: [
                            "- Plutôt qu'une pagination classique, j'ai opté pour du défilement infini par soucis d'élégance et d'expérience utilisateur. En effet, ayant un bon nombre d'images à présenter (ni trop, ni pas assez), cette méthode de défilement reste pertinente dans mon cas. De plus <a href='https://api-platform.com/' target='_blank' rel='noreferrer'>Api-Platform</a> prend en charge nativement les collections paginées, en renvoyant lors de l'émission d'une GET requête une collection Hydra (json-LD), ce qui facilite grandement le traitement à effectuer pour accéder au contenu suivant.",
                            "- Pour la mise en page des images j'ai utilisé la très célèbre librairie <a href='https://masonry.desandro.com/' target='_blank' rel='noreferrer'>Masonry</a> ainsi que <a href='https://www.npmjs.com/package/simple-react-lightbox' target='_blank' rel='noreferrer'>simple-react-lightbox</a> pour la navigation de la galerie dans une lightbox.",
                            "- La galerie ayant une logique d'état complexe, le hook <a href='https://fr.reactjs.org/docs/hooks-reference.html#usereducer' target='_blank' rel='noreferrer'>useReducer</a> de react ('le redux à portée du composant') m'était donc indispensable, de multiples useStates deviennent trés vite ingérables et sous performants."
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/pages/galerie/index.jsx",
                        title: "Galerie page"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/galerie/galerie-images/GalerieImages.jsx",
                        title: "Galerie component"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/galerie/filtre-form-galerie/FiltreFormGalerie.jsx",
                        title: "Galerie filtre form component"
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://www.svenrybin.fr/galerie",
                        text: "Voir la galerie" 
                    }
                ]
            },
            {
                title: "Une Api pour distribuer les images",
                image: {
                    thumbnail: svenrybinApi,
                    large: svenrybinApi,
                },
                sections: [
                    {   
                        paragraphe: [
                            "L'une des problématiques essentielles étant de pouvoir personnaliser les données pour chaque image, ainsi que de pouvoir en ajouter/modifier dans le temps, le tout dans une interface accessible à des néophytes de l'outil informatique. Il m'a été judicieux de créer une Api pour ce besoin. Je n'avais pas trouvé de solutions adéquates qui conviennent, soit trop lourdes, soit pas assez personnalisables, soit payantes. De plus c'était l'occasion pour moi de découvrir <a href='https://api-platform.com/' target='_blank' rel='noreferrer'>Api-Platform</a> (ce qui me tenait à coeur), et de créer possiblement dans le temps un outil de diffusion d'images, modeler comme je l'entends.",
                            "L'Api donne aussi et surtout la possibilité de <a href='https://api-platform.com/docs/core/filters/' target='_blank' rel='noreferrer'>filtrer les données</a> par critères facilement, il nous suffit d'ajuster la requête GET pour avoir les images voulues.",
                            "L'interface d'administration des galeries d'images m'était partiellement construite lors d'un autre de mes projets sous Symfony, j'ai donc pu récupérer du travail déjà éffectué. J'avais plus qu'à me concentrer sur la modélisation des données, l'apprentissage d'Api-Platform et sa configuration au sein de Symfony.",
                            "Il est important d'optimiser les images dès lors qu'elles sont diffusées sur la toile, le bundle <a href='https://github.com/liip/LiipImagineBundle' target='_blank' rel='noreferrer'>liip imagine</a> de Symfony m'a permis de faire ces transformations t-elle que le changement de taille pour les miniatures par exemple, ou le changement de format jpeg, webp pour les navigateurs compatibles. L'Api va nous permettre de diffuser les différentes adresses sources pour chaque image et ainsi avoir une utilisation adaptée de celle-ci."
                            
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/api-gallery",
                        title: "Dépôt github de l'api"
                    },
                    {
                        href: "https://github.com/warz66/api-gallery/blob/main/src/Entity/Image.php",
                        title: "Exemple entité image api configuration"
                    },
                    {
                        href: "https://github.com/warz66/api-gallery/blob/main/src/Controller/AdminGalerieController.php",
                        title: "Controller galerie"
                    },
                    {
                        href: "https://github.com/warz66/api-gallery/blob/main/config/packages/liip_imagine.yaml",
                        title: "Config liip imagine"
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://picsy.fr/api",
                        text: "Opérations Api" 
                    }
                ]
            },
            {
                title: "Le formulaire de contact", 
                image: {
                    thumbnail: svenrybinFormContact,
                    large: svenrybinFormContact,
                },
                sections: [
                    {
                        paragraphe: [
                            "Pour la validation du formulaire je vérifie simplement que les champs ne soient pas vides lors de la soumission.",
                            "J'ai mis en place le <a href='https://developers.google.com/recaptcha/docs/v3' target='_blank' rel='noreferrer'>Recaptcha v3</a> de Google pour protéger des attaques de robots/spams.",
                            "Une des fonctionnalités attrayante de <a href='https://github.com/juicyfx/vercel-php' target='_blank' rel='noreferrer'>Vercel est de pouvoir utiliser Php simplement et avec très peu de configuration grâce à son moteur d'exécution</a>. J'en ai profité pour faire un léger script pour traiter la soumission du formulaire côté back-end :",
                            "- Tout d'abord on protège l'accès à la ressource en configurant <a href='https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin' target='_blank' rel='noreferrer'>l'Access-Control-Allow-Origin</a> sur https://www.svenrybin.fr.<br>- Je revérifie que les champs ne soit pas vide.<br>- J'interroge le service de Google Recaptcha sur l'intégrité de la soumission par une vraie personne.<br>- Si tout est ok, je construis l'email à l'aide de <a href='https://github.com/PHPMailer/PHPMailer' target='_blank' rel='noreferrer'>PhpMailer</a> (je me sers d'une adresse mail google qui fait la redirection du message aux personnes concerné, avec une clé d'api applicatif.), puis je valide l'envoi du mail.<br>- Enfin je fais part à la partie front-end du succès ou des erreurs éventuelles à ce processus."
                            
                        ]
                    }
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/vercel.json",
                        title: "Vercel configuration runtime php"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/home/contact/form/Form.jsx",
                        title: "Formulaire de contact"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/api/contactMail.php",
                        title: "Script php création et redirection du message"
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://www.svenrybin.fr/#contact",
                        text: "Voir la section contact" 
                    }
                ]
            }
        ]
    },
]

export default arch;