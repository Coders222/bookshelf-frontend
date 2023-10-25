
import React from 'react'
export default function SearchResult(props){
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.author} </h2>
        </div>
    )
}