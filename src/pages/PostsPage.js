import {useParams} from "react-router-dom";
import Posts from "../components/Posts/Posts";

export default function PostsPage() {
    const {id} = useParams();

    return (
        <div>
            Posts Page
            <Posts id={id}/>
        </div>
    )
}