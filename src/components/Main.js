
import React from "react";
import Stack from "./Stack"
export default function Main(props){

    return (
        <div>
        
        <div class = 'w-screen absolute flex flex-col justify-center bottom-0'>
            <div class = 'flex justify-center'>
                {props.bookstack}
            </div>
            
            <Stack/>
        </div>
        </div>
    )
}