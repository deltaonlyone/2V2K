import React, {useState} from 'react';
import styles from './FormPhotographerSearchInfo.module.css';

import {useSelector} from 'react-redux';
import {bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import {FormButton} from "../FormButton/FormButton";

export function FormPhotographerSearchInfo(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const photos = props.photos; // Деструктуризація пропс

    return (
        <div className={`${styles['container']} ${currentTheme.backgroundColor}`}>
            <div className={`${styles['TopText']} `}>
                <a className={`${styles['userName']} ${currentTheme.textColor}`}>
                    {props.name}
                </a>

                <a className={`${styles['userLocation']} ${currentTheme.textGreyColorSecond}`}>
                    {props.location}
                </a>
            </div>

            <div className={`${styles['mainElements']} `}>
                <div className={`${styles['firstElements']} `}>
                    <img src={props.avatar}
                         alt={`AvatarUser`}
                         className={`${styles['userAvatar']} `}
                    />
                </div>

                <div className={`${styles['secondElements']} ${currentTheme.secondElementsColor}`}>
                    <div className={`${styles['scrollContainer']} `}>
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Photo ${index}`}
                                className={styles['photosStyle']}
                            />
                        ))}
                    </div>


                    <div className={`${styles['informationUserStyleDiv']} `}>
                        <a className={`${styles['informationUserStyle']} ${currentTheme.textColorTransparency}`}>
                            {props.informationUser}
                        </a>
                    </div>


                    <div className={`${styles['priceElements']} `}>
                        <a className={`${styles['priceHourStyle']} ${currentTheme.textColor}`}>
                            {props.priceHour}
                            $/hour
                        </a>

                        <a className={`${styles['minimumTimeStyle']} ${currentTheme.textColor}`}>
                            Minimum {props.minimumTime} hours
                        </a>
                    </div>
                </div>

                <div className={`${styles['thirdElements']} `}>
                    <div className={`${styles['buttonsStyle']} `}>
                        <FormButton height={'53px'}
                                    width={'198px'}
                                    text={'Send request'}
                        ></FormButton>
                    </div>

                    <div className={`${styles['buttonsStyle']} `}>
                        <FormButton height={'53px'}
                                    width={'198px'}
                                    text={'Call'}
                        ></FormButton>
                    </div>

                    <div className={`${styles['buttonsStyle']} `}>
                        <FormButton height={'53px'}
                                    width={'198px'}
                                    text={'See profile'}
                        ></FormButton>
                    </div>
                    <a className={`${styles['saveTextButton']} ${currentTheme.textColor}`}>
                        save
                    </a>
                </div>
            </div>
        </div>

    );
}