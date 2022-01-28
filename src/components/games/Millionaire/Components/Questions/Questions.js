import React from 'react'
import './Questions.css'

export default (props)=> {
    return props.state.HellRightHelp === props.Qindex ?
        <div className={"question"}>
            {/*<img src={props.Qelem.QuestionImg} width={"100%"} height={"300px"}/>*/}
            <h1><span style={{color:"yellow"}}>Вопрос №</span><span style={{color:"lime"}}>{props.Qindex+1}</span><br/><span style={{color:"orangered",textShadow:"1px 1px 1px white"}}>{props.Qelem.Question}</span></h1>
            <div className={"Answers"}>
                {
                    props.Qelem.Answer.map((e,i)=>{
                    return(
                        <div
                            className={e.Class}
                            onClick={props.state.Answers.length === props.Qindex && props.state.WindowFix ? props.Answer.bind(this,e,props.Qelem) : null}
                        ><span style={{fontWeight:"bold", color:"goldenrod"}}>{e.AnswerNumber} : </span>{e.FiftyFifty ? null : e.text}</div>
                    )
                })
                }
            </div>
        </div>
        :
        null
}