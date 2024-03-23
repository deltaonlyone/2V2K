import React, {useState} from 'react';
import styles from './FormInput.module.css';

export function FormInput(props) {

    const customStyle = {
        height: props.height,
        width: props.width,



    };

    return (
        <div className={styles['formInput']}>
            <div className = {styles['TextInput']}>
                {props.text}
            </div>

            <input className = {styles['fieldInput']} style={customStyle}>

            </input>

        </div>
    );
}