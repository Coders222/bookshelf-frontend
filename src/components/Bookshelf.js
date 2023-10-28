import {React, useEffect, useState} from "react";
import Main from "./Main"
import Search from './Search'
import Book from './Book'
import request from "./fetch";
import RandomColor from './RandomColor'
import { useParams } from "react-router-dom";

export default function Bookshelf(props){
    const backendURL = "http://localhost:5000"

    const [searching, setSearching] = useState(false)
    const [bookshelfId, setBookshelfId] = useState()
    const [bookshelf, setBookshelf] = useState();
    const [books, setBooks] = useState([])
    console.log(books)
    let {id} = useParams();
    let authkey = undefined
    useEffect(()=>{
        
        try{
            authkey = JSON.parse(localStorage.getItem("authkey"))

        }catch(err){
            
        }
        request(`${backendURL}/bookshelf/getbookshelfpublic`, "post",{bookshelfid: id,search:""}).then((bookshelf)=>{
            console.log(bookshelf)
            setBooks(bookshelf.books)
            setBookshelfId(bookshelf.id)
            setBookshelf(bookshelf)
        })
    },[])

    const bookstack = books.map((book) =>{
        return <Book title = {book.title} color = {RandomColor()} />
    })

    return (
        <div>
        {bookshelf &&
            <div class='h-screen bg-[#363139]'>
                <h1 class='font-extrabold text-4xl text-center text-[#fb9575] cursor-default select-none'>
                    {bookshelf.name}
                </h1>

                <Main bookstack = {bookstack}/>
                
                
                
            </div>
        }
        </div>
        
    )
}
