import React, {useState} from 'react';
import styles from './NavbarTopCss.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { toggleTheme } from '../../store/actions/action_1';



export function NavbarExpanded(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);

        const x = document.querySelector(`.${styles.container_top}`);
        x.classList.toggle(styles.change); // Використовуємо styles.change
    };



    const currentTheme = useSelector(state => state.currentTheme);
    const dispatch = useDispatch();

    return (
        <nav className={`${styles.nav} ${isExpanded ? styles['nav--expanded'] : ''}`}>
            <a href="/" className={styles.nav__brand}>Snavvy</a>

            <div className={styles.nav__collapsable}>

                    <a href="#" className={styles.underlineHover} >
                        Locations
                    </a>
                    <a href="#" className={styles.underlineHover}>
                        Map
                    </a>
                    <a href="#" className={styles.underlineHover}>
                        Photographers
                    </a>




                    <div className={styles.toggleSwitch} >
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



                    <div className={styles.nav__cta}>
                        <button className={`${styles.buttonNavbar} ${currentTheme.buttonColors}`} onClick = {props.handleToggleSign}>Sign in</button>
                    </div>

            </div>

            <button className={styles.nav__collapser} onClick={handleToggle}>
                <div className={styles.container_top}>
                    <div id={styles['bar1']} className={styles.bars}></div>
                    <div id={styles['bar2']} className={styles.bars}></div>
                    <div id={styles['bar3']} className={styles.bars}></div>
                </div>

            </button>
        </nav>
    );
}