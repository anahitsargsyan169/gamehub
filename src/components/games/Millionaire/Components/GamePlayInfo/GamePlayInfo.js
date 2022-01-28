import React from 'react'
import "./GamePlayInfo.css"

export default (props)=>{
    return(
        <>
            <p className={"RoundTime"}>{props.state.RoundTime} s</p>
            <div className={"SMTControl"}>
                <p className={"ScoreP"}>Score = <span style={props.state.RightScore > 0 ? {color:'orange'}:{color:"red"}}>{props.state.RightScore}</span></p>
                <p className={"UserMoney"}>Bal = <span style={props.state.UserMoney > 0 ? {color:'orange'}:{color:"red"}}>{props.state.UserMoney}</span> $</p>
                <p className={"FixedMoney"}>FM = <span style={props.state.FixedMoney > 0 ? {color:'orange'}:{color:"red"}}>{props.state.FixedMoney}</span> $</p>
                <p className={"Timer"}>{props.state.Timer} <span style={{color:"aqua"}}>s</span></p>
                <button
                    className={"NeonBTN"}
                    onClick={props.state.RightScore > 0 ? props.TakeMoney : null}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    Take
                </button>
            </div>
        </>
    )
}