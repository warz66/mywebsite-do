import davidRealisation from 'assets/images/david-oeslick-website.jpg'
import davidCharte from 'assets/images/david/david-charte.jpg'
import structureRealisationTh from 'assets/images/david/structure-realisation-th.jpg'
import structureRealisation from 'assets/images/david/structure-realisation.jpg'

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
                            "J'ai opté pour un design graphique sobre, dynamique et épuré. L'utilisation des espaces blancs centralise l'information efficacement et l'aspect linéaire vient structurer ce design minimaliste avec de fines lignes suggérées en arrière-plan ainsi qu'un slide de navigation vertical qui invite l'utilisateur au scroll. L'utilisation d'une typographie unique s'est imposée et la fonte Spartan est apparue comme une évidence pour sa lisibilité, modernité et sa simplicité. J'ai choisi la couleur secondaire 'orange' qui vient réchauffer les bleus profonds du background et lui apporter force et dynamisme. Dans une optique de confort pour l'utilisateur, le site dispose d'un mode dark/light. Pour le mode light, un camaïeu de bleu clair à gris est à l'honneur, offrant sobriété, confiance et professionnalisme au site.",
                            "Pour le format bureau (au dessus de 1200px) la navigation vertical entre les sections ce fait grâce à <a href='https://alvarotrigo.com/react-fullpage/' target='_blank' rel='noreferrer'>fullpage.js</a> qui permet 'le défilement plein écran' ce qui rend celle-ci plus fluide et agréable. Dans certaines sections du site j'utilise <a href='https://flickity.metafizzy.co/' target='_blank' rel='noreferrer'>Flickity</a> pour slider horizontalement entre les 'cartes'."
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/index.css",
                        text: "index.css"
                    },
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/views/home/Home.jsx",
                        text: "Homepage"
                    },
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/components/realisations/Realisations.jsx",
                        text: "Réalisations"
                    }
                ]
            },
            {
                title: "L'ajout de projets",
                image: {
                    thumbnail: structureRealisationTh,
                    large: structureRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "L'un de mes besoins principal est de pouvoir rajouter simplement au fur et à mesure du temps les nouveaux projets réalisés. Pour cela j'ai défini 'une architecture' sous forme de répertoires/fichiers contenant des objets javascript avec une structure clé/valeur (cela ressemble à du json mais ça reste du js) qui va permettre d'être lu par mon application pour en afficher le contenu. Il y a un fichier realisationsMap.js qui contient la liste des projets et dont le contenu est une briève présentation que l'on retrouve explicitement sous forme de 'cartes' dans la section réalisation de la Homepage. Dans ce fichier chaque projet va pointer vers un autre fichier qui lui contiendra le contenu détaillé. Cette 'organisation' me permet simplement de rajouter un projet en mettant à jour le fichier realisationsMap.js et en créant un fichier respectif au nouveau projet en respectant un modéle clé/valeur. Puis grâce à <a href='https://vercel.com/docs/concepts/git/vercel-for-github' target='_blank' rel='noreferrer'>Vercel</a> le site est rapidement mis à jour après avoir poussé (git push) les nouvelles modifications sur le dépôt github."
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/assets/realisations/realisationsMap.js",
                        text: "Liste des projets"
                    },
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/assets/realisations/web-solution-mairie/wsm.js",
                        text: "Un projet"
                    },
                    /*{
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/components/realisations/Realisations.jsx",
                        text: "page réalisation"
                    }*/
                ]
            },
        ]
    },
]

export default dow;