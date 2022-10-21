import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import homePage from "./pages/homePage";
import layoutPage from "./pages/layoutPage";
import aboutPage from "./pages/aboutPage";
import usersPage from "./pages/usersPage";

function App() {

    const userId = (id) => {
        console.log(id);
        return id;
    }

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
                        <Route path={'users'} element={usersPage()}>
                            <Route path={`${userId}`} element={homePage()}/>
                        </Route>
                    </Route>
                    <Route path={'/about'} element={aboutPage()}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
