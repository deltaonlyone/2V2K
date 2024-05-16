import React, {useState} from 'react';
import styles from './FormComments.module.css';

import {useSelector} from 'react-redux';
import {bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";

import axios from "axios";

export function FormComments(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    return (
        <div className={`${styles['container']} ${currentTheme.backgroundColor}`}>

            <div className={`${styles['avatarUserDiv']}`}>
                <img className={styles['avatarUser']}
                     src={props.avatar}
                     alt="User Avatar"/>
            </div>


            <div className={`${styles['textUserDiv']}`}>

                <b><a className={`${styles['textUserMiddle']} ${currentTheme.textColor}`}>

                    {props.username}

                </a></b>

                <a className={`${styles['textUserRight']} ${currentTheme.textColorTransparency}`}>
                    {props.comment}
                </a>
            </div>

        </div>

    );
}