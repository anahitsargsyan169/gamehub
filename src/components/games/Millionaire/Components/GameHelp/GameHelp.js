import React from 'react'
import "./GameHelp.css"

export default (props)=>{
    return(
        <>
            <div className={"HelpButtonsControl"}>
                <button className={"FriendHelp"} disabled={props.state.FriendButton} onClick={props.GFriendHelp}>{props.state.FriendButton ?<span>X</span>:null}</button>
                <button className={"FiftyFiftyHelp"} disabled={props.state.TwoButton} onClick={props.GHelpTwo}>{props.state.TwoButton ?<span>X</span>:null}</button>
                <button className={"HallHelp"} disabled={props.state.HellButton} onClick={props.GHelpHall}>{props.state.HellButton ?<span>X</span>:null}</button>
            </div>
                {props.state.HellRight ?
                <div className={"HelpWindow"}>
                    <div className={"HallHelpWindow"}>
                    <div className={"GameHelpHall"}>
                        <div><p>{props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent:props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent}%</p><div><div style={{height:props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent+"%":props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent+"%"}}></div></div><p>{props.state.Questions[props.state.HellRightHelp].Answer[0].AnswerNumber}</p></div>
                        <div><p>{props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent:props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent}%</p><div><div style={{height:props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent+"%":props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent+"%"}}></div></div><p>{props.state.Questions[props.state.HellRightHelp].Answer[1].AnswerNumber}</p></div>
                        <div><p>{props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent:props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent}%</p><div><div style={{height:props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent+"%":props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent+"%"}}></div></div><p>{props.state.Questions[props.state.HellRightHelp].Answer[2].AnswerNumber}</p></div>
                        <div><p>{props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent:props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent}%</p><div><div style={{height:props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent===100?100 - props.state.Questions[props.state.HellRightHelp].Hell[1].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[2].RandomPercent - props.state.Questions[props.state.HellRightHelp].Hell[0].RandomPercent+"%":props.state.Questions[props.state.HellRightHelp].Hell[3].RandomPercent+"%"}}></div></div><p>{props.state.Questions[props.state.HellRightHelp].Answer[3].AnswerNumber}</p></div>
                    </div>
                    <button
                        className={"NeonBTN"}
                        onClick={props.CloseHell}
                    >Ясно
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    </div>
                </div>
                : null
            }
            {props.state.FriendHelp ?
                <div className={"HelpWindow"}>
                    {props.state.FriendPhone ?
                        <div className={"FriendHelpWindow"}>
                            <h1>Ваш друг считает, что правильный ответ </h1>
                            <h1>{props.state.Questions[props.state.HellRightHelp].Answer.find(e=>e.Right === true).text}</h1>
                            <button
                                className={"NeonBTN"}
                                onClick={props.CloseFriend}
                            >Ясно
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    :
                        <div className={"AnimPhoneCallFriend"}></div>
                    }
                </div>
                :null
            }
        </>
    )
}