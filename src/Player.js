import React from 'react';
import './Player.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <div className="player-card">
            <img className="player-image" src={imageUrl} alt={`${name}`} />
            <div className="player-info">
                <h2>{name}</h2>
                <p><strong>Team:</strong> {team}</p>
                <p><strong>Nationality:</strong> {nationality}</p>
                <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
                <p><strong>Age:</strong> {age}</p>
            </div>
        </div>
    );
};

Player.defaultProps = {
    imageUrl: "https://via.placeholder.com/150"
};

export default Player;
