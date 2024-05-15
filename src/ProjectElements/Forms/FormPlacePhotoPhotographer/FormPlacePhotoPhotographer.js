import React, {useState} from 'react';
import styles from './FormPlacePhotoPhotographer.module.css';

import {useSelector} from 'react-redux';
import {bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import {FormButton} from "../FormButton/FormButton";
import {FormButtonLink} from "../FormButtonLink/FormButtonLink";
import {SinglePhoto} from "../../Profile/InfinityScroll/PhotoElements/SinglePhoto/SinglePhoto";

export function FormPlacePhotoPhotographer(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const photos = props.photos; // Деструктуризація пропс

    return (
        <div className={`${styles['container']} ${currentTheme.backgroundColor}`}>

            <div className={`${styles['firstElements']} `}>
                <img src={props.avatar}
                     alt={`AvatarUser`}
                     className={`${styles['userAvatar']} `}
                />

                <a className={`${styles['userName']} ${currentTheme.textColor}`}>
                    Photo by {props.name}
                </a>

                <a className={`${styles['userName']} ${currentTheme.textColor}`}>
                    {props.username}
                </a>

                <div className={`${styles['buttonsStyle']} `}>
                    <FormButtonLink
                                link = {'/profile'}
                                height={'33px'}
                                width={'117px'}
                                text={'Get in touch'}
                    ></FormButtonLink>
                </div>
            </div>

            <div className={`${styles['secondElements']} `}>
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index}`}
                        className={styles['photosStyle']}
                    />
                ))}
            </div>


        </div>

    );
}