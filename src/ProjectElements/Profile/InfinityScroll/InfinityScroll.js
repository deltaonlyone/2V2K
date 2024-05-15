import styles from './InfinityScroll.module.css';
import React, {useEffect, useState} from "react";
import {codeSharp} from "ionicons/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import {NavbarExpanded} from "../../Forms/NavBarExpanded/NavbarExpanded";

import randomPhoto from "../../../photos/randomPhoto.jpg";
import {SinglePhoto} from "./PhotoElements/SinglePhoto/SinglePhoto";
import axios from "axios";

function MyInfiniteScroll(props) {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const {user} = props

    useEffect(() => {
        if (user && user.id) {
            fetchData();
        }
    }, [user]);

    const fetchData = async () => {
        try {
            if (hasMore){
                const response = await axios.get(`http://localhost:8080/api/portfolio/${user.id}/paged?page=${page}&size=${size}`);
                const data = response.data;
                setItems([...items, ...data]);
                if (data.length === 0) {
                    setHasMore(false);
                }
                setPage(page + size);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className={`${styles['infinityScrollDiv']}`}>
            <InfiniteScroll
                className={`${styles['infinityScrollElement']}`}
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {items.map((item, index) => (
                    <SinglePhoto img={item}></SinglePhoto>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default MyInfiniteScroll;
