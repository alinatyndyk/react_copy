import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import homePage from "./pages/homePage";
import layoutPage from "./pages/layoutPage";
import aboutPage from "./pages/aboutPage";
import userPage from "./pages/userPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import CommentsPage from "./pages/CommentsPage";


function App() {

    return (
        <div>
            <div>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>

            <div>
                <h2>Content</h2>
                <Routes>
                    <Route path={'/'} element={homePage()}/>
                    <Route path={'/layout'} element={layoutPage()}>
                        <Route path={'users'} element={userPage()}>
                            <Route path={':id/posts'} element={<PostsPage/>}/>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}/>
                        <Route path={'posts/:id'} element={<SinglePostPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                    <Route path={'/about'} element={aboutPage()}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
