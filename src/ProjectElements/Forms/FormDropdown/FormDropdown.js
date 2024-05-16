import React from 'react';
import styles from './FormDropdown.module.css';

import { useSelector } from 'react-redux';

export function FormDropdown(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const customStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <select
            className={`${styles['formInput']} ${currentTheme.formInputColor}`}
            style={customStyle}>
            <option value="" disabled selected hidden>{props.placeholder}</option>
            {props.options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}
