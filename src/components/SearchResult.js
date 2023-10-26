import React from 'react'
export default function SearchResult(props){
    return (
        <div>
            <h1 class = "text-[#fb9575] ml-5"> {props.title} </h1>
            <h2 class = "text-[#fb9575] ml-5 mb-5"> {props.author} </h2>
        </div>
    )
}
