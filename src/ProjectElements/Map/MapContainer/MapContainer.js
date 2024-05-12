import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from './MapContainer.module.css';

const MapContainer = (props) => {

    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <div>
            <Map
                google={props.google}
                zoom={10}
                initialCenter={{ lat: 40.7128, lng: -74.006 }}
                style={mapStyles}
                gestureHandling={'greedy'}
                disableDefaultUI={true}

            >
                <Marker
                    position={{ lat: 40.7128, lng: -74.006 }}
                    name={'Нью-Йорк'}
                />
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBdIc7NUoeBE840oaSpSJwrL7sLs3xzZjs'
})(MapContainer);
