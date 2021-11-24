import './Home.css';
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import About from 'components/about/About';
import Services from 'components/services/Services';
import Realisations from 'components/realisations/Realisations';
import Contact from 'components/contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { handleStyleFpNav } from 'features/mode';

const anchors = ["ACCUEIL", "A PROPOS", "SERVICES" , "REALISATIONS", "CONTACT"];

const Home = () => {
  const dispatch = useDispatch();
  const locationNavFp = useSelector(state => state.locationNavFp.value);

  //corriger ici lors du changement de mode le retour a la section
  let sectionActive = false;
  if(locationNavFp) {
    sectionActive = locationNavFp.payload;
  }

  return (
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSEKEY}
      navigation
      navigationTooltips={anchors}
      responsiveWidth= "1200"
      responsiveHeight="937"
      afterLoad= { (destination) => {
        switch(destination.index) {
          case 0: 
            document.title = "Hero | David OESLICK";
            break;
          case 1: 
            document.title = "A propos de moi | David OESLICK";
            break;
          case 2: 
            document.title = "Services | David OESLICK";
            break;
          case 3: 
            document.title = "Réalisations | David OESLICK";
            break;
          case 4: 
            document.title = "Contact | David OESLICK";
            break;
          default:
            document.title = "David OESLICK website"; 
            break;
        }
      }}
      afterRender={() =>{
        dispatch(handleStyleFpNav());
      }}
      render={({ fullpageApi }) => {

        return (
          <ReactFullpage.Wrapper>

            <Header fullpageApi={fullpageApi}/>

            <Hero fullpageApi={fullpageApi} sectionActive={(sectionActive === "accueil") ? true : false}/>

            <About fullpageApi={fullpageApi} sectionActive={(sectionActive === "about") ? true : false}/>

            <Services sectionActive={(sectionActive === "services") ? true : false}/>

            <Realisations sectionActive={(sectionActive === "realisations") ? true : false}/>

            <Contact sectionActive={(sectionActive === "contact") ? true : false}/>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Home;