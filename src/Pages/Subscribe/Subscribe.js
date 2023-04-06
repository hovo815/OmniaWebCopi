import React from 'react';
import goldBottomLines from "../../Components/Img/subscribe/goldBottomLines.svg";
import goldTopLines from "../../Components/Img/subscribe/goldTopLines.svg";
import "./Subscribe.scss";
function Subscribe(props) {
    return (
        <div>
            <div className="container-subscribe">
                <div className="container-subscribe-img1">
                    <img src={goldTopLines} alt="goldTopLines"/>
                </div>
                <div className="container-subscribe-update">
                    <h2 className="container-subscribe-update-title">Subscribe to ensure you get every update on Omnia's progress</h2>
                   <div className="subscribe-centre">
                    <div className="container-subscribe-update-inputbutton">
                        <div className="container-subscribe-update-inputbutton-input"><input type="email" placeholder="Email Address"/></div>
                        <div className="container-subscribe-update-inputbutton-button"><button>Subscribe</button></div>
                    </div>
                    </div>
                </div>
                <div className="container-subscribe-img2">
                    <img src={goldBottomLines} alt="goldBottomLines"/>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;