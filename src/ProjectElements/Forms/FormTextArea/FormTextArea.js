import React, { useState } from 'react';
import styles from './FormTextArea.module.css';

import {useSelector} from 'react-redux';

export function FormTextArea({ maxLength, height, width, innerText }) {
    const [text, setText] = useState('');
    const remainingChars = maxLength - text.length;
    const currentTheme = useSelector(state => state.currentTheme);

    const handleChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setText(e.target.value);
        }
    };

    return (
        <div className={styles['textAreaContainer']} style={{ height, width }}>
            <textarea
                className={`${styles['textArea']} ${currentTheme.formInputColor}`}
                value={text}
                onChange={handleChange}
                maxLength={maxLength}
                style={{height: '100%', width: '100%'}}
                placeholder={innerText}
            />
            <div className={styles['charCount']}>
                {remainingChars}/{maxLength}
            </div>
        </div>
    );
}
