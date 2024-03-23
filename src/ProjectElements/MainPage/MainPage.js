import styles from './MainPage.module.css';
import {NavbarExpanded} from "../NavBarExpanded/NavbarExpanded";
import {PhotoSet} from "../PhotoSet/PhotoSet";
import {MenuSignIn} from "../MenuSignIn/MenuSignIn";
// import UsersList from './UsersList';


const MainPage = () => {
    return (
        <div className = {styles['mainPage']}>
            <MenuSignIn></MenuSignIn>

            <NavbarExpanded></NavbarExpanded>

            <PhotoSet></PhotoSet>

            {/*<div>*/}
            {/*    <UsersList/>*/}
            {/*    /!*<PhotoComponent/>*!/*/}
            {/*    <AllUsersPhotos/>*/}
            {/*</div>*/}

        </div>
    );
};

export default MainPage;