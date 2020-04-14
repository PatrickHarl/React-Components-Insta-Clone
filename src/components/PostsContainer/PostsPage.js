//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

// import data 
import dummyData from 'C:/Users/thera/Desktop/LambdaAssignments/week 6/React-Components-Insta-Clone/src/dummy-data.js'

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData)
  
  
  

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {

      posts.map(post => {

        return <Post post={post} />

      })

      }
    </div>
  );
};

export default PostsPage;
