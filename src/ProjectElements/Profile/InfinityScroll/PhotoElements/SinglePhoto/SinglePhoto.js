import React, {useState} from 'react';
import styles from './SinglePhoto.module.css';

import {useSelector} from 'react-redux';
import {FormButtonLink} from "../../../../Forms/FormButtonLink/FormButtonLink";

export function SinglePhoto(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    return (

        <div className={styles.photoContainer}>
            <img
                src={'http://localhost:8080/api/photos/'+props.img}
                // src={props.img}
                alt="Photo"
                className={styles.photoImg}
            />

            <div className={styles.hoverDiv}>
                <div className={styles.hoverDivDiv}>
                    <div className={styles.avatarUserDiv}>
                        <img src={props.avatar}
                             alt={`AvatarUser`}
                             className={`${styles['userAvatar']} `}
                        />
                    </div>

                    <a className={`${styles['userName']} ${currentTheme.textColor}`}>
                        {props.name}
                    </a>

                    <div className={styles.buttonDiv}>
                        <FormButtonLink
                            link={'/profile'}
                            height={'50px'}
                            width={'150px'}
                            text={'SEE MORE'}
                        ></FormButtonLink>
                    </div>
                </div>
            </div>
        </div>

    );
}