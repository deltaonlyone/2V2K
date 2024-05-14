import styles from './Locations.module.css';
import React, {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";

import {useSelector} from 'react-redux';
import {FormButton} from "../Forms/FormButton/FormButton";
import {FormButtonLink} from "../Forms/FormButtonLink/FormButtonLink";
import {FormButtonReverse} from "../Forms/FormButtonReverse/FormButtonReverse";
import photoServices1 from "../MainPage/AboutUs/photo-1-services.jpg";

const Locations = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpened, setIsOpened] = useState(false);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('locationsContainer');

        if (!isOpened) {
            appRoot.style.filter = 'blur(12px)';
        } else {
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
    };


    return (
        <div className={`${styles['locationsPage']} ${currentTheme.backgroundColor}`}>

            {isOpened && <MenuSignIn handleToggleSign={handleToggleSingBar}></MenuSignIn>}

            <div id='locationsContainer' className={`${styles['locationsContainer']} ${currentTheme.backgroundColor}`}>
                <NavbarExpanded handleToggleSign={handleToggleSingBar}></NavbarExpanded>
                <div className={`${styles['infoDiv']} ${currentTheme.backgroundColor}`}>
                    <div className={`${styles['infoTextDiv']} ${currentTheme.backgroundColor}`}>
                        <a className={`${styles['nameText']} ${currentTheme.textColor}`}>
                            Potocki Palace
                        </a>

                        <a className={`${styles['secondText']} ${currentTheme.textColorTransparency}`}>
                            Mykoly Kopernyka St, 15, Lviv
                        </a>

                        <a className={`${styles['secondText']} ${currentTheme.textColorTransparency}`}>
                            11:00 - 16:30
                        </a>

                        <a className={`${styles['secondText']} ${currentTheme.textColorTransparency}`}>
                            200 UAH
                        </a>

                        <a className={`${styles['infoText']} ${currentTheme.textColorTransparency}`}>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                        </a>
                    </div>

                    <div className={`${styles['infoImgDiv']} ${currentTheme.backgroundColor}`}>

                        <img className={styles['photoLocation']}
                             src={'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-42-740x491.jpg'}
                             alt=""/>

                        <div className={`${styles['infoImgButtons']} `}>
                            <div className={`${styles['infoImgButtonsLeft']} `}>
                                <FormButtonLink height={'35px'}
                                                width={'131px'}
                                                text={'Show on map'}
                                ></FormButtonLink>
                            </div>
                            <div className={`${styles['infoImgButtonsRight']} `}>
                                <FormButtonReverse height={'35px'}
                                                   width={'165px'}
                                                   text={'Order a photo shoot'}
                                ></FormButtonReverse>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['somePhotoTextDiv']}`}>
                    <a className={`${styles['somePhotoText']} ${currentTheme.textColor}`}>
                        Some photo from this place
                    </a>
                </div>

                <FormFooter></FormFooter>
            </div>

        </div>
    );
};

export default Locations;