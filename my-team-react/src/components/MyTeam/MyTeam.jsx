import React, { useEffect, useState } from 'react';
import AddedPlayer from '../AddedPlayer/AddedPlayer';
import Player from './Players/Player';

const MyTeam = () => {
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState([])
    useEffect(()=>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setPlayers((data)))
    },[])

    const buyPlayer = (players) =>{
        const addedPlayer = [...player, players]
        setPlayer(addedPlayer)
    }
    return (
        <div>
            <div className='text-center bg-success-subtle'>
                    <h1 className='fw-bold p-2'>My <span className='text-info'>Team</span></h1>
            </div>
            <div className='row mx-3'>
                <h3>My All Player</h3>
                <div className='my-player col-8 row row-cols-1 row-cols-md-3'>
                     {
                        players.map(player => <Player
                             player={player}
                             key={player.id}
                             buyPlayer={buyPlayer}
                             ></Player>)
                     }
                </div>
                <div className='player-summary col-4 ms-3 bg-info-subtle position-relative'>
                    <div className='position-sticky top-0'>
                        <h3 className='p-2 my-3 text-center'>Player Summary</h3>
                        <AddedPlayer player={player}></AddedPlayer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;