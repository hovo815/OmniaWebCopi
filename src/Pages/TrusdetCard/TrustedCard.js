import React from 'react';
import logoDao from "../../Components/Img/trustedCard/logoDao.png";
import bybit from "../../Components/Img/trustedCard/bybit.png";
import biswap from "../../Components/Img/trustedCard/biswap.png";
import binance from "../../Components/Img/trustedCard/binance.png";
import logoEvangelion from "../../Components/Img/trustedCard/logoEvangelion.png";
import logoBlank from "../../Components/Img/trustedCard/logoBlank.png";
import logoReblock from "../../Components/Img/trustedCard/logoReblock.png";
import logoLdcapital from "../../Components/Img/trustedCard/logoLdcapital.png";
import logoplutusvc from "../../Components/Img/trustedCard/logoplutusvc.png";
import logoFlow from "../../Components/Img/trustedCard/logoFlow.png";
import logoDct from "../../Components/Img/trustedCard/logoDct.png";
import logoAvstar from "../../Components/Img/trustedCard/logoAvstar.png";
import logoAlfacatalyst from "../../Components/Img/trustedCard/logoAlfacatalyst.png";
import logoNewtribe from "../../Components/Img/trustedCard/logoNewtribe.png";
import logoLvtcapital from "../../Components/Img/trustedCard/logoLvtcapital.png";
import logoAzercapital from "../../Components/Img/trustedCard/logoAzercapital.png";
import logoCspdao from "../../Components/Img/trustedCard/logoCspdao.png";
import logoKondr from "../../Components/Img/trustedCard/logoKondr.png";
import logoVespertine from "../../Components/Img/trustedCard/logoVespertine.png";
import logoGrizzly from "../../Components/Img/trustedCard/logoGrizzly.png";
import logoVision from "../../Components/Img/trustedCard/logoVision.png";
import logoSafelaunch from "../../Components/Img/trustedCard/logoSafelaunch.png";
import logoNodeseeds from "../../Components/Img/trustedCard/logoNodeseeds.png";
import logoRaptor from "../../Components/Img/trustedCard/logoRaptor.png";
import logoStacker from "../../Components/Img/trustedCard/logoStacker.png";
import logoHalvings from "../../Components/Img/trustedCard/logoHalvings.png";
import "./TrustedCard.scss";

function TrustedCard(props) {
    return (
        <div>
            <div className="cards">
                <p className="trusted-text">TRUSTED BY</p>
                <div className="logo-block">
                    <div className="logo-block-binance">
                        <a href="https://www.binance.com/ru" target="_blank"><img src={binance} alt="binance"/></a>
                    </div>
                    <div><img src={logoReblock} alt="logoReblock"/></div>
                </div>
                <div className="logo-block">
                    <div className="logo-block-biswap">
                       <div><a href="https://exchange.biswap.org/swap?outputCurrency=0x654370748907d61dF61B5d77eAa50d3bc927e019" target="_blank"><img src={biswap} alt="biswap"/></a></div>
                        <div className="text-biswap">
                            <h2><a href="https://exchange.biswap.org/swap?outputCurrency=0x654370748907d61dF61B5d77eAa50d3bc927e019" target="_blank">Biswap</a></h2>
                        </div>
                    </div>

                    <div><img src={logoHalvings} alt="logoHalvings"/></div>
                </div>
                <div className="logo-block">
                    <div className="logo-block-bybit"><a href="https://tradersunion.com/ru/brokers/crypto/view/bybit/" target="_blank"><img src={bybit} alt="bybit"/></a></div>
                    <div><img src={logoEvangelion} alt="logoEvangelion"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoGrizzly} alt="logoGrizzly"/></div>
                    <div><img src={logoplutusvc} alt="logoplutusvc"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoFlow} alt="logoFlow"/></div>
                    <div><img src={logoDct} alt="logoDct"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoAvstar} alt="logoAvstar"/></div>
                    <div><img src={logoAlfacatalyst} alt="logoAlfacatalyst"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoNewtribe} alt="logoNewtribe"/></div>
                    <div><img src={logoLvtcapital} alt="logoLvtcapital"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoAzercapital} alt="logoAzercapital"/></div>
                    <div><img src={logoCspdao} alt="logoCspdao"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoKondr} alt="logoKondr"/></div>
                    <div><img src={logoVespertine} alt="logoVespertine"/></div>
                </div>
                <div className="logo-block">
                    <div className="daoMaker-card">
                        <img src={logoDao} alt="logoDao"/>
                    </div>
                    <div><img src={logoVision} alt="logoVision"/></div>
                </div>
                <div className="logo-block">
                    <div>
                        <img src={logoSafelaunch} alt="logoSafelaunch"/>
                    </div>
                    <div><img src={logoNodeseeds} alt="logoNodeseeds"/></div>
                </div>
                <div className="logo-block">
                    <div><img src={logoStacker} alt="logoStacker"/></div>
                    <div><img src={logoBlank} alt="logoBlank"/></div>
                </div>
                <div className="logo-block display">
                    <div><img src={logoLdcapital} alt="logoLdcapital"/></div>
                    <div><img src={logoRaptor} alt="logoRaptor"/></div>
                </div>
            </div>
        </div>
    );
}

export default TrustedCard;