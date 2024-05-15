import React, {useEffect, useRef, useState} from 'react';
import styles from './NavbarTopCss.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {toggleTheme} from '../../../store/actions/action_1';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import avatarExample from "../../Profile/avatarExample.jpg";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import axios from "axios";

export function NavbarExpanded(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [user, setUser] = useState();
    const [userPhoto, setUserPhoto] = useState();

    const handleToggle = () => {
        setIsExpanded(!isExpanded);

        const x = document.querySelector(`.${styles.container_top}`);
        x.classList.toggle(styles.change); // Використовуємо styles.change
    };
    const fetchUser = async () => {
        if (localStorage.getItem("token") !== null) {
            axios.get('http://localhost:8080/api/users/my', {
                headers: {
                    'X-Authorization': `${localStorage.getItem("token")}`, // замініть 'your-token-here' на ваш токен або інший заголовок
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setUser(response.data);
                    setUserPhoto(user.userPhoto)
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        }
    };

    const currentTheme = useSelector(state => state.currentTheme);
    const dispatch = useDispatch();


    //popup menu \/

    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleClickOutside = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            closePopup();
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    };

    useEffect(() => {
        fetchUser()
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (e) => {
        e.stopPropagation(); // Зупиняємо подальше розповсюдження події
    };

    return (
        <nav className={`${styles.nav} ${currentTheme.backgroundColor} ${isExpanded ? styles['nav--expanded'] : ''}`}>
            <Link className={`${styles.nav__brand} ${currentTheme.textColor} ${currentTheme.borderColor}`}
                  to="/">Snavvy</Link>

            <div className={styles.nav__collapsable}>


                <a href="#" className={`${currentTheme.textColor}`}>
                    <Link to="/map">Map</Link>
                </a>
                <a href="#" className={`${currentTheme.textColor}`}>
                    <Link to="/photographers">Photographers</Link>
                </a>


                <div className={styles.toggleSwitch}>
                    <label className={styles.switchLabel}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            onChange={() => dispatch(toggleTheme())}
                        >
                        </input>
                        <span className={styles.slider}></span>
                    </label>
                </div>


                {!localStorage.getItem("token") && (
                    <div className={styles.nav__cta}>
                        <button className={`${styles.buttonNavbar} ${currentTheme.buttonNavbarColor}`}
                                onClick={props.handleToggleSign}>Sign in
                        </button>
                    </div>
                )}
                {localStorage.getItem("token") && (
                    <div className={`${styles['userButtonsDiv']} `}>
                        <div className={`${styles['burgerMenuDiv']} `}>
                            <button className={styles.nav__collapserMenu} onClick={toggleMenu}>
                                <div className={styles.container_top}>
                                    <div id={styles['bar4']}
                                         className={`${styles.bars2}  ${currentTheme.backgroundReverseColor}`}></div>
                                    <div id={styles['bar4']}
                                         className={`${styles.bars2}  ${currentTheme.backgroundReverseColor}`}></div>
                                    <div id={styles['bar4']}
                                         className={`${styles.bars2}  ${currentTheme.backgroundReverseColor}`}></div>
                                </div>

                            </button>

                            {isOpen && (
                                <div className={styles.burgerMenuOverlay}>
                                    <div
                                        className={`${styles.burgerMenu} ${currentTheme.borderColor} ${currentTheme.greyBackgroundColor}`}
                                        onClick={handleMenuClick}>
                                        <ul>
                                            <Link to="/saved">
                                                <li className={`${styles.textBurgerMenu}  ${currentTheme.textColor}`}>
                                                    Saved
                                                </li>
                                            </Link>
                                            <Link to="/settings">
                                                <li className={`${styles.textBurgerMenu}  ${currentTheme.textColor}`}>
                                                    Settings
                                                </li>
                                            </Link>
                                            <div
                                                className={`${styles.lineStyle}  ${currentTheme.backgroundReverseColor}`}>

                                            </div>

                                            <li className={`${styles.textBurgerMenuSecond}  ${currentTheme.textColor}`}
                                                onClick={handleSignOut}>
                                                Log out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {user &&
                            <Link to="/profile" state={user.id}>
                                {userPhoto &&
                                    <div className={`${styles['avatarUserDiv']}`}>
                                        <img className={styles['avatarUser']}
                                             src={`http://localhost:8080/api/photos/` + userPhoto.id}
                                             alt="User Avatar"/>
                                    </div>
                                }
                                {!userPhoto &&
                                    <div className={`${styles['avatarUserDiv']}`}>
                                        <img className={styles['avatarUser']}
                                             src={avatarExample}
                                             alt="User Avatar"/>
                                    </div>
                                }
                            </Link>
                        }
                    </div>
                )}


                <div className={`${styles['userButtonsDivPhone']} `}>
                    <div className={`${styles['whiteLineNavbar']} ${currentTheme.backgroundReverseColor}`}>

                    </div>

                    <a href="#" className={`${styles.underlineHoverPhone} ${currentTheme.textColor}`}>
                        <Link to="/profile">Profile</Link>
                    </a>
                    <a href="#" className={`${styles.underlineHoverPhone} ${currentTheme.textColor}`}>
                        <Link to="/settings">Settings</Link>
                    </a>
                    <a href="#" className={`${styles.underlineHoverPhone} ${currentTheme.textColor}`}>
                        <Link to="/saved">Saved</Link>
                    </a>
                    <a href="#" className={`${styles.underlineHoverPhone} ${currentTheme.textColor}`}>
                        Log out
                    </a>

                </div>

            </div>

            <button className={styles.nav__collapser} onClick={handleToggle}>
                <div className={styles.container_top}>
                    <div id={styles['bar1']} className={`${styles.bars}  ${currentTheme.backgroundReverseColor}`}></div>
                    <div id={styles['bar2']} className={`${styles.bars}  ${currentTheme.backgroundReverseColor}`}></div>
                    <div id={styles['bar3']} className={`${styles.bars}  ${currentTheme.backgroundReverseColor}`}></div>
                </div>

            </button>
        </nav>
    );
}