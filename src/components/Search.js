import {React, useState} from 'react'

import ExitButton from './ExitButton'
import SearchBar from './SearchBar'
import AddList from './AddList'

import SearchResult from './SearchResult'
export default function Search(props){

    const [searchString, setSearchString] = useState('')
    const [results, setResults] = useState(false)
    console.log(results)

    function displayResults(results){
        if (results){
            
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
            <div class = 'mt-4 w-1/2 bg-red-500 mx-auto'>
                <SearchBar displayResults = {displayResults} setResult = {setResults} string = {searchString} setString = {setSearchString}/>
                <ExitButton setString = {setSearchString} setSearching = {props.setSearching}/>
                {displayResults(results)}
                <AddList/>
            </div>
        )
    }

}