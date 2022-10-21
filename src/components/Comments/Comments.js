import {useEffect, useState} from "react";
import Comment from "./Comment";

export default function Comments(){
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    },[])

    return(
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }

        </div>
    )
}