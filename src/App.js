import './App.css';
import MainPage from "./ProjectElements/MainPage/MainPage";
import ProfilePage from "./ProjectElements/Profile/Profile";
import MapPage from "./ProjectElements/Map/Map";
import UsersList from './UsersList';
import AllUsersPhotos from "./AllUsersPhotos";
import faviconLogo from './photos/Snavvy_Logo/favicon.svg';
import logo from './photos/Snavvy_Logo/Snavvy_logo_White.svg';
import randomAvatar from './photos/randomAvatar.jpg';
import PhotoComponent from "./PhotoComponent";
import {Helmet} from "react-helmet";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


const App = () => {
    return (

        <div id='app-root' className="App">
            <Helmet><title>Snavvy</title></Helmet>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
                    <Route path="/map" element={<MapPage></MapPage>}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
