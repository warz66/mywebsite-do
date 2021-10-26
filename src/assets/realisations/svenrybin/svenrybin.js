import svenrybinRealisation from 'assets/images/svenrybin-realisation.jpg'
import svenrybinGalerie from 'assets/images/svenrybin-galerie.jpg'
import svenrybinApi from 'assets/images/svenrybin-api.jpg'

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
            "Mihi atque consiliis ipsas ita ita homini publicae homini omnium me Quid inimicus depono me meorum tandem mihi iure rei ipsas ex homini amicus depono homini Quid summorum depono meorum.",
            "Triumphos aetatem adultam in aerumnas transcendit in fere et circummurana.",
            "Militares turbarum sine ad ad traxere haec turbarum corpore atque praefecti et morati adorti proximo adorti militares proximo ullo morbosum.",
            "Caedium Lycaoniam Pamphyliam quidem documentis.",
            "Mihi atque consiliis ipsas ita ita homini publicae homini omnium me Quid inimicus depono me meorum tandem mihi iure rei ipsas ex homini amicus depono homini Quid summorum depono meorum.",
        ],
        linkGithub: "https://github.com/warz66/next-sven-rybin",
        linkWebsite: "https://www.svenrybin.fr",
        specs: [
            {
                title: "Le choix de Next.js",
                image: {
                    thumbnail: svenrybinRealisation,
                    large: svenrybinRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "Le principal avantage de Next.js est sa simplicité de déploiement avec une plateforme t-elle que <a href='https://vercel.com/' target='_blank' rel='noreferrer'>Vercel</a>, sur laquelle je me suis familiarisé à son utilisation lors de challenges <a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>front-end-mentor</a>, de plus l'hébergement étant gratuit.",
                            "La page principale du site étant static, il m'était donc pertinent de faire du Static Site Generation, pour avoir une meilleure lisibilité par les moteurs de recherche, ainsi qu'un gain de performances comparer à une Single Page Application.",
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
                linkWebsite: {
                    href: "https://www.svenrybin.fr",
                    title: "Voir la Homepage"
                }
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
                            "- Tout d'abord, côté serveur on fait une demande d'accès à l'api, qui nous renvoie un token d'authentification que l'on partage avec le front.<br>- Ensuite on actualise les informations du formulaire de filtre de la galerie.<br>- Enfin on accède à la première page de l'ensemble des images de la galerie demandé.",
                        ]
                    },
                    {   
                        title: "Un défilement infini + mansonry + simple-react-lightbox",
                        paragraphe: [
                            "- Plutôt qu'une pagination classique, j'ai opté pour du défilement infini qui est plus élégant et donne une meilleure expérience utilisateur, ayant un bon nombre d'images à présenter (ni trop, ni pas assez), cette méthode de défilement reste pertinente dans mon cas. De plus <a href='https://api-platform.com/' target='_blank' rel='noreferrer'>Api-Platform</a> prend en charge nativement les collections paginées, en renvoyant lors de l'émission d'une GET requête une collection Hydra(json-LD), ce qui facilite grandement le traitement à effectuer pour accéder au contenu suivant.",
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
                linkWebsite: {
                    href: "https://www.svenrybin.fr/galerie",
                    title: "Voir la galerie" 
                }
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
                            "L'interface d'administration des galeries d'images était partiellement déjà construite lors d'un autre projet Symfony, j'ai donc pu récupérer du travail déjà éffectué. J'avais plus qu'à me concentrer sur la modélisation des données, l'apprentissage d'Api-Platform et sa configuration au sein de Symfony.",
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
                linkWebsite: {
                    href: "https://picsy.fr/api",
                    title: "Opérations Api" 
                }
            }
        ]
    },
]

export default arch;