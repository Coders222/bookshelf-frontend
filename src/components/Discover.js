import {React, useEffect, useState} from "react";
import Main from "./Main"
import Search from './Search'
import Book from './Book'
import request from "./fetch";
import RandomColor from './RandomColor'
import InfiniteScroll from "react-infinite-scroll-component";
const backendUrl = "http://localhost:5000"
export default function Discover(){

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);

    useEffect(() => {
        request(`${backendUrl}/bookshelf/getbookshelves`, "get",{search:""})
          .then((res) => {
            setItems(res)
            console.log(res.data)
          })
          .catch((err) => console.log(err));
    }, []);
    
    const fetchMoreData = () => {
        request(`${backendUrl}/bookshelf/getbookshelves`, "get",{search:""})
          .then((res) => {
            //console.log(res)
            setItems((prevItems) => [...prevItems, ...res]);
    
            res.data.length > 0 ? setHasMore(true) : setHasMore(false);
          })
          .catch((err) => console.log(err));
    
        setIndex((prevIndex) => prevIndex + 1);
    };
    //console.log(items)
    return (
        <div class='h-screen bg-[#363139]'>
            <h1 class='font-extrabold text-4xl text-center text-[#fb9575] cursor-default select-none'>
                Discover Bookshelves
            </h1>
            {items &&
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div>Loading</div>}
            >
                <div className="flex-col justify-center">
                    {items && items.map((item)=> 
                        <a href={"http://localhost:3000/bookshelf/"+item.id}>
                        <div className="w-40 h-40 m-10 bg-[#5e80ab]">
                            {item.name}
                        </div>
                        </a>
                    )}
                </div>
             </InfiniteScroll>
}
        </div>
    )
}