import React, {useState} from 'react';
import styles from './FormFooter.module.css';
import {useDispatch, useSelector} from "react-redux";
import logo from "../../../photos/Snavvy_Logo/Snavvy_logo_White.svg";
import telephoneSvg from "./telephoneSvg.svg";
import emailSvg from "./emailSvg.svg";
import {FormButton} from "../FormButton/FormButton";
import {FormInput} from "../FormInput/FormInput";


export function FormFooter(props) {

    const currentTheme = useSelector(state => state.currentTheme);

    return (

        <footer className={`${styles['informationAboutUs']}`}>
            <div className={`${styles['footerContainer']}`}>
                <div className={`${styles['informationAboutUsFirst']}`}>
                    <img className={`${styles['logoSnavvy']} ${currentTheme.svgColor}`} src={logo} alt=""/>
                    <a className={`${styles['informationText']} ${currentTheme.textColor}`}>
                        Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi
                        nesciunt. Neque porro quisquam est, qui
                        dolorem.
                    </a>
                </div>


                <div className={`${styles['informationAboutUsSecond']}`}>
                    <a className={`${styles['informationTextHead']} ${currentTheme.textColor}`}>
                        Register
                    </a>
                    <form className={`${styles['formInformationInput']}`}>

                        <FormInput
                            height={'50px'}
                            width={'100%'}
                            text={'email address'}

                        ></FormInput>


                        <FormButton height={'50px'}
                                    width={'100%'}
                                    text={'Submit'}
                        ></FormButton>

                        {/*<input placeholder="email address" type="text" name="text"*/}
                        {/*       className={`${styles['inputEmail']} ${currentTheme.inputEmailColor}`}></input>*/}
                        {/*<button*/}
                        {/*    className={`${styles['buttonSubmitEmail']} ${currentTheme.buttonSubmitEmailColor}`}>Submit*/}
                        {/*</button>*/}
                    </form>

                </div>


                <div className={`${styles['informationAboutUsThird']}`}>
                    <a className={`${styles['informationTextHead']} ${currentTheme.textColor}`}>
                        Contact us
                    </a>

                    <div className={`${styles['informationContacts']}`}>
                        <div className={`${styles['informationContactsPhone']}`}>
                            <img className={`${styles['telephoneSvg']} ${currentTheme.svgColor}`} src={telephoneSvg}
                                 alt=""/>

                            <a className={`${styles['informationContactText']} ${currentTheme.textColor}`}>
                                +380 00 000 00 00
                            </a>
                        </div>

                        <div className={`${styles['informationContactsEmail']}`}>
                            <img className={`${styles['emailSvg']} ${currentTheme.svgColor}`} src={emailSvg} alt=""/>

                            <a className={`${styles['informationContactText']} ${currentTheme.textColor}`}>
                                snavvy_support@gmail.com
                            </a>
                        </div>
                    </div>


                </div>


                <div className={`${styles['informationAboutUsFourth']}`}>
                    <a className={`${styles['informationTextHead']} ${currentTheme.textColor}`}>
                        Follow us
                    </a>

                    <ul className={`${styles['example-2']}`}>
                        <li className={`${styles['icon-content']}`}>
                            <a
                                href="https://instagram.com/"
                                aria-label="Instagram"
                                data-social="instagram"
                            >
                                <div className={`${styles['filled']}`}></div>
                                <svg version="1.1" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <div className={`${styles['tooltip']}`}>Instagram</div>
                        </li>
                        <li className={`${styles['icon-content']}`}>
                            <a
                                href="https://telegram.org/"
                                aria-label="Telegram"
                                data-social="telegram"
                            >
                                <div className={`${styles['filled']}`}></div>
                                <svg version="1.1" viewBox="0 0 100 100">
                                    <path
                                        d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5
                                            c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2
                                            c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9
                                            c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2
                                            c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6
                                            c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1
                                            c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1
                                            c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <div className={`${styles['tooltip']}`}>Telegram</div>
                        </li>
                        <li className={`${styles['icon-content']}`}>
                            <a
                                href="https://facebook.com/"
                                aria-label="Facebook"
                                data-social="facebook"
                            >
                                <div className={`${styles['filled']}`}></div>
                                <svg version="1.1" viewBox="0 0 310 310">
                                    <path
                                        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
            c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
            V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
            C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
            c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <div className={`${styles['tooltip']}`}>Facebook</div>
                        </li>
                    </ul>
                </div>

            </div>


            <div className={`${styles['footerContainerSecond']}`}>
                <div className={`${styles['informationAboutUsTop']}`}>
                    <img className={`${styles['logoSnavvy']} ${currentTheme.svgColor}`} src={logo} alt=""/>
                </div>

                <div className={`${styles['informationAboutUsMiddle']}`}>
                    <div className={`${styles['informationAboutUsMiddleLeft']}`}>

                        <a className={`${styles['informationTextHead']} ${currentTheme.textColor}`}>
                            Contact us
                        </a>

                        <div className={`${styles['informationContacts']}`}>
                            <div className={`${styles['informationContactsPhone']}`}>
                                <img className={`${styles['telephoneSvg']} ${currentTheme.svgColor}`} src={telephoneSvg}
                                     alt=""/>

                                <a className={`${styles['informationContactText']} ${currentTheme.textColor}`}>
                                    +380 00 000 00 00
                                </a>
                            </div>

                            <div className={`${styles['informationContactsEmail']}`}>
                                <img className={`${styles['emailSvg']} ${currentTheme.svgColor}`} src={emailSvg}
                                     alt=""/>

                                <a className={`${styles['informationContactText']} ${currentTheme.textColor}`}>
                                    snavvy_support@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className={`${styles['informationAboutUsMiddleRight']}`}>
                        <a className={`${styles['informationTextHead']} ${currentTheme.textColor}`}>
                            Follow us
                        </a>

                        <ul className={`${styles['example-2']}`}>
                            <li className={`${styles['icon-content']}`}>
                                <a
                                    href="https://instagram.com/"
                                    aria-label="Instagram"
                                    data-social="instagram"
                                >
                                    <div className={`${styles['filled']}`}></div>
                                    <svg version="1.1" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className={`${styles['tooltip']}`}>Instagram</div>
                            </li>
                            <li className={`${styles['icon-content']}`}>
                                <a
                                    href="https://telegram.org/"
                                    aria-label="Telegram"
                                    data-social="telegram"
                                >
                                    <div className={`${styles['filled']}`}></div>
                                    <svg version="1.1" viewBox="0 0 100 100">
                                        <path
                                            d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5
                                            c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2
                                            c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9
                                            c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2
                                            c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6
                                            c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1
                                            c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1
                                            c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className={`${styles['tooltip']}`}>Telegram</div>
                            </li>
                            <li className={`${styles['icon-content']}`}>
                                <a
                                    href="https://facebook.com/"
                                    aria-label="Facebook"
                                    data-social="facebook"
                                >
                                    <div className={`${styles['filled']}`}></div>
                                    <svg version="1.1" viewBox="0 0 310 310">
                                        <path
                                            d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
            c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
            V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
            C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
            c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className={`${styles['tooltip']}`}>Facebook</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`${styles['informationAboutUsBottom']}`}>

                    <a className={`${styles['informationTextHead']} ${currentTheme.textColor}`}>
                        Register
                    </a>
                    <form className={`${styles['formInformationInput']}`}>
                        <input placeholder="email address" type="text" name="text"
                               className={`${styles['inputEmail']} ${currentTheme.inputEmailColor}`}></input>
                        <button
                            className={`${styles['buttonSubmitEmail']} ${currentTheme.buttonSubmitEmailColor}`}>Submit
                        </button>
                    </form>
                </div>
            </div>


            <div className={`${styles['footerBottomTextDiv']}`}>
                <a className={`${styles['footerBottomText']} ${currentTheme['textGreyColor']}`}>
                    © 2024 All Rights Reserved
                </a>
                <div className={`${styles['footerBottomTextRight']}`}>
                    <a className={`${styles['footerBottomTextHover']} ${currentTheme['textGreyColor']}`}>
                        Privacy Policy
                    </a>

                    <a className={`${styles['footerBottomTextHover']} ${currentTheme['textGreyColor']}`}>
                        Terms of Use
                    </a>
                </div>
            </div>
        </footer>
    );
}