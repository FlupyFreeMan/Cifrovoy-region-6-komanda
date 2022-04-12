import React, {Component} from "react"
import postsData from './PostsData.js';
import Post from './Posts.js';
import "./PostsComponent.css"

const postComponents = postsData.map(post => <Post link={post.link} date={post.date} urlImage={post.urlImage} textPost={post.textPost} />)


export default class PostsComponent extends Component {
    render() {
        return(
          <div className="posts_box" >
            {postComponents}
          </div>  
        );
    }
}