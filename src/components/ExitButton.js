import React from 'react'

export default function ExitButton(props){

    function exit(){
        props.setSearching(false)
        props.setResult(false)
        props.setString('')
    }
    return (
        <button onClick = {() => exit()}class="float-right cursor-pointer group block px-5 py-2 rounded-md bg-black text-white text-2xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span class=" shadow-white">Exit</span>
        </button>
    )
}