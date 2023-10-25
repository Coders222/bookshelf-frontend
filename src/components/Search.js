import {React, useState} from 'react'

import ExitButton from './ExitButton'
import SearchBar from './SearchBar'
export default function Search(props){

    const [searchString, setSearchString] = useState('')
    if (props.searching){
        return (
            <div class = 'mt-4 w-1/2 bg-red-500 mx-auto'>
                <SearchBar string = {searchString} setString = {setSearchString}/>
                <ExitButton setSearching = {props.setSearching}/>
            </div>
        )
    }

}