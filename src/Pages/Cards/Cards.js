import React from 'react';
import "./Cards.scss";


function Cards(props) {
    return (
        <div className="section-cards">
            <div className="container">
                <div className="card">
                    <div className="card-inner bg-yellow">
                        <img src="https://omniatech.io/static/icon-privacy.svg" alt="omniatech"></img>
                        <h5>Privacy and security at a critical point of the process</h5>
                        <p>A chain is only as strong as its weakest link. While privacy solutions exist, access to blockchain remains unprotected or prohibitively complex and expensive</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <img src="https://omniatech.io/static/icon-unique.svg" alt="omniatech"></img>
                        <h5>Unique obfuscation of traffic to ensure privacy</h5>
                        <p>Even if your requests are not being monitored, your anonymity can still be compromised by monitoring your traffic behaviour.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner bg-grey">
                        <img src="https://omniatech.io/static/icon-circle-lines.svg" alt="omniatech"></img>
                        <h5>A fully decentralized approach to node providers</h5>
                        <p>Having a centralized approach creates a central point of failure, compromising security and leaving the system at risk from hackers and malicious actors.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <img src="https://omniatech.io/static/icon-circles.svg" alt="omniatech"></img>
                        <h5>Decentralized ecosystem based on incentives</h5>
                        <p>In standard blockchain ecosystems, only mining nodes are incentivized. With Omnia, non-mining nodes are also rewarded.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner bg-blue">
                        <img src="https://omniatech.io/static/icon-circle-lines-w.svg" alt="omniatech"></img>
                        <h5 className="bg-blue-h5">No monitoring of blockchain requests</h5>
                        <p className="bg-blue-p">Requests to node providers can be tracked and monitored. This compromises your privacy. Furthermore, it gives traders an unfair advantage from your metadata.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <img src="https://omniatech.io/static/icon-sync.svg" alt="omniatech"></img>
                        <h5>No need to synchronize and maintain a node</h5>
                        <p>Nowadays, accessing the blockchain without a provider requires deep technical expertise and computer resources, taking days to set up.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;