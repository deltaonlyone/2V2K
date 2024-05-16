import React from 'react';
import styles from './FormSortPhotosTypes.module.css';
import { FormButton } from "../FormButton/FormButton";
import { useSelector } from 'react-redux';
export function FormSortPhotosTypes({ words, onCategoryChange, selectedCategory }) {
    const currentTheme = useSelector(state => state.currentTheme);
    return (
        <div className={styles.buttonsDiv}>
            {words.map((word, index) => (
                <div key={index} className={styles['buttons']}>
                    <FormButton
                        height={'50px'}
                        width={'180px'}
                        text={word}
                        onClick={() => {
                            onCategoryChange(word);}
                    }
                    />
                </div>
            ))}
        </div>
    );
}
