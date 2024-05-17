import React, { useEffect, useRef, useState } from "react";
import styles from './GooglePlacesAutocomplete.module.css';

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;

    script.onload = callback;
    script.src = url;
    document.head.appendChild(script);
};

const SearchLocationInput = ({ setSelectedLocation }) => {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef();

    useEffect(() => {
        let autoComplete;
        const handleScriptLoad = () => {

            if (!window.google || !window.google.maps || !window.google.maps.places) {
                console.error("Google Maps API script loaded incorrectly.");
                return;
            }
            const autoComplete = new window.google.maps.places.Autocomplete(


                autoCompleteRef.current, {
                    componentRestrictions: { country: "UA" },
                }
            );

            autoComplete.addListener("place_changed", () => handlePlaceSelect(autoComplete));
        };

        if (!window.google) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=AIzaSyBdIc7NUoeBE840oaSpSJwrL7sLs3xzZjs&libraries=places`,
                handleScriptLoad
            );
        } else {
            handleScriptLoad();
        }

        return () => {
            if (autoComplete) {
                window.google.maps.event.clearInstanceListeners(autoComplete);
            }
        };
    }, []);

    const handlePlaceSelect = (autoComplete) => {
        const place = autoComplete.getPlace();
        if (!place || !place.geometry || !place.geometry.location) {
            console.error("Place object does not contain valid location data.");
            return;
        }

        const query = place.formatted_address;
        setQuery(query);

        const latLng = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };
        setSelectedLocation(latLng);
    };

    return (
        <div className={styles.searchLocationInput}>
            <label className={styles.label}>Type in your suburb or postcode</label>
            <input
                ref={autoCompleteRef}
                className={styles.input}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Places ..."
                value={query}
            />
        </div>
    );
};

export default SearchLocationInput;
