import React, {useState} from 'react';
import styles from './FormButtonBlue.module.css';

import {useSelector} from 'react-redux';

export function FormButtonBlue(props) {
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