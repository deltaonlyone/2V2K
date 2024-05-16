import React, {useEffect, useRef, useState} from 'react';
import styles from './NavbarTopCss.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {toggleTheme} from '../../../store/actions/action_1';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import avatarExample from "../../../photos/User_cicrle_light.svg";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import {SvgBookmark, SvgLogo, SvgSettings, SvgSignOut} from "../FormSvg/FormSvg";

export function NavbarExpanded(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState();
    const [check, setCheck] = useState(true);


    const handleToggle = () => {
        setIsExpanded(!isExpanded);

        const x = document.querySelector(`.${styles.container_top}`);
        x.classList.toggle(styles.change); // Використовуємо styles.change
    };
    const fetchUser = async () => {
        if (localStorage.getItem("token") !== null) {
            if (check === true) {
                axios.get('http://localhost:8080/api/users/my', {
                    headers: {
                        'X-Authorization': `${localStorage.getItem("token")}`, // замініть 'your-token-here' на ваш токен або інший заголовок
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        setUser(response.data);
                        setProfilePhoto(user.profilePhoto)
                        if(profilePhoto!==null){
                            setCheck(false);
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching users:', error);
                    });
            }
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
    fetchUser()
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


                {!localStorage.getItem("token") &&
                    <div className={styles.nav__cta}>
                        <button className={`${styles.buttonNavbar} ${currentTheme.buttonNavbarColor}`}
                                onClick={props.handleToggleSign}>Sign in
                        </button>
                    </div>
                }
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

                                                    <SvgBookmark
                                                        color={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                        stroke={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                        className={`${styles["svgTextLeft"]}`}
                                                    />

                                                    Saved
                                                </li>
                                            </Link>
                                            <Link to="/settings">
                                                <li className={`${styles.textBurgerMenu}  ${currentTheme.textColor}`}>

                                                    <SvgSettings
                                                        color={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                        stroke={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                        className={`${styles["svgTextLeft"]}`}
                                                    />

                                                    Settings
                                                </li>
                                            </Link>
                                            <div
                                                className={`${styles.lineStyle}  ${currentTheme.backgroundReverseColor}`}>

                                            </div>

                                            <li className={`${styles.textBurgerMenuSecond}  ${currentTheme.textColor}`}
                                                onClick={handleSignOut}>

                                                <SvgSignOut
                                                    color={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                    stroke={currentTheme.textColor === 'DarkTheme_textColor__65lH+' ? "white" : "black"}
                                                    className={`${styles["svgTextLeft"]}`}
                                                />

                                                Log out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {user &&
                            <Link to="/profile" state={user.id}>
                                {profilePhoto ? (
                                    <div className={`${styles['avatarUserDiv']}`}>
                                        <img className={styles['avatarUser']}
                                             src={`http://localhost:8080/api/photos/` + profilePhoto.id}
                                             alt="User Avatar"/>
                                    </div>
                                ) : (
                                    <div className={`${styles['avatarUserDiv']}`}>
                                        <img className={styles['avatarUser']}
                                             src={avatarExample}
                                             alt="User Avatar"/>
                                    </div>
                                )}
                            </Link>
                        }
                    </div>
                )}

                {localStorage.getItem("token") && (
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
                    )}
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