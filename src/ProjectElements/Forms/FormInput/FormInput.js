import React, {useState} from 'react';
import styles from './FormInput.module.css';

import {useSelector} from 'react-redux';

export function FormInput(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const customStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <input
            placeholder = {props.text}
            className={`${styles['formInput']} ${currentTheme.formInputColor}`}
            style={customStyle}/>
    );
}