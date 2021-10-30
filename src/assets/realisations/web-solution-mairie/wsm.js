import mairieRealisation from 'assets/images/mairie-realisation.jpg'

const wsm = [
    {   
        title: "Solution Mairie",
        image: {
            thumbnail: mairieRealisation,
            large: mairieRealisation,
        },
        techs: "SYMFONY 5, JQUERY, BOOTSTRAP 4",
        sum: "Solution pour site de partage d'informations pour les collectivités.",
        presentation: [
            "Projet personnel ayant pour but d'apprendre le framework Symfony 5. Cela m'a permis d'appréhender le champ de développement d'une application web dans son ensemble, du front-end au back-end jusqu'à la mise en production. Symfony nous donne un cadre de travail (règles métier, architecture, composants) afin d'être plus efficace, de se concentrer sur l'essentiel et de produire un code de meilleure qualité. Le monde du dev web peut-être déboussolant par la multitude de technologies qu'il comporte, Symfony nous dirige, nous rassure et nous conforte dans notre travail. Les formations vidéo de Lior Chamla, de Grafikart, ainsi que les cours OpenClassRoom m'ont beaucoup aidé en dehors de la documentation officiel.",
            "Pour la plupart des problématiques d'un projet, un CMS tel que Wordpress, Drupal et bien d'autres peuvent largement convenir, néanmoins, j'avais envie de coller au plus près de la conception de ce que peut-être un CMS en créant une solution sur-mesure qui répondrait aux besoins 'précis' des collectivités. Cette solution ne vise que les communes de moins de 30 000 habitants qui représente la majorité (99 %) de l'ensemble des communes de France. Ce sont surtout des sites qui permettent le partage des informations relatives à la vie de la commune, sous forme d'actualités, d'événements ou de pages informatives. Des fonctionnalités me paraissaient essentielles, tel qu'un carousel sur la homepage, un 'flash infos', un kiosque de diffusion de documents, des liens rapides vers du contenu essentiels, une barre de recherche, des galeries d'images, une newsletter, un formulaire de contact, et bien évidemment un back-office accessible à des néophytes.",
            "Vous pouvez tester le back office de la solution sur <a href='https://web-solution-mairie.fr/admin/login' target='_blank' rel='noreferrer'>web-solution-maire.fr/admin/login</a> avec les identifiants: invite@mairie.com password"
        ],
        linkGithub: "https://github.com/warz66/Solution-mairie-symfony-5",
        linkWebsite: "https://web-solution-mairie.fr/",
        specs: [
            {
                title: "Le choix de Next.js",
                image: {
                    thumbnail: mairieRealisation,
                    large: mairieRealisation,
                },
                sections: [
                    {
                        paragraphe: [
                            "La page principale du site étant static, il m'était pertinent de faire du Static Site Generation afin d'avoir une meilleure lisibilité par les moteurs de recherche, ainsi qu'un gain de performances comparer à une Single Page Application.",
                            "L'un des principals avantage de Next.js est sa simplicité de déploiement avec une plateforme t-elle que <a href='https://vercel.com/' target='_blank' rel='noreferrer'>Vercel</a>, sur laquelle je me suis familiarisé à son utilisation lors de challenges <a href='https://www.frontendmentor.io/' target='_blank' rel='noreferrer'>front-end-mentor</a>, de plus l'hébergement étant gratuit.",
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
        ]
    },
]

export default wsm;