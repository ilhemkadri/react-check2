import React from 'react';
import PlayersList from './PlayersList';

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>NBA Players</h1>
            <PlayersList />
        </div>
    );
};

export default App;
