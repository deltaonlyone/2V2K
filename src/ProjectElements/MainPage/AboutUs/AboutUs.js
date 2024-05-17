import React from 'react';
import styles from './AboutUs.module.css';
import photoAboutUsLoopa from './photoAboutUsLoopa.png';
import bigLineFirst from "./line-1-cuted.svg";
import photoServices1 from './photo-1-services.jpg';
import photoServices2 from './photo-2-services.jpg';
import photoServices3 from './photo-3-services.jpg';
import bulbLight from './bulb.png';
import {FormButton} from "../../Forms/FormButton/FormButton";
import {FormInput} from "../../Forms/FormInput/FormInput";

import logo from "../../../photos/Snavvy_Logo/Snavvy_logo_White.svg";
import telephoneSvg from "../../Forms/FormFooter/telephoneSvg.svg";
import emailSvg from "../../Forms/FormFooter/emailSvg.svg";


import { useSelector} from 'react-redux';
import {FormButtonLink} from "../../Forms/FormButtonLink/FormButtonLink";



export function AboutUs(props) {

    const currentTheme = useSelector(state => state.currentTheme);

    return (



        <nav className={`${styles['container']} ${currentTheme.backgroundColor}`}>

            <div className={`${styles['downArrowPlace']} ${currentTheme.backgroundColor}`}>
                <div className={`${styles['downArrowSymbol']} ${currentTheme.textColor}`}>&darr;</div>
            </div>

            <div className={styles['exploreAndPagePhone']}>
                <a className={`${styles['pageNumberFirst']} ${currentTheme.textColor}`}>
                    02
                    <a className={styles['lineSymbolLeft']}>&#8212;</a>
                    <a className={styles['lineSymbol']}>&#8212;</a>
                    <a className={styles['lineSymbolRight']}>&#8212;</a>
                    04
                </a>

            </div>

            <div className={`${styles['greyBackground']} ${currentTheme.greyBackgroundColor}`}></div>


            <div className={styles['bigLineFirstDiv']}>
                <img className={`${styles['bigLineFirst']} ${currentTheme.svgLightGreyColor}`} src={bigLineFirst}
                     alt=""/>
            </div>


            <div className={styles['firstAboutUs']}>

                <div className={styles['firstAboutUsLeft']}>
                    <h1 className={`${styles['textAboutUs']} ${currentTheme.textColor}`}>
                        About Us
                    </h1>


                    <a className={`${styles['textUnderAboutUs']} ${currentTheme.textColor}`}>
                        Welcome to Snavvy - your reliable assistant in finding
                        photographers and locations for unforgettable photo shoots!
                        We understand how important it is to find the perfect professional
                        and the best place to shoot, so we offer you a convenient and fast way to do it.


                    </a>

                    <div className={styles['exploreAndPage']}>
                        <a className={`${styles['pageNumberFirst']} ${currentTheme.textColor}`}>
                            02
                            <a className={styles['lineSymbolLeft']}>&#8212;</a>
                            <a className={styles['lineSymbol']}>&#8212;</a>
                            <a className={styles['lineSymbolRight']}>&#8212;</a>
                            04
                        </a>

                    </div>
                </div>

                <div className={styles['firstAboutUsRight']}>
                    <img className={`${styles['photoAboutUsFirst']} ${currentTheme.borderColor}`}
                         src={photoAboutUsLoopa} alt=""/>
                </div>

            </div>


            {/*--------------------------------------------------------------------*/}


            <div className={styles['secondAboutUs']}>
                <a className={`${styles['pageNumberSecond']} ${currentTheme.textColor}`}>
                    03
                    <a className={styles['lineSymbolLeft']}>&#8212;</a>
                    <a className={styles['lineSymbol']}>&#8212;</a>
                    <a className={styles['lineSymbolRight']}>&#8212;</a>
                    04
                </a>

                <h1 className={`${styles['textServices']} ${currentTheme.textColor}`}>
                    Here are our services
                </h1>

                <div className={styles['textUnderServicesDiv']}>
                    <a className={`${styles['textUnderServices']} ${currentTheme.textColor}`}>
                        Check out Snavvy's core capabilities for finding photographers and locations for
                        photoshoots. Our tools will help you find the perfect professional and the perfect shooting location.
                    </a>
                </div>

                <div className={styles['servicesList']}>
                    <div className={`${styles['serviceBox']} ${currentTheme.greyBackgroundColor}`}>
                        <a className={`${styles['headTextServices']} ${currentTheme.textColor}`}>
                            Locations
                        </a>

                        <img className={styles['photoServices']} src={photoServices1} alt=""/>

                        <a className={`${styles['textInServices']} ${currentTheme.textColor}`}>
                            Locations is where you will find detailed information about each available photo shoot location. With
                            the help of our service, you can learn about the features of each location, view photos taken at this
                            location, and get advice on the best time for filming.

                        </a>

                    </div>
                    <div className={`${styles['serviceBox']} ${currentTheme.greyBackgroundColor}`}>
                        <a className={`${styles['headTextServices']} ${currentTheme.textColor}`}>
                            Map
                        </a>

                        <img className={styles['photoServices']} src={photoServices2} alt=""/>

                        <a className={`${styles['textInServices']} ${currentTheme.textColor}`}>
                            The map is your navigator in the world of the best locations
                            for photo sessions. Use our interactive map with labels to quickly
                            and easily find the perfect spots.

                        </a>

                    </div>
                    <div className={`${styles['serviceBox']} ${currentTheme.greyBackgroundColor}`}>
                        <a className={`${styles['headTextServices']} ${currentTheme.textColor}`}>
                            Photographers
                        </a>

                        <img className={styles['photoServices']} src={photoServices3} alt=""/>

                        <a className={`${styles['textInServices']} ${currentTheme.textColor}`}>
                            Finding a photographer is your key to the best photography
                            professionals. We provide the opportunity to view the portfolio
                            of photographers, read customer reviews and choose the best ones
                            for your event or project.

                        </a>

                    </div>

                </div>

                <div className={styles['servicesListPhone']}>

                    <div className={`${styles['servicesSmallBox']} `}>

                        <div className={`${styles['flip-card']}`}>
                            <div className={`${styles['flip-card-inner']}`}>
                                <div className={`${styles['flip-card-front']} ${currentTheme.greyBackgroundColor}`}>

                                    <p className={`${styles['textServicesHeadPhone']} ${currentTheme.textColor}`}>
                                        Locations
                                    </p>
                                    <img className={styles['photoServicesPhone']} src={photoServices1} alt=""/>
                                </div>
                                <div className={`${styles['flip-card-back']} ${currentTheme.greyBackgroundColor}`}>

                                    <p className={`${styles['textServicesPhone']} ${currentTheme.textColor}`}>
                                        Locations is where you will find detailed information about each available photo shoot location. With
                                        the help of our service, you can learn about the features of each location, view photos taken at this
                                        location, and get advice on the best time for filming.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`${styles['servicesSmallBox']} `}>

                        <div className={`${styles['flip-card']}`}>
                            <div className={`${styles['flip-card-inner']}`}>
                                <div className={`${styles['flip-card-front']} ${currentTheme.greyBackgroundColor}`}>

                                    <p className={`${styles['textServicesHeadPhone']} ${currentTheme.textColor}`}>
                                        Map
                                    </p>
                                    <img className={styles['photoServicesPhone']} src={photoServices2} alt=""/>
                                </div>
                                <div className={`${styles['flip-card-back']} ${currentTheme.greyBackgroundColor}`}>

                                    <p className={`${styles['textServicesPhone']} ${currentTheme.textColor}`}>
                                        The map is your navigator in the world of the best locations
                                        for photo sessions. Use our interactive map with labels to quickly
                                        and easily find the perfect spots.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['servicesSmallBox']}`}>
                        <div className={`${styles['flip-card']}`}>
                            <div className={`${styles['flip-card-inner']}`}>
                                <div className={`${styles['flip-card-front']} ${currentTheme.greyBackgroundColor}`}>

                                    <p className={`${styles['textServicesHeadPhone']} ${currentTheme.textColor}`}>
                                        Photographers
                                    </p>
                                    <img className={styles['photoServicesPhone']} src={photoServices3} alt=""/>
                                </div>
                                <div className={`${styles['flip-card-back']} ${currentTheme.greyBackgroundColor}`}>

                                    <p className={`${styles['textServicesPhone']} ${currentTheme.textColor}`}>
                                        Finding a photographer is your key to the best photography
                                        professionals. We provide the opportunity to view the portfolio
                                        of photographers, read customer reviews and choose the best ones
                                        for your event or project.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

            {/*--------------------------------------------------------------------*/}

            <div className={`${styles['thirdAboutUs']}`}>
                <div className={styles['joinUsDiv']}>
                    <div className={styles['signInText']}>
                        <a className={`${styles['signInTextFirst']} ${currentTheme.textColor}`}>
                            Sign in&nbsp;
                        </a>
                        <a className={`${styles['signInTextSecond']} ${currentTheme.textReverseColor}`}>
                            to&nbsp;
                        </a>

                        <img className={styles['bulbLight']} src={bulbLight} alt=""/>

                        <a className={`${styles['signInTextFirst']} ${currentTheme.textColor}`}>
                            use all this features
                        </a>
                    </div>

                    <div className={styles['buttonJoinUsDiv']}>
                        {/*<button className={`${styles['buttonJoinUs']} ${currentTheme.buttonJoinUsColor}`}>JOIN US*/}
                        {/*</button>*/}
                        <FormButtonLink
                                    link = {'photographers'}
                                    height={'50px'}
                                    width={'320px'}
                                    text={'JOIN US'}
                        ></FormButtonLink>
                    </div>
                </div>

                <a className={`${styles['pageNumberSecond']} ${currentTheme.textColor}`}>
                    04
                    <a className={styles['lineSymbolLeft']}>&#8212;</a>
                    <a className={styles['lineSymbol']}>&#8212;</a>
                    <a className={styles['lineSymbolRight']}>&#8212;</a>
                    04
                </a>

            </div>

            {/*--------------------------------------------------------------------*/}


            <div className={`${styles['mapAboutUs']}`}>
                <div className={`${styles['mapAboutUsText']} ${currentTheme.mapAboutUsColor}`}>
                    <h1 className={`${styles['mapTextHead']} ${currentTheme.textColor}`}>
                        MAP
                    </h1>

                    <a className={`${styles['mapTextMain']} ${currentTheme.textColor}`}>
                        The map is the heart of our service, created for the most convenient
                        search for ideal locations for your photo shoots. Our interactive map
                        provides a visual overview of all available locations, allowing you to
                         easily find a location that meets your needs and desires.
                    </a>

                    {/*<button className={`${styles['buttonMap']} ${currentTheme.buttonMapColor}`}>EXPLORE</button>*/}
                    <FormButtonLink
                                link = {'map'}
                                height={'55px'}
                                width={'300px'}
                                text={'EXPLORE'}
                    ></FormButtonLink>
                </div>
            </div>


            {/*--------------------------------------------------------------------*/}


        </nav>
    );
}