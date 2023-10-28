import React from 'react'

export default function Book(props){
    return (
        <div style = {{backgroundColor: props.color}} class={`-z-99 min-w-84 px-8 h-12 flex items-center justify-center border border-solid border-1 border-black`}>
 
            <p class = 'text-left text-md'>
            {props.title}
            </p>

        </div>
    )
}
