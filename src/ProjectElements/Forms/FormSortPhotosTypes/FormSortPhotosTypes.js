import React, {useState} from 'react';
import styles from './FormSortPhotosTypes.module.css';

import {useSelector} from 'react-redux';
import {FormButton} from "../FormButton/FormButton";

export function FormSortPhotosTypes(props) {
    const currentTheme = useSelector(state => state.currentTheme);
    const {words} = props;

    return (
        <div className={styles.buttonsDiv}>
            {words.map((word, index) => (
                // <button key={index} className = {`${styles['buttons']} ${currentTheme.buttonsSortColor}`}>
                //     {word}
                // </button>

                <div className = {`${styles['buttons']}`}>
                    <FormButton
                        height={'50px'}
                        width={'180px'}
                        text={word}
                    ></FormButton>
                </div>

            ))}
        </div>

    );
}