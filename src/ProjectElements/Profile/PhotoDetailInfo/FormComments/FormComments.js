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

            <a className={`${styles['textUser']} ${currentTheme.textColor}`}>
                {props.name}
            </a>

            <a className={`${styles['textUsername']} ${currentTheme.textColor}`}>
                {props.username}
            </a>


            <div className={`${styles['avatarUserDiv']}`}>
                <a className={`${styles['textComment']} ${currentTheme.textColor}`}>
                    {props.comment}
                </a>
            </div>

        </div>

    );
}