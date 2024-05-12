import React, {useState} from 'react';
import styles from './FormPhotographerSearchInfo.module.css';

import {useSelector} from 'react-redux';

export function FormPhotographerSearchInfo(props) {
    const currentTheme = useSelector(state => state.currentTheme);


    return (
        <div className = {`${styles['container']} ${currentTheme.backgroundColor}`}>
            <div>
                <a className={`${styles['userNameLocation']} ${currentTheme.backgroundColor}`}>

                </a>

                <a className={`${styles['userLocation']} ${currentTheme.backgroundColor}`}>

                </a>
            </div>

            <div>

            </div>
        </div>

    );
}