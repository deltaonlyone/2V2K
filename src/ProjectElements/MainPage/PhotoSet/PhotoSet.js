import React, {useEffect, useState} from 'react';
import styles from './PhotoSetStyles.module.css';
import randomPhoto1 from './randomPhoto.jpg';
import randomPhoto2 from './randomPhoto2.png';
import {FormButton} from "../../Forms/FormButton/FormButton";

import {useSelector} from 'react-redux';
import axios from "axios";

export function PhotoSet(props) {

    const currentTheme = useSelector(state => state.currentTheme);
    const [photoIds, setPhotoIds] = useState(null);
    const [photoUrls, setPhotoUrls] = useState(null);

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/photos/homepage?count=10');
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
        <nav className={`${styles['container']} ${currentTheme.backgroundColor}`}>
            <div className={styles['centerText']}>
                <h1 className={`${styles['topText']} ${currentTheme.textColor}`}>EXPLORE WIDE WORLD OF PHOTOGRAPHY WITH
                    US</h1>

                <div className={styles['inputAndButton']}>
                    <input placeholder="email address" type="text" name="text"
                           className={`${styles['inputCenter']} ${currentTheme.inputCenterColor}`}></input>
                    {/*<button className={`${styles['buttonCenter']} ${currentTheme.buttonCenterColor}`}>Get Started*/}
                    {/*</button>*/}
                    <FormButton height={'auto'}
                               width={'10vw'}
                               text={'Get Started'}
                    ></FormButton>
                </div>
            </div>
            <div className={`${styles['photoSet']} ${currentTheme.photoSetColor}`}>
                <div className={styles['photoSetTop']}>
                    {photoUrls && photoUrls.slice(0, 5).map((url, index) => (
                        <img
                            key={index}
                            className={`${styles[`photoTop${index + 1}`]}`}
                            src={'http://localhost:8080/api/photos/' + url}
                            alt={`photo-${index}`}
                        />
                    ))}
                </div>
                <div className={styles['photoSetDown']}>
                    {photoUrls && photoUrls.slice(5, 10).map((url, index) => (
                        <img
                            key={index}
                            className={`${styles[`photoDown${index + 1}`]}`}
                            src={'http://localhost:8080/api/photos/' + url}
                            alt={`photo-${index}`}
                        />
                    ))}
                </div>
            </div>

            <div className={`${styles['photoSetSecond']} ${currentTheme.photoSetColor}`}>
                <div className={styles['photoSetTop']}>
                    {photoUrls && photoUrls.slice(0, 3).map((url, index) => (
                        <img
                            key={index}
                            className={`${styles[`photoTop`]}`}
                            src={'http://localhost:8080/api/photos/' + url}
                            alt={`photo-${index}`}
                        />
                    ))}
                </div>

                <div className={`${styles['photoSetMiddle']}`}>
                    {photoUrls && photoUrls.slice(3, 6).map((url, index) => (
                        <img
                            key={index}
                            className={`${styles[`photoMiddle`]}`}
                            src={'http://localhost:8080/api/photos/' + url}
                            alt={`photo-${index}`}
                        />
                    ))}
                </div>

                <div className={`${styles['photoSetDown']}`}>
                    {photoUrls && photoUrls.slice(6, 9).map((url, index) => (
                        <img
                            key={index}
                            className={`${styles[`photoDown`]}`}
                            src={'http://localhost:8080/api/photos/' + url}
                            alt={`photo-${index}`}
                        />
                    ))}
                </div>
            </div>


        </nav>
    );
}