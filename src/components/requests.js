export const fetchLeadersData = (games, setData) => {
    fetch('./leadersData.json')
    .then((res)=> res.json())
    .then((data)=>{
        let scores = {};
        games.map(game => {
            let filteredScores = {};
            filteredScores[game.path] = data.filter((user) => user.scores[game.path] != 0);
            scores[game.path] = filteredScores[game.path].sort((a, b) => b.scores[game.path] - a.scores[game.path]);
            scores[game.path].forEach((user, index)=> {
                if(!user.rank) user.rank = {};
                user.rank[game.path] = index})
        });
        setData(scores);
    })
}
