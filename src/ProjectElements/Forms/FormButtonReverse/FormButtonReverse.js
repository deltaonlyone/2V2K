import React, {useState} from 'react';
import styles from './FormButtonReverse.module.css';

import {useSelector} from 'react-redux';

export function FormButtonReverse(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const customStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <button className={`${styles['formButton']} ${currentTheme.formButtonColorReverse}`}
                style={customStyle}
        >
            {props.text}
        </button>
    );
}