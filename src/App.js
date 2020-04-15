/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage'
import SearchBar from './components/SearchBar/SearchBarContainer'
import dummyData from "./dummy-data";



const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [unfilteredPosts, setUnfilteredPosts] = useState(dummyData)


  const filterPosts = () => {

    return unfilteredPosts.filter(post => {


      if (searchTerm === '')
      {

        return post

      }
      if (post.username.includes(searchTerm))
      {

        return post

      }
      

  })
}

    
  return (
    <div className="App">
      {/* Add imported components here to render them */}
  
        <SearchBar setSearchTerm={setSearchTerm}/>
        <PostsPage filteredData={filterPosts()}/>
        

    </div>
  );
};

export default App;
