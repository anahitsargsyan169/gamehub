import React from 'react'
import "./LeaderBoard.css"

export default (props)=>{
    return(
        <div className={"LeaderBoard"}>
            <h1>LeaderBoard</h1>
            <div className={"LeaderUserControl"}>
                {props.state.LeaderBoard.map((e,i)=>{
                    return(
                        <div className={"PlayersBoard"}>
                            <p><span style={{color:'red'}}>{i+1}</span> | <span style={{color:'aqua',textTransform:'capitalize'}}>{e.UserName}</span> Score - <span style={{color:'lime'}}>{e.RightScore}</span> Time - <span style={{color:'orange'}}>{e.Time}</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}