import {React, useState} from "react";
import Main from "./Main"
import Search from './Search'
import Book from './Book'

export default function Landing(){

    const [searching, setSearching] = useState(false)
    const [books, setBooks] = useState([
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        },
        {
            "ibsn":"temp"
        }
    ])

    function showSearch(){
        if (searching){
            console.log("hi")
            return Search;
        }
    }
    const bookstack = books.map((book)=> <Book></Book>)
    return (
        <div class='h-screen bg-[#363139]'>
            <h1 class='font-extrabold text-4xl text-center text-[#fb9575]'>
                Bookshelf
            </h1>
            
            <Main bookstack = {bookstack}/>
            <Search searching = {searching} setSearching = {setSearching}/>
            <button onClick = {() => {setSearching(true)
                                    console.log(searching)}} type="button" class="absolute text-xl border-1 right-2 md:right-24 2xl:right-52 2xl:text-3xl bottom-3 text-[#a6fdfe] bg-[#493e4b] hover:border-[#a6fdfe] border-transparent border-2 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
                Search for Book
            </button>
            
        </div>
        
    )
}
