import styles from './Profile.module.css';
import React, {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";
import avatarExample from './avatarExample.jpg';
import MyInfiniteScroll from "./InfinityScroll/InfinityScroll";

import { useSelector} from 'react-redux';
import photoServices3 from "../MainPage/AboutUs/photo-3-services.jpg";
import {FormButton} from "../Forms/FormButton/FormButton";
import {FormSortPhotosTypes} from "../Forms/FormSortPhotosTypes/FormSortPhotosTypes";
import {SvgPencil, SvgPlus, SvgSignOut} from "../Forms/FormSvg/FormSvg";

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

    const words = ["Wedding", "Portrait", "Couple", "Landscape", "Kids"];

    return (
        <div className = {`${styles['profilePage']} ${currentTheme.backgroundColor}`}>
            {isOpened && <MenuSignIn handleToggleSign = {handleToggleSingBar}></MenuSignIn>}

            <div id = 'profileContainer' className = {`${styles['profileContainer']}`}>
                <NavbarExpanded handleToggleSign = {handleToggleSingBar}></NavbarExpanded>


                <div className={`${styles['profileAboutUserDiv']}`}>
                    <div className={`${styles['avatarUserDiv']}`}>
                        <img className={styles['avatarUser']} src={avatarExample} alt=""/>
                    </div>

                    <div className={`${styles['userInfoDiv']}`}>
                        <div className={`${styles['userInfoTop']}`}>
                            <h1 className= {`${styles['userInfoTextTopLeft']} ${currentTheme.textColor}`}>
                                Kyrylo Sydor
                            </h1>

                            <p className={`${styles['userInfoTextTopRight']} ${currentTheme.textColor}`}>
                                @kyrylo_sydor
                            </p>

                        </div>
                        <div className={`${styles['userInfoMiddle']}`}>

                            <p className={`${styles['userInfoTextMiddle']} ${currentTheme.textGreyColorSecond}`}>
                                Lviv, Ukraine
                            </p>

                        </div>
                        <div className={`${styles['userInfoBottom']}`}>
                            <p className={`${styles['userInfoTextBottom']} ${currentTheme.textColor}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur ac orci id ante rutrum elementum.
                                Donec risus neque, convallis a interdum eu, feugiat a dui.
                                Curabitur mattis velit vel nulla accumsan.
                            </p>

                        </div>


                    </div>

                    <div className={`${styles['profileButtonDiv']}`}>
                        <div className={`${styles['profileButton']}`}>
                            <FormButton height={'60px'}
                                        width={'200px'}
                                        text={
                                            <>
                                                <SvgPencil
                                                    color={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                    stroke={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                    className={`${styles["svgTextLeft"]}`}
                                                />
                                                {'       EDIT PROFILE'}
                                            </>
                                        }
                            ></FormButton>
                        </div>
                        <div className={`${styles['profileButton']}`}>
                            <FormButton height={'60px'}
                                        width={'200px'}
                                        text={
                                            <>
                                                <SvgPlus
                                                    color={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                    stroke={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                    className={`${styles["svgTextLeft"]}`}
                                                />
                                                {'       ADD PHOTOS'}
                                            </>
                                        }
                            ></FormButton>
                        </div>
                    </div>



                    <div className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}>

                    </div>
                </div>


                <FormSortPhotosTypes words={words} />


                <MyInfiniteScroll/>





                <FormFooter></FormFooter>
            </div>
        </div>
    );
};

export default Profile;