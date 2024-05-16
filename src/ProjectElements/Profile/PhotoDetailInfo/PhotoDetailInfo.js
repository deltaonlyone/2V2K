import styles from './PhotoDetailInfo.module.css';
import React, {useState} from "react";
import {NavbarExpanded} from "../../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../../Registration/MenuSignIn/MenuSignIn";

import {useSelector} from 'react-redux';
import {FormButton} from "../../Forms/FormButton/FormButton";
import {FormButtonLink} from "../../Forms/FormButtonLink/FormButtonLink";
import {FormButtonReverse} from "../../Forms/FormButtonReverse/FormButtonReverse";
import {FormPhotographerSearchInfo} from "../../Forms/FormPhotographerSearchInfo/FormPhotographerSearchInfo";
import {FormPlacePhotoPhotographer} from "../../Forms/FormPlacePhotoPhotographer/FormPlacePhotoPhotographer";
import {SvgHeart, SvgSignOut} from "../../Forms/FormSvg/FormSvg";

const PhotoDetailInfo = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpened, setIsOpened] = useState(false);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('photoDetailInfoContainer');

        if (!isOpened) {
            appRoot.style.filter = 'blur(12px)';
        } else {
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
    };



    return (
        <div className={`${styles['photoDetailInfoPage']} ${currentTheme.backgroundColor}`}>

            {isOpened && <MenuSignIn handleToggleSign={handleToggleSingBar}></MenuSignIn>}

            <div id='photoDetailInfoContainer' className={`${styles['photoDetailInfoContainer']} ${currentTheme.backgroundColor}`}>
                <NavbarExpanded handleToggleSign={handleToggleSingBar}></NavbarExpanded>


                <div className={`${styles['containerDiv']} ${currentTheme.backgroundColor}`}>
                    <div className={`${styles['userInfoDiv']}`}>
                        <div className={`${styles['avatarUserDiv']}`}>
                            <img className={styles['avatarUser']}
                                 src={'https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg'}
                                 alt="User Avatar"/>
                        </div>

                        <a className={`${styles['userInfoTextName']} ${currentTheme.textColor}`}>
                            Kyrylo Sydor
                        </a>

                        <a className={`${styles['userInfoTextUsername']} ${currentTheme.textColor}`}>
                            @kyrylo_sydor
                        </a>



                    </div>

                    <div className={`${styles['currentPhotoDiv']}`}>

                        <img className={styles['currentPhoto']}
                             src={'https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg'}
                             alt="User Avatar"/>


                    </div>

                    <div className={`${styles['buttonsDiv']}`}>

                        <div className={`${styles['likeButton']}`}>

                            <SvgHeart
                                color={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                stroke={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                colorReverse={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "black" : "white"}
                                className={`${styles["svgTextLeft"]}`}
                            />

                            <a className={`${styles['likeText']} ${currentTheme.textColor}`}>
                                Like
                            </a>

                        </div>


                    </div>


                    <div className={`${styles['commentsDiv']}`}>




                    </div>


                </div>



                <FormFooter></FormFooter>
            </div>

        </div>
    );
};

export default PhotoDetailInfo;