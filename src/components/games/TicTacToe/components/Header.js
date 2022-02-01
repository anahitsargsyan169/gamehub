import React from 'react';

import { GAME_TYPES } from '../constants/constants';
import user from '../user.png';
import users from '../users.png';

const Header = (props) => {
    const {TWO_PLAYERS, VERSUS_COMPUTER} = GAME_TYPES;
    const {gameType,setGameType} = props;
    
    const GameType = ({ type, name, className }) => {
        return (
            <div>
                <img className= {className} id={name} src={type ? users : user} alt={name} onClick={() => handleChange(type)} />
            </div>
        )
    }
    const handleChange = (type) => {
        if(gameType !== type) {setGameType(type)};
    }
    return (
        <div className="tic-tac-teo-header">
            <div>
                <GameType className={gameType ? null : "clicked"} type={VERSUS_COMPUTER} name="versus_Computer"  />
                <GameType className={gameType ? "clicked" : null} type={TWO_PLAYERS} name="2_Players" />
            </div>
        </div>
    );
}

export default Header;
