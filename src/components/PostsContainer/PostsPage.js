//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

// import data 


const PostsPage = (props) => {
  // set up state for your data
  const [posts, setPosts] = useState(props.filteredData)
   

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {

      props.filteredData.map(post => {

        return <Post post={post} />

      })

      }
    </div>
  );
};

export default PostsPage;
