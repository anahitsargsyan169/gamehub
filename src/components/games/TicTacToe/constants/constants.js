export const GAME_TYPES = {
    VERSUS_COMPUTER: 0,
    TWO_PLAYERS: 1
}
export const PLAYER_X = 1;
export const PLAYER_O = 0;

export const ICON_TYPES = {
    X: <><polygon points="0,10 10,0 90,80 80,90"  fill="white" /><polygon points="80,0 90,10 10,90 0,80" fill="white" /></>,
    O: <circle cx="45" cy="45" r="38" stroke="white" strokeWidth="15" fill="rgb(42,46,51)" />
}

export const SCORES = {
    "O": 1,
    0: 0,
    "X": -1
};
export const switchPlayer = player => {
    return player === "X" ? "O" : "X";
};

export const WINNING_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};