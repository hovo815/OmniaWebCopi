import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import blackTopLines from "../../Components/Img/carusel/blackTopLines.svg"
import blackBottomLines2 from "../../Components/Img/carusel/blackBottomLines2.svg"
import "./Carusel.scss";

export default function CaruselApp() {
    const [size, setSize] = useState(window.innerWidth)
    const [slides, setSlides] = useState(Number)
    console.log(size)
    console.log(slides)

    function setinterval() {
        if(size > 1441){
            return setSlides(4.4)
        }
        if (size > 1024 && size < 1441) {
            return setSlides(3.3)
        }
        if ( size >= 768 && size <= 1024) {
            return setSlides(2.5)
            console.log("jgbdjkdv")
        }
        if(size < 768 && size > 376 ){
            return setSlides(1.5)
        }
        if(size <=321){
            return setSlides(0.829)
        }
        if(size <= 376 || size >= 321){
            return setSlides(0.95)
        }
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        handleResize()
    }

    useEffect((() => {
        setinterval()
    }), [])

    return (
        <div className="container-main">
            <div className="container-main-max-width">
            <div className="container-roadmap-img">
                <div>
                    <img src={blackTopLines} alt="blackTopLines"/>
                </div>
            </div>
            <div className="container-roadmap">
                <p>ROADMAP</p>
                <h3>We decentralize the blockchain ecosystem, network by network, and step by step</h3>
            </div>
            <Swiper
                slidesPerView={slides}
                navigation={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">
                            <p className="swiper-slide roadmap__quarter">Q2 2021</p>
                            <p className="swiper-slide roadmap__title">Research</p>
                        </p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                State of the art privacy solutions
                            </li>
                            <li className="roadmap__list__item">
                                Discovering the gap between on-chain and off-chain privacy
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">Q3 2021</p>
                        <p className="swiper-slide roadmap__title">Product design</p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                Study on market needs and use cases
                            </li>
                            <li className="roadmap__list__item">
                                Product conceptualization
                            </li>
                            <li className="roadmap__list__item">
                                Seed funding
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">Q4 2021</p>
                        <p className="swiper-slide roadmap__title">MVP Launch</p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                Strategic and private sale
                            </li>
                            <li className="roadmap__list__item">
                                HTTP endpoint available
                            </li>
                            <li className="roadmap__list__item">
                                Endpoints will leverage privacy enabled gateway
                            </li>
                            <li className="roadmap__list__item">
                                Nodes managed by Omnia
                            </li>
                            <li className="roadmap__list__item">
                                Support for ETH, BSC, and BTC
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">Q1 2022</p>
                        <p className="swiper-slide roadmap__title">Early Access</p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                Secure mixnets PoC (beta)
                            </li>
                            <li className="roadmap__list__item">
                                Support for more blockchain networks (Polygon & Avalanche)
                            </li>
                            <li className="roadmap__list__item">
                                DeFi frontrunning protection (private mempools)
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">Q2 & Q3 2022</p>
                        <p className="swiper-slide roadmap__title">Public Launch</p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                Lightweight relayer software available to download and use
                            </li>
                            <li className="roadmap__list__item">
                                Support for WebSockets
                            </li>
                            <li className="roadmap__list__item">
                                Node verification protocol enabled
                            </li>
                            <li className="roadmap__list__item">
                                OMNIA token in use for accessing services
                            </li>
                            <li className="roadmap__list__item">
                                Staking and rewards for node providers and privacy relayers
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">Q4 2022</p>
                        <p className="swiper-slide roadmap__title">Mastering performance</p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                Creation of the OMNIA coin
                            </li>
                            <li className="roadmap__list__item">
                                Private round start
                            </li>
                            <li className="roadmap__list__item">
                                Public round and listing on exchanges
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="carousel-width">
                    <div className="swiper-slide roadmap__bottom__item1 completed-stage1 swiper-slide-active">
                        <p className="swiper-slide roadmap__quarter">2023</p>
                        <p className="swiper-slide roadmap__title">Becoming omnipotent</p>
                    </div>
                    <div className="swiper-slide roadmap__bottom__item completed-stage swiper-slide-active">
                        <ul className="roadmap__list">
                            <li className="roadmap__list__item">
                                Adding connectors for external node providers
                            </li>
                            <li className="roadmap__list__item">
                                Use-case tailored node relaying (i.e. speed tailored, etc)
                            </li>
                            <li className="roadmap__list__item">
                                CDN clustering
                            </li>
                            <li className="roadmap__list__item">
                                Dynamic rewards
                            </li>
                            <li className="roadmap__list__item">
                                Support for more blockchain networks
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/*<div className="container-roadmap-last">*/}
            {/*    <div className="container-roadmap-last-img">*/}
            {/*        <img src={blackBottomLines2} alt="blackBottomLines2"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        </div>
    );
}
