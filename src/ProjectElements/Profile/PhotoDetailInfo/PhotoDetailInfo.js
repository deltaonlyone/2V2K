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




                </div>



                <FormFooter></FormFooter>
            </div>

        </div>
    );
};

export default PhotoDetailInfo;