import React, {useState} from 'react';
import styles from './FormButton.module.css';

import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";

export function FormButton(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const customStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <button className={`${styles['formButton']} ${currentTheme.formButtonColor}`}
                style={customStyle}
        >

            {props.text}

        </button>
    );
}