import React from 'react';
import cristianLupascu from "../../Components/Img/userCard/cristianLupascu.png";
import alexandruLupascu from "../../Components/Img/userCard/alexandruLupascu.png";
import liza from "../../Components/Img/userCard/liza.png";
import Laura from "../../Components/Img/userCard/Laura.jpg";
import CatalinUmitru from "../../Components/Img/userCard/CatalinUmitru.jpeg";
import alexOprea from "../../Components/Img/userCard/alexOprea.png";
import sebastian from "../../Components/Img/userCard/sebastian.jpeg";
import felipe from "../../Components/Img/userCard/felipe.jpg";
import AleksandrasMono from "../../Components/Img/userCard/AleksandrasMono.jpeg";
import ImanMono from "../../Components/Img/userCard/ImanMono.jpeg";
import "./UserCard.scss";

function UserCard(props) {
    return (
        <div className="container-centre">
            <div className="container-max-width">
                <div className="userCard-text">
                    <p>TEAM</p>
                    <h3>
                        Omnia's team consists of strong professional individuals with
                        academia background and extensive expertise in crypto and cyber security.
                    </h3>
                </div>
                <div className="team-member">
                    <div className="team-member-width">
                        <div className="team-member-container">
                            <div className="team-member-photo">
                                <div>
                                    <img className="team-member-photo-img" src={cristianLupascu} alt="cristianLupascu"/>
                                    <h3>Cristian Lupascu</h3>
                                    <p>CEO & CO-FOUNDER</p>
                                </div>
                                <div>
                                    <img className="team-member-photo-img" src={alexandruLupascu} alt="alexandruLupascu"/>
                                    <h3>Alexandru Lupascu</h3>
                                    <p>CTO & CO-FOUNDER</p>
                                </div>
                            </div>
                            <div className="team-member-photo">
                                <div>
                                    <div><img className="team-member-photo-img" src={liza} alt="liza"/></div>
                                    <h3>Liza Horowitz</h3>
                                    <p>Head of Marketing</p>
                                </div>
                                <div>
                                    <div>
                                        <img className="team-member-photo-img"
                                         src="https://omniatech.io/static/team/diogo.jpeg"
                                         alt="omniatech"/>
                                    </div>
                                    <h3>Diogo Tavares</h3>
                                    <p>MARKETING MANAGER</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-member-container">
                            <div className="team-member-photo">
                                <div>
                                    <img className="team-member-photo-img" src={Laura} alt="Laura"/>
                                    <h3>Laura Angel</h3>
                                    <p>COMMUNITY MARKETING MANGER</p>
                                </div>
                                <div>
                                    <img className="team-member-photo-img" src={CatalinUmitru} alt="CatalinUmitru"/>
                                    <h3>Catalin Dumitru</h3>
                                    <p>FULL-STACK DEVELOPER</p>
                                </div>
                            </div>
                            <div className="team-member-photo">
                                <div>
                                    <img className="team-member-photo-img" src={alexOprea} alt="alexOprea"/>
                                    <h3>Alexandru Oprea</h3>
                                    <p>PROTOCOL ENGINEER</p>
                                </div>
                                <div>
                                    <img className="team-member-photo-img" src={sebastian} alt="sebastian"/>
                                    <h3>Sebastian Cordea</h3>
                                    <p>FULL-STACK DEVELOPER</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-member-container">
                            <div className="team-member-photo">
                                <div>
                                    <div><img className="team-member-photo-img" src={felipe} alt="felipe"/></div>
                                    <h3>Felipe Lencastre</h3>
                                    <p>CHIEF VIBE OFFICER (HR)</p>
                                </div>
                                <div>
                                    <div>
                                        <img className="team-member-photo-img" src={AleksandrasMono} alt="AleksandrasMono"/>
                                    </div>
                                    <h3>Aleksandras Gaska</h3>
                                    <p>ADVISOR</p>
                                </div>
                            </div>
                            <div className="team-member-photo">
                                <div>
                                    <div><img className="team-member-photo-img" src={ImanMono} alt="ImanMono"/></div>
                                    <h3>Iman Hossini</h3>
                                    <p>ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-open-position">
                    <p>OPEN POSITIONS</p>
                    <h2>Join the team</h2>
                    <h4>We’re looking for self-motivated crypto natives to join our growing team.</h4>
                </div>
                <div className="section-full">
                    <h2>Don't see yourself here?</h2>
                    <p>If you think you have what we need, let us know about yourself.</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;