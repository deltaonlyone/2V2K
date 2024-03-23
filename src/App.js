import './App.css';
import MainPage from "./ProjectElements/MainPage/MainPage";
import UsersList from './UsersList';
import AllUsersPhotos from "./AllUsersPhotos";
import faviconLogo from './photos/Snavvy_Logo/favicon.svg';
import logo from './photos/Snavvy_Logo/Snavvy_logo_White.svg';
import randomAvatar from './photos/randomAvatar.jpg';
import PhotoComponent from "./PhotoComponent";
import {Helmet} from "react-helmet";



const App = () => {
    return (
        <div className="App">
            <Helmet><title>Snavvy</title></Helmet>
            <MainPage></MainPage>
        </div>
    );
};

export default App;
