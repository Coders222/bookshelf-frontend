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
            <div class = 'mt-4 w-[40%]  mx-auto'>
                <SearchBar setShowResults = {setShowResults} setResults = {setResults} string = {searchString} setString = {setSearchString}/>
                <ExitButton setResults = {setResults} setString = {setSearchString} setSearching = {props.setSearching} setShowResults = {setShowResults}/>
                {displayResults(results)}
                <AddList/>
            </div>
        )
    }
}
