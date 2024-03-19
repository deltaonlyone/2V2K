import './App.css';
import './styles/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import NavbarExpanded from "./NavbarExpanded";
import NavbarSecond from "./NavbarSecond";
import {Helmet} from 'react-helmet';
import UsersList from './UsersList';
import AllUsersPhotos from "./AllUsersPhotos";
import faviconLogo from './photos/Snavvy_Logo/favicon.svg';
import logo from './photos/Snavvy_Logo/Snavvy_logo_White.svg';
import randomAvatar from './photos/randomAvatar.jpg';
import PhotoComponent from "./PhotoComponent";


const App = () => {
    return (
        <div className="App">
            <Helmet><title>Snavvy</title></Helmet>

            <NavbarExpanded></NavbarExpanded>

            {/*<NavbarSecond></NavbarSecond>*/}

            {/*<div>*/}
            {/*    <UsersList/>*/}
            {/*    /!*<PhotoComponent/>*!/*/}
            {/*    <AllUsersPhotos/>*/}
            {/*</div>*/}

        </div>
    );
};

export default App;
