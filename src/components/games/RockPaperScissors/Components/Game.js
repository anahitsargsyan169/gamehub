import React from "react";
import "./Game.css"
import Rock from "./Images/Rock.png"
import Scis from"./Images/Scis.png"
import Paper from"./Images/Paper.png"

class Game extends React.Component {
    state = {
        GameObjects: [
            {
                id: "Rock",
                img: Rock,
                selected: false,
            },
            {
                id: "Scis",
                img: Scis,
                selected: false,
            },
            {
                id: "Paper",
                img: Paper,
                selected: false,
            },
        ],
        PlayerSelect: null,
        PlayerScore: 0,
        BotSelect: null,
        BotScore: 0,
        Status: "Status",
    }

    SelectFunction = (e) =>{
        
        for(let i = 0; i < this.state.GameObjects.length; i++){
            if(this.state.GameObjects[i].selected === true){
                this.state.GameObjects[i].selected = false
                this.setState({})
            }
        }

        e.selected = !e.selected
        this.setState({
            PlayerSelect: e,
            BotSelect: null,
        })

    }

    GameStart = () =>{
        const botRandom = Math.floor(Math.random()*this.state.GameObjects.length)

        if(this.state.PlayerSelect === null){
            return;
        }

        this.setState({
            BotSelect: this.state.GameObjects[botRandom]
        })
            
        setTimeout(()=>{
            if(this.state.PlayerSelect.id === "Rock" && this.state.BotSelect.id === "Rock"){
                this.setState({
                    Status: "Standoff"
                })
            }else if(this.state.PlayerSelect.id === "Rock" && this.state.BotSelect.id === "Scis"){
                this.setState({
                    Status: "The player won",
                    PlayerScore: this.state.PlayerScore + 1
                })
            }else if(this.state.PlayerSelect.id === "Scis" && this.state.BotSelect.id === "Scis"){
                this.setState({
                    Status: "Standoff"
                })
            }else if(this.state.PlayerSelect.id === "Scis" && this.state.BotSelect.id === "Paper"){
                this.setState({
                    Status: "The player won",
                    PlayerScore: this.state.PlayerScore + 1
                })
            }else if(this.state.PlayerSelect.id === "Paper" && this.state.BotSelect.id === "Paper"){
                this.setState({
                    Status: "Standoff"
                })
            }else if(this.state.PlayerSelect.id === "Paper" && this.state.BotSelect.id === "Rock"){
                this.setState({
                    Status: "The player won",
                    PlayerScore: this.state.PlayerScore + 1
                })
            }else{
                this.setState({
                    Status: "The Bot won",
                    BotScore: this.state.BotScore + 1
                })
            }
        },100)
    }

    render() { 
        const {Status, PlayerSelect, PlayerScore, BotSelect, BotScore} = this.state
        return (
            <header className="header">
                <div className={"GameStatus"}>{Status}</div>
                <div className="Score">
                    <span>{PlayerScore}</span>
                    :
                    <span>{BotScore}</span>
                </div>
                <div className={"GameArea"}>
                    <div className={"BattleArena"}>
                        <div className={"PlayerWindow window"}><img src={PlayerSelect !== null ? PlayerSelect.img : null} alt={PlayerSelect !== null ? PlayerSelect.id : null} width={"100%"} height={"100%"} /></div>
                        <div className={"WindowSeparator"}></div>
                        <div className={"BotWindow window"}><img src={BotSelect !== null ? BotSelect.img : null} alt={BotSelect !== null ? BotSelect.id : null} width={"100%"} height={"100%"} /></div>
                    </div>

                    <p className={"Info"}>Please choose the attack method</p>

                    <div className={"PlayerGameObjects"}>
                        {this.state.GameObjects.map( (e,i)=>{
                            return(
                                <img 
                                    key={i} 
                                    src={e.img}
                                    alt={e.id}
                                    width={"100px"} 
                                    height={"100px"}
                                    className={e.selected ? "selected" : null}
                                    onClick={this.SelectFunction.bind(this, e)}
                                />
                            )
                        })}
                    </div> 
                </div>
                <button 
                        className={"StartBtn"}
                        onClick={()=>{this.GameStart()}}

                    >Start</button>
            </header>
        );
    }
}
 
export default Game;