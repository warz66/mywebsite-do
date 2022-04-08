import archRealisation from 'assets/images/arch-realisation.jpg'
import archPixelPerfect from 'assets/images/arch/arch-pixel-perfect.jpg'
import archPixelPerfectTh from 'assets/images/arch/arch-pixel-perfect-th.jpg'
import archFlexGrid from 'assets/images/arch/arch-flex-grid.jpg'
import archFlexGridTh from 'assets/images/arch/arch-flex-grid-th.jpg'
import archSwiper from 'assets/images/arch/arch-swiper.jpg'
import archSwiperTh from 'assets/images/arch/arch-swiper-th.jpg'
import archLeaflet from 'assets/images/arch/arch-leaflet.jpg'
import archLeafletTh from 'assets/images/arch/arch-leaflet-th.jpg'

const arch = [
    {   
        title: "Arch Studio",
        image: {
            thumbnail: archRealisation,
            large: archRealisation,
        },
        techs: "REACT HTML CSS",
        sum: "Challenge Front-end Mentor consistant à créer un site Web de plusieurs pages et à le rendre aussi fidèle que possible de la conception.",
        presentation: [
            "<a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>Challenge Front-end Mentor</a> consistant à créer un site Web de plusieurs pages et à le rendre aussi fidèle que possible de la conception.",
            "<span style='text-decoration: underline; font-style: italic;'>Qu'est-ce-que Front-End Mentor</span> :",
            "<a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>Front-end Mentor</a> est un site d'entrainement au front-end qui donne la possibilité de reproduire des designs de pages et de sites créés par des designers et de soumettre le résultat à la communauté. C'est ce que l'on peut trouver de plus proche comme entrainement en conditions réels pour de l'intégration web avec la mise à disposition de designs pour chaque taille d'écran.",
            "<span style='text-decoration: underline; font-style: italic;'>Ce qui est demandé</span> :",
            "- Reproduire le plus fidèlement la maquette.<br>- Afficher la mise en page optimale pour chaque page en fonction de la taille de l'écran de leur appareil.<br>- Voir les états de survol pour tous les éléments interactifs du site.<br>- Recever un message d'erreur lorsque le formulaire de contact ne remplie pas certaines conditions.<br>- Visualiser les emplacements réels sur la carte de la page de contact."
        ],
        linkOther: {
            title: "Résultat du défi sur Front-end Mentor",
            link: "https://www.frontendmentor.io/solutions/arch-studio-multipage-website-react-R8d8TzEnd"
        },
        linkGithub: "https://github.com/warz66/FMentor-ArchStudio",
        linkWebsite: "https://fmentor-arch-studio.vercel.app",
        specs: [
            {
                title: "Le Pixel Perfect ?",
                image: {
                    thumbnail: archPixelPerfectTh,
                    large: archPixelPerfect,
                },
                sections: [
                    {
                        paragraphe: [
                            "En développement front-end on peut définir le 'Pixel Perfect' comme le fait de rendre visuellement indistinguable la maquette du rendu de l'intégration dans le navigateur. L'une des principales problématiques lors du passage de la maquette à l'intégration est cette différence d'approche et de conception entre l'univers graphique et les contraintes des règles HTML/CSS que doit respecter le navigateur. Le travail de l'intégrateur sera d'adapter au mieux ces différences en étant au plus proche visuellement de la maquette tout en s'assurant de l'uniformité du rendu entre les navigateurs existant, tout en produisant du code de qualité. L'une des meilleures façons d'avoir un résultat précis est de superposer la maquette au rendu HTML/CSS pour une même largeur d'écran. Il existe des plugins de navigateurs tel que PerfectPixel by WellDoneCode qui permettent de le faire simplement par exemple. Ensuite, il suffit d'ajuster les valeurs de mesures du code css pour faire correspondre les rendus. Néanmoins, un résultat au pixel prêt peut être très chronophage est peut avoir un coût en clarté/qualité au sein du code si la conception de la maquette n'est pas 'réaliste', surtout que bien souvent l'internaute ne se rendra compte de rien. Être le plus proche possible de la maquette oui, mais à quel prix ?"
                        ]
                    },
                ],
            },
            {
                title: "Flexbox et Grid layout à la rescousse",
                image: {
                    thumbnail: archFlexGridTh,
                    large: archFlexGrid,
                },
                sections: [
                    {
                        paragraphe: [
                            "Depuis quelques années, le language CSS s'est vu étoffé de nouvelles spécifications telles que Flexbox et Grid layout. Ils sont une révolution pour tout intégrateurs. Les anciennes déclarations telles que 'float', les 'display inline-block' et 'table-cell' font maintenant figure de bricolage pour ce qui est du positionement d'éléments et création de gabarits. Flexbox va plutôt être utile pour gèrer le positionement, l'alignement des éléments interne d'une 'boite', tandis que Grid layout va permettre de construire globalement un gabarit, des grilles de mise en forme avec leurs gouttières etc... d'une page web, tout en étant trés malléable au 'Responsive web design'. La complémentarité entre Flexbox et Grid Layout nous propose un modèle de positionnement qui enfin permet de concevoir des pages web plus ou moins complexes de manière simple, intuitive et sans code parasite ou inutile. Ces spécifications sont considérées comme stables et l'ensemble des navigateurs récents les prennent en charge. On peut voir un exemple de l'utilisation de grid layout pour ce projet sur l'image suivante qui m'a permis de créer une grille 'parfaite'.",
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/projectsGallery/ProjectsGallery.jsx",
                        text: "ProjectsGallery.jsx"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/projectsGallery/ProjectsGallery.css",
                        text: "ProjectsGallery.css"
                    },
                ]
            },
            {
                title: "Utilisation de Swiper/React pour le slider de la Homepage",
                image: {
                    thumbnail: archSwiperTh,
                    large: archSwiper,
                },
                sections: [
                    {
                        paragraphe: [
                            "<a href='https://swiperjs.com/' target='_blank' rel='noreferrer'>Swiper</a> est une bibliothèque moderne, puissante, optimisée et performante, pour créer un slider (diaporama ou glissière qui permet de faire défiler un élément graphique avec le curseur) rapidement et qui s'intègre très bien à React sous forme de composants. De plus la <a href='https://swiperjs.com/react' target='_blank' rel='noreferrer'>documentation</a> est très bien faites. Swiper répond aussi à la fonctionnalité de pagination au design personnalisable, ce qui est essentiel pour ce projet. Pour une meilleure optimisation j'ai adapté l'image respective aux différents breakpoints (mobile , tablette, bureau) à chaque slide. On peut rajouter facilement un slide via le fichier slides.js qui est un tableau d'objet js et dont le composant Slider va mapper lors du montage pour créer le slider.",
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/home/slider/Slider.jsx",
                        text: "Slider.jsx"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/home/slider/Slider.css",
                        text: "Slider.css"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/home/slider/slides.js",
                        text: "slides.js"
                    },
                ]
            },
            {
                title: "Utilisation de React-Leaflet pour la carte interactive",
                image: {
                    thumbnail: archLeafletTh,
                    large: archLeaflet,
                },
                sections: [
                    {
                        paragraphe: [
                            "<a href='https://leafletjs.com/' target='_blank' rel='noreferrer'>Leaflet</a> est une bibliothèque javascript pour les cartes interactives. Il est conçu dans un souci de simplicité , de performance et de convivialité . Il fonctionne efficacement sur toutes les principales plates-formes de bureau et mobiles, peut être étendu avec de nombreux plugins, possède une belle API facile à utiliser et bien documentée et un code source simple et lisible, il possède toutes les fonctionnalités de cartographie dont la plupart des développeurs ont besoin. <a href='https://react-leaflet.js.org/' target='_blank' rel='noreferrer'>React-Leaflet</a> fournit des liaisons entre React et Leaflet. Le MapContainer composant est chargé de créer l'instance 'Leaflet Map' et de la fournir à ses composants enfants, à l'aide d'un React Context. Lors de la création d'un MapContainer élément, des accessoires sont utilisés comme options pour créer l'instance Map. Les composants enfants de React Leaflet utilisent leurs props comme options lors de la création de l'instance correspondante de Leaflet. Nous avons donc une panoplie d'accessoires paramétrables pour arriver au résultat voulu. Il a été agréable de travailler avec cette bibliothèque. On peut visualiser les emplacements réels sur la carte de chaque office lors d'un click respectif sur celle-ci, la caméra va alors se centrer sur la carte et un effet de zoom va s'effectuer progressivement sur l'office (<a href='https://fmentor-arch-studio.vercel.app/contact#details' target='_blank' rel='noreferrer' style=' font-style: italic;'>tester la fonctionnalité</a>).",
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/contact/details/Details.jsx",
                        text: "Section-details.jsx"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/contact/details/map/Map.jsx",
                        text: "Map.jsx"
                    },
                    {
                        href: "https://github.com/warz66/FMentor-ArchStudio/blob/main/src/components/contact/details/office/Office.jsx",
                        text: "Office.jsx"
                    },
                ]
            }
        ]
    },
]

export default arch;