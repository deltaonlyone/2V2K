import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './Photographers.module.css';
import avatarExample from "../../photos/User_cicrle_light.svg";
import { NavbarExpanded } from "../Forms/NavBarExpanded/NavbarExpanded";
import { FormFooter } from "../Forms/FormFooter/FormFooter";
import { MenuSignIn } from "../Registration/MenuSignIn/MenuSignIn";
import { FormPhotographerSearchInfo } from "../Forms/FormPhotographerSearchInfo/FormPhotographerSearchInfo";
import {MenuSignUp} from "../Registration/MenuSignUp/MenuSignUp";
import {MenuForgotPassword} from "../Registration/MenuForgotPassword/MenuForgotPassword";

const Photographers = () => {
    const currentTheme = useSelector(state => state.currentTheme);
    const [isOpened, setIsOpened] = useState(false);
    const [photographers, setPhotographers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const size = 3;


    const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
    const handleToggleSignInBar = () => {
        const appRoot = document.getElementById('photographersContainer');

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
        const appRoot = document.getElementById('photographersContainer');

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
        const appRoot = document.getElementById('photographersContainer');

        if(!isOpenedForgotPassword){
            appRoot.style.filter = 'blur(12px)';
        }
        else{
            appRoot.style.filter = 'blur(0px)';
        }

        setIsOpenedForgotPassword(!isOpenedForgotPassword);
    };

    useEffect(() => {
        fetchPhotographers(true);
    }, []);

    const fetchPhotographers = async (isNewPage = false) => {
        try {
            const response = await axios.get('http://localhost:8080/api/search/photographers/paged', {
                params: { page: isNewPage ? 0 : page, size }
            });
            const data = response.data;
            setPhotographers(isNewPage ? data : [...photographers, ...data]);
            setHasMore(data.length === size);
            setPage(prevPage => (isNewPage ? 1 : prevPage + 1));
        } catch (error) {
            console.error('Error fetching photographers:', error);
        }
    };

    return (
        <div className={`${styles['photographersPage']} ${currentTheme.backgroundColor}`}>
            {isOpenedSignIn && <MenuSignIn handleToggleSign = {handleToggleSignInBar} handleToggleSignUp = {handleToggleSignUpBar} handleToggleForgotPassword = {handleToggleForgotPasswordBar}></MenuSignIn>}
            {isOpenedSignUp && <MenuSignUp handleToggleSignUp = {handleToggleSignUpBar} handleToggleSign = {handleToggleSignInBar}></MenuSignUp>}
            {isOpenedForgotPassword && <MenuForgotPassword handleToggleForgotPassword = {handleToggleForgotPasswordBar}></MenuForgotPassword>}
            <div id='photographersContainer' className={`${styles['photographersContainer']} ${currentTheme.backgroundColor}`}>
                <NavbarExpanded handleToggleSign = {handleToggleSignInBar}></NavbarExpanded>
                <div className={`${styles['textPageInfo']}`}>
                    <a className={`${styles['textPageInfoHeader']} ${currentTheme.textColor}`}>Find your photographer</a>
                    <a className={`${styles['textPageInfoBottom']} ${currentTheme.textGreyColorThird}`}>from us the list - from you the choice</a>
                </div>
                <div className={`${styles['photographersListContainer']}`}>
                    <InfiniteScroll
                        dataLength={photographers.length}
                        next={() => fetchPhotographers()}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                    >
                        {photographers.map((photographer, index) => (
                            <FormPhotographerSearchInfo
                                key={index}
                                name={photographer.name||`@${photographer.username}`}
                                location={`${photographer.city|| ""} ${(photographer.country?", "+photographer.country:"")}`}
                                avatar={photographer.profilePhoto || avatarExample}
                                photos={photographer.photos || []}
                                informationUser={photographer.bio || 'No bio available.'}
                                minimumTime={photographer.minimumTime ||""}
                                priceHour={photographer.priceHour || ""}
                            />
                        ))}
                    </InfiniteScroll>
                </div>
                <FormFooter />
            </div>
        </div>
    );
};

export default Photographers;
