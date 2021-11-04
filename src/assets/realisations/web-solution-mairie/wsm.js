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
                            "La principale fonctionnalité de cette solution est de pouvoir éditer et publier du contenu hiérarchisé, catégorisé et libellisé. Je suis parti du principe que tout contenu est une publication qui peut avoir différentes natures : actualité, événement, page, sous-rubrique, rubrique.",
                            "Pour le contenu fixe, j'ai voulu créer une arborescence en 3 couches maximum (rubriques -> sous-rubriques -> pages) pour une navigation plus ergonomique. La plupart des CMS laissent la possibilité de créer des noeuds d'arborescences illimités, néanmoins, j'ai trouvé cela plus clair et efficace de les limiter. Dans le menu on retrouve les rubriques, les sous-rubriques qui affine la recherche, puis les pages contenant l'information dont l'internaute à besoin.",
                            "Une actualité et un événement sont deux types de contenu présentés de manière différente de par leur nature temporelle.",
                            "On peut aussi libelliser ('tags') le contenu, afin de regrouper l'information pour une meilleure expérience.",
                            "Se greffe aussi, selon la nature de la publication des fonctionnalités qui permettent de rajouter des informations pertinentes à mettre en avant, telle que des liens utiles (lien-hypertexte), des documents (pdf), des infos pratiques, une ou des galeries d'images."
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/Solution-mairie-symfony-5/tree/main/src/Entity",
                        text: "Les Entités du projet"
                    }
                ]
            },
            {
                title: "Modules et fonctionalités (Partie 1)",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {   
                        paragraphe: [
                            "L'ensemble des 'modules' qui suit se trouve sur la page d'accueil."
                        ]
                    },
                    {   
                        title: "<span class='section-title'>Le carrousel</span> <span class='section-title-link'>( lien github: <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Controller/AdminCarrouselController.php' target='_blank' rel='noreferrer'>admin carrousel controller</a> )</span>",
                        paragraphe: [
                            "La page d’accueil d’une commune concentre pas mal de données. Le carrousel à l'avantage de rassembler plusieurs types de contenu différents et de le mettre en évidence sans noyer l’internaute d’informations. J'ai limité le nombre de 'slide' à 5 pour une question d'Ux. J'ai donné la possibilité de donner un titre, un texte, une image, et de les lier à n'importe qu'elle type de publication.",
                        ]
                    },
                    {   
                        title: "<span class='section-title'>Le flash infos</span> <span class='section-title-link'>( lien github: <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Controller/AdminFlashInfoController.php' target='_blank' rel='noreferrer'>admin flash-infos controller</a> )</span>",
                        paragraphe: [
                            "Il permet d'attirer l'attention ou d'alerter rapidement sur une information précise. Il doit-être placé de préférence sur la partie haute de la homepage. Il peut-être lié à une publication ou à un lien externe.",
                        ]
                    },
                    {   
                        title: "<span class='section-title'>L'accès rapide</span> <span class='section-title-link'>( lien github: <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Controller/AdminAccesRapideController.php' target='_blank' rel='noreferrer'>admin accès rapide controller</a> )</span>",
                        paragraphe: [
                            "Il synthétise un ensemble de raccourcis vers des pages à contenu pratique pour l'internaute. Ces raccourcis caractérisé par une icône et un nom ce démarque en attirant l'oeil. La navigation s'effectue en slidant. J'ai utilisé <a href='https://kenwheeler.github.io/slick/' target='_blank' rel='noreferrer'>'Slick'</a> pour sa structure et sa navigation et pour le choix de l'icône <a href='https://victor-valencia.github.io/bootstrap-iconpicker/' target='_blank' rel='noreferrer'>'Bootstrap-Iconpicker'</a>.",
                        ]
                    },
                    {   
                        title: "<span class='section-title'>Le kiosque</span> <span class='section-title-link'>( lien github: <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Controller/AdminKiosqueController.php' target='_blank' rel='noreferrer'>admin kiosque controller</a> )</span>",
                        paragraphe: [
                            "Il permet de partager des documents pdf. J'ai utilisé la même méthode de navigation que pour l'accès-rapide. Chaque document est représenté visuellement par sa première page (<a href='https://github.com/imalhasaranga/PDFLib' target='_blank' rel='noreferrer'>imalhasarange/PDFLib</a>) ainsi que d'un titre et de son poids (taille ko).",
                        ]
                    },
                ],
                linksWebsites: [
                    {
                        href: "https://github.com/warz66/Solution-mairie-symfony-5/blob/main/templates/home.html.twig",
                        text: "Vue Homepage"
                    },
                    {
                        href: "https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Controller/HomeController.php",
                        text: "Controller Homepage"
                    },
                ],
            },
            {
                title: "Modules et fonctionalités (Partie 2)",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {   
                        title: "<span class='section-title'>La barre de recherche</span> <span class='section-title-link'>( liens githubs: <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Controller/PublicationController.php' target='_blank' rel='noreferrer'>link 1</a> / <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Repository/PublicationRepository.php' target='_blank' rel='noreferrer'>link 2</a> / <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/EventListener/ElasticsearchCrudListener.php' target='_blank' rel='noreferrer'>link 3</a> / <a href='https://github.com/warz66/Solution-mairie-symfony-5/blob/main/src/Service/ElasticsearchCrudService.php' target='_blank' rel='noreferrer'>link 4</a>)</span>",
                        paragraphe: [
                            "Elle permet de retrouver toutes publications et galeries par requête. Au préalable, j'ai effectué un travail de mise en place avec <a href='https://www.elastic.co/fr/elasticsearch/' target='_blank' rel='noreferrer'>Elasticsearch</a> qui est un moteur de recherche très efficace et optimisé pour ce genre de fonctionnalité. Un processus permet l'enregistrement des données (à l'aide d'écouteurs et d'un service CRUD) sur Elasticsearch lors de modifications, enregistrements sur la bdd Mysql, j'avais donc en parallèle une base de donnée relationnelle et un moteur de recherche. Malheureusement, lors de la mise en production, je me suis aperçu qu'il était techniquement plus compliqué et onéreux à mettre en place. Finalement, j'ai opté pour une solution simple d'utilisé la fonctionnalité <a href='https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html' target='_blank' rel='noreferrer'>'MATCH AGAINST'</a> de MySQL qui permet la recherche fulltext.",
                        ]
                    },
                    {   
                        title: "<span class='section-title'>Le formulaire de contact</span>",
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
                linksWebsites: [
                    {
                        href: "https://web-solution-mairie.fr",
                        text: "Voir la Homepage"
                    }
                ]
            },
            {
                title: "Modules et fonctionalités (Partie 3)",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {   
                        title: "<span class='section-title'>La Newsletter</span> <span class='section-title-link'>( <a href='https://web-solution-mairie.fr/newsletter' target='_blank' rel='noreferrer'>Voir sur le site</a> )</span>",
                        paragraphe: [
                            "Elle permet de recevoir une lettre d'informations aux internautes s'y étant inscrit. On peut s'y désinscrire à tout moment. Je sécurise l'inscription à la newsletter à l'aide d'un <a href='https://nouvelle-techno.fr/articles/un-antispam-sur-votre-site-la-technique-du-pot-de-miel' target='_blank' rel='noreferrer'>honeypot</a> et d'un <a href='https://www.google.com/recaptcha/about/' target='_blank' rel='noreferrer'>recaptcha v2 de google</a>. J'avais la volonté de créer moi même les fonctionaliés de gestion des utlisateurs, d'envoi et d'édition de mail, cependant je me suis aperçu qu'il n'y avait aucun éditeur de texte open source idéale pour la création du contenu d'un email. J'ai donc à contre coeur utilisé le service dédié <a href='https://mailchimp.com/fr/' target='_blank' rel='noreferrer'>Mailchimp</a> en communiquant avec son <a href='https://mailchimp.com/developer/marketing/api/root/' target='_blank' rel='noreferrer'>API</a> à l'aide de la bibliotheque php <a href='https://github.com/drewm/mailchimp-api' target='_blank' rel='noreferrer'>drewm/mailchimp-api</a>.",
                        ]
                    },
                    {   
                        title: "<span class='section-title'>Statistique Google Analytics</span>",
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
                linksWebsites: [
                    {
                        href: "https://web-solution-mairie.fr",
                        text: "Voir la Homepage"
                    }
                ]
            },
            {
                title: "Administration du contenu",
                image: {
                    thumbnail: bddRelationTableTn,
                    large: bddRelationTable,
                },
                sections: [
                    {   
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
                linksWebsites: [
                    {
                        href: "https://web-solution-mairie.fr",
                        text: "Voir la Homepage"
                    }
                ]
            },
        ]
    },
]

export default wsm;