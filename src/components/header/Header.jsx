import './Header.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { handleSection } from 'features/locationNavFp'

const Header = ({fullpageApi}) => {
    const dispatch = useDispatch()
    const [openMenu, setOpenMenu] = useState(false);
    const [curtainHeight, setCurtainHeight] = useState(0);
    
    //console.log('render header');

    function handleMenu() {
        setOpenMenu(!openMenu);
    }

    function closeMenuHandleResize() {
        if(window.innerWidth > 800) {
            setOpenMenu(false);
        }
    }

    function calcCurtainHeight() {
        setCurtainHeight(document.body.offsetHeight - document.getElementById('header').offsetHeight);
    }

    function menuRender() {
        if (fullpageApi) {
            return (
                <ul>
                    <li><a href="/">ACCUEIL</a></li>
                    <li onClick={() => {fullpageApi.moveTo(2); handleMenu();}}>A PROPOS</li>
                    <li onClick={() => {fullpageApi.moveTo(3); handleMenu();}}>SERVICES</li>
                    <li onClick={() => {fullpageApi.moveTo(4); handleMenu();}}>REALISATIONS</li>
                    <li onClick={() => {fullpageApi.moveTo(5); handleMenu();}}>CONTACT</li>
                </ul> 
            );
        } else {
            return (
                <ul>
                    <li><Link to="/" onClick={() => dispatch(handleSection("accueil"))}>ACCUEIL</Link></li>
                    <li><Link to="/" onClick={() => dispatch(handleSection("about"))}>A PROPOS</Link></li>
                    <li><Link to="/" onClick={() => dispatch(handleSection("services"))}>SERVICES</Link></li>
                    <li><Link to="/" onClick={() => dispatch(handleSection("realisations"))}>REALISATIONS</Link></li>
                    <li><Link to="/" onClick={() => dispatch(handleSection("contact"))}>CONTACT</Link></li>
                </ul>
            );
        }
    }

    useEffect(() => {
        calcCurtainHeight();
        window.addEventListener('resize', calcCurtainHeight);
        window.addEventListener('resize', closeMenuHandleResize);
        return () => {
            window.removeEventListener('resize', calcCurtainHeight);
            window.removeEventListener('resize', closeMenuHandleResize);
        }
    },[]);

    return (
        <header id="header">
            <div id="wrapper-header">
                <div id="logo">
                    David.O
                </div>

                <div id="menuH" onClick={handleMenu} className={openMenu ? 'is-active' : ''}>
                    <span></span>
                </div>

                <div id="menu" className={openMenu ? 'is-open' : ''}>
                    {menuRender()}
                </div>

                <div id="social-header">

                    <a href="https://github.com/warz66" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000">
                            <path d="M4553.4 4863.8c-619.6-51.6-1218.5-223.7-1769.3-499.1-805.5-406.2-1404.4-946.6-1903.6-1707.3-358-543.9-602.4-1160-722.9-1827.8C78.5 399.3 82-447.5 161.1-864c330.5-1724.5 1483.6-3122.1 3077.3-3721 261.6-99.8 364.9-103.3 454.4-13.8 62 62 68.8 113.6 68.8 526.7v454.4h-437.2c-378.6 0-464.7 10.3-602.4 75.7-271.9 123.9-454.4 323.5-626.5 681.6-151.5 316.7-344.2 554.2-581.7 722.9-237.5 168.7-51.6 299.5 285.7 203.1 148-44.8 230.6-96.4 378.6-251.3 103.3-106.7 244.4-268.5 309.8-361.4 75.7-106.7 189.3-206.5 309.8-275.4 165.2-92.9 220.3-106.7 447.5-103.3 141.1 3.5 316.7 27.6 389 51.6 120.5 44.8 137.7 72.3 206.5 275.4 41.3 120.5 110.2 268.5 154.9 323.6l79.2 99.8-354.6 75.7c-636.8 134.3-998.2 320.1-1325.2 681.6-337.3 368.3-526.7 943.1-526.7 1604 0 516.3 99.8 846.8 368.3 1211.7l117 161.8-41.3 210c-72.3 375.2 27.5 1039.6 165.2 1091.2 144.6 55.1 729.7-158.3 1122.1-409.6l161.8-103.3 320.1 62c440.6 89.5 1394.1 92.9 1834.7 3.4l313.3-65.4 302.9 175.6c337.3 192.8 647.1 306.4 874.3 320.1l154.9 10.3 65.4-172.1c86.1-220.3 117.1-709.1 58.5-939.7l-41.3-175.6 154.9-234.1c275.4-419.9 316.7-571.4 316.7-1163.5-3.4-433.7-13.8-561.1-79.2-791.7-192.8-671.2-602.4-1108.4-1253-1345.9-82.6-31-306.4-89.5-502.5-130.8l-354.6-75.7 75.7-92.9c41.3-55.1 106.7-179 144.6-275.4 68.8-161.8 75.7-261.6 86.1-1074 6.9-599 24.1-908.8 51.6-939.7 117.1-144.6 278.8-117.1 836.5 148 671.2 313.2 1363.1 881.2 1820.9 1493.9C9368.7-2351 9713-1552.4 9840.3-846.7c79.2 437.2 79.2 1215.1 0 1652.3-199.6 1105-815.8 2182.4-1655.7 2888-1022 867.3-2323.2 1287.2-3631.2 1170.2z" transform="matrix(.1 0 0 -.1 0 511)"></path>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/david-oeslick-939900205/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 382 382">
                            <path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"></path>
                        </svg>
                    </a>

                </div>

                <span id="menu-curtain" onClick={handleMenu} className={openMenu ? 'is-open' : ''} style={{'height' : curtainHeight}}></span>
            </div>
        </header>
    );
}

export default Header;