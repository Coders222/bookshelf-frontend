import React from 'react'

export default function ExitButton(props){

    function exit(){
        props.setSearching(false)
        props.setResult(false)
        props.setString('')
    }
    return (
        <button onClick = {() => exit()}class="float-right cursor-pointer group block px-5 py-2 rounded-md bg-[#2e2830] hover:bg-[#645567] text-[#fb9575] text-2xl font-bold shadow-2xl transition active:scale-90">
            <span class=" shadow-white">Close</span>
        </button>
    )
}
