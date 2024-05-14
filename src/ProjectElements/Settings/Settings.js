import styles from './Settings.module.css';
import React, {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";

import {useSelector} from 'react-redux';
import avatarExample from "../Profile/avatarExample.jpg";
import {FormButton} from "../Forms/FormButton/FormButton";
import PublicProfile from "../Settings/PublicProfile.svg";
import Account from "../Settings/Account.svg";
import PasswordSecurity from "../Settings/PasswordSecurity.svg";
import LogOut from "../Settings/LogOut.svg";
import {FormInput} from "../Forms/FormInput/FormInput";

const Settings = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpened, setIsOpened] = useState(false);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('settingsContainer');

        if (!isOpened) {
            appRoot.style.filter = 'blur(12px)';
        } else {
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
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
                                <img className={styles['avatarUser']} src={avatarExample} alt=""/>
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
                                <li className={`${styles['item']}`}>
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={PublicProfile}
                                         alt=""/>
                                    <span className={`${styles['userInfoTextBottom']} ${currentTheme.textColor}`}>Public profile</span>
                                </li>
                                <li className={`${styles['item']}`}>
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={Account}
                                         alt=""/>
                                    <span
                                        className={`${styles['userInfoTextBottom']} ${currentTheme.textColor}`}>Account</span>
                                </li>
                                <li className={`${styles['item']}`}>
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={PasswordSecurity}
                                         alt=""/>
                                    <span className={`${styles['userInfoTextBottom']} ${currentTheme.textColor}`}>Password & Privacy</span>
                                </li>
                                <div className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}>
                                </div>
                                <li className={`${styles['item']}`}>
                                    <img className={`${currentTheme.svgColor} ${styles['icon']}`} src={LogOut}
                                         alt=""/>
                                    <span id="LogOut" className={`${styles['logOut']}`}>Log out</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles['settingsListContainerRightColumn']}`}>

                    <div className={`${styles['HeaderColumn']}`}>
                            <span
                                className={`${styles['settingsTextHeader']} ${currentTheme.textColor}`}>Public profile</span>

                            <div className={`${styles['profileLine']} ${currentTheme.backgroundReverseColor}`}>
                            </div>
                        </div>

                        <div className={`${styles['settingsListContainerRight']}`}>

                            <div className={`${styles['settingsDetailsLeft']}`}>
                                <span
                                    className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Name</span>

                                <div className={`${styles['formInformationInput']}`}>
                                    <FormInput
                                        height={'40px'}
                                        width={'75%'}
                                        text={'*Name need be here*'}
                                    ></FormInput>
                                </div>

                                <span className={`${styles['settingsTextDescription']} ${currentTheme.textGreyColor}`}>Your name may appear around Snavvy where you contribute or are mentioned. You can remove it at any time.</span>
                                <span
                                    className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Bio</span>
                                <div className={`${styles['formInformationInput']}`}>
                                    <FormInput
                                        height={'40px'}
                                        width={'75%'}
                                        text={'*Name need be here*'}
                                    ></FormInput>
                                </div>
                                <span
                                    className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Location</span>
                                <div className={`${styles['formInformationInput']}`}>
                                    <FormInput
                                        height={'40px'}
                                        width={'75%'}
                                        text={'*Location need be here*'}
                                    ></FormInput>
                                </div>
                            </div>

                            <div className={`${styles['settingsDetailsRight']}`}>
                                <span className={`${styles['settingsTextHeader2']} ${currentTheme.textColor}`}>Profile picture</span>

                                <div className={`${styles['avatarUserDivDescription']}`}>
                                    <img className={styles['avatarUser']} src={avatarExample} alt=""/>
                                </div>

                                <div className={`${styles['ButtonRelative']} ${currentTheme.textColor}`}>
                                    <FormButton
                                        height={'40px'}
                                        width={'100px'}
                                        text={'Edit'}
                                    ></FormButton>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <FormFooter></FormFooter>
            </div>
        </div>
    );
};

export default Settings;