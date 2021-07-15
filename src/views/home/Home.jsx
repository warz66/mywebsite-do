import './Home.css';
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import About from 'components/about/About';
import Services from 'components/services/Services';
import Realisations from 'components/realisations/Realisations';
import Contact from 'components/contact/Contact';
import { useSelector } from 'react-redux';

const Home = (props) => {
  const locationNavFp = useSelector(state => state.locationNavFp.value);

  //corriger ici lors du changement de mode le retour a la section
  let sectionActive = false;
  if(locationNavFp) {
    sectionActive = locationNavFp.payload;
  }

  const anchors = ["ACCUEIL", "A PROPOS", "SERVICES" , "REALISATIONS", "CONTACT"];

  const FullpageHome = () => (
      <ReactFullpage
          licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
          //anchors={anchors}
          navigation
          navigationTooltips={anchors}
          responsiveWidth= "1200"
          responsiveHeight="937"
          //verticalCentered= {false}
          afterLoad= { (origin, destination, direction) => {
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
          /*onLeave={(origin, destination, direction) => {
          }}*/
          afterRender={() =>{
            props.handleStyleFpNav();
          }}
          render={({ state, fullpageApi }) => {

              /*if(state) {
                if(state.initialized) {
                  props.handleStyleFpNav();
                }
              }*/
  
              return (
                <ReactFullpage.Wrapper>

                  <Header fullpageApi={fullpageApi}/>
  
                  <Hero sectionActive={(sectionActive === "accueil") ? true : false}/>
  
                  <About sectionActive={(sectionActive === "about") ? true : false}/>
  
                  <Services sectionActive={(sectionActive === "services") ? true : false}/>
  
                  <Realisations sectionActive={(sectionActive === "realisations") ? true : false}/>
  
                  <Contact sectionActive={(sectionActive === "contact") ? true : false}/>
      
                </ReactFullpage.Wrapper>
              );
          }}
      />
  );
  
  return (

      <FullpageHome />

  );
}

export default Home;