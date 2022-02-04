import davidRealisation from 'assets/images/david-oeslick-website.jpg'
import davidCharte from 'assets/images/david/david-charte.jpg'
import structureRealisationTh from 'assets/images/david/structure-realisation-th.jpg'
import structureRealisation from 'assets/images/david/structure-realisation.jpg'
import davidFormulaireContact from 'assets/images/david/david-formulaire-contact.jpg'
import davidFormulaireContactTh from 'assets/images/david/david-formulaire-contact-th.jpg'

const dow = [
    {   
        title: "David Oeslick",
        image: {
            thumbnail: davidRealisation,
            large: davidRealisation,
        },
        techs: "REACT",
        sum: "Site web me présentant en tant que développeur.",
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
                        text: "Home.jsx"
                    },
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/components/realisations/Realisations.jsx",
                        text: "Realisation.jsx"
                    }
                ]
            },
            {
                title: "L'ajout d'un projet",
                image: {
                    thumbnail: structureRealisationTh,
                    large: structureRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "L'un de mes besoins principal est de pouvoir rajouter simplement au fur et à mesure du temps les nouveaux projets réalisés. Pour cela j'ai défini 'une architecture' sous forme de répertoires/fichiers contenant des objets javascript avec une structure clé/valeur (cela ressemble à du json mais ça reste du js) qui va permettre d'être lu par mon application pour en afficher le contenu. Il y a un fichier realisationsMap.js qui contient la liste des projets et dont le contenu est une briève présentation que l'on retrouve explicitement sous forme de 'cartes' dans la section réalisation de la Homepage. Dans ce fichier chaque projet va pointer vers un autre fichier qui lui contiendra le contenu détaillé. En respectant cette 'organisation' cela me permet facilement de rajouter un projet au site. Puis grâce à <a href='https://vercel.com/docs/concepts/git/vercel-for-github' target='_blank' rel='noreferrer'>Vercel</a> le site est instantanément mis à jour après avoir poussé (git push) les nouvelles modifications sur le dépôt github."
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
                ]
            },
            {
                title: "Le formulaire de contact",
                image: {
                    thumbnail: davidFormulaireContactTh,
                    large: davidFormulaireContact,
                },
                sections: [
                    {
                        paragraphe: [
                            "Pour la validation du formulaire je vérifie simplement que les champs ne soient pas vides lors de la soumission.",
                            "J'ai mis en place le <a href='https://developers.google.com/recaptcha/docs/v3' target='_blank' rel='noreferrer'>Recaptcha v3</a> de Google pour protéger des attaques de robots/spams.",
                            "Une des fonctionnalités attrayante de <a href='https://github.com/juicyfx/vercel-php' target='_blank' rel='noreferrer'>Vercel est de pouvoir utiliser Php simplement et avec très peu de configuration grâce à son moteur d'exécution</a>. J'en ai profité pour faire un léger script pour traiter la soumission du formulaire côté back-end :",
                            "- Tout d'abord on protège l'accès à la ressource en configurant <a href='https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin' target='_blank' rel='noreferrer'>l'Access-Control-Allow-Origin</a> sur https://www.david-oeslick.fr.<br>- Je revérifie que les champs ne soit pas vide.<br>- J'interroge le service de Google Recaptcha sur l'intégrité de la soumission par une vraie personne.<br>- Si tout est ok, je construis l'email à l'aide de <a href='https://github.com/PHPMailer/PHPMailer' target='_blank' rel='noreferrer'>PhpMailer</a> (je me sers d'une adresse mail google qui fait la redirection du message aux personnes concerné, avec une clé d'api applicatif.), puis je valide l'envoi du mail.<br>- Enfin je fais part à la partie front-end du succès ou des erreurs éventuelles à ce processus."
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/src/components/contact/form/Form.jsx",
                        text: "Formulaire(front)"
                    },
                    {
                        href: "https://github.com/warz66/mywebsite-do/blob/main/api/index.php",
                        text: "Traitement(back)"
                    },
                ]
            },
        ]
    },
]

export default dow;