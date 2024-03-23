import React from 'react';
import styles from './PhotoSetStyles.module.css';
import randomPhoto1 from './randomPhoto.jpg';


export function PhotoSet(props) {



    return (
        <nav className={styles.container}>
            <div className={styles['photoSetTop']}>
                <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
                <img className = {styles['photoTop2']} src={randomPhoto1} alt="" />
                <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
                <img className = {styles['photoTop2']} src={randomPhoto1} alt="" />
                <img className = {styles['photoTop1']} src={randomPhoto1} alt="" />
            </div>

            <div className={styles['photoSetDown']}>
                <img className = {styles['photoDown1']} src={randomPhoto1} alt="" />
                <img className = {styles['photoDown2']} src={randomPhoto1} alt="" />
                <img className = {styles['photoDown1']} src={randomPhoto1} alt="" />
                <img className = {styles['photoDown2']} src={randomPhoto1} alt="" />
                <img className = {styles['photoDown1']} src={randomPhoto1} alt="" />
            </div>











        </nav>
    );
}