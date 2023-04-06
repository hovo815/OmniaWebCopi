import React from 'react';
import {useState, useEffect} from "react";
import github from "../../Components/Img/github.png";
import medium from "../../Components/Img/medium.png";
import twitter from "../../Components/Img/twitter.png";
import telegram from "../../Components/Img/telegram.png";
import linkedin from "../../Components/Img/linkedin.png";
import burgerIcon from "../../Components/Img/header/burgerIcon.png"
import xIcon from "../../Components/Img/header/xIcon.png"
import "./Header.scss";


function Header(props) {
    const [navColor, setnavColor] = useState("transparent");
    const [open, setOpen] = useState(false)
    const listenScrollEvent = () => {
        window.scrollY > 0 ? setnavColor("white") : setnavColor("transparent");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    function click(){
        setOpen(!open)
    }

    return (
        <div className="container-max-width">
            <header className="header">
                <div className="header-logo">
                    <h1><a href="" target="_blank">OMNIA</a></h1>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><a href="" target="_blank">How it works</a></li>
                        <li><a href="" target="_blank">Why Omnia</a></li>
                        <li><a href="" target="_blank">News</a></li>
                        <li><a href="" target="_blank">About Us</a></li>
                        <li><a href="" target="_blank">Careers</a></li>
                    </ul>
                </nav>
                <div className="header-button">
                    <div>
                        <button><a href="https://exchange.biswap.org/swap?outputCurrency=0x654370748907d61dF61B5d77eAa50d3bc927e019" target="_blank">Buy Token Omnia</a></button>
                    </div>
                </div>
            </header>
            <div className="header-mobile">
                <div className="header-mobile-container">
                    <div className="header-mobile-container-logo">
                        <h2><a href="" target="_blank">OMNIA</a></h2>
                    </div>
                    <div className="header-mobile-container-button">
                        <button onClick={click}>{open === true ? <img height="25px" src={xIcon}/> : <img height="30px" src={burgerIcon}/> }</button>
                    </div>
                </div>
            </div>
            {open ? <div className="main-container">
                    <nav className="main-container-navbar">
                            <ul>
                                <li><a className="a1" href="" target="_blank">How it works</a></li>
                                <li><a className="a2" href="" target="_blank">Why Omnia</a></li>
                                <li><a className="a3" href="" target="_blank">News</a></li>
                                <li><a className="a4" href="" target="_blank">About Us</a></li>
                                <li><a className="a5" href="" target="_blank">Careers</a></li>
                            </ul>
                        </nav>
                    <div className="main-container-social">
                        <div className="main-container-social-icon">
                                <div><a href="" target="_blank"><img src={medium} alt="medium"></img></a></div>
                                <div><a href="" target="_blank"><img src={github} alt="github"></img></a></div>
                                <div><a href="" target="_blank"><img src={twitter} alt="twitter"></img></a></div>
                                <div><a href="https://t.me/NewsOmniaProtocol" target="_blank"><img src={telegram} alt="telegram"></img></a></div>
                                <div><a href="" target="_blank"><img src={linkedin} alt="linkedin"></img></a></div>
                        </div>
                </div>
            </div>:null}
            <div className="social-network">
                <div>
                    <div className="social-network-img"><a href="" target="_blank"><img src={medium} alt="medium"></img></a></div>
                    <div className="social-network-img"><a href="" target="_blank"><img src={github} alt="github"></img></a></div>
                    <div className="social-network-img"><a href="" target="_blank"><img src={twitter} alt="twitter"></img></a></div>
                    <div className="social-network-img"><a href="https://t.me/NewsOmniaProtocol" target="_blank"><img src={telegram} alt="telegram"></img></a></div>
                    <div className="social-network-img"><a href="" target="_blank"><img src={linkedin} alt="linkedin"></img></a></div>
                </div>
            </div>
        </div>

    );
}

export default Header;