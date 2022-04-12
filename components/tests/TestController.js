import React from "react";

import './Tests.css';
// import postsData from "./PostsData.js";

function TestCon(props) {
    return (
        <div className="testCon">
            <div className="num">Вопрос {props.id}</div>
            <div className="answer">{props.answers[0].answerText}</div>
            <div className="answer">{props.answers[1].answerText}</div>
        </div>
    )
}

export default TestCon