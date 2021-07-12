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
          /*afterLoad= { () => {
            props.handleStyleFpNav();
          }}
          onLeave={(origin, destination, direction) => {
          }}*/
          render={({ state, fullpageApi }) => {

              if(state) {
                if(state.initialized) {
                  props.handleStyleFpNav();
                }
              }
  
              return (
                <ReactFullpage.Wrapper>

                  <Header fullpageApi={fullpageApi} mode={props.mode}/>
  
                  <Hero mode={props.mode} changeMode={props.changeMode} sectionActive={(sectionActive === "accueil") ? true : false}/>
  
                  <About mode={props.mode} sectionActive={(sectionActive === "about") ? true : false}/>
  
                  <Services mode={props.mode} sectionActive={(sectionActive === "services") ? true : false}/>
  
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