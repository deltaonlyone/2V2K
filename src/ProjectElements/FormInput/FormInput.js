import React, {useState} from 'react';
import styles from './FormInput.module.css';

export function FormInput(props) {
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
            <div className={styles['TextInput']}>
                {props.text}
            </div>
            <input
                className={styles['fieldInput']}
                style={customStyle}
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
}
