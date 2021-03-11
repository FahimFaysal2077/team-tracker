import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faGlobe, faMars, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import {  faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router';
import './TeamDetail.css';

const TeamDetail = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});
    const {strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBadge, strDescriptionEN, strStadiumDescription} = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    let gender = strGender === "Male" ? <img src="https://i.ibb.co/CWNmwkw/male.png" alt="" /> : <img src="https://i.ibb.co/tbdtGHw/female.png" alt="" />;
    
    return (
        <div>
            <div className="team-banner responsive">
                <img src="https://i.ibb.co/SPYJmN9/pexels-pablo-cordero-3845970.jpg" className="img-fluid" alt=""></img>
                <div
                    className="team-logo responsive"> <img src={strTeamBadge} alt=""/> 
                </div>
                    <div className="home-background">
                        
                            <div className="container team-detail home-page">
                                <div>
                                    <div className="team-detail-text">
                                        <h1>{strTeam}</h1>
                                        <br/>
                                        <h3><FontAwesomeIcon icon={faSearchLocation} /> <span class="ml-2">Founded:</span> {intFormedYear}</h3>
                                        <h3><FontAwesomeIcon icon={faFlag} /> <span class="ml-2">Country:</span> {strCountry}</h3>
                                        <h3><FontAwesomeIcon icon={faFutbol} /> <span class="ml-2">Sport Type:</span> {strSport}</h3>
                                        <h3><FontAwesomeIcon icon={faMars} /> <span class="ml-2">Gender:</span> {strGender}</h3>
                                    </div>
                                    <div className="team-gender-img">
                                    {gender}
                                    </div>
                                </div>
                            </div>
                        
                        <div className="container text">
                            <p>{strDescriptionEN}</p>
                            <br/>
                            <p>{strStadiumDescription}</p>
                        </div>
                        <div className="social-icons">
                            <a style={{color: '#4267B2'}} href={`https://${team.strFacebook}`} rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faFacebook} /></a>
                            <a style={{color: '#8a3ab9'}} href={`https://${team.strInstagram}`} rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
                            <a style={{color: '#1DA1F2'}} href={`https://${team.strTwitter}`} rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faTwitter} /></a>
                            <a style={{color: '#FF0000'}} href={`https://${team.strYoutube}`} rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faYoutube} /></a>
                            <a style={{color: '#4285F4'}} href={`https://${team.strWebsite}`} rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faGlobe} /></a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TeamDetail;