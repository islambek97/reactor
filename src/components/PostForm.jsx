import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }


    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title}
                type="text"
                placeholder="Post name"/>
            <MyInput
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body}
                type="text"
                placeholder="Post description"/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;