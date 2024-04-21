import styles from './Profile.module.css';
import {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";

import { useSelector} from 'react-redux';

const Profile = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpened, setIsOpened] = useState(false);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('profileContainer');

        if(!isOpened){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
    };

    return (
        <div className = {`${styles['profilePage']} ${currentTheme.backgroundColor}`}>
            {isOpened && <MenuSignIn handleToggleSign = {handleToggleSingBar}></MenuSignIn>}

            <div id = 'profileContainer' className = {`${styles['profileContainer']}`}>
                <NavbarExpanded handleToggleSign = {handleToggleSingBar}></NavbarExpanded>


                <FormFooter></FormFooter>
            </div>
        </div>
    );
};

export default Profile;