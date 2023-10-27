import {React, useState} from 'react'

import ExitButton from './ExitButton'
import SearchBar from './SearchBar'
import AddList from './AddList'

import SearchResult from './SearchResult'
export default function Search(props){

    const [searchString, setSearchString] = useState('')
    const [results, setResults] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [selection, setSelection] = useState([false, false, false, false, false])
    console.log(selection)


    function displayResults(results){
        if (showResults){
            
            let out = []
            for (let i = 0; i < 5; i++){
                let params = {}
                params.title = results.docs[i].title
                params.author = results.docs[i].author_name
                params.setSelection = setSelection
                params.id = i;
                params.selection = selection
                out.push(<SearchResult {...params}/>)
            }
            return out
        }
    }

    if (props.searching){
        return (
            <>
                <div class = 'z-999 relative mt-4 w-1/2 bg-[#363139] mx-auto rounded-md border border-1 border-[#fb9575] border-2'>
                    <SearchBar setShowResults = {setShowResults} setResults = {setResults} string = {searchString} setString = {setSearchString}/>
                    
                    <div class = 'z-999 relative'>
                    
                        {displayResults(results)}
                    </div>
                </div>
                <div class = 'z-999 relative mx-auto mt-3 flex items-center justify-center'>
                    <ExitButton setShowResults = {setShowResults} setResults = {setResults} setString = {setSearchString} setSearching = {props.setSearching}/>
                </div>
                <div class = 'z-999 mt-4 w-1/2 bg-[#363139] mx-auto'>
                    <AddList/>
                </div>
            </>

        
        )
    }
}
