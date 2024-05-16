import React from 'react';
import styles from './FormSortPhotosTypes.module.css';
import { FormButton } from "../FormButton/FormButton";

export function FormSortPhotosTypes({ words, onCategoryChange }) {
    return (
        <div className={styles.buttonsDiv}>
            {words.map((word, index) => (
                <div key={index} className={styles['buttons']}>
                    <FormButton
                        height={'50px'}
                        width={'180px'}
                        text={word}
                        onClick={() => {
                            console.log(`Category changed to: ${word}`);
                            onCategoryChange(word);}
                    }
                    />
                </div>
            ))}
        </div>
    );
}
