import React from 'react'
import "./GameEnd.css"

export default (props)=>{
    return(
        <div className={"GameEnd"}>
            <h1>END</h1>
            <p className={"EndScore"}>Score = <span style={props.state.RightScore > 0 ? {color:'lime'} : {color:"red"}}>{props.state.RightScore}</span></p>
            <p className={"EndTimer"}>Time = <span>{props.state.Time}</span> s</p>
            <p className={"EndBal"}>MoneyWin = <span style={props.state.UserMoney > 0 ? {color:'lime'} : {color:"red"}}>{props.state.TakeMoney ? props.state.UserMoney : props.state.FixedMoney}</span> $</p>
            <button
                className={"NeonBTN"}
                onClick={props.Replay}
            >REPLAY
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}