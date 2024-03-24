import React from 'react';
import styles from './PhotoSetStyles.module.css';
import randomPhoto1 from './randomPhoto.jpg';
import randomPhoto2 from './randomPhoto2.png';


export function PhotoSet(props) {



    return (
        <nav className={styles.container}>
            <div className = {styles['centerText']}>
                <h1 className = {styles['topText']}>EXPLORE WIDE WORLD OF PHOTOGRAPHY WITH US</h1>

                <div>
                    <input placeholder="email adress" type="text" name="text" className={styles['inputCenter']}></input>
                    <button className={styles['buttonCenter']}>Get Started</button>
                </div>
            </div>

            <div className={styles['photoSetTop']}>
                <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
                <img className = {styles['photoTop2']} src={randomPhoto2} alt="" />
                <img className = {styles['photoTop1']} src={randomPhoto2} alt="" />
                <img className = {styles['photoTop2']} src={randomPhoto1} alt="" />
                <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
            </div>

            <div className={styles['photoSetDown']}>
                <img className = {styles['photoDown1']} src={randomPhoto1} alt="" />
                <img className = {styles['photoDown2']} src={randomPhoto2} alt="" />
                <img className = {styles['photoDown1']} src={randomPhoto2} alt="" />
                <img className = {styles['photoDown2']} src={randomPhoto1} alt="" />
                <img className = {styles['photoDown1']} src={randomPhoto2} alt="" />
            </div>

            <div className={styles['downArrowPlace']}>
                <div className={styles['downArrowSymbol']}>&darr;</div>
            </div>









        </nav>
    );
}