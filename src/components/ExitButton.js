import React from 'react'

export default function ExitButton(props){

    function exit(){
        props.setSearching(false)
        props.setResult(false)
        props.setString('')
    }
    return (
        <button onClick = {() => exit()}class="float-right cursor-pointer group block px-5 py-2 rounded-md bg-[#493e4b] hover:border-[#fb9575] border-transparent border-2 text-[#fb9575] text-2xl font-bold shadow-2xl transition active:scale-90">
            <span class=" shadow-white">Close</span>
        </button>
    )
}
