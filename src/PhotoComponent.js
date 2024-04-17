import React, { useState, useEffect } from 'react';
import axios from "axios";

const PhotoComponent = () => {
    const [photoIds, setPhotoIds] = useState(null);
    const [photoUrls, setPhotoUrls] = useState(null);

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/photos');
            setPhotoIds(response.data);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    useEffect(() => {
        if (photoIds !== null) {
            fetchImageUrls(photoIds);
        }
    }, [photoIds]);

    const fetchImageUrls = async (ids) => {
        try {
            const promises = ids.map(async id => {
                return id;
            });

            const urls = await Promise.all(promises);
            setPhotoUrls(urls);
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    };


    return (
        <div>
            {photoUrls && photoUrls.map((url, index) => (
                <img
                    key={index}
                    src={'http://localhost:8080/api/photos/'+url}
                    alt={`photo-${index}`}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            ))}
        </div>
    );

};

export default PhotoComponent;
