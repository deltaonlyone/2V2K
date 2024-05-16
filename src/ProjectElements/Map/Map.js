import styles from './Map.module.css';
import {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";
import MapContainer from './MapContainer/MapContainer';
import { useSelector} from 'react-redux';
import {FormSmallLocationInfoLeft} from "../Forms/FormSmallLocationInfoLeft/FormSmallLocationInfoLeft";
import {MenuSignUp} from "../Registration/MenuSignUp/MenuSignUp";
import {MenuForgotPassword} from "../Registration/MenuForgotPassword/MenuForgotPassword";

const Map = () => {

    const currentTheme = useSelector(state => state.currentTheme);

    const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
    const handleToggleSignInBar = () => {
        const appRoot = document.getElementById('mapContainer');

        if(!isOpenedSignIn){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedSignIn(!isOpenedSignIn);
    };

    const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
    const handleToggleSignUpBar = () => {
        const appRoot = document.getElementById('mapContainer');

        if(!isOpenedSignUp){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedSignUp(!isOpenedSignUp);
    };

    const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);
    const handleToggleForgotPasswordBar = () => {
        const appRoot = document.getElementById('mapContainer');

        if(!isOpenedForgotPassword){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedForgotPassword(!isOpenedForgotPassword);
    };



    return (
        <div className = {`${styles['mapPage']} ${currentTheme.backgroundColor}`}>
            {isOpenedSignIn && <MenuSignIn handleToggleSign = {handleToggleSignInBar} handleToggleSignUp = {handleToggleSignUpBar} handleToggleForgotPassword = {handleToggleForgotPasswordBar}></MenuSignIn>}
            {isOpenedSignUp && <MenuSignUp handleToggleSignUp = {handleToggleSignUpBar} handleToggleSign = {handleToggleSignInBar}></MenuSignUp>}
            {isOpenedForgotPassword && <MenuForgotPassword handleToggleForgotPassword = {handleToggleForgotPasswordBar}></MenuForgotPassword>}

            <NavbarExpanded handleToggleSign = {handleToggleSignInBar}></NavbarExpanded>

            <div id = 'mapContainer' className = {`${styles['mapContainer']}`}>

                <FormSmallLocationInfoLeft
                    name="Location's name"
                    detailsStreet = "Stepana Bandery St, 14, Lviv, Lviv Oblast, 79000"
                    detailsNumber = "+380000000000"
                    detailsSite = "website.com"

                    ratingNumber = "4"

                    locationImg='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667'

                ></FormSmallLocationInfoLeft>

                <MapContainer />
                {/*<FormFooter></FormFooter>*/}
            </div>
        </div>
    );
};

export default Map;