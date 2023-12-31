import React from 'react'

// https://uiverse.io/seyed-mohsen-mousavi/warm-dingo-23
export default function Delete(props){
    
    if (props.books.length > 0){
        return (
            <button
                class="select-none absolute bottom-3 right-2 md:right-10 2xl:right-14 inline-flex items-center px-4 py-2 bg-[#e22554] hover:border-white border-transparent border-2 text-white text-sm font-medium rounded-md"
                onClick = {() => {props.setBooks([])
                localStorage.setItem('books', [])}}
                >
                <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    ></path>
                </svg>

                Delete
            </button>

        )
    }
}