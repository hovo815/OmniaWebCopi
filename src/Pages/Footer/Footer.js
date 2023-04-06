import React from 'react';
import github from "../../Components/Img/github.png";
import medium from "../../Components/Img/medium.png";
import twitter from "../../Components/Img/twitter.png";
import telegram from "../../Components/Img/telegram.png";
import linkedin from "../../Components/Img/linkedin.png";
import "./Footer.scss";

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-max-width">
            <div className="footer-centre">
                <div className="footer-menu">
                    <div className="footer-menu-title">
                        <h2>OMNIA</h2>
                        <p>Privacy - that’s a given and should be enabled by default within any blockchain
                            technology.</p>
                    </div>
                    <div className="footer-menu-container">
                        <div>
                            <nav className="footer-menu-container-menu">
                                <h3>MENU</h3>
                                <ul>
                                    <li><a href="" target="_blank">How</a></li>
                                    <li><a href="" target="_blank">Why</a></li>
                                    <li><a href="" target="_blank">News</a></li>
                                    <li><a href="" target="_blank">About Us</a></li>
                                    <li><a href="" target="_blank">Careers</a></li>
                                    <li><a href="" target="_blank">Token Metrics</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <nav className="footer-menu-container-legal">
                                <h3>LEGAL</h3>
                                <ul>
                                    <li><a href="" target="_blank">Whitepaper</a></li>
                                    <li><a href="" target="_blank">Privacy Policy</a></li>
                                    <li><a href="" target="_blank">Terms & Conditions</a></li>
                                    <li><a href="" target="_blank">Risk Disclaimer</a></li>
                                    <li><a href="" target="_blank">Terms of Use of OMNIA</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <nav className="footer-menu-container-social">
                                <h3>SOCIAL</h3>
                                <ul>
                                    <li><a href="" target="_blank"><img src={medium} alt="medium"/>Medium</a></li>
                                    <li><a href="" target="_blank"><img src={github} alt="github"/>Github</a></li>
                                    <li><a href="" target="_blank"><img src={twitter} alt="twitter"/>Twitter</a></li>
                                    <li><a href="https://t.me/NewsOmniaProtocol" target="_blank"><img src={telegram} alt="telegram"/>Telegram</a></li>
                                    <li><a href="" target="_blank"><img src={linkedin} alt="linkedin"/>Linkedin</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <div className="footer-centre centre2">
                    <p>Copyright © OMNIA 2022. All rights reserved.</p>
                    <p>Designed by Flair Digital</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;