import React from 'react';
import './App.css';
import Posts from "./components/Posts"
import PostsForm from './components/PostsForm';
function App() {
  return (
    <div className="App">
      <PostsForm/>
      <hr/>
      <Posts/>
    </div>
  );
}

export default App;
