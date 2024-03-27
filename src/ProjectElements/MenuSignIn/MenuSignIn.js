import React, {useState} from 'react';
import styles from './MenuSignIn.module.css';
import logo from "../../photos/Snavvy_Logo/Snavvy_logo_White.svg";
import {FormInput} from "../FormInput/FormInput";

export function MenuSignIn(props) {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const formData = {
            usernameOrEmail: usernameOrEmail,
            password: password
        };
        fetch('http://localhost:8080/api/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Authentication failed');
                }
                return response.json();
            })
            .then(data => {
                const token = data.headers['X-Authentication'];
                localStorage.setItem('token', token);
            })
            .catch(error => {
                console.error('Authentication error:', error);
            });
    };


    return (
        <nav className={styles.container} onClick={props.handleToggleSign}>
            <div className={styles.menu} onClick={(e) => e.stopPropagation()}>

                <button className={styles['backButton']} onClick={props.handleToggleSign}></button>

                <img className={styles['logo']} src={logo} alt=""/>
                <a className={styles['signInText']}>Sign in</a>

                <div className={styles['inputForm']}>
                    <FormInput height={'43px'}
                               width={'100%'}
                               text={'Username or email address'}
                               onChange={setUsernameOrEmail}
                    >

                    </FormInput>
                    <FormInput height={'43px'}
                               width={'100%'}
                               text={'Password'}
                               onChange={setPassword}
                    >

                    </FormInput>

                    <a className={styles['forgotPasswordText']}>
                        Forgot password?
                    </a>

                    <button className={styles['submitButton']} onClick={handleSubmit}>Sign in</button>
                </div>
                <div className={styles['createAccountText']}>
                    <a className={styles['textAccountLeft']}>
                        New to Snavvy?
                    </a>

                    <a className={styles['textAccountRight']}>
                        Create an account
                    </a>

                </div>
                <div className={styles['informationText']}>
                    <a className={styles['textBottom']}>
                        Privacy Policy
                    </a>

                    <a className={styles['textBottom']}>
                        Terms of Use
                    </a>
                </div>


            </div>
        </nav>
    );
}
