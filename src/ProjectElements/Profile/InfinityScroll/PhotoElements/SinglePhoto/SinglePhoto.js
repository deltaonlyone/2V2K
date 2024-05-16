import React, {useState} from 'react';
import styles from './SinglePhoto.module.css';

import {useSelector} from 'react-redux';
import {FormButtonLink} from "../../../../Forms/FormButtonLink/FormButtonLink";
import {Link} from "react-router-dom";

export function SinglePhoto(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    return (

        <div className={styles.photoContainer}>
            <Link to="photo_detail_info">
            <img
                src={'http://localhost:8080/api/photos/'+props.img}
                // src={props.img}
                alt="Photo"
                className={styles.photoImg}
            />
            </Link>

        </div>

    );
}