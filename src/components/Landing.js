import {React, useEffect, useState} from "react";
import Main from "./Main"
import Search from './Search'
import Book from './Book'
import request from "./fetch";
import RandomColor from './RandomColor'

export default function Landing(){
    const backendURL = "http://localhost:5000"

    const [searching, setSearching] = useState(false)
    const [bookshelfId, setBookshelfId] = useState()
    const [books, setBooks] = useState([])
    console.log(books)

    let authkey = undefined
    useEffect(()=>{
        
        try{
            authkey = JSON.parse(localStorage.getItem("authkey"))
            
            console.log(authkey)
            request(`${backendURL}/user/getbookshelves`, "post",{authkey: authkey.key, search:""}).then((bookshelves)=>{
                console.log(bookshelves)
                if(bookshelves.length != 0){
                    request(`${backendURL}/bookshelf/getbookshelf`, "post",{authkey: authkey.key,bookshelfid: bookshelves[0],search:""}).then((bookshelf)=>{
                        console.log(bookshelf)
                        setBooks(bookshelf.books)
                        setBookshelfId(bookshelf.id)
                    })
                }else{
                    request(`${backendURL}/bookshelf/newbookshelf`, "post",{authkey: authkey.key,bookshelf:[],private:true,search:""}).then((bookshelf)=>{
                        console.log(bookshelf)
                        setBooks(bookshelf.books)
                        setBookshelfId(bookshelf.id)
                    })
                }
                
            }).catch((err)=>{
                try{
                    const unsavedBookshelf = JSON.parse(localStorage.getItem("unsavedbookshelf"))
                    if(unsavedBookshelf != null)
                        setBooks(unsavedBookshelf)
                }catch(err){
                    console.log(err)
                    
                }
            })
        

        }catch(err){
            console.log(err)
            try{
                if (localStorage.getItem('unsavedbookshelf') != null){
                    const unsavedBookshelf = JSON.parse(localStorage.getItem("unsavedbookshelf"))
                    setBooks(unsavedBookshelf)
                }
                else setBooks([])
                
            }catch(err){
                console.log(err)
                
            }
        }
    },[])

    const bookstack = books.map((book) =>{
        return <Book title = {book.title} color = {RandomColor()} />
    })
    const saveBookshelf = (newbooks)=>{
        if(authkey && bookshelfId){
            request(`${backendURL}/bookshelf/changebooks`, "post",{authkey: authkey.key,bookshelfid: bookshelfId,books:newbooks,search:""}).then((bookshelf)=>{
                console.log(bookshelf)
                setBooks(bookshelf.books)
            }).catch((err)=>{
                console.log(err)
                //alert("unable to save to server.")
                localStorage.setItem("unsavedbookshelf", JSON.stringify(newbooks));
            })
        }else{
            localStorage.setItem("unsavedbookshelf", JSON.stringify(newbooks));
            setBooks(newbooks)
        }
    }
    

    
    // button from 
    // https://uiverse.io/tranphattrien/modern-bird-56
    return (
        <div class='h-screen bg-[#363139]'>
            <h1 class='font-extrabold text-4xl text-center text-[#fb9575] cursor-default select-none'>
                Bookshelf
            </h1>
            
            <a href = "/Register">
                <button class="ml-24 text-3xl w-[200px] font-bold bg-black h-[70px] my-3 flex items-center justify-center rounded-xl cursor-pointer absolute overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                    Register
                </button>
            </a>


            <Main bookstack = {bookstack}/>
            <Search setBooks = {saveBookshelf} books = {books} searching = {searching} setSearching = {setSearching}/>
            <button onClick = {() =>setSearching(true)
                                    } type="button" class="absolute text-xl border-1 right-2 md:right-24 2xl:right-52 2xl:text-3xl bottom-3 text-[#a6fdfe] bg-[#493e4b] hover:border-[#a6fdfe] border-transparent border-2 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
                Search new book
            </button>
            
        </div>
        
    )
}
