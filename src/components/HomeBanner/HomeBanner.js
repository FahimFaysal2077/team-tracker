import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="home-banner1">
            <img className="" src="https://i.ibb.co/Yk6nr3R/pexels-pablo-cordero-3845970.jpg" class="img-fluid" alt="..."></img>
            <div className="home-banner2">
            <img src="https://i.ibb.co/3d5PQbD/logo.png" class="img-fluid" alt=""></img>
            </div>
            <div className="home-text">
                <span className="home-banner-text1">FA NATIONAL</span> <br/> <span className="home-banner-text2">FUTSAL LEAGUE</span>
            </div>
        </div>
    );
};

export default HomeBanner;