import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts({id}){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(value => {
                    setPosts(value);
                    console.log(value);
                })
        }else {
            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(value => value.json())
                .then(value => {
                    setPosts(value);
                    console.log(value);
                })
        }
    }, [id]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    )
}