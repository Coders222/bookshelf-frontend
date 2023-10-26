import {React, useState} from 'react'

import ExitButton from './ExitButton'
import SearchBar from './SearchBar'
import AddList from './AddList'

import SearchResult from './SearchResult'
export default function Search(props){

    const [searchString, setSearchString] = useState('')
    const [results, setResults] = useState(false)
    const [showResults, setShowResults] = useState(false)
    console.log(results)

    function displayResults(results){
        if (showResults){
            
            let out = []
            for (let i = 0; i < 5; i++){
                let params = {}
                params.title = results.docs[i].title
                params.author = results.docs[i].author_name
                out.push(<SearchResult {...params}/>)
            }
            return out
        }
    }

    if (props.searching){
        return (
            <div>
            <div class = 'mt-4 w-1/2 bg-[#363139] mx-auto rounded-md border border-1 border-[#fb9575] border-2'>
                <SearchBar setShowResults = {setShowResults} setResults = {setResults} string = {searchString} setString = {setSearchString}/>
                {displayResults(results)}
                <AddList/>
            </div>
            <div class = 'mx-auto mt-3 flex items-center justify-center'>
                <ExitButton setString = {setSearchString} setSearching = {props.setSearching}/>
            </div>
            </div>
        
        )
    }
}
