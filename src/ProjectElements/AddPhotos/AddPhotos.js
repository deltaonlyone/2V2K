import React, { useState } from 'react';
import styles from './AddPhotos.module.css';
import { useSelector } from 'react-redux';
import { SvgLogo } from '../Forms/FormSvg/FormSvg';
import { FormButton } from '../Forms/FormButton/FormButton';
import {FormInput} from "../Forms/FormInput/FormInput";
import {FormTextArea} from "../Forms/FormTextArea/FormTextArea";
import avatarExample from "../../photos/User_cicrle_light.svg";
import {FormDropdown} from "../Forms/FormDropdown/FormDropdown";
import {FormButtonReverse} from "../Forms/FormButtonReverse/FormButtonReverse";

export function AddPhotos(props) {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');

    const currentTheme = useSelector(state => state.currentTheme);

    const options = [
        { value: 'Wedding', label: 'Wedding' },
        { value: 'Portrait', label: 'Portrait' },
        { value: 'Couple', label: 'Couple' },
        { value: 'Family', label: 'Family' },
        { value: 'Kids', label: 'Kids' }
    ];

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleSubmit = () => {
        // Handle the submit logic, e.g., upload file and save description/location
    };

    return (
        <nav className={`${styles['container']} `} onClick={props.handleToggleSign}>
            <div className={`${styles['menu']} ${currentTheme.signInMenuBackground}`} onClick={(e) => e.stopPropagation()}>
                <button className={`${styles['backButton']} ${currentTheme.backButtonColor}`} onClick={props.handleToggleSign}></button>

                <div className={`${styles['contentContainer']}`}>
                    <div className={styles.leftSection}>
                        {previewUrl ? (
                            <>
                                <img src={previewUrl} alt="Preview" className={styles.previewImage} />
                                <FormButton
                                    height={'30px'}
                                    width={'200px'}
                                    text={'Choose another photo'}
                                    onClick={() => {
                                        setFile(null);
                                        setPreviewUrl(null);
                                    }}
                                />
                            </>
                        ) : (
                            <>
                                <FormButton
                                    height={'45px'}
                                    width={'200px'}
                                    text={'Choose Photo'}
                                    onClick={() => document.getElementById('fileInput').click()}
                                />
                                <input
                                    type="file"
                                    id="fileInput"
                                    className={styles.inputFile}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </>
                        )}
                    </div>
                    <div className={styles.rightSection}>
                        <div className={`${styles['userInfoContainer']}`}>
                            <div className={`${styles['avatarUserDiv']}`}>
                                <img className={styles['avatarUser']} src={avatarExample} alt=""/>
                            </div>

                            <div className={`${styles['userInfoDiv']}`}>
                                <h1 className={`${styles['userInfoTextTop']} ${currentTheme.textColor}`}>
                                    Kyrylo Sydor (kyrylo_sydor)
                                </h1>
                            </div>
                        </div>
                        <div className={`${styles['elements']}`}>
                            <FormTextArea maxLength={200} height="100px" width="100%" innerText={"Write a caption..."}/>
                        </div>
                        <span className={`${styles['textHeader']} ${currentTheme.textColor}`}>Add location</span>
                        <div className={`${styles['elements']}`}>
                            <FormInput height={'45px'} width={'100%'}/>
                        </div>
                        <span className={`${styles['textHeader']} ${currentTheme.textColor}`}>Choose category</span>
                        <div className={`${styles['elements']}`}>
                            <FormDropdown height={'45px'} width={'100%'} placeholder="Select an option"
                                          options={options}/>
                        </div>

                        <div className={`${styles['elements']}`}>
                            <FormButtonReverse height={'45px'} width={'40%'} text={'Share'} onClick={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
