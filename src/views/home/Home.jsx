import './Home.css';
//import React, { useEffect, useRef } from "react";
import Hero from 'components/hero/Hero';
import About from 'components/about/About';
import Services from 'components/services/Services';
import Realisations from 'components/realisations/Realisations';
import Contact from 'components/contact/Contact';

const Home = (props) => {
    
    console.log(props);

    /*const sections = useRef();
    let lastScrollTop = 0;
    //let sections = "";
    let stopScroll = false;

    function stopWheel(e) {
        if(!e){ e = window.event; } // IE7, IE8, Chrome, Safari 
        if(e.preventDefault) { e.preventDefault(); } // Chrome, Safari, Firefox 
        //e.returnValue = false; // IE7, IE8 
    }

    function whereSection (element, scrollTop, index) {
        
        if(scrollTop >= element.offsetTop - 103 && scrollTop <= element.offsetTop -103 +element.clientHeight && !stopScroll) {
            console.log(element.id);
            console.log(index);
            
            //document.addEventListener('wheel', stopWheel, {passive: false});
            stopScroll = true;
            console.log(sections.current[index+1].id);
            //window.location.href = "#"+sections.current[index+1].id;

            window.scrollTo({
                top: sections.current[index+1].offsetTop,
                left:0,
                behavior: 'smooth'
            });
            setTimeout(function() {
                stopScroll = false;
                //document.removeEventListener('wheel', stopWheel);
            }, 2000);
        }
    }

    function handleScroll() {
        //lol = true;
        //console.log(document.getElementById('hero').offsetHeight); 
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            //console.log(scrollTop+' down');
            // downscroll code
            sections.current.forEach((element, index) => whereSection(element, scrollTop, index));
        } else {
            //console.log(scrollTop+' up');
            // upscroll code
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    useEffect(() => {
        sections.current = document.querySelectorAll("main section");
        console.log(sections.current);
        sections.current.forEach(element => sections.current[element]);
        //console.log(document.querySelector("main").getElementsByTagName("section"));
        //console.log(document.querySelectorAll("main section"));
        //document.addEventListener('scroll', stopWheel, {passive: false});
        window.addEventListener('wheel', handleScroll);
      
        // returned function will be called on component unmount 
        return () => {
          //document.removeEventListener('scroll', stopWheel);
          window.removeEventListener('wheel', handleScroll)
        }
    })*/
    
    return (
        
        <main id="main">

                <Hero changeMode={props.changeMode}/>

                <About mode={props.mode}/>

                <Services mode={props.mode}/>

                <Realisations/>

                <Contact/>

        </main>

    );
}

export default Home;