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
            "Projet personnel ayant pour but d'apprendre le framework Symfony 5. Cela m'a permis d'appréhender le champ de développement d'une application web dans son ensemble (du front-end jusqu'au back-end). Symfony nous donne un cadre de travail (règles métier, architecture, composants) afin d'être plus efficace, de ce concentré sur l'essentiel et de produire un code de meilleure qualité. Le monde du dev web peut-être déboussolant par la multitudes de technologies qu'il comporte, Symfony nous dirige, nous rassure et nous conforte dans notre travail. Les sources qui m'ont grandement aidé à m'améliorer sur Symfony et mettre en place ce projet en dehors de la documentation officiel viennent essentiellement de formation vidéo de Lior Chamla, de Grafikart, de cours OpenClassRoom ainsi que de livres.",
            "Pour la plupart des problématiques d'un projet, un CMS tel que Wordpress, Drupal et bien d'autre peuvent largement convenir, néanmoins j'avais envie de coller au plus prêt de la conception de ce que peut-être un CMS en créant une solution sur mesure qui répondrait aux besoins 'précis' des collectivités. Cette solution ne vise que les communes de moin de 30000 habitants qui représente la majorité (99%) de l'ensemble des communes de France. Ce sont surtout des sites qui permettent le partage des informations relatives à la vie de la commune au plus grand nombre de personnes, sous forme d'actualités, d'évènements ou de pages informatives. Des fonctionnalités me paraissaient essentiels, tel qu'un carousel sur la homepage, un 'flash infos', un kiosque de diffusion de documents, des liens rapides vers du contenu essentiels, une barre de recherche, des galeries d'images, une newsletter, un formulaire de contact, et bien évidement une interface d'aministration (back-office) accéssible à des néophythes."
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