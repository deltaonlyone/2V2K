import React from 'react';
import styles from './PhotoSetStyles.module.css';
import randomPhoto1 from './randomPhoto.jpg';
import randomPhoto2 from './randomPhoto2.png';

import { useSelector} from 'react-redux';

export function PhotoSet(props) {

    const currentTheme = useSelector(state => state.currentTheme);

    return (
        <nav className={`${styles['container']} ${currentTheme.backgroundColor}`}>
            <div className = {styles['centerText']}>
                <h1 className = {`${styles['topText']} ${currentTheme.textColor}`}>EXPLORE WIDE WORLD OF PHOTOGRAPHY WITH US</h1>

                <div>
                    <input placeholder="email address" type="text" name="text" className={`${styles['inputCenter']} ${currentTheme.inputCenterColor}`}></input>
                    <button className={`${styles['buttonCenter']} ${currentTheme.buttonCenterColor}`}>Get Started</button>
                </div>
            </div>

            <div className={`${styles['photoSet']} ${currentTheme.photoSetColor}`}>
                <div className={styles['photoSetTop']}>
                    <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
                    <img className = {styles['photoTop2']} src={randomPhoto2} alt="" />
                    <img className = {styles['photoTop1']} src={randomPhoto2} alt="" />
                    <img className = {styles['photoTop2']} src={randomPhoto1} alt="" />
                    <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
                </div>

                <div className={`${styles['photoSetDown']} ${currentTheme.photoSetDownColor}`}>
                    <img className = {styles['photoDown1']} src={randomPhoto1} alt="" />
                    <img className = {styles['photoDown2']} src={randomPhoto2} alt="" />
                    <img className = {styles['photoDown1']} src={randomPhoto2} alt="" />
                    <img className = {styles['photoDown2']} src={randomPhoto1} alt="" />
                    <img className = {styles['photoDown1']} src={randomPhoto2} alt="" />
                </div>
            </div>





        </nav>
    );
}