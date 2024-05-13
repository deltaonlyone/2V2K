import styles from './Map.module.css';
import {useState} from "react";
import {NavbarExpanded} from "../Forms/NavBarExpanded/NavbarExpanded";
import {FormFooter} from "../Forms/FormFooter/FormFooter";
import {MenuSignIn} from "../Registration/MenuSignIn/MenuSignIn";
import MapContainer from './MapContainer/MapContainer';
import { useSelector} from 'react-redux';
import {FormSmallLocationInfoLeft} from "../Forms/FormSmallLocationInfoLeft/FormSmallLocationInfoLeft";

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