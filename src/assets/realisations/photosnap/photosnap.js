import photosnapRealisation from 'assets/images/photosnap-realisation.jpg'
import photosnapPixelPerfect from 'assets/images/photosnap/photosnap-pixel-perfect.jpg'
import photosnapPixelPerfectTh from 'assets/images/photosnap/photosnap-pixel-perfect-th.jpg'
import photosnapGridFlex from 'assets/images/photosnap/photosnap-grid-flex.jpg'
import photosnapGridFlexTh from 'assets/images/photosnap/photosnap-grid-flex-th.jpg'

const photosnap = [
    {   
        title: "Photosnap",
        image: {
            thumbnail: photosnapRealisation,
            large: photosnapRealisation,
        },
        techs: "VUE HTML CSS",
        sum: "Challenge Front-end Mentor qui consiste à créer le site marketing d'une application de partage de photos et à le rendre aussi proche que possible de la conception.",
        presentation: [
            "<a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>Challenge Front-end Mentor</a> consistant à créer un site Web de plusieurs pages et à le rendre aussi fidèle que possible de la conception.",
            "<span style='text-decoration: underline; font-style: italic;'>Qu'est-ce-que Front-End Mentor</span> :",
            "<a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>Front-end Mentor</a> est un site d'entrainement au front-end qui donne la possibilité de reproduire des designs de pages et de sites créés par des designers et de soumettre le résultat à la communauté. C'est ce que l'on peut trouver de plus proche comme entrainement en conditions réels pour de l'intégration web avec la mise à disposition de designs pour chaque taille d'écran.",
            "<span style='text-decoration: underline; font-style: italic;'>Ce qui est demandé</span> :",
            "- Reproduire le plus fidèlement la maquette.<br>- Afficher la mise en page optimale pour chaque page en fonction de la taille de l'écran de leur appareil.<br>- Voir les états de survol pour tous les éléments interactifs du site."
        ],
        linkOther: {
            title: "Résultat du défi sur Front-end Mentor",
            link: "https://www.frontendmentor.io/solutions/photosnap-multipage-website-vuejs-3-cli-zSQhPXOY6"
        },
        linkGithub: "https://github.com/warz66/photosnap-multi-page-website",
        linkWebsite: "https://warz66.github.io/photosnap-multi-page-website/#/",
        specs: [
            {
                title: "Le Pixel Perfect ?",
                image: {
                    thumbnail: photosnapPixelPerfectTh,
                    large: photosnapPixelPerfect,
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
                    thumbnail: photosnapGridFlexTh,
                    large: photosnapGridFlex,
                },
                sections: [
                    {
                        paragraphe: [
                            "Depuis quelques années, le language CSS s'est vu étoffé de nouvelles spécifications telles que Flexbox et Grid layout. Ils sont une révolution pour tout intégrateurs. Les anciennes déclarations telles que 'float', les 'display inline-block' et 'table-cell' font maintenant figure de bricolage pour ce qui est du positionement d'éléments et création de gabarits. Flexbox va plutôt être utile pour gèrer le positionement, l'alignement des éléments interne d'une 'boite', tandis que Grid layout va permettre de construire globalement un gabarit, des grilles de mise en forme avec leurs gouttières etc... d'une page web, tout en étant trés malléable au 'Responsive web design'. La complémentarité entre Flexbox et Grid Layout nous propose un modèle de positionnement qui enfin permet de concevoir des pages web plus ou moins complexes de manière simple, intuitive et sans code parasite ou inutile. Ces spécifications sont considérées comme stables et l'ensemble des navigateurs récents les prennent en charge.",
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/photosnap-multi-page-website/blob/main/src/views/Stories.vue",
                        text: "Stories.vue"
                    },
                    {
                        href: "https://github.com/warz66/photosnap-multi-page-website/blob/main/src/components/StorieBox.vue",
                        text: "StorieBox.vue"
                    },
                ]
            },
        ]
    },
]

export default photosnap;