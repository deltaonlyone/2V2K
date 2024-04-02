import React from 'react';
import styles from './AboutUs.module.css';
import photoAboutUsLoopa from './photoAboutUsLoopa.png';
import bigLineFirst from "./line-1-cuted.svg";
import photoServices1 from './photo-1-services.jpg';
import photoServices2 from './photo-2-services.jpg';
import photoServices3 from './photo-3-services.jpg';
import bulbLight from './bulb.png';

export function AboutUs(props) {

    return (
        <nav className={styles.container}>

            <div className={styles['downArrowPlace']}>
                <div className={styles['downArrowSymbol']}>&darr;</div>
            </div>

            <div className={styles['greyBackground']}></div>


            <div className = {styles['bigLineFirstDiv']}>
                <img className = {styles['bigLineFirst']} src={bigLineFirst} alt="" />
            </div>


            <div className={styles['firstAboutUs']}>
                <div className={styles['firstAboutUsLeft']}>
                    <h1 className={styles['textAboutUs']}>
                        About Us
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
                            02
                            <a className={styles['lineSymbolLeft']}>&#8212;</a>
                            <a className={styles['lineSymbol']}>&#8212;</a>
                            <a className={styles['lineSymbolRight']}>&#8212;</a>
                            04
                        </a>

                        <button className={styles['buttonExplore']}><b>EXPLORE</b></button>
                    </div>
                </div>

                <div className={styles['firstAboutUsRight']}>
                    <img className = {styles['photoAboutUsFirst']} src={photoAboutUsLoopa} alt="" />
                </div>

            </div>





{/*--------------------------------------------------------------------*/}





            <div className={styles['secondAboutUs']}>
                <a className={styles['pageNumberSecond']}>
                    03
                    <a className={styles['lineSymbolLeft']}>&#8212;</a>
                    <a className={styles['lineSymbol']}>&#8212;</a>
                    <a className={styles['lineSymbolRight']}>&#8212;</a>
                    04
                </a>

                <h1 className={styles['textServices']}>
                    Here are our services
                </h1>

                <div className={styles['textUnderServicesDiv']}>
                    <a className={styles['textUnderServices']}>
                        Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem.

                    </a>
                </div>

                <div className={styles['servicesList']}>
                    <div className={styles['serviceBox']}>
                        <a className={styles['headTextServices']}>
                            Locations
                        </a>

                        <img className = {styles['photoServices']} src={photoServices1} alt="" />

                        <a className={styles['textInServices']}>
                            Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem.

                        </a>

                    </div>
                    <div className={styles['serviceBox']}>
                        <a className={styles['headTextServices']}>
                            Map
                        </a>

                        <img className = {styles['photoServices']} src={photoServices2} alt="" />

                        <a className={styles['textInServices']}>
                            Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem.

                        </a>

                    </div>
                    <div className={styles['serviceBox']}>
                        <a className={styles['headTextServices']}>
                            Photographers
                        </a>

                        <img className = {styles['photoServices']} src={photoServices3} alt="" />

                        <a className={styles['textInServices']}>
                            Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem.

                        </a>

                    </div>

                </div>



            </div>

            {/*--------------------------------------------------------------------*/}

            <div className={styles['thirdAboutUs']}>
                <div className={styles['joinUsDiv']}>
                    <div className={styles['signInText']}>
                        <a className={styles['signInTextFirst']}>
                            Sign in&nbsp;
                        </a>
                        <a className={styles['signInTextSecond']}>
                            to&nbsp;
                        </a>

                        <img className = {styles['bulbLight']} src={bulbLight} alt="" />

                        <a className={styles['signInTextFirst']}>
                            use all this features
                        </a>
                    </div>

                    <div className={styles['buttonJoinUsDiv']}>
                        <button className={styles['buttonJoinUs']}>JOIN US</button>
                    </div>
                </div>

                <a className={styles['pageNumberSecond']}>
                    04
                    <a className={styles['lineSymbolLeft']}>&#8212;</a>
                    <a className={styles['lineSymbol']}>&#8212;</a>
                    <a className={styles['lineSymbolRight']}>&#8212;</a>
                    04
                </a>

            </div>

        </nav>
    );
}