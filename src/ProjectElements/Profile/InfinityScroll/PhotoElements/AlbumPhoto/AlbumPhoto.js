import React, {useState} from 'react';
import styles from './AlbumPhoto.module.css';

import {useSelector} from 'react-redux';

export function AlbumPhoto(props) {
  const currentTheme = useSelector(state => state.currentTheme);

  const images = props.images.slice(0, 4);

  return (

      <div className={`${styles['photosAlbumElement']}`}>
        <img
            src={images[0]}
            alt={`Photo 0`}
            className={styles.firstPhoto}
        />
        <div className={styles.photosAlbumElementBottom}>
          {images.slice(1).map((img, index) => (
              <img
                  key={index + 1}
                  src={img}
                  alt={`Photo ${index + 1}`}
                  className={styles.otherPhotos}
              />
          ))}
        </div>
      </div>

  );
}