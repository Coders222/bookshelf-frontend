import React from 'react'

export default function ExitButton(props){

    function exit(){
        props.setSearching(false)
        props.setResults(false)
        props.setShowResults(false)
        props.setString('')
        props.setSelection([false, false, false, false, false])
    }
    return (
        <button onClick = {() => exit()}class="select-none mr-5 cursor-pointer group block px-5 py-2 rounded-md bg-[#111942] hover:border-[#32b6e8] border-transparent border-2 text-[#32b6e8] text-2xl font-bold shadow-2xl transition active:scale-90">
            <span class=" shadow-white">Close</span>
        </button>
    )
}
