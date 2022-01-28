import davidRealisation from 'assets/images/david-oeslick-website.jpg'
import davidCharte from 'assets/images/david/david-charte.jpg'

const dow = [
    {   
        title: "David Oeslick",
        image: {
            thumbnail: davidRealisation,
            large: davidRealisation,
        },
        techs: "REACT",
        sum: "Mon site web",
        presentation: [
            "Projet personnel à but de présenter mon profil de développeur web (parcours, services, réalisations) en tant que freelance. À travers ce site j'ai voulu mettre en évidence une certaine affinité pour le design et l'ergonomie, en utilisant des technologies modernes qui permettent une navigation fluide et réactive.",
        ],
        linkGithub: "https://github.com/warz66/mywebsite-do",
        linkWebsite: "https://www.david-oeslick.fr/",
        specs: [
            {
                title: "Design et ergonomie",
                image: {
                    thumbnail: davidCharte,
                    large: davidCharte,
                },
                sections: [
                    {
                        paragraphe: [
                            "J'ai opté pour un design graphique sobre, dynamique et épuré. L'utilisation des espaces blancs centralise l'information efficacement et l'aspect linéaire vient structurer ce design minimaliste avec de fines lignes suggérées en arrière-plan ainsi qu'un slide de navigation vertical qui invite l'utilisateur au scroll. L'utilisation d'une typographie unique s'est imposée et la fonte Spartan est apparue comme une évidence pour sa lisibilité, modernité et sa simplicité. J'ai choisi la couleur secondaire Orange qui vient réchauffer les bleus profonds du background et lui apporter force et dynamisme. Dans une optique de confort pour l'utilisateur, le site dispose d'un mode dark/light. Pour le mode light, un camaïeu de bleu clair à gris est à l'honneur, offrant sobriété, confiance et professionnalisme au site."
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "",
                        text: ""
                    }
                ]
            },
            {
                title: "L'ajout de projets",
                image: {
                    thumbnail: "",
                    large: "",
                },
                sections: [
                    {
                        paragraphe: [
                            "L'une des problématiques principale de ce site est de pouvoir rajouter au fur et à mesure du temps les projets que j'aurai réaliser. Pour cela j'ai un fichier realisationsMap.js qui contient un objet javascript qui est une liste de mes projets et dont le contenu de chaque projet est une briève présentation que l'ont peut retrouver explicitement sous forme de 'cartes' dans la section réalisation de la Homepage. Dans ce fichier chaque projet va pointer vers un autre fichier qui lui contiendra le contenu détaillé. Cette architecture me permet simplement de rajouter un projet en mettant à jour le fichier realisationsMap.js et en créant un fichier qui contiendra le contenu détaillé du projet, tout en respectant un modéle de clé/valeur."
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "",
                        text: ""
                    }
                ]
            },
        ]
    },
]

export default dow;