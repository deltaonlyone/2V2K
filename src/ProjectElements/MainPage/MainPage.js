import styles from './MainPage.module.css';
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {PhotoSet} from "./PhotoSet/PhotoSet";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";
import {MenuSignUp} from "../Registration/MenuSignUp/MenuSignUp";
import {MenuForgotPassword} from "../Registration/MenuForgotPassword/MenuForgotPassword";
import {AboutUs} from "./AboutUs/AboutUs";
import {useState} from "react";

import { useSelector} from 'react-redux';

// import UsersList from './UsersList';


const MainPage = () => {

    const currentTheme = useSelector(state => state.currentTheme);


    const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
    const handleToggleSignInBar = () => {
        const appRoot = document.getElementById('mainPageContainer');

        if(!isOpenedSignIn){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedSignIn(!isOpenedSignIn);
    };

    const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
    const handleToggleSignUpBar = () => {
        const appRoot = document.getElementById('mainPageContainer');

        if(!isOpenedSignUp){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedSignUp(!isOpenedSignUp);
    };

    const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);
    const handleToggleForgotPasswordBar = () => {
        const appRoot = document.getElementById('mainPageContainer');

        if(!isOpenedForgotPassword){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedForgotPassword(!isOpenedForgotPassword);
    };



    return (
        <div className = {`${styles['mainPage']} ${currentTheme.backgroundColor}`}>
            {isOpenedSignIn && <MenuSignIn handleToggleSign = {handleToggleSignInBar} handleToggleSignUp = {handleToggleSignUpBar} handleToggleForgotPassword = {handleToggleForgotPasswordBar}></MenuSignIn>}
            {isOpenedSignUp && <MenuSignUp handleToggleSignUp = {handleToggleSignUpBar} handleToggleSign = {handleToggleSignInBar}></MenuSignUp>}
            {isOpenedForgotPassword && <MenuForgotPassword handleToggleForgotPassword = {handleToggleForgotPasswordBar}></MenuForgotPassword>}

            <div id = 'mainPageContainer' className = {`${styles['mainPageContainer']}`}>
                <NavbarExpanded handleToggleSign = {handleToggleSignInBar}></NavbarExpanded>

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