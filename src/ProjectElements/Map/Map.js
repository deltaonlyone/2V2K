import styles from './Map.module.css';
import {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";

import { useSelector} from 'react-redux';

const Map = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpened, setIsOpened] = useState(false);

    const handleToggleSingBar = () => {
        const appRoot = document.getElementById('mapContainer');

        if(!isOpened){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpened(!isOpened);
    };

    return (
        <div className = {`${styles['mapPage']} ${currentTheme.backgroundColor}`}>
            {isOpened && <MenuSignIn handleToggleSign = {handleToggleSingBar}></MenuSignIn>}

            <div id = 'mapContainer' className = {`${styles['mapContainer']}`}>
                <NavbarExpanded handleToggleSign = {handleToggleSingBar}></NavbarExpanded>


                <FormFooter></FormFooter>
            </div>
        </div>
    );
};

export default Map;