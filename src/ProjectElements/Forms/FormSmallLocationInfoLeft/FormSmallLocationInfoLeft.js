import React, {useState} from 'react';
import styles from './FormSmallLocationInfoLeft.module.css';

import {useSelector} from 'react-redux';
import {bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import {FormButton} from "../FormButton/FormButton";
import {FormButtonBlue} from "../FormButtonBlue/FormButtonBlue";

export function FormSmallLocationInfoLeft(props) {
    const currentTheme = useSelector(state => state.currentTheme);


    return (
        <div className={`${styles['container']} `}>
            <div className={`${styles['locationNameHeaderDiv']} ${currentTheme.backgroundColor}`}>
                <a className={`${styles['locationNameHeader']} ${currentTheme.textColor}`}>
                    {props.name}
                </a>
            </div>

            <div className={`${styles['smallInfoDiv']}`}>
                <div className={`${styles['locationNameDiv']}`}>
                    <a className={`${styles['locationNameField']}`}>
                        name
                    </a>

                    <a className={`${styles['locationName']}`}>
                        {props.name}
                    </a>
                </div>

                <div className={`${styles['locationDetailsDiv']}`}>

                    <a className={`${styles['locationDetailsField']}`}>
                        details
                    </a>

                    <a className={`${styles['locationDetails']}`}>
                        {props.detailsStreet}
                    </a>

                    <a className={`${styles['locationDetails']}`}>
                        {props.detailsNumber}
                    </a>

                    <a className={`${styles['locationDetails']}`}>
                        {props.detailsSite}
                    </a>

                </div>

                <div className={`${styles['locationRatingDiv']}`}>



                </div>

                <a className={`${styles['showOnMapText']}`}>
                    Show on Google Maps
                </a>

                <div className={`${styles['locationImgDiv']}`}>
                    <img src={props.locationImg}
                         alt={`locationImg`}
                         className={`${styles['locationImg']} `}
                    />

                </div>

                <div className={`${styles['buttonMoreInfoDiv']}`}>
                    <FormButtonBlue height={'37px'}
                                width={'113px'}
                                text={'MORE INFO'}
                    ></FormButtonBlue>
                </div>

            </div>


        </div>

    );
}