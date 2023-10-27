import {React, useEffect, useState} from "react";
import Main from "./Main"
import Search from './Search'
import Book from './Book'
import request from "./fetch";
import RandomColor from './RandomColor'

export default function Landing(){
    const backendURL = "http://localhost:5000"

    const [searching, setSearching] = useState(false)
    const [books, setBooks] = useState([
        {
            ibsn:"temp"
        },
        {
            ibsn:"temp"
        },
        {
            ibsn:"temp"
        },
        {
            ibsn:"temp"
        },
        {
            ibsn:"temp"
        },
        {
            ibsn:"temp"
        },
    ])

    useEffect(()=>{
        
        try{
            const authkey = JSON.parse(localStorage.getItem("authkey"))
                console.log(authkey)
                request(`${backendURL}/user/getbookshelves`, "post",{authkey: authkey.key, search:""}).then((bookshelves)=>{
                    console.log(bookshelves)
                    request(`${backendURL}/bookshelf/getbookshelf`, "post",{authkey: authkey.key,bookshelfid: bookshelves[0],search:""}).then((bookshelf)=>{
                        console.log(bookshelf)
                        setBooks(bookshelf.books)
                    })
                })
        

        }catch(err){
            console.log(err)
        }
    },[])

    const bookstack = books.map((book) =>{
        if (book.isbn !== "temp"){
            return <Book color = {RandomColor()} key = {book.isbn} />
        }
        return;
    }
        
    )
    return (
        <div class='h-screen bg-[#363139]'>
            <h1 class='font-extrabold text-4xl text-center text-[#fb9575] cursor-default select-none'>
                Bookshelf
            </h1>

            <Main bookstack = {bookstack}/>
            <Search searching = {searching} setSearching = {setSearching}/>
            <button onClick = {() =>setSearching(true)
                                    } type="button" class="absolute text-xl border-1 right-2 md:right-24 2xl:right-52 2xl:text-3xl bottom-3 text-[#a6fdfe] bg-[#493e4b] hover:border-[#a6fdfe] border-transparent border-2 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
                Search new book
            </button>
            
        </div>
        
    )
}
