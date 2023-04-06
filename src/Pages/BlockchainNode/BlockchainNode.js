import React from 'react';
import banner from "../../Components/Img/banner.svg";
import logoCointelegraph from "../../Components/Img/logoCointelegraph.png";
import logoYahoo from "../../Components/Img/logoYahoo.png";
import logoBenzinga from "../../Components/Img/logoBenzinga.png";
import logoCrypto from "../../Components/Img/logoCrypto.png";
import logoMicky from "../../Components/Img/logoMicky.png";
import illustCircle from "../../Components/Img/illustCircle.svg";
import "./BlockchainNode.scss";

function BlockchainNode(props) {
    return (
        <div className="blockchainNode">
            <div className="blockchainNode-img">
                <div className="blockchainNode-img-background">
                    <img src={banner} alt="banner"></img>
                </div>
            </div>
            <div className="container-centre">
                <div className="container-max-width">
                    <div className="blockchainNode-text">
                        <h1>Secure blockchain node infrastructure</h1>
                    </div>
                    <div className="blockchainNode-button">
                        <div className="blockchainNode-button-1">
                            <button><a href="https://exchange.biswap.org/swap?outputCurrency=0x654370748907d61dF61B5d77eAa50d3bc927e019" target="_blank">Buy Token Omnia</a></button>
                        </div>
                        <div className="blockchainNode-button-2">
                            <button><a href="" target="_blank"> Read the whitepaper</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blockchainNode-title">
                <p>FEATURED IN</p>
            </div>
            <div className="container-centre">
                <div className="container-max-width">
                    <div className="blockchainNode-logo-section">
                        <div>
                            <img src={logoCointelegraph} alt="logoCointelegraph"></img>
                            <img src={logoYahoo} alt="logoYahoo"></img>
                        </div>
                        <div>
                            <img src={logoBenzinga} alt="logoBenzinga"></img>
                            <img src={logoCrypto} alt="logoCrypto"></img>
                        </div>
                        <div>
                            <img src={logoMicky} alt="logoMicky"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-centre">
                <div className="container-max-width">
                    <div className="section-how-it-works">
                        <div className="section-how-it-works-img">
                            <img src={illustCircle} alt="illustCircle"></img>
                        </div>
                        <div className="section-how-it-works-text">
                            <div className="section-how-it-works-text-1">
                                <p>HOW IT WORKS</p>
                            </div>
                            <div className="section-how-it-works-text-h2">
                                <h2>Currently blockchain node infrastructure is centralized and poses threats to the
                                    ecosystem.</h2>
                            </div>
                            <div className="section-how-it-works-text-2">
                                <p>Your data, privacy and your security are at risk every time you access the
                                    blockchain.
                                    Omnia’s solution is truly decentralized and requires zero technical knowledge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-centre">
                <div className="container-max-width">
                    <div className="steps-wrapper">
                        <div className="steps-wrapper-1">
                            <p className="steps-wrapper-1-number">1</p>
                            <p className="steps-wrapper-1-text">Omnia's infrastructure consists of blockchain nodes and
                                privacy relayers</p>
                        </div>
                        <div className="steps-wrapper-2">
                            <p className="steps-wrapper-2-number">2</p>
                            <p className="steps-wrapper-2-text">Node owners register their nodes through a simple web
                                interface provided by Omnia</p>
                        </div>
                        <div className="steps-wrapper-3">
                            <p className="steps-wrapper-3-number">3</p>
                            <p className="steps-wrapper-3-text">Privacy relayers index these nodes, and use a mixnet to
                                ensure privacy is protected</p>
                        </div>
                        <div className="steps-wrapper-4">
                            <p className="steps-wrapper-4-number">4</p>
                            <p className="steps-wrapper-4-text">Users access the blockchain via RPC endpoints for any of
                                the networks we support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-why-omnia">
                <p className="container-why-omnia-title"> WHY OMNIA?</p>
                <p className="container-why-omnia-text">
                    The power of decentralization works hand in hand with privacy to provide an unmatched node provider
                    service.
                </p>
            </div>
        </div>
    );
}

export default BlockchainNode;