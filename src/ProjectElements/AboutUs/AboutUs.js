import React from 'react';
import styles from './AboutUs.module.css';
import examplePhotoExplore from './examplePhotoExplore.jpg';

export function AboutUs(props) {

    return (
        <nav className={styles.container}>

            <div className={styles['downArrowPlace']}>
                <div className={styles['downArrowSymbol']}>&darr;</div>
            </div>

            <div className={styles['greyBackground']}></div>

            <div className={styles['firstAboutUs']}>
                <div className={styles['firstAboutUsLeft']}>
                    <h1 className={styles['textAboutUs']}>
                        About US
                    </h1>


                    <a className={styles['textUnderAboutUs']}>
                        Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est,
                        qui dolorem.


                    </a>

                    <div className={styles['exploreAndPage']}>
                        <a className={styles['pageNumberFirst']}>
                            02   -----------   04
                        </a>

                        <button className={styles['buttonExplore']}><b>EXPLORE</b></button>
                    </div>
                </div>

                <div className={styles['firstAboutUsRight']}>
                    <img className = {styles['photoAboutUsFirst']} src={examplePhotoExplore} alt="" />
                </div>

            </div>

        </nav>
    );
}