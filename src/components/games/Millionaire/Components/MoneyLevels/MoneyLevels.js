import React from 'react'
import "./MoneyLevels.css"

export default (props)=>{
    return(
        <div className={"Money"}>
            {props.state.Questions.map((e,i)=>{
                return(
                    <div style={props.state.HellRightHelp === i ? {borderStyle:"solid",borderColor:"aqua red"}:null} className={`Level ${e.MoneyColor}`}>
                        <span className={"LevelIndex"}>{i+1}:</span><span className={"LevelMoney"}>{e.Money} $</span>
                    </div>
                )
            })}
        </div>
    )
}