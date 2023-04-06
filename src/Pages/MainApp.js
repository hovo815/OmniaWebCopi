import React from 'react';
import Header from "./Header/Header";
import BlockchainNode from "./BlockchainNode/BlockchainNode";
import Cards from "./Cards/Cards";
import SectionNewsArticles from "./SectionNewsArticles/SectionNewsArticles";
import UserCard from "./UserCard/UserCard";
import TrusdetCard from "./TrusdetCard/TrustedCard";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";
import App from "./Carusel/Carusel";
import CaruselApp from "./Carusel/Carusel";


function MainApp(props) {
    return (
        <div>
            <Header/>
            <BlockchainNode/>
            <Cards/>
            <CaruselApp/>
            <SectionNewsArticles/>
            <UserCard/>
            <TrusdetCard/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default MainApp;