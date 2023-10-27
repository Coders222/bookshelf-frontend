import React from 'react'

export default function Book(props){
    return (
        <div style = {{backgroundColor: props.color}} class={`-z-99 w-36 h-12  flex items-center justify-center border border-solid border-1 border-black`}>{props.title}</div>
    )
}
