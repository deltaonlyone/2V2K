import React from 'react';
import styles from './PhotoSetStyles.module.css';
import randomPhoto1 from './randomPhoto.jpg';
import randomPhoto2 from './randomPhoto2.png';
import {FormButton} from "../../Forms/FormButton/FormButton";
import {FormInput} from "../../Forms/FormInput/FormInput";

import { useSelector} from 'react-redux';

export function PhotoSet(props) {

    const currentTheme = useSelector(state => state.currentTheme);

    return (
        <nav className={`${styles['container']} ${currentTheme.backgroundColor}`}>
            <div className={styles['centerText']}>
                <h1 className={`${styles['topText']} ${currentTheme.textColor}`}>EXPLORE WIDE WORLD OF PHOTOGRAPHY</h1>
                <h2 className={`${styles['topTextBottom']} ${currentTheme.textColor}`}>WITH
                    US</h2>

                <div className={styles['inputAndButton']}>

                    <FormInput
                        height={'55px'}
                        width={'65%'}
                        text={'email address'}

                    ></FormInput>


                    <FormButton height={'55px'}
                               width={'32%'}
                               text={'Get Started'}
                    ></FormButton>


                    {/*<input placeholder="email address" type="text" name="text"*/}
                    {/*       className={`${styles['inputCenter']} ${currentTheme.inputCenterColor}`}></input>*/}

                    {/*<button className={`${styles['buttonCenter']} ${currentTheme.buttonCenterColor}`}>Get Started*/}
                    {/*</button>*/}
                </div>
            </div>

            <div className={`${styles['photoSet']} ${currentTheme.photoSetColor}`}>
                <div className={styles['photoSetTop']}>
                    <img className={styles['photoTop1']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoTop2']} src={randomPhoto2} alt=""/>
                    <img className={styles['photoTop3']} src={randomPhoto2} alt=""/>
                    <img className={styles['photoTop4']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoTop5']} src={randomPhoto1} alt=""/>
                </div>

                <div className={`${styles['photoSetDown']} ${currentTheme.photoSetDownColor}`}>
                    <img className={styles['photoDown1']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoDown2']} src={randomPhoto2} alt=""/>
                    <img className={styles['photoDown3']} src={randomPhoto2} alt=""/>
                    <img className={styles['photoDown4']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoDown5']} src={randomPhoto2} alt=""/>
                </div>
            </div>

            <div className={`${styles['photoSetSecond']} ${currentTheme.photoSetColor}`}>
                <div className={styles['photoSetTop']}>
                    <img className={styles['photoTop']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoTop']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoTop']} src={randomPhoto2} alt=""/>
                </div>

                <div className={`${styles['photoSetMiddle']}`}>
                    <img className={styles['photoMiddle']} src={randomPhoto2} alt=""/>
                    <img className={styles['photoMiddle']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoMiddle']} src={randomPhoto2} alt=""/>
                </div>

                <div className={`${styles['photoSetDown']}`}>
                    <img className={styles['photoDown']} src={randomPhoto1} alt=""/>
                    <img className={styles['photoDown']} src={randomPhoto2} alt=""/>
                    <img className={styles['photoDown']} src={randomPhoto1} alt=""/>
                </div>
            </div>


        </nav>
    );
}