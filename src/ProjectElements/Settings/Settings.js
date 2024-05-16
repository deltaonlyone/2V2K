import styles from './Settings.module.css';
import React, {useEffect, useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";

import {useSelector} from 'react-redux';
import {FormButton} from "../Forms/FormButton/FormButton";
import publicProfile from "./PublicProfile.svg";
import avatarExample from "../Settings/PublicProfile.svg";
import Account from "../Settings/Account.svg";
import PasswordSecurity from "../Settings/PasswordSecurity.svg";
import LogOut from "../Settings/LogOut.svg";
import {FormInput} from "../Forms/FormInput/FormInput";
import {FormTextArea} from "../Forms/FormTextArea/FormTextArea";
import {FormButtonReverse} from "../Forms/FormButtonReverse/FormButtonReverse";
import axios from "axios";

const Settings = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpened, setIsOpened] = useState(false);
    const [activeItem, setActiveItem] = useState('PublicProfile');

    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userBio, setUserBio] = useState(null);
    const [userUserName, setUserUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);



    const [check, setCheck] = useState(true);


    const handleClick = (item) => {
        setActiveItem(item);
    };

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('settingsContainer');

        if (!isOpened) {
            appRoot.style.filter = 'blur(12px)';
        } else {
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
    };

    const fetchUser = async () => {
        if (localStorage.getItem("token") !== null) {
            axios.get('http://localhost:8080/api/users/my', {
                headers: {
                    'X-Authorization': `${localStorage.getItem("token")}`, // замініть 'your-token-here' на ваш токен або інший заголовок
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setUser(response.data);
                    setUserName(user.name);
                    setUserBio(user.bio);
                    setUserUserName(user.username);
                    setUserEmail(user.email);
                    setUserLocation(user.location);
                    setProfilePhoto(user.profilePhoto);
                    setCheck(false);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        }
    };
    if (check) {
        fetchUser()
    }
    const renderContent = () => {
        switch (activeItem) {
            case 'PublicProfile':
                return (
                    <div>
                        <div className={styles['HeaderColumn']}>
                            <span
                                className={`${styles['settingsTextHeader']} ${currentTheme.textColor}`}>Public profile</span>
                            <div className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                        </div>
                        <div className={styles['settingsListContainerRight']}>
                            <div className={styles['settingsDetailsLeft']}>
                                <span
                                    className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Name</span>
                                    <div className={styles['formInformationInput']}>
                                        {userName ?(
                                        <FormInput height={'40px'} width={'75%'} text={`${userName}`}/>
                                        ):(
                                            <FormInput height={'40px'} width={'75%'} />
                                        )
                                        }

                                    </div>
                                <span className={`${styles['settingsTextDescription']} ${currentTheme.textGreyColor}`}>
                                    Your name may appear around Snavvy where you contribute or are mentioned. You can remove it at any time.
                                </span>
                                <span
                                    className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Bio</span>
                                <div className={styles['formInformationInput']}>
                                    {userBio ? (
                                    <FormTextArea maxLength={200} height="100px" width="75%" innerText={`${userBio}`}/>
                                    ):(
                                        <FormTextArea maxLength={200} height="100px" width="75%" innerText=""/>
                                    )
                                    }
                                </div>
                                <span
                                    className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Location</span>
                                <div className={styles['formInformationInput']}>
                                    {userLocation?
                                        (<FormInput height={'40px'} width={'75%'} text={`${userLocation}`}/>):
                                        (<FormInput height={'40px'} width={'75%'} text={""}/>)}

                                </div>
                                <div className={styles['UpdateButton']}>
                                    <FormButtonReverse height={'40px'} width={'25%'} text={'Update profile'}/>
                                </div>
                            </div>
                            <div className={styles['settingsDetailsRight']}>
                                <span className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Profile picture</span>
                                <div className={styles['avatarUserDivDescription']}>
                                    {profilePhoto ?(
                                    <img className={styles['avatarUser']} src={`http://localhost:8080/api/photos/` + profilePhoto.id} alt=""/>
                                        ):(
                                    <img className={styles['avatarUser']} src={avatarExample} alt=""/>)}
                                </div>
                                <div className={`${styles['ButtonRelative']} ${currentTheme.textColor}`}>
                                <FormButtonReverse height={'40px'} width={'100px'} text={'Edit'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Account':
                return (
                    <div>
                        <div className={styles['settingsListContainerRightColumn']}>
                            <div className={styles['HeaderColumn']}>
                                <span className={`${styles['settingsTextHeader']} ${currentTheme.textColor}`}>Change username</span>
                                <div
                                    className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                            </div>
                            <span
                                className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}></span>
                            <div className={styles['formInformationInput']}>
                                {userUserName ? (
                                    <FormInput height={'40px'} width={'15%'} text={`${userUserName}`}/>
                                ) : (
                                    <FormInput height={'40px'} width={'15%'}/>
                                )
                                }
                            </div>
                            <span className={`${styles['settingsTextDescription']} ${currentTheme.textGreyColor}`}>
                                    Your name may appear around Snavvy where you contribute or are mentioned. You can remove it at any time.
                            </span>

                            <div className={styles['SecondHeaderColumn']}>
                                <span
                                    className={`${styles['settingsTextHeader']} ${currentTheme.textColor}`}>Email</span>
                                <div
                                    className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                            </div>
                            <span
                                className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Add email address</span>
                            <div className={`${styles['divRow']}`}>
                                <div className={styles['formInformationInput']}>
                                    {userEmail ?(
                                        <FormInput height={'40px'} width={'163%'} text={`${userEmail}`}/>
                                    ):(
                                        <FormInput height={'40px'} width={'163%'} text={""}/>
                                    )}
                                </div>
                                <div className={styles['formButton']}>
                                    <FormButtonReverse height={'40px'}
                                                       width={'60px'}
                                                       text={'Add'}
                                    ></FormButtonReverse>
                                </div>
                            </div>

                            <div className={styles['SecondHeaderColumn']}>
                                <span className={`${styles['settingsDeleteAccount']}`}>Delete account</span>
                                <div
                                    className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                            </div>
                            <span
                                className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Once you delete your account, there is no going back. Please be certain.</span>
                            <div className={styles['formButton']}>
                                <FormButtonReverse height={'40px'}
                                                   width={'240px'}
                                                   text={'Delete your account'}
                                ></FormButtonReverse>
                            </div>
                        </div>
                    </div>
                );
            case 'PasswordSecurity':
                return (
                    <div>
                        <div className={styles['settingsListContainerRightColumn']}>
                            <div className={styles['HeaderColumn']}>
                                <span className={`${styles['settingsTextHeader']} ${currentTheme.textColor}`}>Change username</span>
                                <div
                                    className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                            </div>
                            <span
                                className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Old password</span>
                            <div className={styles['formInformationInput']}>
                                <FormInput height={'40px'} width={'500px'} text={''} type="password"/>
                            </div>
                            <span
                                className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>New password</span>
                            <div className={styles['formInformationInput']}>
                                <FormInput height={'40px'} width={'500px'} text={''}/>
                            </div>
                            <span
                                className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Confirm new password</span>
                            <div className={styles['formInformationInput']}>
                                <FormInput height={'40px'} width={'500px'} text={''}/>
                            </div>
                            <span className={`${styles['settingsTextDescription']} ${currentTheme.textGreyColor}`}>
                                    Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.
                            </span>

                            <div className={`${styles['divRow']}`}>
                                <div className={styles['UpdateButton']}>
                                    <FormButtonReverse height={'40px'} width={'150%'} text={'Update password'}/>
                                </div>
                                <span
                                    className={`${styles['forgotPasswordText']}`}>I forgot my password</span>
                            </div>
                        </div>
                    </div>
                );
            case 'LogOut':
            // return (
            //     <div>
            //     <div className={styles['HeaderColumn']}>
            //         <span className={`${styles['settingsTextHeader, logOut']}`}>Log Out</span>
            //             <div className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
            //         </div>
            //         <div className={styles['settingsListContainerRight']}>
            //             <div className={styles['settingsDetailsLeft']}>
            //                 <span className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Confirm Log Out</span>
            //                 {/* Add log out confirmation fields here */}
            //             </div>
            //         </div>
            //     </div>
            // );
            default:
                return null;
        }
    };

    return (
        <div className={`${styles['settingsPage']} ${currentTheme.backgroundColor}`}>

            {isOpened && <MenuSignIn handleToggleSign={handleToggleSingBar}></MenuSignIn>}

            <div id='settingsContainer' className={`${styles['settingsContainer']}`}>
                <NavbarExpanded handleToggleSign={handleToggleSingBar}></NavbarExpanded>

                <div className={`${styles['settingsListContainer']}`}>
                    <div className={`${styles['settingsListContainerLeft']}`}>
                        <div className={`${styles['userInfoContainer']}`}>
                            <div className={`${styles['avatarUserDiv']}`}>

                                {profilePhoto ?(
                                    <img className={styles['avatarUser']} src={`http://localhost:8080/api/photos/` + profilePhoto.id} alt=""/>
                                ):(
                                    <img className={styles['avatarUser']} src={avatarExample} alt=""/>)}
                            </div>

                            <div className={`${styles['userInfoDiv']}`}>
                                <h1 className={`${styles['userInfoTextTop']} ${currentTheme.textColor}`}>
                                    Kyrylo Sydor (kyrylo_sydor)
                                </h1>
                                <p className={`${styles['userInfoTextBottom']} ${currentTheme.textGreyColor}`}>
                                    Your personal account
                                </p>
                            </div>
                        </div>

                        <div className={`${styles['container']}`}>
                            <ul className={`${styles['list']}`}>
                                <li className={`${styles['item']}  ${activeItem === 'PublicProfile' ? currentTheme.textColorWhite : currentTheme.textColor} ${activeItem === 'PublicProfile' ? styles['active'] : ''}`}
                                    onClick={() => handleClick('PublicProfile')}
                                >
                                        <img className={styles['icon']} src={publicProfile} alt=""/>
                                    <span
                                        className={`${styles['userInfoTextBottom']}`}
                                        // style={{ color: activeItem === 'PublicProfile' ? 'white' : currentTheme.textColor }}
                                    >Public profile</span>
                                </li>
                                <li className={`${styles['item']} ${activeItem === 'Account' ? currentTheme.textColorWhite : currentTheme.textColor} ${activeItem === 'Account' ? styles['active'] : ''}`}
                                    onClick={() => handleClick('Account')}
                                >
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={Account}
                                         alt=""/>
                                    <span
                                        className={`${styles['userInfoTextBottom']}`}
                                        // style={{ color: activeItem === 'Account' ? 'white' : currentTheme.textColor }}
                                    >Account</span>
                                </li>
                                <li className={`${styles['item']} ${activeItem === 'PasswordSecurity' ? currentTheme.textColorWhite : currentTheme.textColor} ${activeItem === 'PasswordSecurity' ? styles['active'] : ''}`}
                                    onClick={() => handleClick('PasswordSecurity')}
                                >
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={PasswordSecurity}
                                         alt=""/>
                                    <span
                                        className={`${styles['userInfoTextBottom']}`}
                                        // style={{ color: activeItem === 'PasswordSecurity' ? 'white' : currentTheme.textColor }}
                                    >Password & Privacy</span>
                                </li>
                                <div
                                    className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}></div>
                                <li className={`${styles['item']} ${activeItem === 'LogOut' ? styles['active'] : ''}`}
                                    onClick={() => handleClick('LogOut')}
                                >
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={LogOut}
                                         alt=""/>
                                    <span
                                        id="LogOut"
                                        className={`${styles['logOut']}`}
                                    >Log out</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles['settingsListContainerRightColumn']}`}>
                        {renderContent()}
                    </div>
                </div>


                <FormFooter></FormFooter>
            </div>
        </div>
    );
};

export default Settings;