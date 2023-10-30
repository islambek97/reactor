import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'php', body: 'ghghgh'},
        {id: 2, title: 'go', body: 'dfdfdf'},
        {id: 3, title: 'c++', body: 'uyuyuu'},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}></hr>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={"Sort by"}
                    options={[
                        {value: 'title', name: 'Title'},
                        {value: 'body', name: 'Name'}
                    ]}
                />
            </div>

            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={"JS posts"}/>
                : <h1 style={{textAlign: 'center'}}>Posts empty</h1>
            }

        </div>
    );
}

export default App;
