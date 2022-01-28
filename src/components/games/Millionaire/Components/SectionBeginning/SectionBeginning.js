import React from 'react'
import "./SectionBeginning.css"
import LeaderBoard from "./LeaderBoard/LeaderBoard";

export default (props)=>{
    return(
        <section id={"Beginning"} className='section'>
            {
                props.state.LeaderBoardActive
                    ?
                    <div className={"LeaderBoardWindow"}>
                        <div className={"LPCont"}>
                            <LeaderBoard
                                state={props.state}
                            />
                            <button
                                className={"NeonBTN"}
                                onClick={props.CloseLeaderBoard}
                            >CLOSE
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    :
                    null
            }
            <div className={"Start"}>
                {/* <input
                    value={props.state.UserName}
                    id={"NoName"}
                    maxLength={10}
                    onChange={props.valUserName.bind(this)}
                    placeholder={"UserName"} type={"text"}/> */}
                {/* <label
                    className={props.state.LabelColor}
                    htmlFor={"NoName"}>
                    Please Enter Your UserName</label> */}
                <button
                    className={"NeonBTN"}
                    onClick={props.Start}
                >START PLAY
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {/* <button
                    className={"NeonBTN"}
                    onClick={props.OpenLeaderBoard}
                >LEADERBOARD
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button> */}
            </div>
        </section>
    )
}