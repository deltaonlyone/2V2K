import styles from './Profile.module.css';
import React, {useEffect, useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";
import avatarExample from './avatarExample.jpg';
import MyInfiniteScroll from "./InfinityScroll/InfinityScroll";
import avatarExample from "./User_cicrle_light.svg";

import { useSelector} from 'react-redux';
import photoServices3 from "../MainPage/AboutUs/photo-3-services.jpg";
import {FormButton} from "../Forms/FormButton/FormButton";
import {FormSortPhotosTypes} from "../Forms/FormSortPhotosTypes/FormSortPhotosTypes";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Profile = () => {

    const currentTheme = useSelector(state => state.currentTheme);
    const location = useLocation();
    const [isOpened, setIsOpened] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`http://localhost:8080/api/users/${location.state}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        };
        fetchUser();
    }, []);
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

                {user && (
                <div className={`${styles['profileAboutUserDiv']}`}>
                    <div className={`${styles['avatarUserDiv']}`}>
                        {user.userPhoto &&
                        <img className={styles['avatarUser']} src={`http://localhost:8080/api/photos/`+user.profilePhoto.id} alt=""/>
                        }
                        {!user.userPhoto &&
                            <img className={styles['avatarUser']}
                                 src={avatarExample} alt=""/>
                        }
                            </div>

                            <div className={`${styles['userInfoDiv']}`}>
                        <div className={`${styles['userInfoTop']}`}>
                            {user.name &&
                            <h1 className={`${styles['userInfoTextTopLeft']} ${currentTheme.textColor}`}>
                                {user.name}
                            </h1>
                            }
                            <p className={`${styles['userInfoTextTopRight']} ${currentTheme.textColor}`}>
                                @{user.username}
                            </p>

                        </div>
                        <div className={`${styles['userInfoMiddle']}`}>
                            {(user.city || user.country) &&
                            <p className={`${styles['userInfoTextMiddle']} ${currentTheme.textGreyColorSecond}`}>
                                {user.city} {user.country}
                            </p>
                            }
                        </div>
                        <div className={`${styles['userInfoBottom']}`}>
                            {user.bio &&
                            <p className={`${styles['userInfoTextBottom']} ${currentTheme.textColor}`}>
                                {user.bio}
                            </p>
                            }
                            {!user.bio &&
                                <p className={`${styles['userInfoTextBottomEdit']} ${currentTheme.textGreyColorThird}`}>
                                    You can change your bio in the settings
                                </p>
                            }
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

                )}

                <FormSortPhotosTypes words={words} />

                <MyInfiniteScroll user ={user}/>

                <FormFooter></FormFooter>
            </div>
        </div>
    );
};

export default Profile;