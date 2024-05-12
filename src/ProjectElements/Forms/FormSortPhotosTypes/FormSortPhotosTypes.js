import React, {useState} from 'react';
import styles from './FormSortPhotosTypes.module.css';

import {useSelector} from 'react-redux';

export function FormSortPhotosTypes(props) {
    const currentTheme = useSelector(state => state.currentTheme);
    const { words } = props;

    return (
        <div className={styles.buttonsDiv}>
            {words.map((word, index) => (
                <button key={index} className = {`${styles['buttons']} ${currentTheme.buttonsSortColor}`}>
                    {word}
                </button>
            ))}
        </div>

    );
}