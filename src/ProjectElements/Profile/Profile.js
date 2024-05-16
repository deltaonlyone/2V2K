import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import styles from './Profile.module.css';
import { NavbarExpanded } from "../Forms/NavBarExpanded/NavbarExpanded";
import { FormFooter } from "../Forms/FormFooter/FormFooter";
import { MenuSignIn } from "../Registration/MenuSignIn/MenuSignIn";
import MyInfiniteScroll from "./InfinityScroll/InfinityScroll";
import avatarExample from "./User_cicrle_light.svg";
import { FormButton } from "../Forms/FormButton/FormButton";
import { FormSortPhotosTypes } from "../Forms/FormSortPhotosTypes/FormSortPhotosTypes";

const Profile = () => {
    const currentTheme = useSelector(state => state.currentTheme);
    const location = useLocation();
    const [isOpened, setIsOpened] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${location.state}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUser();
    }, [location.state]);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('profileContainer');
        appRoot.style.filter = isOpened ? 'blur(0px)' : 'blur(12px)';
        setIsOpened(!isOpened);
    };

    const words = ["Wedding", "Portrait", "Couple", "Landscape", "Kids"];

    const onCategoryChange = (category) => {
        console.log(`Selected category: ${category}`);
        setSelectedCategory(category);
    };

    return (
        <div className={`${styles['profilePage']} ${currentTheme.backgroundColor}`}>
            {isOpened && <MenuSignIn handleToggleSign={handleToggleSingBar} />}
            <div id='profileContainer' className={`${styles['profileContainer']}`}>
                <NavbarExpanded handleToggleSign={handleToggleSingBar} />
                {user && (
                    <div className={`${styles['profileAboutUserDiv']}`}>
                        <div className={`${styles['avatarUserDiv']}`}>
                            {user.userPhoto ? (
                                <img className={styles['avatarUser']} src={`http://localhost:8080/api/photos/` + user.profilePhoto.id} alt="" />
                            ) : (
                                <img className={styles['avatarUser']} src={avatarExample} alt="" />
                            )}
                        </div>
                        <div className={`${styles['userInfoDiv']}`}>
                            <div className={`${styles['userInfoTop']}`}>
                                {user.name && <h1 className={`${styles['userInfoTextTopLeft']} ${currentTheme.textColor}`}>{user.name}</h1>}
                                <p className={`${styles['userInfoTextTopRight']} ${currentTheme.textColor}`}>@{user.username}</p>
                            </div>
                            <div className={`${styles['userInfoMiddle']}`}>
                                {(user.city || user.country) && <p className={`${styles['userInfoTextMiddle']} ${currentTheme.textGreyColorSecond}`}>{user.city} {user.country}</p>}
                            </div>
                            <div className={`${styles['userInfoBottom']}`}>
                                {user.bio ? (
                                    <p className={`${styles['userInfoTextBottom']} ${currentTheme.textColor}`}>{user.bio}</p>
                                ) : (
                                    <p className={`${styles['userInfoTextBottomEdit']} ${currentTheme.textGreyColorThird}`}>You can change your bio in the settings</p>
                                )}
                            </div>
                        </div>
                        <div className={`${styles['profileButtonDiv']}`}>
                            <div className={`${styles['profileButton']}`}>
                                <FormButton height={'60px'} width={'200px'} text={'EDIT PROFILE'} />
                            </div>
                            <div className={`${styles['profileButton']}`}>
                                <FormButton height={'60px'} width={'200px'} text={'ADD PHOTOS'} />
                            </div>
                        </div>
                        <div className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                    </div>
                )}
                <FormSortPhotosTypes words={words} onCategoryChange={onCategoryChange} />
                <MyInfiniteScroll user={user} category={selectedCategory} />
                <FormFooter />
            </div>
        </div>
    );
};

export default Profile;
