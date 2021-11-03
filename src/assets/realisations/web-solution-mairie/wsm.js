import mairieRealisation from 'assets/images/wsm/mairie-realisation.jpg'
import bddRelationTable from 'assets/images/wsm/bdd-relation-table.jpg'
import bddRelationTableTn from 'assets/images/wsm/bdd-relation-table_tn.jpg'

const wsm = [
    {   
        title: "Solution Mairie",
        image: {
            thumbnail: mairieRealisation,
            large: mairieRealisation,
        },
        techs: "SYMFONY 5, JQUERY, BOOTSTRAP 4",
        sum: "Solution pour sites de partage d'informations pour les collectivités locales, communes.",
        presentation: [
            "Projet personnel ayant pour but d'apprendre le framework Symfony 5. Cela m'a permis d'appréhender le développement d'une application web dans son ensemble, du front-end au back-end jusqu'à la mise en production. Le monde du dev web peut-être anarchique et déboussolant par sa multitude de technologies. Symfony nous dirige, nous rassure et nous conforte en nous donnant un cadre de travail (règles métier, architecture, composants, choix techniques) afin d'être plus efficace, de se concentrer sur l'essentiel et de produire un code de meilleure qualité. Les formations vidéo de <a href='https://www.youtube.com/c/LiorCHAMLA' target='_blank' rel='noreferrer'>Lior Chamla</a>, de <a href='https://www.youtube.com/c/grafikart/featured' target='_blank' rel='noreferrer'>Grafikart</a>, ainsi que les cours  <a href='https://openclassrooms.com/fr/' target='_blank' rel='noreferrer'>OpenClassRooms</a> m'ont beaucoup aidé en dehors de la documentation officiel.",
            "Pour la plupart des problématiques d'un projet, un CMS tel que Wordpress, Drupal et bien d'autres peuvent largement convenir, néanmoins, j'avais envie de coller au plus près de la conception de ce que peut-être un gestionnaire de contenu en créant une solution sur-mesure qui répondrait aux besoins 'précis' des collectivités. Cette solution vise essentiellement les communes de moins de 30 000 habitants (99% en France). Elles ont besoins de partager des informations sous forme d'actualités, d'événements ou de pages informatives. Des fonctionnalités, 'modules', me paraissaient essentielles, tel qu'un carrousel, un 'flash infos', un kiosque de documentation, des liens rapides vers du contenu essentiels, une barre de recherche, des galeries d'images, une newsletter, un formulaire de contact, un menu, des statistiques Google Analytics et bien évidemment un back-office sécurisé avec gestion de droit, accessible à des néophytes.",
            "Vous pouvez tester le back office de la solution sur <a href='https://web-solution-mairie.fr/admin/login' target='_blank' rel='noreferrer'>web-solution-maire.fr/admin/login</a> avec les identifiants: invite@mairie.com password"
        ],
        linkGithub: "https://github.com/warz66/Solution-mairie-symfony-5",
        linkWebsite: "https://web-solution-mairie.fr/",
        specs: [
            {
                title: "Conception de la gestion du contenu",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {
                        paragraphe: [
                            "La principale fonctionalité de cette solution est de pouvoir éditer et publier du contenu hiérarchisé, catégorisé et libellisé. Je suis parti du principe que tout contenu est une publication qui peut avoir différentes natures : actualité, événement, page, sous-rubrique, rubrique.",
                            "Pour le contenu fixe, j'ai voulu créer une arborescence en 3 couches maximum (rubriques -> sous-rubriques -> pages) pour une navigation plus ergonomique. La plupart des CMS laissent la possibilité de créer des noeuds d'arborescences illimités, néanmoins, j'ai trouvé cela plus clair et efficace de les limiter. Dans le menu on retrouve les rubriques, les sous-rubriques qui affine la recherche, puis les pages contenant l'information dont l'internaute à besoin.",
                            "Une actualité et un événement sont deux types de contenu présentés de manière différente de par leur nature temporelle.",
                            "On peut aussi libelliser ('tags') le contenu, afin de regrouper l'information pour une meilleure expérience.",
                            "Se greffe aussi, selon la nature de la publication des fonctionnalités qui permettent de rajouter des informations pertinentes à mettre en avant, telle que des liens utiles (lien-hypertexte), des documents (pdf), des infos pratiques, une ou des galeries d'images."
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/Solution-mairie-symfony-5/tree/main/src/Entity",
                        title: "Dossier entité du projet"
                    },
                ],
                linkWebsite: {
                    href: "https://web-solution-mairie.fr",
                    title: "Voir la Homepage"
                }
            },
            {
                title: "Modules et fonctionalités (Partie 1)",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {   
                        title: "Le carrousel",
                        paragraphe: [
                            "La page d’accueil d’une commune concentre pas mal de données. Le carrousel à l'avantage de rassembler plusieurs types de contenu différents et de le mettre en évidence sans noyer l’internaute d’informations. J'ai limité le nombre de 'slide' à 5 pour une question d'Ux. J'ai donné la possibilité de donner un titre, un texte, une image, et de les lier à n'importe qu'elle type de publication.",
                        ]
                    },
                    {   
                        title: "Le flash infos",
                        paragraphe: [
                            "Il permet d'attirer l'attention ou d'alerter rapidement sur une information précise. Il doit-être placé de préférence sur le haut de la homepage. Il peut-être lié à une publication ou à un lien externe.",
                        ]
                    },
                    {   
                        title: "L'accès rapide",
                        paragraphe: [
                            "Il synthétise un ensemble de raccourcis vers des pages à contenu pratique pour l'internaute. Ces raccourcis caractérisé par une icône et un nom ce démarque en attirant l'oeil instinctivement. La navigation s'effectue en slidant. J'ai utilisé <a href='https://kenwheeler.github.io/slick/' target='_blank' rel='noreferrer'>'Slick'</a> pour sa structure et sa navigation et pour le choix de l'icône <a href='https://victor-valencia.github.io/bootstrap-iconpicker/' target='_blank' rel='noreferrer'>'Bootstrap-Iconpicker'</a>.",
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/Solution-mairie-symfony-5/tree/main/src/Entity",
                        title: "Dossier entité du projet"
                    },
                ],
                linkWebsite: {
                    href: "https://web-solution-mairie.fr",
                    title: "Voir la Homepage"
                }
            },
            {
                title: "Modules et fonctionalités (Partie 2)",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {   
                        title: "Le kiosque",
                        paragraphe: [
                            "Il permet de partager des documents pdf. J'ai utilisé la même méthode de navigation que pour l'accès-rapide. Chaque document est représenté visuellement par sa première page (<a href='https://github.com/imalhasaranga/PDFLib' target='_blank' rel='noreferrer'>imalhasarange/PDFLib</a>) ainsi que d'un titre et de son poids (taille ko).",
                        ]
                    },
                    {   
                        title: "La barre de recherche",
                        paragraphe: [
                            "",
                        ]
                    },
                    {   
                        title: "Le formulaire de contact",
                        paragraphe: [
                            "",
                        ]
                    },
                ],
                linksGithubs: [
                    {
                        href: "https://github.com/warz66/Solution-mairie-symfony-5/tree/main/src/Entity",
                        title: "Dossier entité du projet"
                    },
                ],
                linkWebsite: {
                    href: "https://web-solution-mairie.fr",
                    title: "Voir la Homepage"
                }
            },
        ]
    },
]

export default wsm;