import React, {useState} from 'react';
import styles from './FormPlacePhotoPhotographer.module.css';

import {useSelector} from 'react-redux';
import {bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import {FormButton} from "../FormButton/FormButton";
import {FormButtonLink} from "../FormButtonLink/FormButtonLink";
import {SinglePhoto} from "../../Profile/InfinityScroll/PhotoElements/SinglePhoto/SinglePhoto";

import {SinglePhotoToProfile} from "../../Map/SinglePhotoToProfile/SinglePhotoToProfile";

export function FormPlacePhotoPhotographer(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const photos = props.photos; // Деструктуризація пропс

    return (
        <div className={`${styles['container']} ${currentTheme.backgroundColor}`}>

            {photos.map((photo, index) => (
                // <img
                //     key={index}
                //     src={photo}
                //     alt={`Photo ${index}`}
                //     className={styles['photosStyle']}
                // />

                <div className={`${styles['containerPhotoDiv']}`} >
                    <SinglePhotoToProfile
                        key={index}
                        img={photo}
                        alt={`Photo ${index}`}
                        className={styles['photosStyle']}
                        name={'Anton'}
                        avatar={photo}
                    />
                </div>


            ))}


        </div>

    );
}