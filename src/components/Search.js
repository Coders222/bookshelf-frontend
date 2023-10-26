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
            
            for (let i = 0; i < 5; i++){
                let params = {}
                params.title = results.docs[i].title
                params.author = results.docs[i].author_name
                return <SearchResult {...params}/>
            }
        }
    }

    if (props.searching){
        return (
            <div class = 'mt-4 w-1/2 bg-[#363139] mx-auto rounded-md border border-1 border-[#fb9575] border-2'>
                <SearchBar setShowResults = {setShowResults} setResults = {setResults} string = {searchString} setString = {setSearchString}/>
                <ExitButton setString = {setSearchString} setSearching = {props.setSearching}/>
                {displayResults(results)}
                <AddList/>
            </div>
        )
    }
}
