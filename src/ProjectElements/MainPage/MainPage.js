import styles from './MainPage.module.css';
import {NavbarExpanded} from "../NavBarExpanded/NavbarExpanded";
import {PhotoSet} from "../PhotoSet/PhotoSet";
import {MenuSignIn} from "../MenuSignIn/MenuSignIn";
import {AboutUs} from "../AboutUs/AboutUs";
import {useState} from "react";
// import UsersList from './UsersList';


const MainPage = () => {

    const [isOpened, setIsOpened] = useState(false);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('mainPageContainer');

        if(!isOpened){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
    };



    return (
        <div className = {styles['mainPage']}>
            {isOpened && <MenuSignIn handleToggleSign = {handleToggleSingBar}></MenuSignIn>}

            <div id = 'mainPageContainer'>
                <NavbarExpanded handleToggleSign = {handleToggleSingBar}></NavbarExpanded>

                <PhotoSet></PhotoSet>

                <AboutUs></AboutUs>
            </div>

            {/*<div>*/}
            {/*    <UsersList/>*/}
            {/*    /!*<PhotoComponent/>*!/*/}
            {/*    <AllUsersPhotos/>*/}
            {/*</div>*/}

        </div>
    );
};

export default MainPage;