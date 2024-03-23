import React, {useState} from 'react';
import styles from './MenuSignIn.module.css';
import logo from "../../photos/Snavvy_Logo/Snavvy_logo_White.svg";
import {FormInput} from "../FormInput/FormInput";

export function MenuSignIn(props) {





    return (
        <nav className={styles.container} onClick = {props.handleToggleSign}>
            <div className = {styles.menu} onClick={(e) => e.stopPropagation()}>
                <img className = {styles['logo']} src={logo} alt="" />
                <a className = {styles['signInText']}>Sign in</a>

                <div className = {styles['inputForm']}>
                    <FormInput height = {'43px'}
                               width = {'100%'}
                               text = {'Username or email address'}
                    >

                    </FormInput>
                    <FormInput height = {'43px'}
                               width = {'100%'}
                               text = {'Password'}
                    >

                    </FormInput>

                    <button className={styles['submitButton']}>Sign in</button>
                </div>
                <div className = {styles['createAccountText']}>
                    <a className = {styles['textAccountLeft']}>
                        New to Snavvy?
                    </a>

                    <a className = {styles['textAccountRight']}>
                        Create an account
                    </a>

                </div>
                <div className = {styles['informationText']}>
                    <a className = {styles['textBottom']}>
                        Privacy Policy
                    </a>

                    <a className = {styles['textBottom']}>
                        Terms of Use
                    </a>
                </div>


            </div>
        </nav>
    );
}