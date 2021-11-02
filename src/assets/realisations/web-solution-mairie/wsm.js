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
            "Projet personnel ayant pour but d'apprendre le framework Symfony 5. Cela m'a permis d'appréhender le champ de développement d'une application web dans son ensemble, du front-end au back-end jusqu'à la mise en production. Symfony nous donne un cadre de travail (règles métier, architecture, composants) afin d'être plus efficace, de se concentrer sur l'essentiel et de produire un code de meilleure qualité. Le monde du dev web peut-être déboussolant par la multitude de technologies qu'il comporte, Symfony nous dirige, nous rassure et nous conforte dans notre travail. Les formations vidéo de <a href='https://www.youtube.com/c/LiorCHAMLA' target='_blank' rel='noreferrer'>Lior Chamla</a>, de <a href='https://www.youtube.com/c/grafikart/featured' target='_blank' rel='noreferrer'>Grafikart</a>, ainsi que les cours  <a href='https://openclassrooms.com/fr/' target='_blank' rel='noreferrer'>OpenClassRooms</a> m'ont beaucoup aidé en dehors de la documentation officiel.",
            "Pour la plupart des problématiques d'un projet, un CMS tel que Wordpress, Drupal et bien d'autres peuvent largement convenir, néanmoins, j'avais envie de coller au plus près de la conception de ce que peut-être un CMS en créant une solution sur-mesure qui répondrait aux besoins 'précis' des collectivités. Cette solution ne vise que les communes de moins de 30 000 habitants qui représente la majorité (99 %) de l'ensemble des communes de France. Ce sont surtout des sites qui permettent le partage des informations relatives à la vie de la commune, sous forme d'actualités, d'événements ou de pages informatives. Des fonctionnalités me paraissaient essentielles, tel qu'un carousel sur la homepage, un 'flash infos', un kiosque de diffusion de documents, des liens rapides vers du contenu essentiels, une barre de recherche, des galeries d'images, une newsletter, un formulaire de contact, et bien évidemment un back-office accessible à des néophytes.",
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
                            "Le principal besoin de cette solution est de pouvoir publier du contenu hierarchisés, catégorifiés et libellisés. Je suis parti du principe que tout contenu est une publication qui peut avoir différentes natures: actualité, évènement, page, sous-rubrique, rubrique.",
                            "Pour le contenu intemporel, j'ai voulu créer une arborescence en 3 couches maximum (rubriques -> sous-rubriques -> pages) pour une navigation plus ergonomique. La plupart des CMS laisse la possiblité de créer des noeuds d'arborescences illimités, néamoins j'ai trouvé ça plus clair et simpliste de le limiter. On retrouve les rubriques dans le menu, les sous-rubriques pour affiner l'information, puis les pages qui est le contenu fixe dont l'internaute à besoin.", 
                            "Une actualité et un évènement sont deux type de contenu que l'on a envie de présenter de manières différentes de par leur nature temporel.",
                            "On peut aussi libelliser ('tags') le contenu , afin de regrouper l'informations pour une meilleure expérience.",
                            "Se greffe aussi, selon la nature de la publication des fonctionalités qui permettent de rajouter des informations pertinentes à mettre en avant, telle que des liens utiles (lien-hypertexte), des documents (pdf), des infos pratiques, une ou des galeries d'images."
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
        ]
    },
]

export default wsm;