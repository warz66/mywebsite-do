import svenrybinRealisation from 'assets/images/svenrybin-realisation.jpg'
import svenrybinGalerie from 'assets/images/svenrybin-galerie.jpg'

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
                            "Le principale avantage de Next.js est ça simplicité de déploiement avec une platforme t-elle que <a href='https://vercel.com/' target='_blank' rel='noreferrer'>Vercel</a>, sur laquel je me suis familiariser à son utilisation lors de challenges <a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>front-end-mentor</a>, de plus l'hébèrgement étant gratuit.",
                            "La page principale du site étant static, il m'était donc pertinant de faire du Static Site Generation, pour avoir une meilleure lisibilité par les moteurs de recherches, ainsi qu'un gain de performances comparer à une Single Page Application.",
                            "Le contenu du site portant sur un artiste peintre, les images sont fondamentales, le composant <a href='https://nextjs.org/docs/api-reference/next/image' target='_blank' rel='noreferrer'>Image</a> de next permet une optimisation et des performances améliorer.",
                            "L'une des autres utilisations pertinantes à Next et ça facilité de faire un pré-traitement coté serveur avec une fonctionalité t-elle que <a href='https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering' target='_blank' rel='noreferrer'>getServerSideProps</a> par exemple, qui dans un des cas d'utiisation permet de s'authentifier à l'api de distribution des images sans exposer les identifiants de connexion au front-end."
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/pages/index.js",
                        title: "homepage structure"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/home/galeries/galerie/Galerie.jsx",
                        title: "exemple utilisation composant Image de next"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/pages/galerie/index.jsx",
                        title: "exemple getServerSideProps"
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
                            "- Plutôt qu'une pagination classique, j'ai opté pour du défilement infini qui est plus élègant et donne une meilleure expèrience utilisateur, ayant un bon nombre d'images à présenter (ni trop, ni pas assez), cette méthode de défilement reste pertinantes dans mon cas. De plus <a href='https://api-platform.com/' target='_blank' rel='noreferrer'>Api-Platform</a> prends en charge nativement les collections paginées, en renvoyant lors de l'émission d'une GET requête une collection Hydra(json-LD), ce qui facilite grandement le traitement à effectuer pour accéder au contenu suivant.",
                            "- Pour la mise en page des images j'ai utilisé la trés célèbre librairie <a href='https://masonry.desandro.com/' target='_blank' rel='noreferrer'>Masonry</a> ainsi que <a href='https://www.npmjs.com/package/simple-react-lightbox' target='_blank' rel='noreferrer'>simple-react-lightbox</a> pour la navigation de la galerie dans une lightbox.",
                            "- La galerie ayant une logique d'état complexe, le hook <a href='https://fr.reactjs.org/docs/hooks-reference.html#usereducer' target='_blank' rel='noreferrer'>useReducer</a> de react ('le redux à portée du composant') m'était donc indispensable, de multiples useStates deviennent trés vite ingérables et sous-performants."
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/pages/galerie/index.jsx",
                        title: "galerie page"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/galerie/galerie-images/GalerieImages.jsx",
                        title: "galerie component"
                    },
                    {
                        href: "https://github.com/warz66/next-sven-rybin/blob/main/components/galerie/filtre-form-galerie/FiltreFormGalerie.jsx",
                        title: "galerie filtre form component"
                    },
                ],
                linkWebsite: {
                    href: "https://www.svenrybin.fr/galerie",
                    title: "Voir la galerie" 
                }
            }
        ]
    },
]

export default arch;