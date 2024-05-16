import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from './InfinityScroll.module.css';
import { SinglePhoto } from "./PhotoElements/SinglePhoto/SinglePhoto";
import axios from "axios";

function MyInfiniteScroll({ user, category }) {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const size = 12;

    useEffect(() => {
        if (user && user.id) {
            fetchData(true);
        }
    }, [user, category]);

    const fetchData = async (isNewCategory = false) => {
        try {
            if (hasMore || isNewCategory) {
                const response = await axios.get(`http://localhost:8080/api/portfolio/${user.id}/paged`, {
                    params: { page: isNewCategory ? 0 : page, size, category: category === "All" ? undefined : category }
                });
                const data = response.data;
                setItems(isNewCategory ? data : [...items, ...data]);
                setHasMore(data.length === size);
                setPage(prevPage => (isNewCategory ? 1 : prevPage + 1));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className={`${styles['infinityScrollDiv']}`}>
            <InfiniteScroll
                className={`${styles['infinityScrollElement']}`}
                dataLength={items.length}
                next={() => fetchData()}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                // endMessage={
                //     <p style={{ textAlign: "center" }}>
                //         <b>Yay! You have seen it all</b>
                //     </p>
                // }
            >
                {items.map((item, index) => (
                    <SinglePhoto key={index} img={item} />
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default MyInfiniteScroll;
