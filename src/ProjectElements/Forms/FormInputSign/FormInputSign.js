import React, {useState} from 'react';
import styles from './FormInputSign.module.css';

import { useSelector} from 'react-redux';

export function FormInputSign(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const [inputValue, setInputValue] = useState('');

    const customStyle = {
        height: props.height,
        width: props.width,
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (props.onChange) {
            props.onChange(event.target.value);
        }
    };

    return (
        <div className={styles['formInput']}>
            <div className={`${styles['textInput']} ${currentTheme.textColor}`}>
                {props.text}
            </div>
            <input
                className={`${styles['fieldInput']} ${currentTheme.fieldInputColor}`}
                style={customStyle}
                value={inputValue}
                type={props.type}
                onChange={handleChange}
            />
        </div>
    );
}
