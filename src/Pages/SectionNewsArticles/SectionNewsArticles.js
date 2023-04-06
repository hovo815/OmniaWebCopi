import React from 'react';
import article8 from "../../Components/Img/card/article8.png";
import article9 from "../../Components/Img/card/article9.png";
import article10 from "../../Components/Img/card/article10.png";
import article11 from "../../Components/Img/card/article11.png";
import article3 from "../../Components/Img/card/article3.jpeg";
import article2 from "../../Components/Img/card/article2.png";
import "./SectionNewsArticles.scss";

function SectionNewsArticles(props) {
    return (
        <div className="container-centre">
            <div className="section-news__articles">
                <div className="section-news__articles-text">
                    <p className="section-news__articles-text-p">ARTICLES</p>
                    <h2 className="section-news__articles-text-h2">Latest news</h2>
                </div>
                <div className="section-news__item-wrap">
                    <a href="https://medium.com/omniaprotocol/eu-legislators-have-agreed-on-two-landmark-crypto-bills-here-is-what-we-know-so-far-9ba0676a5aba"
                       target="_blank"></a>
                    <div className="section-news__item__image">
                        <img src={article8} alt="article8"/>
                    </div>
                    <h2>Legislators Have Agreed on 2 Landmark Crypto Bills</h2>
                </div>
                <div className="section-news__item-wrap">
                    <a href="https://medium.com/omniaprotocol/centralization-issues-affecting-blockchain-technology-part-2-f1f543019bd3"
                       target="_blank"></a>
                    <div className="section-news__item__image">
                        <img src={article9} alt="article9"/>
                    </div>
                    <h2>Centralization Issues Affecting Blockchain Technology</h2>
                </div>
                <div className="section-news__item-wrap">
                    <a href="https://medium.com/omniaprotocol/crypto-regulations-are-necessary-but-might-stifle-innovation-8125cc7f4a64"
                       target="_blank"></a>
                    <div className="section-news__item__image">
                        <img src={article10} alt="article10"/>
                    </div>
                    <h2>Crypto Regulations are Necessary But Might Stifle Innovation</h2>
                </div>
                <div className="section-news__item-wrap">
                    <a href="https://medium.com/omniaprotocol/compliant-privacy-simple-explainer-c6bb8469c52e"
                       target="_blank"></a>
                    <div className="section-news__item__image">
                        <img src={article11} alt="article11"/>
                    </div>
                    <h2>Compliant Privacy — Simple Explainer</h2>
                    <h2 style={{color:"white"}}>.</h2>
                </div>
                <div className="section-news__item-wrap">
                    <a href="https://medium.com/omniaprotocol/eu-legislators-have-agreed-on-two-landmark-crypto-bills-here-is-what-we-know-so-far-9ba0676a5aba"
                       target="_blank"></a>
                    <div className="section-news__item__image">
                        <img src={article3} alt="article3"/>
                    </div>
                    <h2>Scaleway Becomes OMNIA Protocol’s Institutional Partner</h2>
                </div>
                <div className="section-news__item-wrap">
                    <a href="https://medium.com/omniaprotocol/omnia-protocol-raises-3-2-million-in-oversubscribed-fundraise-257f2a0844c9"
                       target="_blank"></a>
                    <div className="section-news__item__image">
                        <img src={article2} alt="article2"/>
                    </div>
                    <h2>OMNIA Protocol Raises $3.2 Million in Oversubscribed Fundraise</h2>
                </div>
            </div>
        </div>
    );
}

export default SectionNewsArticles;