import styles from './InfinityScroll.module.css';
import React, {useEffect, useState} from "react";
import {codeSharp} from "ionicons/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import {NavbarExpanded} from "../../Forms/NavBarExpanded/NavbarExpanded";

import randomPhoto from "../../../photos/randomPhoto.jpg";
import {SinglePhoto} from "./PhotoElements/SinglePhoto/SinglePhoto";

function MyInfiniteScroll() {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        //Видаляй курва
        const data = [];
        if (items.length <= 100) {
            for (let index = 0; index < 20; index++) {
                data.push(randomPhoto);
                console.log("Вадим гей");
            }
        }

        // Імплементуй сука
        // fetch...
        // .then(data) =>{...
        setItems([...items, ...data]);
        if (data.length === 0) {
            setHasMore(false);
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
