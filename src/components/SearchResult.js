import React from 'react'
export default function SearchResult(props){

    function select(){
    }
    return (
        <div class={`py-3 sm:py-4 bg-${props.color} hover:bg-amber-200 border-slate-300`}>
            <div class="flex items-center space-x-4 px-4">
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {props.title}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {props.author}
                    </p>
                </div>
            </div>
        </div>
    )
}
