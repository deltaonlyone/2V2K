import styles from './MainPage.module.css';
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {PhotoSet} from "./PhotoSet/PhotoSet";
import {MenuSignIn} from "../MenuSignIn/MenuSignIn";
import {AboutUs} from "./AboutUs/AboutUs";
import {useState} from "react";

import { useSelector} from 'react-redux';

// import UsersList from './UsersList';


const MainPage = () => {

    const currentTheme = useSelector(state => state.currentTheme);

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
        <div className = {`${styles['mainPage']} ${currentTheme.backgroundColor}`}>
            {isOpened && <MenuSignIn handleToggleSign = {handleToggleSingBar}></MenuSignIn>}

            <div id = 'mainPageContainer' className = {`${styles['mainPageContainer']}`}>
                <NavbarExpanded handleToggleSign = {handleToggleSingBar}></NavbarExpanded>

                <PhotoSet></PhotoSet>

                <AboutUs></AboutUs>

                <FormFooter></FormFooter>
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