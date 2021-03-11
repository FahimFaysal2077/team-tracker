import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './Team.css';

const Team = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
    const history = useHistory()

    const handleClick = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 my-3 team-card">
            <Card>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title className="">{strTeam}</Card.Title>
                        <Card.Text className="fw-bold">{strSport}</Card.Text>
                        <Button onClick={() => handleClick(idTeam)} variant="danger" className="">Explore <span className="ml-1"><FontAwesomeIcon icon={faArrowRight} /></span> </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;