import React from 'react';

const Footer = (props) => {
    const {context} = props;
    const {restartFunc, gameState, turn, score} = context;
    let gameMessage;

        switch (gameState) {
        case "X":
            gameMessage = <div><h4>{gameState} is the winner</h4></div>;
            break;
        case "DRAW":
            gameMessage = <div><h4>No one wins.</h4></div>;
            break;
        default:
            gameMessage = <div><h4>Turn: {turn}</h4></div>
            break;
    
}
    return (
        <div className="tic-tac-toe-footer">
            <div>
                <div>
                    {gameMessage}
                </div>
                <div>
                    <h4>X:{score[0]} O:{score[1]}</h4>
                </div>
            </div>
            <div>
            <div className="button" onClick = {() => restartFunc()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                New Game
            </div>
            <div className="button" onClick = {() => restartFunc(true)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Reset
            </div>
            </div>
        </div>
    );
}

export default Footer;
