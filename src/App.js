import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post)=>{
        setPosts(posts.filter())
    }

    return (
        <div className="App">
            <PostForm create = {createPost}/>
            <PostList posts={posts} title={"JS posts"}/>
        </div>
    );
}

export default App;
