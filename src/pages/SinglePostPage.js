import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function SinglePostPage() {
    const {id} = useParams();

    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])

    return (
        <div>
            id: {post.id}
            <h3>
                title: {post.title}
            </h3>
            <p>
                body: {post.body}
            </p>

        </div>
    )
}