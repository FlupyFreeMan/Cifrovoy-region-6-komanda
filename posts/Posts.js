import React from "react";
import './Posts.css';
// import postsData from "./PostsData.js";

function Post(props) {
    let texts = props.textPost.map(element => <Post_text text_post_element={element}/>)
    return (
        <a target="_blank" href={props.link} className="postCon">
            <div className="date">{props.date}</div>
            <img className="imgPost" src={props.urlImage} alt="image"></img>
            <div className="text_post_con">{texts}</div>
        </a>
        
        // <a href={props.link} className="postCon">
        //     <div className="date">{props.date}</div>
        //     <img className="imgPost" src={props.urlImage} alt="image"></img>
        //     <div className="text_box_post_con">
        //         <div className="text_post_con">{texts}</div>
        //     </div>
        // </a>
    )
}

function Post_text(props) {
    return (
        <div>
            <div className="text_post_element">{props.text_post_element}</div>
        </div>
    )
}



export default Post
