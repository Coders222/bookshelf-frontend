import React from 'react'

export default function AddBook(props){

    function addSelected(){
      let booksarr = [...props.books]
      for (let i = 0; i < props.selection.length; i++){
        if (props.selection[i])
          booksarr.push({title: props.results.docs[i].title, author: props.results.docs[i].author_name})
      }
      props.setBooks(booksarr)
      props.setSelection([false, false, false, false, false])
      props.setSearching(false)
    }
    return (
      <button onClick = {() => addSelected()} type="button" class="select-none absolute text-xl border-1 left-2 md:left-24 2xl:left-52 2xl:text-3xl bottom-3 text-white bg-[#02af1e] hover:border-white border-transparent border-2 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
          Add to Bookshelf
      </button>
    )
}
