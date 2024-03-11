import {React, useEffect, useState, useMemo } from "react";
import Main from "./Main"
import Search from './Search'
import Book from './Book'
import request from "./fetch";
import RandomColor from './RandomColor'
import DeleteButton from './Delete'
import SignInButton from './SignInButton'
export default function Landing(){
    const backendURL = "http://localhost:5000"

    const [searching, setSearching] = useState(false)
    const [bookshelfId, setBookshelfId] = useState()
    const [books, setBooks] = useState([])

    localStorage.setItem("authkey", "");
    let authkey = null;
    useEffect(()=>{
        
        try{
            authkey = JSON.parse(localStorage.getItem("authkey"))
            
            console.log(authkey)
            request(`${backendURL}/user/getbookshelves`, "post",{authkey: authkey.key, search:""},true).then((bookshelves)=>{
                console.log(bookshelves)
                if(bookshelves.length != 0){
                    request(`${backendURL}/bookshelf/getbookshelf`, "post",{authkey: authkey.key,bookshelfid: bookshelves[0],search:""},true).then((bookshelf)=>{
                        console.log(bookshelf)
                        setBooks(bookshelf.books)
                        setBookshelfId(bookshelf.id)
                    })
                }else{
                    request(`${backendURL}/bookshelf/newbookshelf`, "post",{authkey: authkey.key,bookshelf:[],private:true,search:""},true).then((bookshelf)=>{
                        console.log(bookshelf)
                        setBooks(bookshelf.books)
                        setBookshelfId(bookshelf.id)
                    })
                }
                
            }).catch((err)=>{
                localStorage.setItem("authkey", "")
                try{
                    const unsavedBookshelf = JSON.parse(localStorage.getItem("unsavedbookshelf"))
                    if(unsavedBookshelf != null)
                        setBooks(unsavedBookshelf)
                }catch(err){
                    console.log(err)
                    
                }
            })
        

        }catch(err){
            localStorage.setItem("authkey", "")
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
        return <Book title = {book.title} author = {book.author} color = {RandomColor()} />
    })
    const saveBookshelf = (newbooks)=>{
        if(authkey && bookshelfId){
            request(`${backendURL}/bookshelf/changebooks`, "post",{authkey: authkey.key,bookshelfid: bookshelfId,books:newbooks,search:""},true).then((bookshelf)=>{
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
    

    
    // register button from 
    // https://uiverse.io/tranphattrien/modern-bird-56
    return (
        <div class='h-screen bg-[#022b54]'>
            <h1 class='font-extrabold text-4xl text-center text-[#f2ffff] cursor-default select-none'>
                Bookshelf
            </h1>
            
            <SignInButton/>
            <Main bookstack = {bookstack}/>
            <Search setBooks = {saveBookshelf} books = {books} searching = {searching} setSearching = {setSearching}/>
            <button onClick = {() =>setSearching(true)
                                    } type="button" class="select-none absolute text-xl border-1 right-2 md:right-24 2xl:right-52 2xl:text-3xl bottom-3 text-[#32b6e8] bg-[#111942] hover:border-[#32b6e8] border-transparent border-2 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
                Search new book
            </button>
            <DeleteButton books = {books} setBooks = {setBooks}/>
            
        </div>
        
    )
}
