import archRealisation from 'assets/images/arch-realisation.jpg'
import photosnapRealisation from 'assets/images/photosnap-realisation.jpg'
import countriesRealisation from 'assets/images/countries-realisation.jpg'
import mairieRealisation from 'assets/images/mairie-realisation.jpg'
import clipboardRealisation from 'assets/images/clipboard-realisation.jpg'
import roomRealisation from 'assets/images/room-realisation.jpg'
import davidRealisation from 'assets/images/david-oeslick-website.jpg'

const realisationsMap = [
    {   
        slug: "arch",
        path: "arch/arch.js", 
        title: "Arch Studio multi-page website",
        titleNav: "Arch Studio", 
        image: archRealisation,
        techs: "React",
        sum: "In this challenge, you'll be building a 4-page site that will look great in any portfolio.",
    },
    {   
        slug: "photosnap",
        path: "photosnap/photosnap.js",
        title: "Photosnap multi-page website",
        titleNav: "Photosnap", 
        image: photosnapRealisation,
        techs: "Vue",
        sum: "In this challenge, you'll be building the marketing site for a photo-sharing app. This will be a perfect opportunity to put your CSS Grid skills to the test!",
    },
    {   
        slug: "rest-countries-api-react",
        path: "rest-countries-api-react/rcar.js",
        title: "REST Countries API with color theme switcher",
        titleNav: "Rest Countries API React", 
        image: countriesRealisation,
        techs: "React",
        sum: "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
    },
    {   
        slug: "rest-countries-api-vue",
        path: "rest-countries-api-vue/rcav.js",
        title: "REST Countries API with color theme switcher",
        titleNav: "Rest Countries API Vue", 
        image: countriesRealisation,
        techs: "Vue",
        sum: "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
    },
    {   
        slug: "web-solution-mairie",
        path: "web-solution-mairie/wsm.js",
        title: "Web Solution Mairie",
        titleNav: "Web Solution Mairie", 
        image: mairieRealisation,
        techs: "Symfony",
        sum: "Solution pour site institutionnel.",
    },
    {   
        slug: "clipboard-landing-page",
        path: "clipboard-landing-page/clp.js",
        title: "Clipboard landing page",
        titleNav: "Clipboard landing page", 
        image: clipboardRealisation,
        techs: "HTML / CSS",
        sum: "Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.",
    },
    {   
        slug: "room-homepage",
        path: "room-homepage/rh.js",
        title: "Room homepage",
        titleNav: "Room homepage", 
        image: roomRealisation,
        techs: "HTML / CSS / JS",
        sum: "This small homepage challenge packs a big punch to test your layout skills. There's also a slider in there to add a JS layer for extra practice.",
    },
    {   
        slug: "david-oeslick-website",
        path: "david-oeslick-website/dow.js",
        title: "David Oeslick",
        titleNav: "David Oeslick", 
        image: davidRealisation,
        techs: "react",
        sum: "Mon site web",
    },
]

export default realisationsMap;