import archRealisation from 'assets/images/arch-realisation.jpg'
import photosnapRealisation from 'assets/images/photosnap-realisation.jpg'
import countriesRealisation from 'assets/images/countries-react-vue-realisation.jpg'
import mairieRealisation from 'assets/images/wsm/mairie-realisation.jpg'
import clipboardRealisation from 'assets/images/clipboard-realisation.jpg'
import roomRealisation from 'assets/images/room-realisation.jpg'
import davidRealisation from 'assets/images/david-oeslick-website.jpg'
import svenrybinRealisation from 'assets/images/svenrybin/svenrybin-realisation.jpg'

const realisationsMap = [
    {   
        slug: "web-solution-mairie",
        path: "web-solution-mairie/wsm.js",
        title: "Web Solution Mairie",
        titleNav: "Web Solution Mairie", 
        image: mairieRealisation,
        techs: "Symfony 5, Jquery, Bootstrap 4",
        sum: "Solution pour sites de diffusions d'informations pour les communes.",
    },
    {
        slug: "svenrybin",
        path: "svenrybin/svenrybin.js", 
        title: "Svenrybin.fr",
        titleNav: "Svenrybin.fr", 
        image: svenrybinRealisation,
        techs: "React, Next, Symfony 5, Api-Platform",
        sum: "Site web de l'artiste peintre Sven Rybin.",   
    },
    {   
        slug: "david-oeslick-website",
        path: "david-oeslick-website/dow.js",
        title: "David Oeslick",
        titleNav: "David Oeslick", 
        image: davidRealisation,
        techs: "React",
        sum: "Site web me représentant en tant que développeur Web."
    },
    {   
        slug: "arch",
        path: "arch/arch.js", 
        title: "Arch Studio multi-page website",
        titleNav: "Arch Studio", 
        image: archRealisation,
        techs: "React",
        sum: "Challenge Front-end Mentor qui consiste à créer un site web de 4 pages en étant le plus proche possible de la conception.",
    },
    {   
        slug: "photosnap",
        path: "photosnap/photosnap.js",
        title: "Photosnap multi-page website",
        titleNav: "Photosnap", 
        image: photosnapRealisation,
        techs: "Vue",
        sum: "Challenge Front-end Mentor qui consiste à créer le site marketing d'une application de partage de photos.",
    },
    {   
        slug: "rest-countries-api",
        path: "rest-countries-api/rca.js",
        title: "REST Countries API with color theme switcher",
        titleNav: "Rest Countries API", 
        image: countriesRealisation,
        techs: "React & Vue",
        sum: "Challenge Front-end Mentor décliné en deux versions (Vue & React), représentant les informations des pays distribués par une Api Rest.",
    },
    {   
        slug: "clipboard-landing-page",
        path: "clipboard-landing-page/clp.js",
        title: "Clipboard landing page",
        titleNav: "Clipboard landing page", 
        image: clipboardRealisation,
        techs: "HTML / CSS",
        sum: "Challenge Front-end Mentor qui consiste à créer une landing page et à la rendre aussi proche que possible de la conception.",
    },
    {   
        slug: "room-homepage",
        path: "room-homepage/rh.js",
        title: "Room homepage",
        titleNav: "Room homepage", 
        image: roomRealisation,
        techs: "HTML / CSS / JS",
        sum: "Challenge Front-end Mentor qui consiste à créer une page d'accueil de commerce électronique et à la rendre aussi proche que possible de la conception.",
    },
]

export default realisationsMap;