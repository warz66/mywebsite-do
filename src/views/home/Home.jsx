import './Home.css';
import React, { useEffect } from "react";
import Hero from 'components/hero/Hero';
import About from 'components/about/About';
import Services from 'components/services/Services';


const Home = () => {

    function handleScroll() {
        console.log(document.getElementById('hero').offsetHeight); 
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      
        // returned function will be called on component unmount 
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        
        <main>

            <Hero/>

            <About/>

            <Services/>

        </main>

    );
}

export default Home;