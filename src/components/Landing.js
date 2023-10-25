
import {React, useState} from "react";
import Main from "./Main"
import Search from './Search'
export default function Landing(){

    const [searching, setSearching] = useState(false)

    function showSearch(){
        if (searching){
            console.log("hi")
            return Search;
        }
    }
    return (
        <div class='h-screen bg-blue-200'>
            <h1 class='font-extrabold text-4xl text-center'>
                Bookshelf
            </h1>
            <Main/>
            <Search searching = {searching} setSearching = {setSearching}/>
            <button onClick = {() => {setSearching(true)
                                    console.log(searching)}} type="button" class="absolute text-xl border-1 right-2 md:right-24 2xl:right-52 2xl:text-3xl bottom-3 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 hover:text-blue-200  font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
                Add book
            </button>
        </div>
        
    )
}